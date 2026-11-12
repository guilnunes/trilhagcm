// ---------- Config ----------
const USERS = { guarda: "sjdr2026" };   // login simples (não é segurança real)
const EXAM = new Date("2026-12-20T14:45:00-03:00");
const SUBJ = {
  esp:{n:"Conhecimentos Específicos",w:4},
  por:{n:"Língua Portuguesa",w:4},
  leg:{n:"Legislação",w:3},
  rl:{n:"Raciocínio Lógico",w:3},
  inf:{n:"Noções de Informática",w:3},
  cg:{n:"Conhecimentos Gerais",w:3}
};
const ORDER = ["esp","leg","por","rl","inf","cg"];
const PHASES = [
 {f:1,ini:"2026-11-11",fim:"2026-11-19",t:"Fase 1 · Base de maior peso",d:"Estatuto Geral das Guardas, CF (arts. 1º a 5º e 144), Municípios e Judiciário; Português: crase e concordância; Lógica proposicional; Windows; História de SJDR."},
 {f:2,ini:"2026-11-20",fim:"2026-11-29",t:"Fase 2 · Leis penais especiais e Administrativo",d:"Leis da GCM de SJDR (6.051, 5.116 e 6.046); Desarmamento, Drogas, Abuso, Tortura, ECA, Pessoa Idosa; Direito Administrativo; Penal parte geral; Português: regência, pontuação, colocação, acentuação; Conjuntos, MMC/MDC; Word, Excel, Outlook; patrimônio."},
 {f:3,ini:"2026-11-30",fim:"2026-12-08",t:"Fase 3 · Crimes, uso da força, prisões e DH",d:"Regimento Interno (5.818), Estatuto dos Servidores (5.038) e Lei Orgânica; CTB e primeiros socorros; excludentes e uso da força, crimes em espécie, racismo, SUSP, improbidade, contravenções, nome social, pactos internacionais; CPP prisões; Direitos Humanos; Português: conectivos, verbos, ortografia; Combinatória e probabilidade; segurança, backup, redes; geografia urbana."},
 {f:4,ini:"2026-12-09",fim:"2026-12-14",t:"Fase 4 · Fechamento e revisão municipal",d:"Revisão das leis municipais e Plano Diretor (4.068), redação oficial, interpretação, variação, verdades e mentiras, hardware, nuvem e IA, dados gerais de SJDR."},
 {f:5,ini:"2026-12-15",fim:"2026-12-19",t:"Fase 5 · Simulados e revisão de erros",d:"1 simulado de 30 questões por dia + refazer todos os erros + reler as pegadinhas. Nada de conteúdo novo."}
];
// ---------- Data prep ----------
const cnt = {};
QS.forEach(x=>{cnt[x.s]=(cnt[x.s]||0)+1; x.id=x.s+"-"+cnt[x.s];});
const byId = Object.fromEntries(QS.map(x=>[x.id,x]));
// ---------- State ----------
let user = null, P = null, view = "home", cur = null;
const key = u => "gcm_sjdr_progress_"+u;
function blank(){return {user,answers:{},sims:[],created:new Date().toISOString(),updated:null};}
function load(){ try{ P = JSON.parse(localStorage.getItem(key(user))) || blank(); }catch(e){ P = blank(); } }
function save(){ P.updated=new Date().toISOString(); try{ localStorage.setItem(key(user), JSON.stringify(P)); }catch(e){} }
function rec(id, ok){ const a=P.answers[id]||{n:0,ok:0}; a.n++; if(ok)a.ok++; a.last=ok; a.t=Date.now(); P.answers[id]=a; save(); }
// ---------- Helpers ----------
function twoTap(btn, fn){ if(btn.dataset.armed){ fn(); return; } btn.dataset.armed=1; const o=btn.textContent; btn.textContent="Toque de novo para confirmar"; setTimeout(()=>{ if(btn.isConnected){ delete btn.dataset.armed; btn.textContent=o; } },4000); }
const $ = s => document.getElementById(s);
const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shuffle = a => { a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
function subjStats(s){ const qs=QS.filter(x=>x.s===s); let done=0,ok=0; qs.forEach(x=>{const a=P.answers[x.id]; if(a){done++; if(a.last)ok++;}}); return {tot:qs.length,done,ok,acc: done? ok/done : 0}; }
function projected(){ let sum=0, any=false; ORDER.forEach(s=>{const st=subjStats(s); if(st.done)any=true; sum+=st.acc*5*SUBJ[s].w;}); return any? Math.round(sum) : null; }
function phaseNow(){ const t=new Date(); const iso=t.toISOString().slice(0,10); return PHASES.find(p=>iso>=p.ini && iso<=p.fim) || (iso<PHASES[0].ini?PHASES[0]:PHASES[PHASES.length-1]); }
function days(){ return Math.max(0, Math.floor((EXAM - new Date())/86400000)); }
function go(v){ view=v; cur=null; render(); window.scrollTo(0,0); }
function setNav(){ $("nav").classList.toggle("hide",!user); document.querySelectorAll("nav button").forEach(b=>b.classList.toggle("on", b.dataset.v===view)); }
// ---------- Views ----------
function render(){
  setNav();
  if(!user) return vLogin();
  ({home:vHome,trail:vTrail,sim:vSim,review:vReview,plan:vPlan,acct:vAcct})[view]();
}
function vLogin(){
  $("app").innerHTML = `<div class="card"><div class="big">GCM São João del-Rei</div>
  <p class="muted">Trilha de questões no estilo IBGP · prova em 20/12/2026</p>
  <label>Usuário</label><input id="u" autocapitalize="off" autocomplete="username">
  <label>Senha</label><input id="pw" type="password" autocomplete="current-password">
  <button class="btn" onclick="doLogin()">Entrar</button><div id="lerr" class="err"></div></div>`;
  $("pw").addEventListener("keydown",e=>{if(e.key==="Enter")doLogin();});
}
function doLogin(){
  const u=$("u").value.trim().toLowerCase(), p=$("pw").value;
  if(USERS[u] && USERS[u]===p){ user=u; try{localStorage.setItem("gcm_user",u);}catch(e){} load(); go("home"); }
  else $("lerr").textContent="Usuário ou senha incorretos.";
}
function logout(){ user=null; try{localStorage.removeItem("gcm_user");}catch(e){} render(); }
function vHome(){
  const pr=projected(), ph=phaseNow();
  const answered=Object.keys(P.answers).length;
  let bars = ORDER.map(s=>{const st=subjStats(s); return `<div class="subj"><div class="top"><span>${SUBJ[s].n} <span class="tag ${SUBJ[s].w==4?'w4':''}">peso ${SUBJ[s].w}</span></span><span>${st.done}/${st.tot} · ${st.done?Math.round(st.acc*100)+'%':'-'}</span></div><div class="bar"><i style="width:${st.done/st.tot*100}%"></i></div></div>`}).join("");
  const lastSim = P.sims.length? P.sims[P.sims.length-1] : null;
  $("app").innerHTML = `
  <div class="card"><div class="row">
    <div class="stat"><b>${days()}</b>dias para a prova</div>
    <div class="stat"><b>${pr===null?'-':pr}</b>nota estimada /100</div>
    <div class="stat"><b>${answered}</b>de ${QS.length} feitas</div></div>
    <p class="muted" style="margin-bottom:0">Corte: 50 pontos. Meta sugerida: 70+ para ter folga, já que só cerca de 80 candidatos seguem para o TAF.</p></div>
  <div class="card"><span class="tag">Agora</span><h3 style="margin:8px 0 4px">${ph.t}</h3><p class="muted">${ph.d}</p>
    <button class="btn acc" onclick="startPhase(${ph.f})">${ph.f===5?'Fazer simulado do dia':'Continuar fase '+ph.f}</button></div>
  <div class="card"><b>Desempenho por matéria</b>${bars}
    ${lastSim?`<p class="muted">Último simulado: <b>${lastSim.score}/100</b> em ${new Date(lastSim.date).toLocaleDateString('pt-BR')}</p>`:''}</div>
  <div class="card"><button class="btn sec" onclick="go('acct')">Progresso (salvar / carregar JSON) e sair</button></div>`;
}
function startPhase(f){ if(f===5){ go("sim"); return; } const pend=QS.filter(x=>x.f===f && !(P.answers[x.id]&&P.answers[x.id].last)); startQuiz(pend.length?pend:QS.filter(x=>x.f===f), "Fase "+f); }
function vTrail(){
  const now=phaseNow().f;
  let h = `<div class="card"><p class="muted" style="margin:0">Ordem pensada por peso: o bloco jurídico (Específicos + Legislação) vale 35 pontos, Português vale 20. Toque num módulo para treinar.</p></div>`;
  [1,2,3,4].forEach(f=>{
    const qs=QS.filter(x=>x.f===f);
    const mods={}; qs.forEach(x=>{const k=x.s+"|"+x.t; (mods[k]=mods[k]||[]).push(x);});
    const keys=Object.keys(mods).sort((a,b)=>ORDER.indexOf(a.split("|")[0])-ORDER.indexOf(b.split("|")[0]));
    const ph=PHASES[f-1];
    h+=`<div class="card"><h3 style="margin:0 0 4px">${ph.t} ${f===now?'<span class="tag w4">agora</span>':''}</h3><p class="muted" style="margin-top:0">${fmt(ph.ini)} a ${fmt(ph.fim)}</p>`;
    keys.forEach(k=>{ const list=mods[k], s=k.split("|")[0]; const ok=list.filter(x=>P.answers[x.id]&&P.answers[x.id].last).length;
      h+=`<div class="mod" onclick="startMod('${esc(k).replace(/'/g,"\\'")}')"><div><div class="t">${esc(k.split("|")[1])}</div><div class="muted">${SUBJ[s].n}</div></div><div class="pill ${ok===list.length?'done':''}">${ok}/${list.length} ✓</div></div>`; });
    h+=`</div>`;
  });
  h+=`<div class="card"><h3 style="margin:0">Fase 5 · Simulados</h3><p class="muted">${fmt(PHASES[4].ini)} a ${fmt(PHASES[4].fim)}</p><button class="btn acc" onclick="go('sim')">Ir para simulados</button></div>`;
  $("app").innerHTML=h;
}
function fmt(d){ const [y,m,dd]=d.split("-"); return dd+"/"+m; }
function startMod(k){ const [s,t]=k.split("|"); startQuiz(QS.filter(x=>x.s===s&&x.t===t), t); }
// ---------- Quiz ----------
function startQuiz(list, title, mode){ cur={list:list.slice(), i:0, title, mode:mode||"train", picks:[], order:list.map(x=>shuffle([0,1,2,3])), start:Date.now()}; view="quiz"; renderQ(); window.scrollTo(0,0); }
function renderQ(){
  setNav();
  const c=cur, x=c.list[c.i], ord=c.order[c.i], picked=c.picks[c.i];
  const exam = c.mode==="sim";
  let h=`<div class="qmeta">${esc(c.title)} · ${c.i+1}/${c.list.length}${exam?` · <span class="timer" id="tm"></span>`:''}</div>
  <div class="card"><div class="qmeta"><span class="tag ${SUBJ[x.s].w==4?'w4':''}">${SUBJ[x.s].n}</span> ${esc(x.t)}</div><div class="qtext">${esc(x.text)}</div>`;
  ord.forEach((oi,pos)=>{
    let cls="";
    if(picked!==undefined && !exam){ if(oi===x.a) cls="right"; else if(oi===picked) cls="wrong"; }
    else if(picked===oi) cls="sel";
    h+=`<button class="opt ${cls}" ${picked!==undefined&&!exam?'disabled':''} onclick="pick(${oi})"><span class="l">${"ABCD"[pos]})</span><span>${esc(x.opts[oi])}</span></button>`;
  });
  if(picked!==undefined && !exam) h+=feedback(x, ord, picked);
  h+=`</div>`;
  const last=c.i===c.list.length-1;
  if(exam){
    h+=`<div class="row"><button class="btn sec" ${c.i===0?'disabled':''} onclick="nav(-1)">Anterior</button><button class="btn" onclick="${last?'finishSim()':'nav(1)'}">${last?'Entregar':'Próxima'}</button></div>`;
    h+=`<p class="muted">Respondidas: ${c.picks.filter(v=>v!==undefined).length}/${c.list.length}</p>`;
  } else if(picked!==undefined){
    h+=`<button class="btn" onclick="${last?'endQuiz()':'nav(1)'}">${last?'Concluir':'Próxima questão'}</button>`;
  }
  h+= exam? `<button class="btn sec" onclick="twoTap(this,()=>go('sim'))">Abandonar simulado</button>` : `<button class="btn sec" onclick="endQuiz()">Sair do módulo</button>`;
  $("app").innerHTML=h;
  if(exam) tick();
}
function feedback(x, ord, picked){
  const ok=picked===x.a, letter="ABCD"[ord.indexOf(x.a)];
  let h=`<div class="fb"><div class="res ${ok?'ok':'no'}">${ok?'✓ Correto!':'✗ Errado.'} Gabarito: ${letter}</div>
  ${x.src?`<div class="muted" style="margin-top:6px">📄 ${esc(x.src)}</div>`:''}
  <h4>Comentário</h4><div>${esc(x.exp)}</div>
  <h4>Pegadinha</h4><div class="trap">${esc(x.trap)}</div>`;
  if(x.links.length){ h+=`<h4>Leitura aprofundada</h4>`+x.links.map(l=>`<div>📖 <a href="${l[1]}" target="_blank" rel="noopener">${esc(l[0])}</a></div>`).join(""); }
  if(x.ec&&x.ec.length) h+=`<h4>Aulas recomendadas (Estratégia e Vale)</h4>`+x.ec.map(c=>`<div>🎓 <a href="${c[1]}" target="_blank" rel="noopener">${esc(c[0])}</a></div>`).join("");
  return h+`</div>`;
}
function pick(oi){
  const c=cur; if(c.mode!=="sim" && c.picks[c.i]!==undefined) return;
  c.picks[c.i]=oi;
  if(c.mode!=="sim") rec(c.list[c.i].id, oi===c.list[c.i].a);
  renderQ();
}
function nav(d){ cur.i=Math.max(0,Math.min(cur.list.length-1,cur.i+d)); renderQ(); window.scrollTo(0,0); }
function endQuiz(){
  if(!cur){go("trail");return;}
  const c=cur; const n=c.picks.filter(v=>v!==undefined).length; const ok=c.list.filter((x,i)=>c.picks[i]===x.a).length;
  view="done"; setNav();
  $("app").innerHTML=`<div class="card"><div class="big">${ok}/${n}</div><p class="muted">acertos em "${esc(c.title)}"</p>
  ${n-ok>0?`<button class="btn acc" onclick="retryWrong()">Refazer as ${n-ok} erradas agora</button>`:''}
  <button class="btn" onclick="go('trail')">Voltar à trilha</button><button class="btn sec" onclick="go('home')">Início</button></div>`;
  window._lastWrong=c.list.filter((x,i)=>c.picks[i]!==undefined && c.picks[i]!==x.a);
  cur=null;
}
function retryWrong(){ startQuiz(window._lastWrong||[], "Refazendo erros"); }
// ---------- Simulado ----------
function vSim(){
  let rows=P.sims.slice().reverse().map(s=>`<tr><td>${new Date(s.date).toLocaleDateString('pt-BR')}</td><td><b>${s.score}</b></td><td>${s.ok}/30</td><td>${s.min} min</td></tr>`).join("");
  $("app").innerHTML=`<div class="card"><h3 style="margin-top:0">Simulado no formato da prova</h3>
  <p class="muted">30 questões (5 de cada matéria), mesmos pesos do edital: Português e Específicos valem 4 por questão; as demais, 3. Cronômetro de 3 h. O gabarito comentado aparece só no final.</p>
  <button class="btn acc" onclick="startSim()">Simulado aleatório (30 questões)</button>
  <p class="muted" style="margin-top:14px">Simulados do Vale Concursos, adaptados (mesmos temas e ordem das 30 questões originais):</p>
  ${[1,2,3].map(n=>`<button class="btn sec" onclick="startValeSim(${n})">Simulado Vale ${String(n).padStart(2,'0')}</button>`).join('')}</div>
  <div class="card"><b>Histórico</b>${rows?`<table><tr><th>Data</th><th>Nota</th><th>Acertos</th><th>Tempo</th></tr>${rows}</table>`:'<p class="muted">Nenhum simulado ainda.</p>'}</div>`;
}
function startSim(){
  // prioriza questões ainda não vistas ou erradas
  let list=[]; ORDER.forEach(s=>{ const pool=QS.filter(x=>x.s===s); const pref=shuffle(pool.filter(x=>!(P.answers[x.id]&&P.answers[x.id].last))); const rest=shuffle(pool.filter(x=>!pref.includes(x))); list=list.concat(pref.concat(rest).slice(0,5)); });
  startQuiz(list,"Simulado","sim");
}
function startValeSim(n){ const list=QS.filter(x=>x.vs&&x.vs[0]===n).sort((p,q)=>p.vs[1]-q.vs[1]); startQuiz(list,"Simulado Vale "+String(n).padStart(2,'0'),"sim"); }
function tick(){ clearInterval(window._t); const f=()=>{ if(!cur||cur.mode!=="sim"){clearInterval(window._t);return;} const left=3*3600000-(Date.now()-cur.start); const el=$("tm"); if(!el)return; if(left<=0){finishSim();return;} const h=Math.floor(left/3600000),m=Math.floor(left%3600000/60000),s=Math.floor(left%60000/1000); el.textContent=`${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;}; f(); window._t=setInterval(f,1000); }
function finishSim(){
  const c=cur; clearInterval(window._t);
  let score=0, ok=0, by={};
  c.list.forEach((x,i)=>{ const r=c.picks[i]===x.a; if(c.picks[i]!==undefined) rec(x.id,r); if(r){ok++; score+=SUBJ[x.s].w;} by[x.s]=by[x.s]||{ok:0,n:0}; by[x.s].n++; if(r)by[x.s].ok++; });
  score=Math.round(score/20*100*20/100); // cada questão vale o peso (soma máx. 100)
  const min=Math.round((Date.now()-c.start)/60000);
  P.sims.push({date:new Date().toISOString(),score,ok,min,by}); save();
  view="simres"; setNav();
  let h=`<div class="card"><div class="big">${score}/100</div><p class="muted">${ok}/30 acertos · ${min} min · ${score>=50?'acima':'abaixo'} do corte de 50</p>
  <table><tr><th>Matéria</th><th>Acertos</th><th>Pontos</th></tr>${ORDER.filter(s=>by[s]).map(s=>`<tr><td>${SUBJ[s].n}</td><td>${by[s].ok}/${by[s].n}</td><td>${by[s].ok*SUBJ[s].w}/${by[s].n*SUBJ[s].w}</td></tr>`).join("")}</table></div>
  <div class="card"><b>Gabarito comentado</b></div>`;
  c.list.forEach((x,i)=>{ const ord=c.order[i], p=c.picks[i];
    h+=`<div class="card"><div class="qmeta">${i+1}. <span class="tag">${SUBJ[x.s].n}</span></div><div class="qtext">${esc(x.text)}</div>`;
    ord.forEach((oi,pos)=>{ let cls= oi===x.a?'right':(oi===p?'wrong':''); h+=`<div class="opt ${cls}"><span class="l">${"ABCD"[pos]})</span><span>${esc(x.opts[oi])}</span></div>`; });
    h+= p===undefined? `<div class="fb"><div class="res no">Em branco.</div></div>`+feedback(x,ord,-1).replace('✗ Errado.','') : feedback(x,ord,p);
    h+=`</div>`; });
  h+=`<button class="btn" onclick="go('home')">Início</button>`;
  $("app").innerHTML=h; cur=null; window.scrollTo(0,0);
}
// ---------- Revisão ----------
function vReview(){
  const wrong=QS.filter(x=>P.answers[x.id] && !P.answers[x.id].last);
  const fresh=QS.filter(x=>!P.answers[x.id]);
  $("app").innerHTML=`<div class="card"><h3 style="margin-top:0">Revisão</h3>
  <p class="muted">Errar aqui é bom: cada erro corrigido agora é ponto no dia 20.</p>
  <button class="btn acc" ${wrong.length?'':'disabled'} onclick="startQuiz(shuffle(QS.filter(x=>P.answers[x.id]&&!P.answers[x.id].last)),'Revisão de erros')">Refazer erros (${wrong.length})</button>
  <button class="btn" ${fresh.length?'':'disabled'} onclick="startQuiz(shuffle(QS.filter(x=>!P.answers[x.id])).slice(0,15),'15 inéditas')">15 questões ainda não feitas (${fresh.length})</button>
  <button class="btn sec" onclick="startQuiz(shuffle(QS.filter(x=>SUBJ[x.s].w===4)).slice(0,15),'Peso 4: Português e Específicos')">15 aleatórias de peso 4</button></div>
  <div class="card"><b>Pegadinhas para reler na véspera</b>${QS.filter(x=>P.answers[x.id]&&!P.answers[x.id].last).slice(0,40).map(x=>`<p class="trap" style="margin:8px 0">${esc(x.trap)}</p>`).join("")||'<p class="muted">Aparecem aqui as pegadinhas das questões que você errou.</p>'}</div>`;
}
// ---------- Plano ----------
function vPlan(){
  const now=phaseNow().f;
  $("app").innerHTML=`<div class="card"><h3 style="margin-top:0">Como a prova pontua</h3>
  <table><tr><th>Matéria</th><th>Questões</th><th>Peso</th><th>Pontos</th></tr>
  <tr><td>Língua Portuguesa</td><td>5</td><td>4</td><td>20</td></tr>
  <tr><td>Conhecimentos Específicos</td><td>5</td><td>4</td><td>20</td></tr>
  <tr><td>Raciocínio Lógico</td><td>5</td><td>3</td><td>15</td></tr>
  <tr><td>Informática</td><td>5</td><td>3</td><td>15</td></tr>
  <tr><td>Conhecimentos Gerais</td><td>5</td><td>3</td><td>15</td></tr>
  <tr><td>Legislação</td><td>5</td><td>3</td><td>15</td></tr></table>
  <p class="muted">30 questões, 4 alternativas, 3 h. Aprovação com 50 pontos. Passam para o TAF 8× o nº de vagas (cerca de 80). Legislação e Específicos repetem leis: estudando uma, você estuda as duas (35 pontos).</p></div>
  <div class="card"><h3 style="margin-top:0">Rotina diária sugerida (≈ 2 h)</h3>
  <p>1. 10 min: refazer erros de ontem.<br>2. 60 min: módulos da fase atual, começando pelo bloco jurídico.<br>3. 30 min: Português.<br>4. 20 min: uma matéria de peso 3 (alternando RL, Info e CG).<br>5. Abrir o link da lei/aula só quando errar.</p></div>
  <div class="card"><h3 style="margin-top:0">Fases</h3>${PHASES.map(p=>`<div class="phase ${p.f===now?'now':''}"><h3>${p.t}</h3><div class="muted">${fmt(p.ini)} a ${fmt(p.fim)}</div><p style="margin:4px 0">${p.d}</p></div>`).join("")}
  <div class="phase"><h3>20/12 · Prova</h3><div class="muted">Portões fecham 14h30 · início 14h45 · caneta preta transparente e documento original com foto.</div></div></div>`;
}
// ---------- Conta / JSON ----------
function vAcct(){
  $("app").innerHTML=`<div class="card"><h3 style="margin-top:0">Progresso</h3>
  <p class="muted">O progresso fica salvo neste aparelho. Para trocar de aparelho ou fazer backup, baixe o arquivo JSON e carregue no outro.</p>
  <button class="btn" onclick="exportJSON()">Baixar progresso (.json)</button>
  <button class="btn sec" onclick="copyJSON()">Copiar progresso (texto JSON)</button>
  <label>Carregar arquivo de progresso</label><input type="file" accept=".json,application/json" onchange="importJSON(this.files[0])">
  <div id="io" class="muted"></div>
  <details style="margin-top:12px"><summary class="muted">Copiar/colar JSON manualmente</summary><textarea id="js">${esc(JSON.stringify(P))}</textarea><button class="btn sec" onclick="importText($('js').value)">Aplicar JSON colado</button></details></div>
  <div class="card"><button class="btn sec" onclick="twoTap(this,()=>{P=blank();save();go('home')})">Zerar progresso</button>
  <button class="btn" onclick="logout()">Sair</button></div>`;
}
async function exportJSON(){
  const txt=JSON.stringify(P,null,2), name=`progresso-gcm-${user}.json`;
  try{ if(window.claude&&window.claude.use){ const d=await window.claude.use("downloads"); if(d){ await d.save({filename:name,data:txt}); $("io").textContent="Arquivo salvo ✓"; return; } } }catch(e){ $("io").textContent="Download recusado. Use 'Copiar progresso'."; return; }
  try{ const blob=new Blob([txt],{type:"application/json"}); const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=name; document.body.appendChild(a); a.click(); a.remove(); $("io").textContent="Se o download não começar, use 'Copiar progresso'."; }catch(e){ $("io").textContent="Use 'Copiar progresso'."; }
}
async function copyJSON(){ try{ await navigator.clipboard.writeText(JSON.stringify(P)); $("io").textContent="Copiado ✓ Cole num bloco de notas ou mensagem para guardar."; }catch(e){ const t=$("js"); t.parentElement.open=true; t.select(); $("io").textContent="Selecione o texto abaixo e copie."; } }
function importJSON(f){ if(!f)return; const r=new FileReader(); r.onload=()=>importText(r.result); r.readAsText(f); }
function importText(t){ try{ const d=JSON.parse(t); if(!d.answers) throw 0; P=d; P.user=user; save(); $("io").textContent="Progresso carregado ✓"; }catch(e){ $("io").textContent="Arquivo inválido."; } }
// ---------- Boot ----------
try{ const u=localStorage.getItem("gcm_user"); if(u&&USERS[u]){user=u;load();} }catch(e){}
render();
if("serviceWorker" in navigator){ addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{})); }
