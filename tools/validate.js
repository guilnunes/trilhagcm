#!/usr/bin/env node
// Valida o banco de questões e a montagem do app. Uso: node tools/validate.js
// Sai com código 1 se houver qualquer erro. Roda no CI a cada push e pull request.
const fs = require('fs'), vm = require('vm'), path = require('path');
const R = path.resolve(__dirname, '..');
const QD = path.join(R, 'questoes');
const files = fs.readdirSync(QD).filter(f => f.endsWith('.js'))
  .sort((a, b) => (a.startsWith('99') ? 1 : 0) - (b.startsWith('99') ? 1 : 0) || a.localeCompare(b));

const errors = [], warnings = [];
const err = (m) => errors.push(m), warn = (m) => warnings.push(m);

// 1. Carrega todos os lotes, registrando de que arquivo veio cada questão
const ctx = { console }; vm.createContext(ctx);
const origin = [];
for (const f of files) {
  const before = vm.runInContext('typeof QS==="undefined"?0:QS.length', ctx);
  try { vm.runInContext(fs.readFileSync(path.join(QD, f), 'utf8'), ctx, { filename: f }); }
  catch (e) { err(`${f}: erro de JavaScript: ${e.message}`); continue; }
  const after = vm.runInContext('QS.length', ctx);
  for (let i = before; i < after; i++) origin[i] = f;
}
let NEWS = [];
try { vm.runInContext(fs.readFileSync(path.join(R, 'novidades.js'), 'utf8') + '\nthis.__NEWS = NEWS;', ctx); NEWS = ctx.__NEWS; }
catch (e) { err(`novidades.js: erro de JavaScript: ${e.message}`); }
const QS = vm.runInContext('QS', ctx);

// 2. Regras de cada questão
const SUBJ = ['esp', 'leg', 'por', 'rl', 'inf', 'cg'];
const DASH = /[—–]/;                       // travessão e meia-risca
const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[.,;:!?'"()\[\]]/g, ' ').replace(/\s+/g, ' ').trim();
const needsSrc = (f) => /estrategia|ibgp/i.test(f);  // lotes de questões reais exigem SRC(...)
const where = (i) => `${origin[i]} #${i} "${String(QS[i].text).slice(0, 60)}"`;

QS.forEach((q, i) => {
  const w = where(i);
  if (!SUBJ.includes(q.s)) err(`${w}: matéria "${q.s}" inválida (use ${SUBJ.join(', ')})`);
  if (!(Number.isInteger(q.f) && q.f >= 1 && q.f <= 4)) err(`${w}: fase ${q.f} inválida (1 a 4)`);
  if (!q.t || String(q.t).trim().length < 3) err(`${w}: tópico vazio`);
  if (!q.text || String(q.text).trim().length < 15) err(`${w}: enunciado vazio ou curto demais`);
  if (!Array.isArray(q.opts) || q.opts.length !== 4) err(`${w}: precisa de exatamente 4 alternativas (tem ${q.opts && q.opts.length})`);
  else {
    if (q.opts.some(o => !o || !String(o).trim())) err(`${w}: alternativa vazia`);
    if (new Set(q.opts.map(o => String(o).toLowerCase().replace(/\s+/g, ' ').trim())).size !== 4) err(`${w}: alternativas repetidas`);
  }
  if (!(Number.isInteger(q.a) && q.a >= 0 && q.a <= 3)) err(`${w}: índice da resposta ${q.a} inválido (0 a 3)`);
  if (!q.exp || String(q.exp).trim().length < 40) err(`${w}: comentário vazio ou curto demais (mínimo 40 caracteres)`);
  if (!q.trap || String(q.trap).trim().length < 10) err(`${w}: pegadinha vazia ou curta demais`);
  if ((q.links || []).some(x => !x)) err(`${w}: chave de lei (L) inexistente`);
  if ((q.ec || []).some(x => !x)) err(`${w}: chave de aula (E) inexistente`);
  const all = [q.t, q.text, ...(q.opts || []), q.exp, q.trap, q.src || ''].join(' ');
  if (DASH.test(all)) err(`${w}: contém travessão (— ou –); reescreva sem ele`);
  if (needsSrc(origin[i]) && !q.src) err(`${w}: falta SRC("Banca, Cargo Órgão, Ano") logo depois da questão`);
  if (q.src && /in[eé]dita/i.test(q.src)) err(`${w}: questão inédita não entra; só questões de prova real`);
});

// 3. Repetidas: enunciado igual, ou muito parecido com mesmas alternativas
const sig = new Map();
QS.forEach((q, i) => {
  const k = norm(q.text + ' | ' + (q.opts || []).join(' | '));
  if (sig.has(k)) err(`${where(i)}: enunciado e alternativas idênticos a ${where(sig.get(k))}`);
  else sig.set(k, i);
});
const words = QS.map(q => new Set(norm(q.text + ' ' + (q.opts || []).join(' ')).split(' ').filter(x => x.length > 3)));
for (let i = 0; i < QS.length; i++) for (let j = 0; j < i; j++) {
  const A = words[i], B = words[j]; if (A.size < 8 || B.size < 8) continue;
  let inter = 0; for (const x of A) if (B.has(x)) inter++;
  const jac = inter / (A.size + B.size - inter);
  if (jac >= 0.75) warn(`possível repetida (${Math.round(jac * 100)}%): ${where(i)} e ${where(j)}`);
}

// 4. Novidades
if (!NEWS.length) err('novidades.js: NEWS vazio');
else {
  const ids = NEWS.map(n => n.id);
  if (new Set(ids).size !== ids.length) err('novidades.js: ids repetidos');
  for (let k = 1; k < ids.length; k++) if (!(ids[k - 1] > ids[k])) err('novidades.js: a entrada mais nova (id maior) deve ficar no topo');
  NEWS.forEach(n => {
    if (!n.titulo || !Array.isArray(n.itens) || n.itens.length < 1 || n.itens.length > 5) err(`novidades.js: entrada ${n.id} precisa de título e 1 a 5 itens`);
    if (DASH.test(JSON.stringify(n))) err(`novidades.js: entrada ${n.id} contém travessão`);
  });
  if (NEWS[0].total !== QS.length) err(`novidades.js: o total da entrada mais nova (${NEWS[0].total}) não bate com o banco (${QS.length}). Atualize o total ou crie a entrada do lote novo.`);
}

// 5. Montagem: index.html e sw.js precisam listar todos os lotes (rode python3 tools/build.py)
const idx = fs.readFileSync(path.join(R, 'index.html'), 'utf8');
const sw = fs.readFileSync(path.join(R, 'sw.js'), 'utf8');
for (const f of files) {
  if (!idx.includes(`questoes/${f}`)) err(`index.html não inclui questoes/${f}: rode python3 tools/build.py`);
  if (!sw.includes(`questoes/${f}`)) err(`sw.js não inclui questoes/${f}: rode python3 tools/build.py`);
}

// Relatório
const cnt = {}; QS.forEach(q => cnt[q.s] = (cnt[q.s] || 0) + 1);
console.log(`Questões: ${QS.length} | ` + SUBJ.map(s => `${s} ${cnt[s] || 0}`).join(', ') + ` | lotes: ${files.length}`);
warnings.forEach(m => console.log('AVISO: ' + m));
errors.forEach(m => console.log('ERRO: ' + m));
if (errors.length) { console.log(`\n${errors.length} erro(s). Corrija antes de publicar.`); process.exit(1); }
console.log(warnings.length ? `OK, com ${warnings.length} aviso(s) para conferir.` : 'OK');
