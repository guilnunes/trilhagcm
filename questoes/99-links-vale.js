// Liga cada questão também à aula correspondente do Vale Concursos, quando ainda não houver.
const VALE_MAP = [
  [/13\.022|Guardas/, "v13022"], [/Desarm/, "vdesarm"], [/Drogas/, "vdrogas"], [/Abuso/, "vabuso"],
  [/Tortura/, "vtort"], [/ECA/, "veca"], [/Idosa/, "vidoso"], [/Trânsito|CTB/, "vctb"],
  [/Socorros/, "vsbv"], [/raciais/, "vrac"], [/SUSP/, "vsusp"], [/Improbidade/, "vimp"],
  [/Contravenções/, "vlcp"], [/Nome social/, "vnome"], [/Municipal de SJDR/, "v6051"],
  [/^CF:|Segurança Pública \(CF/, "vconst"], [/Administrativo/, "vadm"],
  [/Código Penal|Crimes contra|força/, "vpen"], [/CPP/, "vcpp"], [/Direitos Humanos|Internacional/, "vdh"]
];
const SUBJ_VALE = { por: "vport", rl: "vrl", inf: "vinf", cg: "vcg" };
QS.forEach(x => {
  if (x.ec.some(c => c && /vale-concursos/.test(c[1]))) return;
  let k = null;
  for (const [re, key] of VALE_MAP) if (re.test(x.t)) { k = key; break; }
  if (!k) k = SUBJ_VALE[x.s];
  if (k && E[k]) x.ec.push(E[k]);
  x.ec = x.ec.filter(Boolean);
});
