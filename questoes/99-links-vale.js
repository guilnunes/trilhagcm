// Liga cada questão à aula do Vale Concursos.
// 1. Se uma regra de VALE_REGRAS (02a-vale-aulas.js) casar, a questão aponta para a aula exata, no lugar dos links genéricos (módulo ou lei); os links de simulado e de listas de questões ficam.
// Questões escritas já ligadas a uma aula (chave va_) ficam como estão.
// 2. Senão, se ainda não houver link do Vale, usa o link da lei ou do módulo (VALE_MAP e SUBJ_VALE).
const VALE_MAP = [
  [/13\.022|Guardas/, "v13022"], [/Desarm/, "vdesarm"], [/Drogas/, "vdrogas"], [/Abuso/, "vabuso"],
  [/Tortura/, "vtort"], [/ECA/, "veca"], [/Idosa/, "vidoso"], [/Trânsito|CTB/, "vctb"],
  [/Socorros/, "vsbv"], [/raciais/, "vrac"], [/SUSP/, "vsusp"], [/Improbidade/, "vimp"],
  [/Contravenções/, "vlcp"], [/Nome social/, "vnome"], [/Municipal de SJDR/, "v6051"],
  [/^CF:|Segurança Pública \(CF/, "vconst"], [/Administrativo/, "vadm"],
  [/Código Penal|Crimes contra|força/, "vpen"], [/CPP/, "vcpp"], [/Direitos Humanos|Internacional/, "vdh"]
];
const SUBJ_VALE = { por: "vport", rl: "vrl", inf: "vinf", cg: "vcg" };
const isVale = (c) => c && /vale-concursos/.test(c[1]);
const isValeTrocavel = (c) => isVale(c) && !/Simulado|questões/i.test(c[0]);
const VALE_IDS = new Set(VALE_AULAS.map(a => VC + a[0]));
QS.forEach(x => {
  x.ec = x.ec.filter(Boolean);
  if (x.ec.some(c => isVale(c) && /^Vale: (?!módulo)/.test(c[0]) && VALE_IDS.has(c[1]) && E["va_" + c[1].slice(VC.length)] === c)) return;
  const hay = x.s + "|" + x.t + "|" + x.text;
  const regra = VALE_REGRAS.find(([re]) => re.test(hay));
  const aula = regra && E["va_" + regra[1]];
  if (aula) {
    x.ec = x.ec.filter(c => !isValeTrocavel(c));
    if (!x.ec.some(c => isVale(c) && c[1] === aula[1])) x.ec.push(aula);
    return;
  }
  if (x.ec.some(isVale)) return;
  let k = null;
  for (const [re, key] of VALE_MAP) if (re.test(x.t)) { k = key; break; }
  if (!k) k = SUBJ_VALE[x.s];
  if (k && E[k]) x.ec.push(E[k]);
});
