// Extração de questões de um PDF "versão original" do Estratégia Concursos.
// Uso: com a aba já no cdn.estrategiaconcursos.com.br (o PDF aberto), cole o conteúdo
// INTEIRO deste arquivo na ferramenta de JavaScript da página e execute. Ele devolve um resumo curto.
// Depois use, na mesma aba:
//   SEL(10, 450)        -> escreve no <pre id="out"> as 10 melhores questões (até 450 caracteres cada)
//   SEL(10, 450, 10)    -> as 10 seguintes (pula as 10 primeiras)
//   SHOW([3, 7], 900)   -> mostra as questões 3 e 7 da lista QQ com até 900 caracteres
// e leia o resultado com a ferramenta de texto da página (retornar direto do JavaScript trunca).
// Também pode ser carregado por import: await import('https://guilnunes.github.io/trilhagcm/tools/extract.js?v=1')
(async () => {
  const PDFJS = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/';
  const pdfjs = await import(PDFJS + 'pdf.min.mjs');
  pdfjs.GlobalWorkerOptions.workerSrc = PDFJS + 'pdf.worker.min.mjs';
  const doc = await pdfjs.getDocument({ data: await (await fetch(location.href)).arrayBuffer() }).promise;

  // 1. Texto por linha (itens com a mesma coordenada y viram uma linha)
  let lines = [];
  for (let p = 1; p <= doc.numPages; p++) {
    const tc = await (await doc.getPage(p)).getTextContent();
    const m = new Map();
    for (const it of tc.items) { const y = Math.round(it.transform[5]); m.set(y, (m.get(y) || '') + it.str); }
    [...m.entries()].sort((a, b) => b[0] - a[0]).forEach(e => lines.push(e[1].trim()));
  }
  // 2. Limpeza: cabeçalho e rodapé repetidos, números soltos, marcas ==123==
  const cnt = {}; lines.forEach(l => cnt[l] = (cnt[l] || 0) + 1);
  lines = lines.filter(l => l && cnt[l] <= 4 && !/^\d+$/.test(l)).map(l => l.replace(/==\d+==/g, ''));
  let TXT = '\n' + lines.join('\n');
  // 3. Alternativas minúsculas "a) " viram "A) " em linha própria
  TXT = TXT.replace(/(^|\s)([a-e])\)\s/g, (m, p, l) => '\n' + l.toUpperCase() + ') ');
  window.TXT = TXT;

  // 4. Divisão em questões: tenta "12. (BANCA...)" e "(BANCA/Órgão/2024)" e fica com a que rende mais
  const split = (re) => { const idx = []; let m; while ((m = re.exec(TXT))) idx.push([m.index, m[m.length - 1]]);
    return idx.map((x, i) => ({ h: x[1], t: TXT.slice(x[0], (idx[i + 1] || [TXT.length])[0]) })); };
  const byNumber = split(/\n\d{1,3}\.\s*\(?([A-Z][^\n]{2,140})/g);
  const byBanca = split(/\n\(([A-ZÀ-Ú][^\n)]{2,90}\d{4})\)/g);
  const withAlts = (L) => L.filter(q => /\nA\)/.test(q.t) && /\nD\)/.test(q.t)).length;
  const best = withAlts(byBanca) > withAlts(byNumber) ? byBanca : byNumber;
  window.QQ = best.filter(q => !/IN[ÉE]DITA/i.test(q.h));

  window.OUT = (s) => { const pre = document.getElementById('out') || document.body.appendChild(Object.assign(document.createElement('pre'), { id: 'out' })); pre.textContent = s; return s.length; };

  // 5. Seleção: prioriza nível médio e carreiras de segurança e prefeitura; tira repetidas e as que dependem de texto longo
  const PRI = /GCM|GUARDA|POL[IÍ]CIA|PM\b|SOLDADO|CABO|AGENTE|ESCRIV|INVESTIG|INSPETOR|T[ÉE]CNICO|OFICIAL|PREF|C[ÂA]MARA|CBM|BOMBEIRO|DEPEN|PENAL|SEJUSP/i;
  const TOP = /GUARDA|GCM|IBGP|POL[IÍ]CIA|\bMG\b|MINAS/i;
  const GAB = /(?:gabarito|alternativa|letra|resposta)\s*(?:correta)?\s*[:\-]?\s*(?:é|:)?\s*(?:a\s+)?(?:letra\s+)?["“]?([A-E])\b/i;
  window.SEL = (N = 10, maxc = 450, skip = 0) => {
    const seen = {}, qs = [];
    QQ.forEach((q, i) => {
      if (!/\nA\)/.test(q.t) || !/\nD\)/.test(q.t)) return;
      const t = q.t, last = Math.max(t.lastIndexOf('\nE)'), t.lastIndexOf('\nD)')), end = t.indexOf('\n', last + 3);
      const body = t.slice(0, end > 0 ? end : t.length).replace(/\s+\n/g, '\n'), rest = t.slice(end);
      if (body.length > 900 || /texto seguinte|leia o texto|com base no texto|de acordo com o texto/i.test(body)) return;
      const o = { i, s: (PRI.test(q.h) ? 2 : 0) + (TOP.test(q.h) ? 1 : 0), body, g: (rest.match(GAB) || [])[1] || '?', c: rest.replace(/\s+/g, ' ').slice(0, 140) };
      const k = body.slice(0, 90);
      if (seen[k]) { if (o.c.length > seen[k].c.length) { seen[k].c = o.c; seen[k].g = o.g; } return; }
      seen[k] = o; qs.push(o);
    });
    qs.sort((a, b) => b.s - a.s || a.i - b.i);
    return OUT(`${qs.length} questões utilizáveis\n` + qs.slice(skip, skip + N).map(q => `##QQ[${q.i}] [gab? ${q.g}] ${q.body.slice(0, maxc)}\n>> ${q.c}`).join('\n'));
  };
  window.SHOW = (ids, maxc = 900) => OUT(ids.map(i => `##QQ[${i}] ` + (QQ[i] ? QQ[i].t.replace(/\s+/g, ' ').slice(0, maxc) : '(não existe)')).join('\n'));

  return `páginas ${doc.numPages} | questões ${QQ.length} | com alternativas ${withAlts(QQ)} | divisão por ${best === byBanca ? 'banca' : 'número'}`;
})();
