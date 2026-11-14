// Banco de questões - GCM São João del-Rei/MG (IBGP) - Edital 04/2026
// Questões inéditas no estilo IBGP (4 alternativas, A-D), escritas a partir da letra da lei e do edital.
const EC = "https://www.estrategiaconcursos.com.br/app/dashboard/cursos/";
const L = {
  cf: ["Constituição Federal (Planalto)", "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm"],
  cp: ["Código Penal (Planalto)", "https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm"],
  cpp: ["Código de Processo Penal (Planalto)", "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689compilado.htm"],
  egm: ["Lei 13.022/2014, Estatuto Geral das Guardas Municipais", "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l13022.htm"],
  d11841: ["Decreto 11.841/2023", "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/decreto/D11841.htm"],
  desarm: ["Lei 10.826/2003, Estatuto do Desarmamento", "https://www.planalto.gov.br/ccivil_03/leis/2003/l10.826compilado.htm"],
  drogas: ["Lei 11.343/2006, Lei de Drogas", "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11343.htm"],
  abuso: ["Lei 13.869/2019, Abuso de Autoridade", "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13869.htm"],
  tortura: ["Lei 9.455/1997, Tortura", "https://www.planalto.gov.br/ccivil_03/leis/l9455.htm"],
  eca: ["Lei 8.069/1990, ECA", "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm"],
  idoso: ["Lei 10.741/2003, Estatuto da Pessoa Idosa", "https://www.planalto.gov.br/ccivil_03/leis/2003/l10.741.htm"],
  ctb: ["Lei 9.503/1997, Código de Trânsito", "https://www.planalto.gov.br/ccivil_03/leis/l9503compilado.htm"],
  racismo: ["Lei 7.716/1989, Crimes de preconceito", "https://www.planalto.gov.br/ccivil_03/leis/l7716.htm"],
  susp: ["Lei 13.675/2018, SUSP", "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13675.htm"],
  improb: ["Lei 8.429/1992, Improbidade", "https://www.planalto.gov.br/ccivil_03/leis/l8429.htm"],
  lcp: ["Decreto-Lei 3.688/1941, Contravenções Penais", "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3688.htm"],
  d8727: ["Decreto 8.727/2016, Nome social", "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/decreto/d8727.htm"],
  cadh: ["Decreto 678/1992, Pacto de San José", "https://www.planalto.gov.br/ccivil_03/decreto/d0678.htm"],
  pidcp: ["Decreto 592/1992, Pacto dos Direitos Civis e Políticos", "https://www.planalto.gov.br/ccivil_03/decreto/1990-1994/d0592.htm"],
  dudh: ["Declaração Universal dos Direitos Humanos (UNICEF)", "https://www.unicef.org/brazil/declaracao-universal-dos-direitos-humanos"],
  concess: ["Lei 8.987/1995, Concessões", "https://www.planalto.gov.br/ccivil_03/leis/l8987cons.htm"],
  sv11: ["Súmula Vinculante 11 (STF)", "https://portal.stf.jus.br/jurisprudencia/sumariosumulas.asp?base=26&sumula=1220"],
  edital: ["Página do concurso na IBGP", "https://www.ibgpconcursos.com.br"],
  camara: ["Câmara de São João del-Rei (leis municipais)", "https://www.camarasaojoaodelrei.mg.gov.br"],
  pref: ["Prefeitura de São João del-Rei", "https://www.saojoaodelrei.mg.gov.br"],
  ibge: ["IBGE Cidades: São João del-Rei", "https://cidades.ibge.gov.br/brasil/mg/sao-joao-del-rei/panorama"],
  iphan: ["IPHAN: São João del-Rei", "http://portal.iphan.gov.br/pagina/detalhes/373"],
  manual: ["Manual de Redação da Presidência", "https://www4.planalto.gov.br/centrodeestudos/assuntos/manual-de-redacao-da-presidencia-da-republica"],
  volp: ["VOLP, Academia Brasileira de Letras", "https://www.academia.org.br/nossa-lingua/busca-no-vocabulario"],
  cert: ["Cartilha de Segurança (CERT.br)", "https://cartilha.cert.br"],
  ms: ["Suporte Microsoft 365", "https://support.microsoft.com/pt-br"]
};
const E = {
  cf0: ["Constitucional, Aula 00", EC+"401571/aulas/4043290"],
  cf1: ["Constitucional, Aula 01: Princípios Fundamentais", EC+"401571/aulas/4043291"],
  cf2: ["Constitucional, Aula 02: Art. 5º parte I", EC+"401571/aulas/4043292"],
  cf3: ["Constitucional, Aula 03: Art. 5º parte II", EC+"401571/aulas/4043293"],
  cf4: ["Constitucional, Aula 04: Municípios", EC+"401571/aulas/4043294"],
  cf5: ["Constitucional, Aula 05: Administração Pública", EC+"401571/aulas/4043295"],
  cf6: ["Constitucional, Aula 06: Poder Judiciário", EC+"401571/aulas/4043296"],
  cf7: ["Constitucional, Aula 07: Segurança Pública", EC+"401571/aulas/4043297"],
  pen0: ["Penal, Aula 00: Aplicação da lei penal", EC+"401543/aulas/4043162"],
  pen1: ["Penal, Aula 01: Do Crime (arts. 13 a 25)", EC+"401543/aulas/4043163"],
  pen2: ["Penal, Aula 02: Das Penas", EC+"401543/aulas/4043164"],
  pen3: ["Penal, Aula 03: Crimes contra a Administração", EC+"401543/aulas/4043165"],
  pen4: ["Processo Penal, Aula 04: Prisões parte 1", EC+"401543/aulas/4043166"],
  pen5: ["Processo Penal, Aula 05: Prisões parte 2", EC+"401543/aulas/4043167"],
  adm: ["Curso de Direito Administrativo (pacote GCM)", EC+"401370/aulas"],
  dh: ["Curso de Direitos Humanos (pacote GCM)", EC+"401568/aulas"],
  cg: ["Curso de Conhecimentos Gerais (pacote GCM)", EC+"400876/aulas"],
  p1: ["Português, Aula 01: Ortografia e acentuação", EC+"401338/aulas/4040747"],
  p2: ["Português, Aula 02: Classes e colocação pronominal", EC+"401338/aulas/4040748"],
  p3: ["Português, Aula 03: Preposições e conjunções", EC+"401338/aulas/4040749"],
  p4: ["Português, Aula 04: Verbos", EC+"401338/aulas/4040750"],
  p7: ["Português, Aula 07: Pontuação", EC+"401338/aulas/4040753"],
  p8: ["Português, Aula 08: Concordância", EC+"401338/aulas/4040754"],
  p9: ["Português, Aula 09: Regência e crase", EC+"401338/aulas/4040755"],
  p10: ["Português, Aula 10: Coesão e coerência", EC+"401338/aulas/4040756"],
  p12: ["Português, Aula 12: Interpretação de textos", EC+"401338/aulas/4040758"],
  p13: ["Português, Aula 13: Variação linguística", EC+"401338/aulas/4040759"],
  rl1: ["Raciocínio Lógico, Aula 01: Estruturas lógicas II", EC+"401340/aulas/4040804"],
  rl2: ["Raciocínio Lógico, Aula 02: Equivalências e negações", EC+"401340/aulas/4040805"],
  rl5: ["Raciocínio Lógico, Aula 05: Raciocínio sequencial", EC+"401340/aulas/4040808"],
  rl6: ["Raciocínio Lógico, Aula 06: Problemas de lógica", EC+"401340/aulas/4040809"],
  rl7: ["Raciocínio Lógico, Aula 07: Conjuntos", EC+"401340/aulas/4040810"],
  rl9: ["Raciocínio Lógico, Aula 09: Operações básicas", EC+"401340/aulas/4040812"],
  rl11: ["Raciocínio Lógico, Aula 11: MMC e MDC", EC+"401340/aulas/4040814"],
  rl12: ["Raciocínio Lógico, Aula 12: Análise combinatória", EC+"401340/aulas/4040815"],
  rl13: ["Raciocínio Lógico, Aula 13: Probabilidade", EC+"401340/aulas/4040816"],
  in0: ["Informática, Aula 00: Internet e redes", EC+"400883/aulas/4036110"],
  in2: ["Informática, Aula 02: Intranet", EC+"400883/aulas/4036112"],
  in5: ["Informática, Aula 05: Nuvem", EC+"400883/aulas/4036115"],
  in6: ["Informática, Aula 06: Outlook", EC+"400883/aulas/4036116"],
  in7: ["Informática, Aula 07: Segurança da informação", EC+"400883/aulas/4036117"],
  in8: ["Informática, Aula 08: Vírus e golpes", EC+"400883/aulas/4036118"],
  in9: ["Informática, Aula 09: Backup", EC+"400883/aulas/4036119"],
  in10: ["Informática, Aula 10: Excel", EC+"400883/aulas/4036120"],
  in11: ["Informática, Aula 11: Word", EC+"400883/aulas/4036121"],
  in13: ["Informática, Aula 13: Windows 10", EC+"400883/aulas/4036123"],
  in14: ["Informática, Aula 14: Hardware e software", EC+"400883/aulas/4036124"],
  in15: ["Informática, Aula 15: Inteligência Artificial", EC+"400883/aulas/4036125"]
};

// q(materia, fase, tópico, enunciado, alternativas, índice da correta, comentário, pegadinha, [links], estrategia)
const QS = [];
function q(s, f, t, text, opts, a, exp, trap, links, ec) { QS.push({ s, f, t, text, opts, a, exp, trap, links: links.map(k => L[k]), ec: (Array.isArray(ec) ? ec : ec ? [ec] : []).map(k => E[k]) }); }

/* ================= CONHECIMENTOS ESPECÍFICOS (peso 4) ================= */
q("esp",1,"Estatuto Geral das Guardas (Lei 13.022/2014)",
"De acordo com a Lei Federal nº 13.022/2014, incumbe às guardas municipais, instituições de caráter:",
["militar, uniformizadas e armadas, a função de policiamento ostensivo exclusivo do Município.",
 "civil, uniformizadas e armadas conforme previsto em lei, a função de proteção municipal preventiva.",
 "civil, sem uniforme obrigatório, a função de polícia judiciária no âmbito municipal.",
 "militar, desarmadas, a função de proteção exclusiva do patrimônio histórico."],1,
"Art. 2º: as guardas são instituições de caráter CIVIL, uniformizadas e armadas conforme previsto em lei, com a função de proteção municipal preventiva, ressalvadas as competências da União, dos Estados e do DF.",
"A banca troca 'civil' por 'militar' e 'preventiva' por 'ostensiva' ou 'judiciária'. Guarda Municipal não é militar e não investiga (não é polícia judiciária).",
["egm"],"cf7");

q("esp",1,"Estatuto Geral das Guardas (Lei 13.022/2014)",
"NÃO é princípio mínimo de atuação das guardas municipais previsto no art. 3º da Lei nº 13.022/2014:",
["Patrulhamento preventivo.",
 "Uso progressivo da força.",
 "Preservação da vida, redução do sofrimento e diminuição das perdas.",
 "Hierarquia militar e repressão imediata como prioridade."],3,
"Os princípios do art. 3º são: I proteção dos direitos humanos fundamentais, da cidadania e das liberdades públicas; II preservação da vida, redução do sofrimento e diminuição das perdas; III patrulhamento preventivo; IV compromisso com a evolução social da comunidade; V uso progressivo da força.",
"Decore pela sigla mental 'DH, VIDA, PATRULHA, COMUNIDADE, FORÇA PROGRESSIVA'. Nada de 'repressão' nem 'militar'.",
["egm"],"cf7");

q("esp",1,"Estatuto Geral das Guardas (Lei 13.022/2014)",
"São João del-Rei tem cerca de 90 mil habitantes. Pela Lei nº 13.022/2014, o efetivo da guarda municipal de um Município com mais de 50.000 e até 500.000 habitantes não pode ultrapassar:",
["0,2% da população.","0,3% da população, desde que não fique abaixo do limite do inciso anterior.","0,4% da população.","1% da população."],1,
"Art. 7º: até 50 mil habitantes, 0,4%; de 50 mil a 500 mil, 0,3% (garantido o número do inciso I); acima de 500 mil, 0,2%. Quanto maior a cidade, menor o percentual.",
"A ordem é decrescente: 0,4 / 0,3 / 0,2. A banca costuma inverter as faixas.",
["egm"],null);

q("esp",1,"Estatuto Geral das Guardas (Lei 13.022/2014)",
"Segundo o art. 10 da Lei nº 13.022/2014, NÃO é requisito básico para investidura no cargo de guarda municipal:",
["Nacionalidade brasileira.","Nível médio completo de escolaridade.","Idade máxima de 45 anos.","Idoneidade moral comprovada por investigação social e certidões."],2,
"A lei federal exige: nacionalidade brasileira, gozo dos direitos políticos, quitação militar e eleitoral, nível médio, idade MÍNIMA de 18 anos, aptidão física, mental e psicológica e idoneidade moral. O limite de 45 anos vem do edital/legislação municipal, não da lei federal.",
"Cuidado com a mistura edital x lei federal. A Lei 13.022 fala só em idade mínima (18).",
["egm","edital"],null);

q("esp",1,"Estatuto Geral das Guardas (Lei 13.022/2014)",
"Diante de flagrante delito, compete especificamente à guarda municipal, nos termos do art. 5º da Lei nº 13.022/2014:",
["lavrar o auto de prisão em flagrante e arbitrar fiança.",
 "encaminhar ao delegado de polícia o autor da infração, preservando o local do crime, quando possível e sempre que necessário.",
 "conduzir o autor diretamente ao juiz para audiência de custódia.",
 "instaurar inquérito policial sumário."],1,
"Art. 5º, XIV: encaminhar ao delegado de polícia, diante de flagrante delito, o autor da infração, preservando o local do crime, quando possível e sempre que necessário. Quem lavra o auto é o delegado.",
"Guarda não lavra auto, não arbitra fiança e não instaura inquérito. Essas são funções de polícia judiciária.",
["egm","cpp"],"pen4");

q("esp",1,"Estatuto Geral das Guardas (Lei 13.022/2014)",
"Sobre o controle das guardas municipais na Lei nº 13.022/2014, é correto afirmar:",
["O controle externo é exercido por corregedoria subordinada ao comandante.",
 "A corregedoria (controle interno) é exigida nas guardas com efetivo superior a 50 servidores e em todas que utilizam arma de fogo; a ouvidoria (controle externo) é independente da direção da guarda.",
 "A ouvidoria é facultativa e subordinada ao comando.",
 "Não há previsão de controle interno ou externo na lei."],1,
"Art. 13: controle interno por corregedoria (efetivo acima de 50 ou uso de arma de fogo) e controle externo por ouvidoria, independente em relação à direção da guarda.",
"Interno = CORREGEDORIA. Externo = OUVIDORIA. A banca inverte os dois.",
["egm"],null);

q("esp",1,"Estatuto Geral das Guardas (Lei 13.022/2014)",
"Quanto à estrutura hierárquica das guardas municipais, a Lei nº 13.022/2014 estabelece que:",
["pode adotar os mesmos postos e graduações das Polícias Militares.",
 "não pode utilizar denominação idêntica à das forças militares quanto aos postos e graduações, títulos, uniformes, distintivos e condecorações.",
 "deve copiar a estrutura do Exército Brasileiro.",
 "é livre, sem qualquer vedação."],1,
"Art. 19: é vedada denominação idêntica à das forças militares quanto a postos, graduações, títulos, uniformes, distintivos e condecorações. Os cargos em comissão devem ser providos por membros efetivos do quadro (art. 15).",
"Pode ter hierarquia, mas não pode imitar nomes militares (ex.: 'sargento', 'tenente').",
["egm"],null);

q("esp",1,"Segurança Pública (CF, art. 144)",
"Conforme o art. 144, § 8º, da Constituição Federal:",
["Os Municípios deverão constituir guardas municipais destinadas ao policiamento ostensivo.",
 "Os Municípios poderão constituir guardas municipais destinadas à proteção de seus bens, serviços e instalações, conforme dispuser a lei.",
 "As guardas municipais são forças auxiliares e reserva do Exército.",
 "Os Estados poderão criar guardas municipais nos Municípios com mais de 100 mil habitantes."],1,
"Texto literal do § 8º. A criação é FACULTATIVA ('poderão'). Forças auxiliares e reserva do Exército são as PMs e CBMs (§ 6º). Em 2023 o STF (ADPF 995) reconheceu as guardas como integrantes do sistema de segurança pública.",
"'Poderão' x 'deverão' é a troca clássica. E guarda municipal não é força auxiliar do Exército.",
["cf"],"cf7");

q("esp",1,"Segurança Pública (CF, art. 144)",
"NÃO consta nos incisos do caput do art. 144 da Constituição Federal como órgão de segurança pública:",
["Polícia penal federal, estaduais e distrital.","Polícia ferroviária federal.","Guarda municipal.","Corpos de bombeiros militares."],2,
"Os incisos do caput listam: PF, PRF, PFF, polícias civis, PMs e CBMs, e polícias penais. As guardas municipais aparecem no § 8º, não nos incisos.",
"Questão de 'letra da lei': a guarda está no art. 144, mas no parágrafo 8º, fora do rol dos incisos.",
["cf"],"cf7");

q("esp",2,"Estatuto do Desarmamento (Lei 10.826/2003)",
"Guardas abordam cidadão que mantém, dentro da própria residência, revólver de uso permitido sem registro. A conduta se amolda, em tese, ao crime de:",
["porte ilegal de arma de fogo de uso permitido (art. 14), punido com reclusão.",
 "posse irregular de arma de fogo de uso permitido (art. 12), punido com detenção de 1 a 3 anos e multa.",
 "posse de arma de uso restrito (art. 16).",
 "contravenção de porte de arma (art. 19 da LCP)."],1,
"Arma DENTRO de casa ou no local de trabalho (sendo o titular ou responsável) = POSSE, art. 12, detenção de 1 a 3 anos. Arma FORA, na rua = PORTE, art. 14, reclusão de 2 a 4 anos.",
"Posse = casa = detenção. Porte = rua = reclusão. A banca troca 'posse' e 'porte'.",
["desarm"],"pen5");

q("esp",2,"Estatuto do Desarmamento (Lei 10.826/2003)",
"No Estatuto do Desarmamento, a posse ou porte ilegal de arma de fogo de uso PROIBIDO (art. 16, § 2º) é punida com:",
["detenção de 1 a 3 anos.","reclusão de 2 a 4 anos.","reclusão de 3 a 6 anos.","reclusão de 4 a 12 anos."],3,
"Art. 16 caput (uso restrito): reclusão de 3 a 6 anos. § 2º (uso proibido, incluído pelo Pacote Anticrime): reclusão de 4 a 12 anos.",
"Escadinha: permitido posse 1-3 (detenção), permitido porte 2-4, restrito 3-6, proibido 4-12.",
["desarm"],null);

q("esp",2,"Lei de Drogas (Lei 11.343/2006)",
"Quem adquire ou traz consigo droga para consumo pessoal (art. 28 da Lei nº 11.343/2006) está sujeito a:",
["detenção de 6 meses a 2 anos.",
 "advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa de comparecimento a programa ou curso educativo.",
 "reclusão de 5 a 15 anos.",
 "prisão em flagrante e preventiva obrigatória."],1,
"O art. 28 não prevê pena de prisão. As penas são advertência, prestação de serviços e medida educativa. Em 2024 o STF (RE 635.659) definiu que o porte de maconha para uso próprio é ilícito administrativo, com presunção de usuário até 40 g ou 6 plantas fêmeas.",
"Usuário NÃO vai preso. Tráfico (art. 33) é reclusão de 5 a 15 anos.",
["drogas"],null);

q("esp",2,"Lei de Drogas (Lei 11.343/2006)",
"O chamado 'tráfico privilegiado' (art. 33, § 4º, da Lei 11.343/2006) permite reduzir a pena de 1/6 a 2/3 quando o agente:",
["é reincidente, mas confessou.",
 "é primário, de bons antecedentes, não se dedica a atividades criminosas nem integra organização criminosa.",
 "portava pequena quantidade, ainda que integre organização criminosa.",
 "é menor de 21 anos na data do fato."],1,
"Os quatro requisitos são cumulativos: primário, bons antecedentes, não se dedicar a atividades criminosas e não integrar organização criminosa.",
"Basta faltar um requisito para não haver redução. Quantidade pequena sozinha não basta.",
["drogas"],null);

q("esp",2,"Abuso de Autoridade (Lei 13.869/2019)",
"Para configurar crime de abuso de autoridade, a Lei nº 13.869/2019 exige que o agente atue:",
["com culpa, por imprudência ou negligência.",
 "com finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal.",
 "apenas fora do horário de serviço.",
 "mediante qualquer divergência na interpretação da lei."],1,
"Art. 1º, § 1º: exige dolo específico (prejudicar, beneficiar, capricho ou satisfação pessoal). § 2º: divergência na interpretação de lei ou na avaliação de fatos e provas NÃO configura abuso (vedação do 'crime de hermenêutica').",
"Não existe abuso de autoridade culposo.",
["abuso"],null);

q("esp",2,"Abuso de Autoridade (Lei 13.869/2019)",
"Os crimes previstos na Lei de Abuso de Autoridade são de ação penal:",
["privada.","pública condicionada à representação.","pública incondicionada, admitida ação privada subsidiária se o MP não agir no prazo.","pública condicionada à requisição do Ministro da Justiça."],2,
"Art. 3º: ação penal pública incondicionada. Se o Ministério Público não oferecer denúncia no prazo legal, cabe ação privada subsidiária da pública.",
"A banca coloca 'condicionada à representação da vítima'. Errado.",
["abuso"],null);

q("esp",2,"Lei de Tortura (Lei 9.455/1997)",
"Sobre a Lei de Tortura, assinale a correta:",
["A condenação acarreta a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada.",
 "O crime de tortura é afiançável quando praticado por particular.",
 "A pena é diminuída se o crime for cometido por agente público.",
 "O condenado por tortura sempre inicia a pena em regime aberto."],0,
"Art. 1º, § 5º: perda do cargo e interdição pelo DOBRO do prazo da pena. § 4º: pena AUMENTA de 1/6 a 1/3 se cometido por agente público. § 6º: inafiançável e insuscetível de graça ou anistia. § 7º: regime inicial fechado (salvo omissão do § 2º).",
"Atenção: o Anexo II do edital escreveu 'Lei 9.455, de 07 de abril de 1977'. O ano correto é 1997. Agente público = AUMENTO de pena.",
["tortura","cf"],"cf3");

q("esp",2,"ECA (Lei 8.069/1990)",
"Para o Estatuto da Criança e do Adolescente, um menino de 12 anos completos que pratica conduta descrita como crime:",
["é criança e recebe apenas medidas de proteção.",
 "é adolescente e pratica ato infracional, sujeito a medidas socioeducativas.",
 "comete crime e responde pelo Código Penal.",
 "não pode sofrer qualquer medida."],1,
"Art. 2º: criança até 12 anos INCOMPLETOS; adolescente entre 12 e 18 anos. Ato infracional de criança gera medidas de proteção (art. 105); de adolescente, medidas socioeducativas (art. 112).",
"12 anos completos já é adolescente. Menor de 18 nunca comete 'crime', comete ato infracional.",
["eca"],null);

q("esp",2,"ECA (Lei 8.069/1990)",
"Segundo o art. 106 do ECA, nenhum adolescente será privado de sua liberdade senão:",
["por ordem verbal do conselheiro tutelar.",
 "em flagrante de ato infracional ou por ordem escrita e fundamentada da autoridade judiciária competente.",
 "por determinação do comandante da guarda.",
 "por requisição do Ministério Público, independentemente de flagrante."],1,
"Mesma lógica do art. 5º, LXI, da CF: só flagrante ou ordem escrita e fundamentada do juiz. O adolescente apreendido em flagrante é encaminhado à autoridade policial competente (art. 172).",
"Conselho Tutelar não determina apreensão.",
["eca","cf"],null);

q("esp",2,"Estatuto da Pessoa Idosa (Lei 10.741/2003)",
"O Estatuto da Pessoa Idosa considera idosa a pessoa com idade igual ou superior a:",
["55 anos, com prioridade especial a partir dos 70.","60 anos, com prioridade especial aos maiores de 80 anos.","65 anos, com prioridade especial aos maiores de 85.","60 anos, sem prioridade especial por faixa etária."],1,
"Art. 1º: 60 anos ou mais. Art. 3º, § 2º: entre os idosos, prioridade especial aos maiores de 80 anos. Desde a Lei 14.423/2022 o nome oficial é 'Estatuto da Pessoa Idosa'.",
"Não confunda com 65 anos (gratuidade no transporte coletivo urbano, art. 39).",
["idoso"],null);

q("esp",2,"Crimes de Trânsito (CTB)",
"Nos acidentes de trânsito de que resulte vítima, ao condutor que prestar pronto e integral socorro a ela:",
["será imposta prisão em flagrante e fiança reduzida pela metade.",
 "não se imporá a prisão em flagrante, nem se exigirá fiança.",
 "será imposta apenas a suspensão da CNH no local.",
 "será obrigatória a prisão preventiva."],1,
"Art. 301 do CTB: não se impõe prisão em flagrante nem se exige fiança ao condutor que presta pronto e integral socorro à vítima.",
"Prestar socorro afasta a PRISÃO EM FLAGRANTE, não afasta o crime nem o processo.",
["ctb"],null);

q("esp",2,"Crimes de Trânsito (CTB)",
"No homicídio culposo na direção de veículo automotor (art. 302 do CTB), se o agente conduz sob influência de álcool ou outra substância psicoativa que determine dependência, a pena é de:",
["detenção de 2 a 4 anos.","reclusão de 5 a 8 anos, além da suspensão ou proibição de obter a habilitação.","reclusão de 12 a 30 anos.","detenção de 6 meses a 3 anos."],1,
"Art. 302 caput: detenção de 2 a 4 anos. § 3º (embriaguez): reclusão de 5 a 8 anos. Já a embriaguez ao volante isolada (art. 306) é detenção de 6 meses a 3 anos.",
"Não confundir 302 (homicídio culposo), 303 (lesão culposa) e 306 (embriaguez).",
["ctb"],null);

q("esp",2,"Primeiros Socorros e Direção Defensiva",
"Ao chegar a um acidente com vítima consciente presa às ferragens, a primeira providência correta do guarda é:",
["retirar imediatamente a vítima do veículo para avaliá-la.",
 "garantir a própria segurança e a do local, sinalizando a via, e acionar o socorro especializado (SAMU 192 / Bombeiros 193).",
 "oferecer água à vítima para evitar desidratação.",
 "remover o capacete ou girar o pescoço da vítima para facilitar a respiração."],1,
"A sequência básica é: segurança da cena (sinalizar), acionar socorro, avaliar a vítima sem movê-la. Movimentar vítima de trauma pode agravar lesão na coluna. Não se dá líquidos.",
"Socorrista que vira vítima não ajuda ninguém: SEGURANÇA PRIMEIRO.",
["ctb"],null);

q("esp",3,"Uso legal e progressivo da força",
"São causas excludentes de ilicitude previstas no art. 23 do Código Penal:",
["coação moral irresistível e obediência hierárquica.",
 "estado de necessidade, legítima defesa, estrito cumprimento de dever legal e exercício regular de direito.",
 "embriaguez completa e menoridade.",
 "erro de proibição e arrependimento posterior."],1,
"Art. 23: estado de necessidade, legítima defesa, estrito cumprimento do dever legal e exercício regular de direito. O parágrafo único pune o excesso doloso ou culposo. Coação irresistível e obediência hierárquica (art. 22) excluem a CULPABILIDADE, não a ilicitude.",
"Excesso é punível em QUALQUER excludente. Uso da força tem de ser necessário, proporcional e progressivo.",
["cp"],"pen1");

q("esp",3,"Uso legal e progressivo da força",
"Pelo parágrafo único do art. 25 do Código Penal (incluído pelo Pacote Anticrime), considera-se também em legítima defesa:",
["o agente que reage a agressão já cessada.",
 "o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes.",
 "qualquer pessoa que agride para vingar ofensa passada.",
 "o agente que mata para proteger bem patrimonial de pequeno valor em qualquer situação."],1,
"Requisitos gerais (caput): meios necessários, uso moderado, agressão injusta, atual ou iminente. O parágrafo único trata do agente de segurança e da vítima refém.",
"Agressão passada não autoriza legítima defesa (seria vingança).",
["cp"],"pen1");

q("esp",3,"Uso legal e progressivo da força",
"De acordo com a Súmula Vinculante 11 do STF, o uso de algemas:",
["é sempre obrigatório na condução de qualquer preso.",
 "só é lícito em caso de resistência, de fundado receio de fuga ou de perigo à integridade física própria ou alheia, justificada a excepcionalidade por escrito.",
 "é proibido em qualquer hipótese para guardas municipais.",
 "depende de autorização prévia do juiz."],1,
"SV 11: uso excepcional, justificado por escrito, sob pena de responsabilidade disciplinar, civil e penal do agente e nulidade da prisão. O CPP (art. 292, parágrafo único) proíbe algemas em mulheres durante o parto e o puerpério imediato.",
"A justificativa é POR ESCRITO.",
["sv11","cpp"],"pen4");

q("esp",3,"Código Penal: crimes em espécie",
"Indivíduo subtrai o celular de uma pessoa mediante grave ameaça, simulando portar arma. O crime é de:",
["furto (art. 155).","roubo (art. 157).","extorsão (art. 158).","estelionato (art. 171)."],1,
"Roubo = subtração com violência ou grave ameaça. Furto = subtração sem violência ou grave ameaça. Extorsão = constranger alguém a FAZER algo (a vítima entrega/age). Estelionato = obter vantagem por fraude.",
"Grave ameaça transforma furto em roubo, mesmo sem arma verdadeira.",
["cp"],null);

q("esp",3,"Código Penal: crimes em espécie",
"Durante abordagem, o cidadão se opõe à execução de ato legal mediante violência contra o guarda. Esse comportamento configura:",
["desobediência (art. 330).","desacato (art. 331).","resistência (art. 329).","prevaricação (art. 319)."],2,
"Resistência = opor-se a ato legal com violência ou ameaça ao funcionário. Desobediência = desobedecer ordem legal, sem violência. Desacato = ofender/humilhar funcionário no exercício da função.",
"Resistência tem VIOLÊNCIA ou AMEAÇA. Desobediência não.",
["cp"],"pen3");

q("esp",3,"Código Penal: crimes em espécie",
"Adquirir, em proveito próprio, coisa que sabe ser produto de crime configura:",
["receptação (art. 180).","favorecimento real.","furto (art. 155).","apropriação indébita (art. 168)."],0,
"Art. 180: adquirir, receber, transportar, conduzir ou ocultar coisa que sabe ser produto de crime. Há também receptação culposa (§ 3º).",
"Receptação depende de crime anterior, mas é punível mesmo que o autor do crime anterior seja desconhecido ou isento de pena.",
["cp"],null);

q("esp",3,"Crimes raciais (Lei 7.716/1989)",
"Sobre o racismo no ordenamento brasileiro, é correto afirmar:",
["É crime afiançável e prescritível em 20 anos.",
 "Constitui crime inafiançável e imprescritível, sujeito à pena de reclusão, e a injúria racial passou a ser tipificada na Lei 7.716/1989.",
 "É contravenção penal, punida com multa.",
 "Só é crime se praticado por agente público."],1,
"CF, art. 5º, XLII: racismo é inafiançável e imprescritível, com reclusão. A Lei 14.532/2023 levou a injúria racial para a Lei 7.716/1989 (art. 2º-A).",
"Racismo e ação de grupos armados contra a ordem constitucional são os dois crimes IMPRESCRITÍVEIS.",
["racismo","cf"],"cf3");

q("esp",3,"SUSP (Lei 13.675/2018)",
"De acordo com a Lei nº 13.675/2018, que institui o Sistema Único de Segurança Pública (SUSP), as guardas municipais:",
["não integram o SUSP.","integram o SUSP como integrantes operacionais.","são órgãos centrais do SUSP.","integram o SUSP apenas em Municípios com mais de 500 mil habitantes."],1,
"Art. 9º, § 2º: são integrantes operacionais do SUSP, entre outros, as polícias, os agentes penitenciários, as guardas municipais e os órgãos do sistema socioeducativo, entre outros.",
"A lei não exige população mínima para a guarda integrar o SUSP.",
["susp"],null);

q("esp",3,"Improbidade Administrativa (Lei 8.429/1992)",
"Após as alterações da Lei nº 14.230/2021, os atos de improbidade administrativa:",
["admitem modalidade culposa em todas as espécies.",
 "exigem conduta dolosa, não havendo improbidade culposa.",
 "só podem ser praticados por agentes eleitos.",
 "são punidos exclusivamente com prisão."],1,
"Com a reforma de 2021, só há improbidade com DOLO (enriquecimento ilícito, dano ao erário e violação de princípios). As sanções são civis e administrativas (perda da função, ressarcimento, multa, suspensão de direitos políticos), não prisão.",
"Improbidade não é crime: as sanções não incluem prisão.",
["improb"],"adm");

q("esp",3,"Contravenções Penais (DL 3.688/1941)",
"Sobre a Lei das Contravenções Penais, é correto afirmar:",
["A tentativa de contravenção é punível com metade da pena.",
 "Não é punível a tentativa de contravenção.",
 "A pena máxima é de reclusão de 10 anos.",
 "As contravenções só se aplicam a fatos praticados no exterior."],1,
"Art. 4º: não é punível a tentativa de contravenção. As penas são prisão simples e multa. Exemplo: vias de fato (art. 21), prisão simples de 15 dias a 3 meses ou multa.",
"Contravenção não tem pena de reclusão nem detenção, e sim prisão simples.",
["lcp"],null);

q("esp",3,"Nome social (Decreto 8.727/2016)",
"Segundo o Decreto nº 8.727/2016, nome social é:",
["o apelido usado no ambiente de trabalho.",
 "a designação pela qual a pessoa travesti ou transexual se identifica e é socialmente reconhecida.",
 "o nome de família do cônjuge.",
 "o nome de registro civil após a maioridade."],1,
"Art. 1º, parágrafo único, I. A pessoa pode requerer, a qualquer tempo, a inclusão do nome social em documentos e registros da administração pública federal, sendo vedado o uso de expressões pejorativas e discriminatórias.",
"Nome social não é apelido. O tratamento deve respeitar a identidade de gênero.",
["d8727"],"dh");

q("esp",3,"Âmbito Internacional: Direitos Humanos",
"A Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica) foi promulgada no Brasil pelo Decreto 678/1992. Em razão dela, o STF editou a Súmula Vinculante 25, que considera:",
["lícita a prisão civil do devedor de alimentos e do depositário infiel.",
 "ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.",
 "obrigatória a pena de morte para crimes militares.",
 "ilícita qualquer prisão cautelar."],1,
"O Pacto só admite prisão civil por dívida de alimentos. Por isso a SV 25 tornou ilícita a prisão do depositário infiel. Tratados de direitos humanos não aprovados com rito de emenda têm status supralegal.",
"Prisão civil do devedor de ALIMENTOS continua possível.",
["cadh","cf"],"dh");

q("esp",3,"Âmbito Internacional: Direitos Humanos",
"Tratados e convenções internacionais sobre direitos humanos aprovados em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros, serão equivalentes a:",
["leis ordinárias.","leis complementares.","emendas constitucionais.","decretos legislativos sem força normativa."],2,
"Art. 5º, § 3º, da CF (EC 45/2004). Os demais tratados de direitos humanos têm status supralegal (acima das leis, abaixo da CF).",
"Mesmo rito da PEC: 2 turnos, 3/5, nas duas Casas.",
["cf"],"cf3");

/* ================= LEGISLAÇÃO (peso 3) ================= */
q("leg",1,"CF: Princípios Fundamentais (arts. 1º a 4º)",
"NÃO é fundamento da República Federativa do Brasil (art. 1º da CF):",
["Soberania.","Dignidade da pessoa humana.","Garantir o desenvolvimento nacional.","Pluralismo político."],2,
"Fundamentos (art. 1º): SOberania, CIdadania, DIgnidade, VAlores sociais do trabalho e da livre iniciativa, PLUralismo político (SO-CI-DI-VA-PLU). 'Garantir o desenvolvimento nacional' é OBJETIVO (art. 3º).",
"Objetivos começam com VERBO (construir, garantir, erradicar, promover). Fundamentos são substantivos.",
["cf"],"cf1");

q("leg",1,"CF: Princípios Fundamentais (arts. 1º a 4º)",
"É princípio que rege o Brasil em suas relações internacionais (art. 4º da CF):",
["Erradicar a pobreza.","Repúdio ao terrorismo e ao racismo.","Pluralismo político.","Construir uma sociedade livre, justa e solidária."],1,
"Art. 4º inclui: independência nacional, prevalência dos direitos humanos, autodeterminação dos povos, não intervenção, igualdade entre os Estados, defesa da paz, solução pacífica dos conflitos, repúdio ao terrorismo e ao racismo, cooperação entre os povos, concessão de asilo político.",
"As outras alternativas são objetivos (art. 3º) ou fundamento (art. 1º).",
["cf"],"cf1");

q("leg",1,"CF: Direitos e garantias (art. 5º)",
"Segundo o art. 5º, XI, da CF, a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
["a qualquer hora, por ordem do comandante da guarda.",
 "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
 "à noite, por determinação judicial.",
 "a qualquer hora, por determinação do Ministério Público."],1,
"Flagrante, desastre e socorro: a qualquer hora. Ordem judicial: só DURANTE O DIA.",
"Mandado judicial não autoriza entrada à noite.",
["cf"],"cf2");

q("leg",1,"CF: Direitos e garantias (art. 5º)",
"São crimes inafiançáveis e insuscetíveis de graça ou anistia (art. 5º, XLIII, da CF):",
["racismo e ação de grupos armados.",
 "tortura, tráfico ilícito de entorpecentes, terrorismo e crimes hediondos.",
 "homicídio simples e furto qualificado.",
 "todos os crimes contra a administração pública."],1,
"Mnemônico 3T + H: Tortura, Tráfico, Terrorismo e Hediondos. Racismo (XLII) e ação de grupos armados (XLIV) são inafiançáveis e IMPRESCRITÍVEIS.",
"3TH não são imprescritíveis. Imprescritíveis são só racismo e grupos armados.",
["cf"],"cf3");

q("leg",1,"CF: Direitos e garantias (art. 5º)",
"Sobre o direito de reunião (art. 5º, XVI), é correto:",
["Depende de autorização prévia da autoridade.",
 "Todos podem reunir-se pacificamente, sem armas, em locais abertos ao público, independentemente de autorização, exigido apenas prévio aviso à autoridade competente.",
 "É livre inclusive com armas, se em local público.",
 "É proibido em vias públicas."],1,
"A reunião não pode frustrar outra anteriormente convocada para o mesmo local. Precisa de AVISO, não de autorização.",
"Aviso ≠ autorização.",
["cf"],"cf2");

q("leg",1,"CF: Municípios (arts. 29 e 30)",
"O Município reger-se-á por lei orgânica, votada em:",
["um turno, aprovada por maioria simples.",
 "dois turnos, com interstício mínimo de dez dias, aprovada por dois terços dos membros da Câmara Municipal.",
 "dois turnos, aprovada por três quintos da Assembleia Legislativa.",
 "turno único, aprovada pelo Prefeito."],1,
"Art. 29 caput. A Lei Orgânica de São João del-Rei é de 21 de março de 1990.",
"2 turnos, 10 dias, 2/3. A banca troca para 3/5 (quórum de PEC).",
["cf"],"cf4");

q("leg",1,"CF: Poder Judiciário (art. 92)",
"NÃO é órgão do Poder Judiciário, nos termos do art. 92 da CF:",
["Conselho Nacional de Justiça.","Tribunal de Contas da União.","Superior Tribunal de Justiça.","Tribunais e Juízes Militares."],1,
"Art. 92: STF, CNJ, STJ, TST, TRFs e juízes federais, Tribunais e Juízes do Trabalho, Eleitorais, Militares e dos Estados e DF. O TCU auxilia o Poder Legislativo.",
"CNJ é órgão do Judiciário (sem função jurisdicional). TCU e Ministério Público NÃO são.",
["cf"],"cf6");

q("leg",2,"Direito Administrativo: princípios",
"Os princípios expressos da Administração Pública no caput do art. 37 da CF são:",
["legalidade, impessoalidade, moralidade, publicidade e eficiência.",
 "legalidade, imparcialidade, moralidade, probidade e economicidade.",
 "supremacia do interesse público, razoabilidade e motivação.",
 "legalidade, publicidade, continuidade e eficiência."],0,
"LIMPE. A eficiência foi incluída pela EC 19/1998. Supremacia do interesse público, razoabilidade e motivação são princípios implícitos/legais.",
"Impessoalidade, não 'imparcialidade'.",
["cf"],"cf5");

q("leg",2,"Direito Administrativo: poderes",
"Guarda municipal que, no exercício de competência de trânsito delegada, autua veículo estacionado irregularmente exerce o poder:",
["hierárquico.","disciplinar.","de polícia.","regulamentar."],2,
"Poder de polícia limita a liberdade e a propriedade em favor do interesse público. Atributos: discricionariedade, autoexecutoriedade e coercibilidade. Disciplinar pune servidores e quem tem vínculo especial; hierárquico organiza a estrutura interna.",
"Multar particular = polícia. Punir servidor = disciplinar.",
["cf"],"adm");

q("leg",2,"Direito Administrativo: atos",
"São requisitos (elementos) do ato administrativo:",
["presunção de legitimidade, imperatividade, autoexecutoriedade e tipicidade.",
 "competência, finalidade, forma, motivo e objeto.",
 "legalidade, moralidade e eficiência.",
 "conveniência e oportunidade."],1,
"Requisitos: COmpetência, FInalidade, FOrma, MOtivo, OBjeto (COFIFOMOB). Atributos: Presunção de legitimidade, Autoexecutoriedade, Tipicidade, Imperatividade (PATI).",
"Requisitos x atributos: a banca mistura as duas listas.",
["cf"],"adm");

q("leg",2,"Direito Administrativo: controle dos atos",
"Sobre anulação e revogação dos atos administrativos, assinale a correta:",
["A revogação ocorre por ilegalidade e pode ser feita pelo Judiciário.",
 "A anulação decorre de ilegalidade, pode ser feita pela Administração ou pelo Judiciário e produz efeitos retroativos (ex tunc); a revogação decorre de conveniência e oportunidade, é feita pela Administração e não retroage (ex nunc).",
 "Ambas têm efeitos ex nunc.",
 "Somente o Judiciário pode anular atos administrativos."],1,
"Súmula 473 do STF: a Administração pode anular seus atos ilegais e revogá-los por conveniência ou oportunidade, respeitados os direitos adquiridos.",
"Judiciário não revoga atos de outro Poder (só anula).",
["cf"],"adm");

q("leg",2,"Direito Administrativo: responsabilidade civil",
"Guarda municipal, em serviço, colide a viatura e causa dano a particular. Segundo o art. 37, § 6º, da CF:",
["o Município só responde se provada a culpa do guarda.",
 "o Município responde objetivamente, assegurado o direito de regresso contra o guarda em caso de dolo ou culpa.",
 "apenas o guarda responde pessoalmente.",
 "não há responsabilidade em atos de serviço."],1,
"Responsabilidade objetiva (teoria do risco administrativo): o particular não precisa provar culpa. A ação regressiva contra o agente exige dolo ou culpa (responsabilidade subjetiva do agente).",
"Estado = objetiva. Agente (na regressiva) = subjetiva.",
["cf"],"adm");

q("leg",2,"Direito Administrativo: agentes e serviços",
"São estáveis, após quantos anos de efetivo exercício, os servidores nomeados para cargo de provimento efetivo em virtude de concurso público (art. 41 da CF)?",
["Dois anos.","Três anos, com avaliação especial de desempenho por comissão.","Cinco anos.","Imediatamente após a posse."],1,
"Art. 41: três anos de efetivo exercício + avaliação especial de desempenho. Não confundir com validade do concurso (até 2 anos, prorrogável uma vez por igual período, art. 37, III).",
"Validade do concurso = 2 anos; estabilidade = 3 anos.",
["cf"],"adm");

q("leg",2,"Direito Administrativo: serviços públicos",
"Segundo a Lei 8.987/1995, NÃO caracteriza descontinuidade do serviço público a sua interrupção:",
["por mera conveniência da concessionária, sem aviso.",
 "em situação de emergência ou após prévio aviso, por razões de ordem técnica, de segurança ou por inadimplemento do usuário.",
 "aos domingos, por decisão do prefeito.",
 "em qualquer hipótese de greve."],1,
"Art. 6º, § 3º. O serviço adequado observa regularidade, continuidade, eficiência, segurança, atualidade, generalidade, cortesia e modicidade das tarifas.",
"Inadimplemento só justifica corte com aviso prévio.",
["concess"],"adm");

q("leg",2,"Código Penal: aplicação da lei penal",
"Lei posterior que deixa de considerar o fato como crime (abolitio criminis):",
["só alcança fatos futuros.",
 "faz cessar a execução e os efeitos penais da sentença condenatória, mesmo após o trânsito em julgado.",
 "não se aplica se já houver condenação.",
 "apaga também os efeitos civis, como o dever de indenizar."],1,
"Art. 2º do CP. A lei posterior mais benéfica retroage sempre. Os efeitos civis (indenizar) permanecem.",
"Cessam os efeitos PENAIS, não os civis.",
["cp"],"pen0");

q("leg",2,"Código Penal: aplicação da lei penal",
"Quanto ao tempo e ao lugar do crime, o Código Penal adotou, respectivamente, as teorias:",
["da atividade e da ubiquidade.","do resultado e da atividade.","da ubiquidade e do resultado.","mista e da atividade."],0,
"Art. 4º: tempo do crime = momento da ação ou omissão (atividade). Art. 6º: lugar = onde ocorreu a ação ou omissão e onde se produziu o resultado (ubiquidade). Mnemônico LUTA: Lugar Ubiquidade, Tempo Atividade.",
"LUTA resolve a questão em 2 segundos.",
["cp"],"pen0");

q("leg",2,"Código Penal: do crime (arts. 13 a 25)",
"Nos crimes cometidos sem violência ou grave ameaça, reparado o dano ou restituída a coisa até o recebimento da denúncia, por ato voluntário do agente, a pena será reduzida de um a dois terços. Trata-se de:",
["desistência voluntária.","arrependimento eficaz.","arrependimento posterior.","crime impossível."],2,
"Art. 16: arrependimento posterior (crime já consumado). Desistência voluntária e arrependimento eficaz (art. 15) ocorrem ANTES da consumação, e o agente responde só pelos atos já praticados.",
"POSTERIOR = depois da consumação, até o recebimento da denúncia.",
["cp"],"pen1");

q("leg",2,"Código Penal: das penas",
"As penas previstas no art. 32 do Código Penal são:",
["privativas de liberdade, restritivas de direitos e de multa.",
 "reclusão, prisão perpétua e multa.",
 "detenção, banimento e trabalhos forçados.",
 "privativas de liberdade e pena de morte em tempo de paz."],0,
"Art. 32. A CF (art. 5º, XLVII) proíbe penas de morte (salvo guerra declarada), perpétuas, de trabalhos forçados, de banimento e cruéis.",
"Morte só em caso de GUERRA DECLARADA.",
["cp","cf"],"pen2");

q("leg",3,"Crimes contra a Administração Pública",
"O servidor que EXIGE, para si, vantagem indevida em razão da função comete:",
["corrupção passiva.","concussão.","peculato.","prevaricação."],1,
"Concussão (art. 316) = EXIGIR. Corrupção passiva (art. 317) = SOLICITAR, RECEBER ou ACEITAR promessa. Peculato (art. 312) = apropriar-se ou desviar bem de que tem a posse em razão do cargo. Prevaricação (art. 319) = retardar ou deixar de praticar ato de ofício para satisfazer interesse ou sentimento pessoal.",
"O verbo decide: exigir = concussão; solicitar = corrupção passiva.",
["cp"],"pen3");

q("leg",3,"Crimes contra a Administração Pública",
"Para os efeitos penais (art. 327 do CP), considera-se funcionário público:",
["somente o servidor efetivo e estável.",
 "quem, embora transitoriamente ou sem remuneração, exerce cargo, emprego ou função pública.",
 "apenas quem recebe remuneração dos cofres públicos.",
 "somente agentes eleitos."],1,
"Conceito amplo. O § 1º equipara quem trabalha em entidade paraestatal e em empresa contratada para atividade típica da Administração.",
"Estagiário, mesário e jurado podem ser funcionários públicos para fins penais.",
["cp"],"pen3");

q("leg",3,"CPP: prisões e medidas cautelares",
"Nos termos do art. 301 do CPP:",
["qualquer do povo deverá e as autoridades policiais poderão prender quem esteja em flagrante.",
 "qualquer do povo poderá e as autoridades policiais e seus agentes deverão prender quem quer que seja encontrado em flagrante delito.",
 "somente o juiz pode determinar a prisão em flagrante.",
 "a prisão em flagrante só pode ser feita com mandado."],1,
"Flagrante FACULTATIVO para qualquer pessoa; OBRIGATÓRIO para autoridades policiais e seus agentes.",
"A banca inverte 'poderá' e 'deverá'.",
["cpp"],"pen4");

q("leg",3,"CPP: prisões e medidas cautelares",
"Considera-se em flagrante delito quem é encontrado, LOGO DEPOIS, com instrumentos, armas, objetos ou papéis que façam presumir ser ele autor da infração. Essa modalidade é chamada de flagrante:",
["próprio.","impróprio (quase flagrante).","presumido (ficto).","preparado."],2,
"Art. 302: I e II = próprio (está cometendo ou acaba de cometer); III = impróprio (perseguido LOGO APÓS); IV = presumido (encontrado LOGO DEPOIS com objetos). Flagrante preparado é ilegal (Súmula 145 do STF).",
"Perseguido = impróprio. Encontrado com objetos = presumido.",
["cpp"],"pen4");

q("leg",3,"CPP: prisões e medidas cautelares",
"Após receber o auto de prisão em flagrante, o juiz deverá promover audiência de custódia no prazo máximo de:",
["12 horas.","24 horas.","48 horas.","72 horas."],1,
"Art. 310 do CPP: até 24 horas após a realização da prisão. Na audiência o juiz relaxa a prisão ilegal, converte em preventiva ou concede liberdade provisória.",
"24 h também é o prazo para entregar a nota de culpa ao preso (art. 306, § 2º).",
["cpp"],"pen5");

q("leg",3,"CPP: prisões e medidas cautelares",
"Após o Pacote Anticrime, a prisão preventiva pode ser decretada:",
["de ofício pelo juiz em qualquer fase.",
 "pelo juiz, a requerimento do Ministério Público, do querelante ou do assistente, ou por representação da autoridade policial.",
 "pelo delegado de polícia, em caso de urgência.",
 "pelo comandante da guarda, se houver risco de fuga."],1,
"Art. 311 do CPP: o juiz não decreta preventiva de ofício. Fundamentos (art. 312): garantia da ordem pública, da ordem econômica, conveniência da instrução criminal ou para assegurar a aplicação da lei penal, com prova do crime e indício suficiente de autoria.",
"A expressão 'de ofício' foi retirada pela Lei 13.964/2019.",
["cpp"],"pen5");

q("leg",3,"Direitos Humanos: teoria geral",
"Assinale a alternativa que contém apenas características dos direitos humanos:",
["Universalidade, indivisibilidade, inalienabilidade e imprescritibilidade.",
 "Renunciabilidade, transferibilidade e prescritibilidade.",
 "Exclusividade nacional e absolutismo.",
 "Divisibilidade e temporariedade."],0,
"Também são características: historicidade, interdependência, irrenunciabilidade, vedação do retrocesso. Os direitos humanos são relativos (podem ser ponderados), não absolutos.",
"Direitos humanos são RELATIVOS. Alternativa que diz 'absolutos' está errada.",
["dudh"],"dh");

q("leg",3,"Direitos Humanos: gerações",
"Os direitos sociais, econômicos e culturais (saúde, educação, trabalho) correspondem à:",
["primeira geração, ligada à liberdade.","segunda geração, ligada à igualdade.","terceira geração, ligada à fraternidade.","quarta geração, ligada à biotecnologia."],1,
"1ª geração: liberdade (civis e políticos, abstenção do Estado). 2ª: igualdade (sociais, prestações do Estado). 3ª: fraternidade/solidariedade (meio ambiente, paz). Lema da Revolução Francesa: liberdade, igualdade, fraternidade.",
"Ordem do lema = ordem das gerações.",
["dudh"],"dh");

q("leg",3,"Direitos Humanos: afirmação histórica",
"A Declaração Universal dos Direitos Humanos foi adotada:",
["pela Liga das Nações, em 1919.","pela Assembleia Geral da ONU, em 10 de dezembro de 1948.","pelo Conselho de Segurança da ONU, em 1945.","pela OEA, em 1969."],1,
"A DUDH é uma resolução da Assembleia Geral (1948). A ONU foi criada em 1945 (Carta de São Francisco). O Pacto de San José é de 1969 (OEA).",
"1945 = ONU; 1948 = DUDH; 1969 = Pacto de San José.",
["dudh"],"dh");

q("leg",3,"Direitos Humanos: Regras de Beijing e Brasil",
"As Regras de Beijing (1985) tratam:",
["das regras mínimas para o tratamento de presos adultos.",
 "das regras mínimas das Nações Unidas para a administração da justiça da infância e da juventude.",
 "da proteção do meio ambiente.",
 "dos direitos das pessoas idosas."],1,
"Regras de Beijing = justiça juvenil (base do ECA). Regras de Mandela = tratamento de presos. Regras de Bangkok = mulheres presas.",
"Beijing = jovens; Mandela = presos; Bangkok = mulheres.",
["eca"],"dh");

q("leg",3,"Direitos Humanos: Brasil",
"A Constituição brasileira de 1934, influenciada pela Constituição de Weimar, destacou-se por:",
["instituir a pena de morte para crimes comuns.",
 "prever pela primeira vez direitos sociais e trabalhistas e constitucionalizar o voto feminino.",
 "extinguir o voto secreto.",
 "criar o Ato Institucional nº 5."],1,
"A CF/1934 inaugurou os direitos sociais no constitucionalismo brasileiro. A CF/1988, chamada Constituição Cidadã, ampliou os direitos fundamentais.",
"AI-5 é de 1968 (ditadura), não de 1934.",
["cf"],"dh");

q("leg",3,"Direitos Humanos: racismo estrutural",
"O conceito de racismo estrutural refere-se:",
["apenas a ofensas individuais motivadas por raça.",
 "à forma como o racismo está presente no funcionamento normal de instituições e relações sociais, econômicas e políticas, produzindo desigualdades mesmo sem intenção individual explícita.",
 "a um fenômeno inexistente no Brasil.",
 "exclusivamente a leis que discriminam expressamente por raça."],1,
"Racismo individual = atitude pessoal; institucional = práticas de instituições; estrutural = enraizado na própria organização da sociedade.",
"Não confundir com 'racismo reverso', que não é aceito pela doutrina.",
["racismo"],"dh");

q("leg",4,"Legislação Municipal de SJDR",
"A Guarda Municipal de São João del-Rei foi instituída pela:",
["Lei Municipal nº 5.038/2014.","Lei Municipal nº 5.116/2014.","Lei Municipal nº 6.046/2024.","Lei Federal nº 13.022/2014."],1,
"Lei 5.116, de 23/12/2014, institui a Guarda. Lei 5.038/2014 = Estatuto dos Servidores. Lei 5.818/2021 = Regimento Interno. Lei 6.046/2024 = Plano de Cargos, Carreira e Vencimentos. Lei 6.051/2024 = Reestruturação da Guarda. Lei 4.068/2006 = Plano Diretor.",
"Monte uma tabela 'número = assunto' e revise toda semana. A banca troca os números.",
["camara","edital"],null);

q("leg",4,"Legislação Municipal de SJDR",
"Segundo o edital, a reserva de 20% das vagas do concurso para candidatas do gênero feminino tem fundamento na:",
["Lei Municipal nº 6.051/2024.","Lei Municipal nº 5.116/2014.","Lei Orgânica do Município.","Lei Federal nº 13.675/2018."],0,
"Art. 31, § 3º, da Lei 6.051/2024 (Reestruturação da Guarda). Já a reserva PcD (5%) tem base no Decreto 3.298/1999 e na Lei 5.038/2014.",
"20% mulheres = Lei 6.051. 5% PcD = Lei 5.038 + Decreto 3.298.",
["edital"],null);

q("leg",4,"Legislação Municipal de SJDR",
"De acordo com o edital e a Lei Municipal nº 6.046/2024, o ingresso na carreira de Guarda Civil Municipal de São João del-Rei ocorre:",
["na 1ª Classe.","na 2ª Classe, após estágio.","na 3ª Classe, nível inicial (GCM III).","em cargo em comissão."],2,
"Ingresso como Guarda Civil Municipal 3ª Classe (GCM III), primeiro nível e grau inicial da carreira. Remuneração inicial: R$ 2.693,36 + 30% de periculosidade (R$ 808,00) = R$ 3.501,36, jornada de 40 h semanais.",
"Na carreira da guarda, 3ª Classe é o INÍCIO.",
["edital"],null);

/* ================= LÍNGUA PORTUGUESA (peso 4) ================= */
q("por",1,"Crase",
"Assinale a frase em que o uso do acento grave está CORRETO:",
["O guarda começou à patrulhar a praça.","Fomos à delegacia e voltamos à casa às 18h.","Fomos à delegacia e depois voltamos a casa às 18h.","Entreguei o relatório à ele."],2,
"'Ir à delegacia' (a + a). 'Voltar a casa' sem crase quando 'casa' é o próprio lar, sem especificador. 'Às 18h' leva crase (hora determinada). Não há crase antes de verbo nem de pronome pessoal.",
"Casa (lar), terra (chão firme) e distância indeterminada: sem crase. Com especificador ('à casa da avó'), com crase.",
["volp"],"p9");

q("por",1,"Crase",
"Está INCORRETO quanto à crase:",
["O atendimento funciona das 8h às 12h.","O atendimento funciona de 8h às 12h.","O atendimento funciona de 8h a 12h.","A reunião ocorreu às 14h."],1,
"Faz-se o paralelismo: 'DAS ... ÀS' ou 'DE ... A'. 'De 8h às 12h' mistura as duas formas.",
"Pegadinha clássica de paralelismo: das/às ou de/a.",
["volp"],"p9");

q("por",1,"Concordância verbal",
"Assinale a frase de acordo com a norma-padrão:",
["Houveram muitas ocorrências no feriado.","Fazem dois anos que a guarda foi reestruturada.","Haviam vários guardas na praça.","Houve muitas ocorrências e faz dois anos que a guarda foi reestruturada."],3,
"'Haver' no sentido de existir/ocorrer e 'fazer' indicando tempo decorrido são impessoais: ficam no singular. O verbo auxiliar também fica no singular: 'Deve haver problemas'.",
"Se der para trocar por 'existir', 'haver' fica no SINGULAR. 'Existir' concorda normalmente: 'Existiam vários guardas'.",
["volp"],"p8");

q("por",1,"Concordância verbal",
"Está correta quanto à concordância com o pronome 'se':",
["Vende-se casas no centro histórico.","Aluga-se imóveis.","Precisa-se de guardas e vendem-se casas.","Precisam-se de guardas."],2,
"'Vendem-se casas' = casas são vendidas (voz passiva sintética, verbo concorda com o sujeito 'casas'). 'Precisa-se de guardas': verbo com preposição, 'se' é índice de indeterminação do sujeito, verbo fica no singular.",
"Tem preposição depois do verbo? Singular. Não tem? Concorda com o termo.",
["volp"],"p8");

q("por",1,"Concordância nominal",
"Assinale a alternativa correta:",
["É proibido a entrada de pessoas estranhas.","É proibida entrada de pessoas estranhas.","É proibida a entrada de pessoas estranhas.","Ela ficou meia cansada após o plantão."],2,
"Com artigo ('a entrada'), o adjetivo concorda: 'é proibida a entrada'. Sem artigo, fica invariável: 'é proibido entrada'. 'Meio' como advérbio (= um pouco) é invariável: 'meio cansada'.",
"Artigo presente = concorda. Sem artigo = masculino singular.",
["volp"],"p8");

q("por",2,"Regência verbal",
"Está de acordo com a norma-padrão:",
["Prefiro mais patrulhar do que ficar no escritório.","Os guardas assistiram o jogo.","Os guardas assistiram ao jogo e obedeceram ao regulamento.","O cidadão chegou no posto da guarda."],2,
"Assistir (= ver) é VTI: assistir AO jogo. Obedecer exige 'a'. Preferir: 'prefiro X A Y', sem 'mais' e sem 'do que'. Chegar: 'chegar A' (ao posto).",
"'Preferir mais... do que' é erro duplo.",
["volp"],"p9");

q("por",2,"Regência nominal e verbal",
"Em 'O candidato aspirava ___ cargo de guarda e visava ___ aprovação', as lacunas são preenchidas corretamente por:",
["o / a","ao / à","ao / a","o / à"],1,
"Aspirar (= desejar) e visar (= pretender) são transitivos indiretos e pedem 'a': aspirava AO cargo, visava À aprovação (a + a).",
"Aspirar = cheirar (VTD: aspirou o ar). Visar = mirar ou dar visto (VTD: visou o cheque).",
["volp"],"p9");

q("por",2,"Colocação pronominal",
"Está correta quanto à colocação pronominal, segundo a norma-padrão:",
["Me informaram sobre o concurso.","Não informaram-me sobre o concurso.","Não me informaram sobre o concurso.","Informarei-te amanhã."],2,
"Palavras negativas atraem o pronome (próclise): 'Não me informaram'. Não se inicia frase com pronome oblíquo átono na norma-padrão. Com futuro do presente sem atrativo, usa-se mesóclise: 'Informar-te-ei'.",
"Atrativos de próclise: negação, advérbio, pronome relativo/indefinido, conjunção subordinativa.",
["volp"],"p2");

q("por",2,"Pontuação",
"Assinale a frase corretamente pontuada:",
["Os guardas municipais, protegem o patrimônio público.","Os guardas municipais protegem o patrimônio público.","Os guardas, municipais protegem o patrimônio público.","Os guardas municipais protegem, o patrimônio público."],1,
"Não se separa sujeito de verbo nem verbo de complemento com vírgula.",
"Vírgula entre sujeito e verbo é erro em 100% dos casos (sem intercalação).",
["volp"],"p7");

q("por",2,"Pontuação",
"Em 'Senhor prefeito, a guarda municipal, órgão de proteção preventiva, atendeu à ocorrência', as vírgulas isolam, respectivamente:",
["sujeito e objeto.","vocativo e aposto explicativo.","aposto e adjunto adverbial.","vocativo e oração adjetiva restritiva."],1,
"'Senhor prefeito' = vocativo (chamamento). 'Órgão de proteção preventiva' = aposto explicativo (explica 'a guarda municipal').",
"Vocativo sempre é separado por vírgula.",
["volp"],"p7");

q("por",2,"Acentuação gráfica",
"De acordo com o Acordo Ortográfico vigente, todas as palavras estão corretamente grafadas em:",
["idéia, heróico, vôo.","ideia, heroico, voo.","ideia, herói, vôo.","idéia, heroico, voo."],1,
"Caíram os acentos dos ditongos abertos 'ei' e 'oi' em paroxítonas (ideia, heroico, assembleia) e do hiato 'oo' (voo, enjoo). Oxítonas e monossílabos continuam: herói, papéis, céu.",
"Herói (oxítona) mantém acento; heroico (paroxítona) perdeu.",
["volp"],"p1");

q("por",3,"Ortografia",
"Assinale a alternativa com todas as palavras grafadas corretamente:",
["exceção, privilégio, beneficente.","excessão, previlégio, beneficiente.","exceção, previlégio, beneficente.","excessão, privilégio, beneficiente."],0,
"Formas corretas: exceção, privilégio, beneficente, paralisar, ascensão, impasse, cessão (ceder).",
"'Beneficiente' e 'previlégio' são erros comuns.",
["volp"],"p1");

q("por",3,"Conectivos e coesão",
"Em 'O efetivo era reduzido; a guarda, CONTUDO, atendeu a todas as ocorrências', o termo destacado pode ser substituído, sem alteração de sentido, por:",
["portanto.","porque.","no entanto.","logo."],2,
"'Contudo' é adversativo, como 'mas', 'porém', 'todavia', 'no entanto', 'entretanto'. 'Portanto' e 'logo' são conclusivos; 'porque' é causal/explicativo.",
"Decore os grupos: ADVERSATIVAS (mas, porém, contudo, todavia, entretanto, no entanto) x CONCLUSIVAS (logo, portanto, pois depois do verbo).",
["volp"],"p3");

q("por",3,"Conectivos e coesão",
"Em 'EMBORA chovesse, a operação foi mantida', a conjunção destacada estabelece relação de:",
["causa.","concessão.","condição.","finalidade."],1,
"Concessivas: embora, ainda que, mesmo que, conquanto, se bem que (verbo no subjuntivo). Indicam fato contrário que não impede o principal.",
"'Conquanto' = embora (concessão), não 'contanto que' (condição).",
["volp"],"p3");

q("por",3,"Verbos",
"Assinale a frase correta quanto à flexão verbal:",
["Se eu ver o suspeito, aviso a central.","Quando o guarda vir o suspeito, avisará a central; ele interveio a tempo.","Se o guarda intervir, o conflito acaba.","Quando eu propor a mudança, você apoia?"],1,
"Futuro do subjuntivo: ver → quando eu VIR; intervir (derivado de vir) → se ele INTERVIER, ele INTERVEIO; propor (derivado de pôr) → quando eu PROPUSER.",
"Derivados seguem o verbo primitivo: intervir como vir, propor como pôr, manter como ter.",
["volp"],"p4");

q("por",3,"Vozes verbais",
"Ao passar 'Os guardas detiveram o suspeito' para a voz passiva analítica, obtém-se:",
["O suspeito detém-se pelos guardas.","O suspeito foi detido pelos guardas.","Detiveram-se os suspeitos.","Os guardas foram detidos pelo suspeito."],1,
"Passiva analítica: ser + particípio + agente da passiva. O tempo verbal se mantém (pretérito perfeito: detiveram → foi detido).",
"Mantenha o tempo verbal ao converter.",
["volp"],"p4");

q("por",4,"Redação oficial",
"Sobre os pronomes de tratamento na redação oficial, é correto afirmar:",
["Levam o verbo para a 2ª pessoa: 'Vossa Excelência sabeis'.",
 "Embora se refiram à 2ª pessoa, levam verbo e pronomes possessivos para a 3ª pessoa: 'Vossa Excelência sabe de seu compromisso'.",
 "'Sua Excelência' é usado para falar diretamente com a autoridade.",
 "O ofício dispensa vocativo e fecho."],1,
"Concordância com a 3ª pessoa. 'Vossa' = falando COM a autoridade; 'Sua' = falando SOBRE ela. Fechos: 'Respeitosamente' (autoridade superior) e 'Atenciosamente' (mesma hierarquia ou inferior).",
"Vossa = com; Sua = sobre.",
["manual"],null);

q("por",4,"Variação linguística",
"A diferença de vocabulário entre falantes de Minas Gerais e do Rio Grande do Sul é exemplo de variação:",
["diastrática (social).","diatópica (geográfica).","diafásica (situacional).","diacrônica (histórica)."],1,
"Diatópica = lugar. Diastrática = grupo social. Diafásica = situação de uso (formal x informal). Diacrônica = mudança no tempo. A banca valoriza a ideia de adequação, não de 'erro'.",
"TOPOS = lugar (diaTÓPica).",
["volp"],"p13");

q("por",4,"Interpretação de textos",
"Leia: 'A presença da guarda nas praças reduziu os furtos, mas não eliminou a sensação de insegurança, que depende também de iluminação e ocupação dos espaços.' Infere-se do trecho que:",
["a guarda é a única responsável pela segurança.",
 "a sensação de segurança envolve fatores além da presença da guarda.",
 "os furtos aumentaram com a presença da guarda.",
 "a iluminação é irrelevante para a segurança."],1,
"O conector 'mas' e a expressão 'depende também' indicam que outros fatores influenciam a sensação de segurança.",
"Cuidado com alternativas que extrapolam ('única', 'sempre', 'nunca'). Em interpretação, o radical costuma estar errado.",
["volp"],"p12");

q("por",4,"Coesão referencial",
"Em 'O guarda conversou com o comerciante e, depois, ELE registrou a ocorrência', o problema de coesão é:",
["erro de concordância.","ambiguidade na referência do pronome 'ele'.","uso indevido de vírgula antes de 'depois'.","ausência de crase."],1,
"'Ele' pode retomar 'o guarda' ou 'o comerciante'. Solução: 'o guarda registrou' ou reorganizar a frase.",
"IBGP cobra ambiguidade por pronome e por posição de termos.",
["volp"],"p10");

/* ================= RACIOCÍNIO LÓGICO (peso 3) ================= */
q("rl",1,"Negação de proposições",
"A negação de 'Todo guarda é atento' é:",
["Nenhum guarda é atento.","Algum guarda não é atento.","Todo guarda é desatento.","Algum guarda é atento."],1,
"Negação de 'todo A é B' = 'algum A não é B' (pelo menos um). Negação de 'algum A é B' = 'nenhum A é B'.",
"'Nenhum' é o erro mais escolhido. Para negar 'todo', basta UM contraexemplo.",
[],"rl2");

q("rl",1,"Negação de proposições",
"A negação de 'O guarda está armado e uniformizado' é:",
["O guarda não está armado e não está uniformizado.","O guarda não está armado ou não está uniformizado.","O guarda está desarmado ou uniformizado.","Se o guarda está armado, então não está uniformizado."],1,
"Lei de De Morgan: ~(p ∧ q) ≡ ~p ∨ ~q. Nega as duas partes e troca 'e' por 'ou'.",
"Troca o conectivo! 'e' vira 'ou' e vice-versa.",
[],"rl2");

q("rl",1,"Equivalências lógicas",
"'Se chove, então a rua alaga' é equivalente a:",
["Se a rua alaga, então chove.","Se não chove, então a rua não alaga.","Se a rua não alaga, então não chove.","Chove e a rua não alaga."],2,
"p → q ≡ ~q → ~p (contrapositiva) ≡ ~p ∨ q ('não chove ou a rua alaga'). A negação de p → q é p ∧ ~q.",
"Contrapositiva: INVERTE e NEGA. Só inverter ou só negar está errado.",
[],"rl2");

q("rl",1,"Tabela-verdade",
"A proposição condicional 'Se p, então q' é FALSA somente quando:",
["p é falsa e q é verdadeira.","p e q são falsas.","p é verdadeira e q é falsa.","p e q são verdadeiras."],2,
"Condicional: só é falsa no caso V → F ('Vera Fischer é Falsa'). Conjunção (e): só verdadeira se ambas V. Disjunção (ou): só falsa se ambas F. Bicondicional: V quando as duas têm o mesmo valor.",
"Mnemônico: Vera Fischer = V → F = Falso.",
[],"rl1");

q("rl",2,"Conjuntos",
"Numa turma de 40 candidatos, 25 estudam Português, 20 estudam Direito e 8 estudam as duas matérias. Quantos não estudam nenhuma das duas?",
["3","5","8","13"],0,
"n(P ∪ D) = 25 + 20 − 8 = 37. Nenhuma = 40 − 37 = 3.",
"Não esqueça de subtrair a interseção (quem estuda as duas foi contado duas vezes).",
[],"rl7");

q("rl",2,"MMC",
"Duas rondas passam pela praça a cada 12 e 18 minutos. Se passaram juntas às 8h, voltarão a passar juntas às:",
["8h30","8h36","8h54","9h12"],1,
"MMC(12, 18) = 36 minutos. 8h + 36 min = 8h36.",
"Encontro periódico = MMC. Divisão em partes iguais máximas = MDC.",
[],"rl11");

q("rl",2,"MDC",
"Duas cordas de 48 m e 72 m serão cortadas em pedaços iguais, do maior tamanho possível, sem sobras. Quantos pedaços serão obtidos?",
["4","5","6","12"],1,
"MDC(48, 72) = 24 m. Pedaços: 48/24 + 72/24 = 2 + 3 = 5.",
"A pergunta pede o número de PEDAÇOS, não o tamanho (24). Leia o final do enunciado.",
[],"rl11");

q("rl",2,"Decomposição e divisores",
"Quantos divisores naturais tem o número 360?",
["12","18","24","36"],2,
"360 = 2³ × 3² × 5¹. Número de divisores = (3+1)(2+1)(1+1) = 4 × 3 × 2 = 24.",
"Some 1 a cada expoente e multiplique.",
[],"rl11");

q("rl",3,"Análise combinatória",
"De quantas maneiras é possível escolher 3 guardas, entre 6, para formar uma equipe (sem funções distintas)?",
["18","20","120","216"],1,
"Ordem não importa = combinação: C(6,3) = 6!/(3!·3!) = 20. Se houvesse funções distintas (comandante, motorista...), seria arranjo: 6×5×4 = 120.",
"Pergunte-se: trocar a ordem gera nova possibilidade? Não = combinação.",
[],"rl12");

q("rl",3,"Análise combinatória",
"Quantos anagramas tem a palavra GUARDA?",
["120","360","720","1440"],1,
"6 letras com a letra A repetida 2 vezes: 6!/2! = 720/2 = 360.",
"Letra repetida divide pelo fatorial da repetição.",
[],"rl12");

q("rl",3,"Probabilidade",
"Lançando-se um dado comum, qual a probabilidade de sair número par OU maior que 4?",
["1/2","2/3","5/6","1/3"],1,
"Pares: {2, 4, 6}. Maiores que 4: {5, 6}. União: {2, 4, 5, 6} = 4 casos. P = 4/6 = 2/3.",
"No 'OU', não conte o 6 duas vezes.",
[],"rl13");

q("rl",3,"Sequências",
"Qual o próximo termo da sequência 2, 6, 12, 20, 30, ...?",
["36","40","42","44"],2,
"Diferenças: 4, 6, 8, 10, próxima 12. 30 + 12 = 42. Também: n × (n+1): 1×2, 2×3, 3×4...",
"Quando não for óbvio, calcule as diferenças entre termos.",
[],"rl5");

q("rl",4,"Verdades e mentiras",
"Um furto foi cometido por exatamente um entre A, B e C. A diz: 'B é o culpado'. B diz: 'Não sou culpado'. C diz: 'Não sou culpado'. Se apenas um deles diz a verdade, o culpado é:",
["A","B","C","Impossível determinar."],2,
"Teste hipóteses. Se C for culpado: A mente (B não é culpado), B diz verdade, C mente. Apenas um fala a verdade: confere. As outras hipóteses geram contradição.",
"Método: suponha cada culpado e conte quantos falam a verdade.",
[],"rl6");

q("rl",4,"Operações e valor absoluto",
"O valor de |−7| + |3 − 5| − √16 é:",
["1","5","9","13"],1,
"|−7| = 7; |3 − 5| = |−2| = 2; √16 = 4. Logo 7 + 2 − 4 = 5.",
"Módulo é sempre não negativo.",
[],"rl9");

/* ================= NOÇÕES DE INFORMÁTICA (peso 3) ================= */
q("inf",1,"Windows 10",
"No Windows 10, o atalho que bloqueia o computador imediatamente é:",
["Windows + D","Windows + E","Windows + L","Ctrl + Alt + Tab"],2,
"Win + L = bloquear (Lock). Win + D = mostrar área de trabalho (Desktop). Win + E = Explorador de Arquivos. Win + I = Configurações.",
"Associe a letra à palavra em inglês: L = Lock, D = Desktop, E = Explorer.",
["ms"],"in13");

q("inf",1,"Windows 10",
"No Windows 10, ao selecionar um arquivo e pressionar Shift + Delete:",
["o arquivo é enviado para a Lixeira.","o arquivo é excluído permanentemente, sem passar pela Lixeira (após confirmação).","o arquivo é copiado.","o arquivo é renomeado."],1,
"Delete = Lixeira. Shift + Delete = exclusão definitiva. Arquivos em pen drive ou rede também não vão para a Lixeira.",
"Pen drive não tem Lixeira.",
["ms"],"in13");

q("inf",2,"Word (Microsoft 365)",
"No Word em português, os atalhos para negrito, itálico e sublinhado são, respectivamente:",
["Ctrl+B, Ctrl+I, Ctrl+U","Ctrl+N, Ctrl+I, Ctrl+S","Ctrl+N, Ctrl+S, Ctrl+I","Ctrl+B, Ctrl+S, Ctrl+U"],1,
"Word em português: Ctrl+N negrito, Ctrl+I itálico, Ctrl+S sublinhado, Ctrl+B salvar. (No Excel em português, Ctrl+B também salva.)",
"Pegadinha da IBGP: no Word em PT-BR, Ctrl+S NÃO é salvar, é sublinhar.",
["ms"],"in11");

q("inf",2,"Excel (Microsoft 365)",
"Na célula C1 há a fórmula =A1*$B$1. Ao copiá-la para C2, a fórmula resultante será:",
["=A1*$B$1","=A2*$B$2","=A2*$B$1","=B2*$B$1"],2,
"Referência relativa (A1) se ajusta: A2. Referência absoluta ($B$1) não muda. $ trava linha e/ou coluna.",
"O cifrão trava o que vem logo depois dele.",
["ms"],"in10");

q("inf",2,"Excel (Microsoft 365)",
"A fórmula =SE(A1>=50;\"Aprovado\";\"Reprovado\"), com A1 = 50, retorna:",
["Reprovado","Aprovado","50","#VALOR!"],1,
"Teste lógico 50 >= 50 é verdadeiro, então retorna o 2º argumento. Estrutura: =SE(teste; valor_se_verdadeiro; valor_se_falso).",
"'>=' inclui o próprio 50. Leia o sinal com atenção.",
["ms"],"in10");

q("inf",2,"Outlook e e-mail",
"Ao enviar um e-mail, o campo que permite incluir destinatários sem que os demais vejam seus endereços é:",
["Para","Cc","Cco","Assunto"],2,
"Cco = cópia carbono oculta. Cc = cópia visível a todos. Destinatários em Cco não aparecem para os outros.",
"Quem está em Cco vê todos; ninguém vê quem está em Cco.",
["ms"],"in6");

q("inf",3,"Segurança da informação",
"Programa malicioso que criptografa os arquivos da vítima e exige pagamento para liberá-los é o:",
["spyware","ransomware","worm","adware"],1,
"Ransomware = sequestro de dados. Spyware = espiona. Worm = se replica sozinho pela rede. Adware = propaganda. Trojan = disfarçado de programa legítimo.",
"RANSOM = resgate em inglês.",
["cert"],"in8");

q("inf",3,"Segurança da informação",
"Mensagem falsa, que imita banco ou órgão público, para induzir o usuário a fornecer senhas e dados é chamada de:",
["phishing","firewall","backup","cookie"],0,
"Phishing = 'pescaria' de dados por engenharia social. Firewall = filtra tráfego de rede. Boas práticas: senhas fortes, autenticação em dois fatores, desconfiar de links.",
"Firewall não é antivírus.",
["cert"],"in7");

q("inf",3,"Backup",
"O tipo de backup que copia apenas os arquivos alterados desde o último backup COMPLETO é o:",
["incremental","diferencial","espelho","normal"],1,
"Diferencial = desde o último COMPLETO (cresce a cada dia). Incremental = desde o último backup de QUALQUER tipo (mais rápido de fazer, restauração mais trabalhosa).",
"Diferencial → completo. Incremental → último qualquer.",
["cert"],"in9");

q("inf",3,"Redes e Internet",
"O protocolo utilizado para ENVIAR e-mails é o:",
["POP3","IMAP","SMTP","DNS"],2,
"SMTP envia. POP3 e IMAP recebem (IMAP sincroniza com o servidor). DNS traduz nomes de domínio em IP. HTTPS = navegação segura (porta 443).",
"SMTP = Sua Mensagem Tá Partindo.",
["cert"],"in0");

q("inf",3,"Intranet",
"Sobre intranet, é correto afirmar:",
["É uma rede pública acessível a qualquer pessoa.","É uma rede privada de uma organização que utiliza as mesmas tecnologias e protocolos da internet.","Não pode usar navegador.","Só funciona sem cabos."],1,
"Intranet = rede interna e privada com tecnologia da internet (TCP/IP, HTTP, navegador). Extranet = parte da intranet aberta a parceiros externos autorizados.",
"Intranet pode ser acessada de fora via VPN.",
["cert"],"in2");

q("inf",4,"Hardware e software",
"A memória RAM é caracterizada por ser:",
["permanente e somente leitura.","volátil, perdendo seu conteúdo quando o computador é desligado.","um dispositivo de entrada.","um software de sistema."],1,
"RAM = memória principal, volátil, de trabalho. ROM = somente leitura, não volátil (firmware). HD/SSD = armazenamento permanente.",
"Desligou, a RAM esvazia.",
["ms"],"in14");

q("inf",4,"Nuvem",
"OneDrive, Google Drive e Dropbox são exemplos de:",
["armazenamento em nuvem.","sistemas operacionais.","antivírus.","processadores de texto."],0,
"Armazenamento em nuvem guarda arquivos em servidores remotos, com sincronização e compartilhamento. Modelos de serviço: SaaS (software), PaaS (plataforma), IaaS (infraestrutura).",
"Nuvem também precisa de backup e senhas fortes.",
["ms"],"in5");

q("inf",4,"Inteligência Artificial",
"Sobre o uso de ferramentas de IA generativa (como o Copilot no Microsoft 365), é boa prática:",
["inserir dados pessoais sensíveis de cidadãos para agilizar relatórios.",
 "conferir as respostas, pois a IA pode gerar informações incorretas ('alucinações'), e evitar inserir dados sigilosos.",
 "considerar todo conteúdo gerado como verdade, sem revisão.",
 "desativar o antivírus para a IA funcionar melhor."],1,
"IA generativa produz texto plausível que pode estar errado. Deve-se revisar, citar fontes e respeitar a LGPD e a ética digital.",
"Resposta com 'sempre confiável' está errada.",
["ms"],"in15");

/* ================= CONHECIMENTOS GERAIS E ATUALIDADES (peso 3) ================= */
q("cg",1,"História de São João del-Rei",
"O arraial que deu origem a São João del-Rei foi elevado à categoria de vila em 8 de dezembro de 1713, recebendo esse nome em homenagem a:",
["Dom Pedro I.","Dom João V, rei de Portugal.","Dom João VI.","São João Batista."],1,
"O Arraial Novo do Rio das Mortes (também ligado a Nossa Senhora do Pilar) surgiu por volta de 1704/1705, no ciclo do ouro. Em 8/12/1713 virou Vila de São João d'El-Rey, homenagem a D. João V. 8 de dezembro é o aniversário da cidade.",
"Não confunda com D. João VI (que veio ao Brasil em 1808).",
["pref","ibge"],"cg");

q("cg",1,"História de São João del-Rei",
"O nome original do povoado que originou São João del-Rei era:",
["Vila Rica.","Arraial Novo do Rio das Mortes.","Arraial do Tejuco.","Vila do Príncipe."],1,
"Vila Rica = Ouro Preto. Tejuco = Diamantina. Vila do Príncipe = Serro. O Arraial Velho do Rio das Mortes corresponde à atual Tiradentes.",
"Arraial VELHO = Tiradentes; Arraial NOVO = São João del-Rei.",
["pref"],"cg");

q("cg",1,"História de São João del-Rei",
"No período colonial, São João del-Rei tornou-se sede da:",
["Comarca do Rio das Velhas.","Comarca do Rio das Mortes.","Capitania de São Paulo.","Comarca de Vila Rica."],1,
"Em 1714 a vila tornou-se cabeça da Comarca do Rio das Mortes, uma das três primeiras comarcas de Minas (junto de Vila Rica e Rio das Velhas/Sabará).",
"Rio das Velhas = Sabará.",
["pref"],"cg");

q("cg",1,"História de São João del-Rei",
"A Vila de São João del-Rei foi elevada à categoria de CIDADE em:",
["1713","1789","1838","1889"],2,
"Três datas-chave: 1704/1705 (arraial), 1713 (vila), 1838 (cidade). 1789 é a Inconfidência Mineira.",
"Vila ≠ cidade. A banca pode perguntar qualquer uma das três datas.",
["pref"],"cg");

q("cg",2,"Patrimônio cultural",
"O conjunto arquitetônico e urbanístico de São João del-Rei foi tombado pelo IPHAN em:",
["1938","1964","1988","2001"],0,
"Tombamento federal de 1938, um dos primeiros do país. A cidade preserva casario colonial, igrejas barrocas e pontes de pedra.",
"O IPHAN (antigo SPHAN) foi criado em 1937; o tombamento veio logo depois.",
["iphan"],"cg");

q("cg",2,"Turismo e patrimônio",
"O trem turístico Maria Fumaça, que parte de São João del-Rei, liga a cidade a:",
["Barbacena.","Tiradentes.","Ouro Preto.","Juiz de Fora."],1,
"Trecho de cerca de 12 km da antiga Estrada de Ferro Oeste de Minas, em bitola estreita (76 cm), entre São João del-Rei e Tiradentes.",
"Ouro Preto a Mariana é outro trem turístico.",
["pref"],"cg");

q("cg",2,"Personalidades",
"Político nascido em São João del-Rei, eleito presidente da República pelo Colégio Eleitoral em 1985, que faleceu antes de tomar posse:",
["Juscelino Kubitschek.","Tancredo Neves.","Itamar Franco.","Getúlio Vargas."],1,
"Tancredo de Almeida Neves nasceu em São João del-Rei (1910) e está sepultado na cidade. JK era de Diamantina.",
"JK = Diamantina; Itamar = nasceu no mar, criado em Juiz de Fora.",
["pref"],"cg");

q("cg",3,"Geografia urbana",
"O curso d'água que atravessa o centro histórico de São João del-Rei, sobre o qual estão as pontes de pedra da Cadeia e do Rosário, é o:",
["Rio das Mortes.","Córrego do Lenheiro.","Rio Grande.","Rio das Velhas."],1,
"O Córrego do Lenheiro corta o centro e é cruzado pelas pontes de pedra do século XVIII. O Rio das Mortes passa na região e dá nome à antiga comarca. Áreas próximas a cursos d'água ligam-se ao tema de enchentes do edital.",
"Rio das Mortes é o rio da região; o córrego do centro é o Lenheiro.",
["pref"],"cg");

q("cg",3,"Geografia urbana",
"Município com o qual São João del-Rei forma área conurbada, conhecido por ter um dos menores territórios do Brasil:",
["Santa Cruz de Minas.","Barbacena.","Lavras.","Conselheiro Lafaiete."],0,
"Santa Cruz de Minas (emancipado de Tiradentes nos anos 1990) é contíguo a São João del-Rei. Tiradentes também é limítrofe.",
"Conurbação = cidades cujas malhas urbanas se encontram.",
["ibge","pref"],"cg");

q("cg",4,"Dados gerais",
"Segundo o IBGE, a população de São João del-Rei está na faixa de:",
["20 a 40 mil habitantes.","80 a 100 mil habitantes.","200 a 300 mil habitantes.","mais de 500 mil habitantes."],1,
"Cerca de 90 mil habitantes. Por isso, pela Lei 13.022/2014, o efetivo máximo da guarda é de 0,3% da população. Confira o número exato no IBGE Cidades antes da prova.",
"Use esse dado para ligar CG com a Lei 13.022 (faixa de 50 a 500 mil).",
["ibge"],"cg");

q("cg",4,"Plano Diretor",
"O Plano Diretor de São João del-Rei, citado no edital, é a:",
["Lei Municipal nº 4.068/2006.","Lei Municipal nº 5.116/2014.","Lei Municipal nº 5.818/2021.","Lei Federal nº 10.257/2001."],0,
"Lei 4.068/2006 (e atualizações). O Estatuto da Cidade (Lei federal 10.257/2001) exige plano diretor para cidades com mais de 20 mil habitantes e o define como instrumento básico da política urbana.",
"Plano diretor é obrigatório acima de 20 mil habitantes (CF, art. 182, § 1º).",
["camara","cf"],"cg");
