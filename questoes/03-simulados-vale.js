// ===== LOTE 3: questões adaptadas dos Simulados 01 a 03 do Vale Concursos (reescritas) + reforço de Português e CG =====
function V(sim, num) { const x = QS[QS.length - 1]; x.vs = [sim, num]; x.src = "Adaptada do Simulado " + String(sim).padStart(2, "0") + " do Vale Concursos (questão " + num + ")"; }
Object.assign(L, {
  dl200: ["Decreto-Lei 200/1967", "https://www.planalto.gov.br/ccivil_03/decreto-lei/del0200.htm"],
  l15100: ["Lei 15.100/2025 (celulares nas escolas)", "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15100.htm"],
  d7053: ["Decreto 7.053/2009 (população em situação de rua)", "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/decreto/d7053.htm"],
  ibgehist: ["IBGE Cidades: histórico de São João del-Rei", "https://cidades.ibge.gov.br/brasil/mg/sao-joao-del-rei/historico"],
  stf472: ["STF: Tema 472 (guardas e multas de trânsito)", "https://portal.stf.jus.br/jurisprudenciaRepercussao/tema.asp?num=472"]
});
Object.assign(E, { vsim: ["Vale: Pacote de Simulados Pós-Edital", VC + "z7rA1pqEej"] });

/* ---------------- SIMULADO 01 ---------------- */
q("por",3,"Interpretação de textos",
"Um texto sobre economia do crime afirma que, quando a chance de punição é baixa, endurecer as penas tem pouco efeito 'dissuasor'. Nesse contexto, 'dissuasor' significa:",
["capaz de reforçar valores morais por meio de penas duras.","capaz de desestimular a prática do crime pela expectativa de punição efetiva.","capaz de garantir punição automática a todo crime.","capaz de legitimar o Estado, mesmo sem eficácia."],1,
"Dissuadir = convencer alguém a não fazer algo. No raciocínio do texto, o que inibe o crime é a probabilidade real de ser punido, não só o tamanho da pena.",
"Em vocabulário, a banca coloca alternativas que 'parecem' cultas mas acrescentam ideias que o texto não traz (moral, legitimidade).",
["volp"],["p12","vport"]); V(1,1);

q("por",3,"Coesão referencial",
"Em 'A falta de policiamento eficaz encoraja os criminosos a correr riscos. Eles veem pouca razão para temer a prisão', o pronome 'Eles' retoma:",
["a falta de policiamento.","os riscos.","as forças policiais.","os criminosos."],3,
"Embora 'riscos' seja o termo masculino plural mais próximo, só pessoas podem 'ver razão para temer'. O referente é decidido pela coerência, não só pela concordância.",
"O termo mais próximo nem sempre é o referente. Teste o sentido: 'os riscos veem razão'? Não faz sentido.",
["volp"],["p10","vport"]); V(1,2);

q("por",1,"Concordância verbal",
"Em '77% da população entende que...', segundo a norma-padrão:",
["só é possível 'entende', pois porcentagem exige singular.",
 "o verbo pode concordar com o numeral ('entendem') ou com o especificador ('entende').",
 "o verbo deve obrigatoriamente ir para o plural.",
 "'1% dos entrevistados' exigiria plural obrigatório."],1,
"Com porcentagem seguida de especificador, admite-se concordar com o número ou com o termo que o acompanha. '1% dos entrevistados entende' ou 'entendem': ambos aceitos.",
"Porcentagem + especificador = duas concordâncias possíveis. Se o número vier antecedido de artigo ('Os 77%'), concorda com o número.",
["volp"],["p8","vport"]); V(1,4);

q("por",4,"Redação oficial",
"Associe o expediente à sua finalidade: (1) Ofício (2) Requerimento (3) Certidão (4) Telegrama. ( ) pedido do interessado à autoridade sobre algo a que julga ter direito; ( ) comunicação oficial sobre assuntos de serviço entre órgãos ou com particulares; ( ) documento que atesta, com fé pública, ato ou fato registrado na Administração; ( ) comunicação urgente e concisa por meio telegráfico. A sequência é:",
["2, 1, 3, 4","1, 2, 3, 4","2, 1, 4, 3","3, 1, 2, 4"],0,
"Requerimento = pedido. Ofício = comunicação oficial (o Manual de Redação reúne essas comunicações no 'padrão ofício'). Certidão = atesta com fé pública. Telegrama = urgente e conciso.",
"Requerimento REQUER. Certidão CERTIFICA.",
["manual"],["vport"]); V(1,5);

q("rl",1,"Lógica proposicional",
"Sendo P: 'O guarda está de plantão' e Q: 'A viatura está em manutenção', a frase 'Nem o guarda está de plantão nem a viatura está em manutenção' é representada por:",
["P → Q","~(P ↔ Q)","~P ∧ ~Q","P ∨ Q"],2,
"'Nem... nem...' nega as duas e liga com 'e'. Equivale, por De Morgan, a ~(P ∨ Q).",
"'Nem A nem B' = não A E não B.",
[],["rl1","vrl"]); V(1,6);

q("rl",2,"Conjuntos",
"Dados A = {∅, {1}, {1, 2}} e B = {1, 2}, é correto afirmar:",
["∅ ∈ A e ∅ ⊂ B.","{1} ⊂ A e {1} ∈ B.","{∅} ⊂ A e ∅ ∈ B.","{1, 2} ∈ B e {1} ⊂ B."],0,
"O vazio aparece listado em A, então é elemento de A. E o vazio é subconjunto de qualquer conjunto. '∈' liga elemento a conjunto; '⊂' liga conjunto a conjunto.",
"{1} é ELEMENTO de A (está na lista), não subconjunto.",
[],["rl7","vrl"]); V(1,7);

q("rl",3,"Análise combinatória",
"Deve-se formar uma equipe com 3 engenheiros (entre 9 disponíveis) e 2 arquitetos (entre 7). Quantas equipes diferentes são possíveis?",
["2.940","2.646","1.764","1.260"],2,
"C(9,3) = 84 e C(7,2) = 21. Pelo princípio multiplicativo: 84 × 21 = 1.764.",
"Escolhas em grupos separados: calcule cada combinação e MULTIPLIQUE.",
[],["rl12","vrl"]); V(1,9);

q("inf",1,"Windows 10",
"No Windows 10, o atalho para alternar entre as janelas abertas de diferentes aplicativos é:",
["Ctrl + Tab","Alt + F4","Ctrl + F2","Alt + Tab"],3,
"Alt + Tab alterna janelas. Ctrl + Tab alterna abas dentro do mesmo programa. Alt + F4 fecha a janela ativa. Win + Tab abre a Visão de Tarefas.",
"Alt = entre programas. Ctrl = dentro do programa.",
["ms"],["in13","vinf"]); V(1,11);

q("inf",2,"Excel (Microsoft 365)",
"No Excel, o Preenchimento Relâmpago (que reconhece padrões e completa células automaticamente) fica no grupo Ferramentas de Dados da guia:",
["Página Inicial.","Exibir.","Dados.","Revisão."],2,
"Guia Dados, junto de Texto para Colunas e Remover Duplicatas. Atalho: Ctrl + E.",
"Ctrl + E no Excel = Preenchimento Relâmpago.",
["ms"],["in10","vinf"]); V(1,12);

q("inf",3,"Segurança da informação",
"Em segurança da informação, o conceito de RISCO corresponde a:",
["uma falha técnica que pode ser explorada.","a possibilidade de um evento, independentemente do impacto.","uma invasão já concretizada.","a combinação entre a probabilidade de uma ameaça explorar uma vulnerabilidade e o impacto resultante."],3,
"Vulnerabilidade = fraqueza. Ameaça = o que pode explorá-la. Incidente = o fato ocorrido. Risco = probabilidade × impacto.",
"Risco sempre envolve DOIS fatores: probabilidade e impacto.",
["cert"],["in7","vinf"]); V(1,13);

q("inf",4,"Hardware e software",
"Analise: I. A RAM é volátil. II. Um byte tem 8 bits e representa apenas 8 combinações. III. A placa-mãe interliga os componentes e pode ter controladoras on-board ou receber placas off-board. Está correto:",
["I, II e III.","I e III, apenas.","I, apenas.","III, apenas."],1,
"II está errada: 8 bits geram 2⁸ = 256 combinações.",
"Bits viram potência de 2: 8 bits = 256 valores.",
["ms"],["in14","vinf"]); V(1,15);

q("cg",1,"História de São João del-Rei",
"Segundo o histórico do IBGE e da Prefeitura, o nome dado à vila criada em 1713 homenageava:",
["D. João VI e Fernão Dias.","D. João V e Tomé Portes del-Rei.","São João Batista, padroeiro dos emboabas.","o governador D. Brás Baltasar da Silveira e Manuel Nunes Viana."],1,
"Tomé Portes del-Rei, vindo de Taubaté, fixou-se às margens do Rio das Mortes no fim do século XVII. D. Brás Baltasar da Silveira foi o governador que elevou o arraial a vila.",
"O 'del-Rei' do nome também lembra Tomé Portes del-Rei.",
["ibgehist","pref"],["vcg"]); V(1,16);

q("cg",4,"Dados gerais de São João del-Rei",
"Sobre São João del-Rei, é FALSO afirmar que:",
["no Censo 2022 o município tinha 90.225 habitantes.","quem nasce na cidade é chamado de são-joanense.","o aniversário da cidade é em 8 de dezembro.","sua área territorial é inferior a 500 km²."],3,
"Pelo IBGE, a área é de cerca de 1.452 km². População em 2022: 90.225; densidade de cerca de 62 hab/km².",
"Município grande em área: inclui vários distritos rurais.",
["ibge"],["vcg"]); V(1,17);

q("cg",4,"Plano Diretor de São João del-Rei",
"NÃO é princípio do Plano Diretor Participativo de São João del-Rei (Lei 4.068/2006):",
["garantir as funções sociais da cidade e da propriedade.","garantir o desenvolvimento urbano-ambiental sustentável.","garantir a gestão democrática com participação popular.","concentrar as decisões de planejamento no Executivo, dispensando participação popular."],3,
"Art. 3º prevê os três primeiros. Dispensar participação contraria o próprio nome ('Participativo') e o Estatuto da Cidade.",
"Plano 'Participativo' não dispensa participação.",
["pd"],["vpd"]); V(1,18);

q("cg",4,"Atualidades",
"A Lei federal 15.100/2025:",
["proibiu redes sociais para menores de 18 anos.","criou a LGPD.","restringiu o uso de celulares e aparelhos portáteis pessoais por alunos nas escolas de educação básica, com exceções pedagógicas e legais.","tornou a CNH exclusivamente digital."],2,
"Vale para escolas públicas e privadas, inclusive no recreio. Exceções: fins pedagógicos orientados, acessibilidade, saúde e direitos fundamentais.",
"LGPD é a Lei 13.709/2018.",
["l15100"],["vcg"]); V(1,20);

q("leg",2,"Direito Administrativo: organização",
"Segundo o Decreto-Lei 200/1967, é correto:",
["a Administração Direta é formada pelos serviços da Presidência e dos Ministérios; a Indireta, por entidades com personalidade jurídica própria, vinculadas ao Ministério da área.",
 "as entidades da Indireta são hierarquicamente subordinadas ao Ministério, sem autonomia.",
 "autarquias e fundações integram a Administração Direta.",
 "concessionárias de serviço público integram a Administração Indireta."],0,
"Indireta: autarquias, empresas públicas, sociedades de economia mista e fundações públicas. Há VINCULAÇÃO (supervisão ministerial), não subordinação hierárquica.",
"Indireta = vinculação/tutela. Concessionária é particular, não é Administração.",
["dl200"],["vadm"]); V(1,21);

q("leg",1,"CF: Direitos e garantias (art. 5º)",
"Um cidadão critica duramente um gestor em audiência pública, e a fala é divulgada com seu nome. Considerando o art. 5º da CF:",
["a vedação ao anonimato impede qualquer divulgação que dificulte identificar o autor.","a proteção à honra afasta a liberdade de expressão quando a crítica é a agente público.","é livre a manifestação do pensamento, vedado o anonimato, assegurado o direito de resposta proporcional ao agravo e indenização por dano material, moral ou à imagem.","a crítica a agente público depende de comunicação prévia à autoridade."],2,
"Incisos IV e V do art. 5º. Direitos fundamentais convivem: abusos se resolvem com resposta e indenização, não com censura prévia.",
"Não existe licença prévia para manifestação do pensamento.",
["cf"],["cf2","vconst"]); V(1,22);

q("leg",2,"Código Penal: aplicação da lei penal",
"Sobre a aplicação da lei penal, é INCORRETO afirmar:",
["somente a lei pode criar crimes e cominar penas.","na continuidade normativo-típica, quando o tipo é revogado mas a conduta migra para outro tipo penal, ocorre abolitio criminis.","a lei posterior benéfica alcança fatos já julgados definitivamente.","retroatividade é a aplicação da lei a fatos anteriores, quando mais favorável."],1,
"Na continuidade normativo-típica a conduta continua punível em outro dispositivo; logo NÃO há abolitio criminis. Exemplo clássico: atentado violento ao pudor, que passou a integrar o estupro.",
"Revogou o artigo mas a conduta continua crime em outro lugar? Não é abolitio.",
["cp"],["pen0","vpen"]); V(1,23);

q("esp",3,"Código Penal: crimes em espécie",
"Alguém pega um celular deixado sobre a mesa. A vítima percebe e o persegue; ao ser alcançado, o autor a agride com socos e foge com o aparelho. O crime é:",
["extorsão.","furto simples.","furto qualificado.","roubo impróprio."],3,
"Art. 157, § 1º, CP: logo depois da subtração, a violência para garantir a posse do bem ou a impunidade transforma o furto em roubo (impróprio). No roubo próprio, a violência vem antes ou durante a subtração.",
"Violência DEPOIS da subtração, para manter o bem = roubo impróprio.",
["cp"],["vpen"]); V(1,28);

q("esp",3,"Âmbito Internacional: Direitos Humanos",
"A garantia de que toda pessoa detida deve ser informada das razões da detenção e notificada, sem demora, da acusação está prevista expressamente:",
["na Lei 13.675/2018 (SUSP).","no Decreto 678/1992, que promulga a Convenção Americana sobre Direitos Humanos.","no Decreto 8.727/2016.","na Lei 13.022/2014."],1,
"Art. 7º, item 4, do Pacto de San José. O Pacto também garante a apresentação sem demora do preso a um juiz, base das audiências de custódia.",
"O Pacto de San José inspira a audiência de custódia.",
["cadh"],["vdh"]); V(1,30);

/* ---------------- SIMULADO 02 ---------------- */
q("por",3,"Interpretação de textos",
"Em um artigo sobre segurança pública, a autora escreve que 'não basta relatar o inferno de Dante, é preciso engenho para construir a saída'. A referência literária serve para:",
["comparar as análises que só denunciam problemas à descrição do Inferno, defendendo que é preciso também propor soluções.","defender que a segurança siga princípios religiosos.","criticar a literatura clássica.","afirmar que entender os problemas é desnecessário."],0,
"É uma analogia (intertextualidade com A Divina Comédia): o diagnóstico tem valor, mas não basta sem soluções concretas.",
"Intertextualidade quase sempre reforça o argumento do autor.",
["volp"],["p12","vport"]); V(2,1);

q("por",3,"Formação de palavras",
"No trecho 'a PEC passou a prever importantes salvaguardas da cidadania, como corregedorias e ouvidorias autônomas', a palavra 'salvaguardas':",
["é formada por derivação regressiva e indica só proteção física.","é neologismo com função de predicativo.","é adjetivo formado por prefixação.","é formada por composição e, no contexto, significa mecanismos institucionais de garantia de direitos."],3,
"Salvo + guarda (composição). É substantivo, núcleo do objeto direto de 'prever'.",
"Composição = duas palavras. Derivação = palavra + afixo.",
["volp"],["vport"]); V(2,2);

q("por",3,"Sintaxe",
"Em 'Constata-se que a criminalidade assumiu novas formas', a partícula 'se' é:",
["pronome reflexivo.","partícula apassivadora, e o sujeito é a oração 'que a criminalidade assumiu novas formas'.","parte integrante do verbo.","índice de indeterminação do sujeito."],1,
"'Constatar' é transitivo direto: 'é constatado que...'. O sujeito é a oração subordinada substantiva subjetiva. Índice de indeterminação ocorre com verbos sem objeto direto ('Precisa-se de...').",
"VTD + se = apassivadora. VTI/VI + se = indeterminação.",
["volp"],["vport"]); V(2,3);

q("por",4,"Variação linguística",
"Sobre a fala 'Nóis vai ajudar a guarda a cuidar da praça, sô', é correto afirmar:",
["é erro sem valor comunicativo.","a concordância 'nóis vai' é aceita em comunicações oficiais.","é variedade legítima, com marcas de oralidade e regionalismo, inadequada apenas a contextos que exigem a norma-padrão.","variação só existe entre países lusófonos."],2,
"Toda variedade comunica. O critério é adequação: em documentos oficiais, 'Nós vamos'. 'Sô' é marca regional mineira (variação diatópica).",
"A banca IBGP valoriza 'adequação', nunca 'erro'.",
["volp"],["p13","vport"]); V(2,5);

q("rl",1,"Tabela-verdade",
"Sendo p verdadeira e q falsa, a proposição (p → q) ∨ (~q ∧ p) é:",
["verdadeira.","falsa.","uma contradição.","sem valor lógico definido."],0,
"p → q = V → F = F. ~q ∧ p = V ∧ V = V. F ∨ V = V.",
"No 'ou', basta uma parte verdadeira.",
[],["rl1","vrl"]); V(2,6);

q("rl",2,"Conjuntos",
"O conjunto das partes de A tem 128 elementos, B tem 12 elementos e A ∪ B tem 16. Quantos elementos há em A ∩ B?",
["9","5","3","12"],2,
"2ⁿ = 128 → n(A) = 7. 16 = 7 + 12 − n(A∩B) → n(A∩B) = 3.",
"Conjunto das partes de um conjunto com n elementos tem 2ⁿ elementos.",
[],["rl7","vrl"]); V(2,7);

q("rl",4,"Operações e valor absoluto",
"O valor de E = |−2,5 + 0,5² − √4| ÷ 0,5 é:",
["5,4","3,5","8,5","4,8"],2,
"0,5² = 0,25; √4 = 2. −2,5 + 0,25 − 2 = −4,25. Módulo: 4,25. Dividir por 0,5 = multiplicar por 2: 8,5.",
"Dividir por 0,5 dobra o valor.",
[],["rl9","vrl"]); V(2,8);

q("rl",3,"Sequências",
"Semáforos liberam cruzamentos na ordem cíclica: Alfa, Beta, Gama, Delta, Gama, Beta, Alfa, Beta, Gama... Começando em Alfa, qual será liberado na 1.250ª ativação?",
["Gama","Beta","Alfa","Delta"],1,
"O bloco que se repete tem 6 termos: Alfa, Beta, Gama, Delta, Gama, Beta. 1.250 ÷ 6 deixa resto 2 → 2ª posição = Beta.",
"Ache o tamanho do bloco e use o RESTO da divisão. Resto 0 = último termo do bloco.",
[],["rl5","vrl"]); V(2,9);

q("inf",2,"Excel (Microsoft 365)",
"Para somar as vendas apenas do departamento 'Financeiro' numa planilha grande e atualizada com frequência, a função mais adequada é:",
["SOMA","SE","SOMASE","PROCV"],2,
"=SOMASE(A:A;\"Financeiro\";B:B). Para vários critérios, SOMASES. PROCV devolve só a primeira ocorrência.",
"Somar com condição = SOMASE.",
["ms"],["in10","vinf"]); V(2,12);

q("inf",2,"PowerPoint (Microsoft 365)",
"NÃO fica na guia Inserir do PowerPoint:",
["Ícones.","Zoom.","Equação.","Temas."],3,
"Temas ficam na guia Design (com Variantes e Designer). Ícones (Ilustrações), Zoom (Links) e Equação (Símbolos) estão em Inserir.",
"Aparência geral do slide = Design.",
["ms"],["vinf"]); V(2,13);

q("inf",3,"Redes e Internet",
"No modelo TCP/IP, a camada de transporte é responsável por:",
["interface com o usuário.","endereçamento lógico e roteamento.","entrega física dos dados.","comunicação fim a fim entre aplicações, com protocolos como TCP e UDP."],3,
"Aplicação: HTTP, SMTP, DNS. Internet/rede: IP e roteamento. Acesso à rede: meio físico. TCP é confiável e orientado à conexão; UDP é mais rápido, sem garantia de entrega.",
"TCP e UDP = transporte. IP = rede.",
["cert"],["in0","vinf"]); V(2,15);

q("cg",2,"História de São João del-Rei",
"Segundo o IBGE, foi distrito de São João del-Rei e se emancipou, tornando-se município:",
["Emboabas.","Arcângelo.","Ritápolis (antigo Santa Rita do Rio Abaixo).","Rio das Mortes."],2,
"Ritápolis e Cassiterita se emanciparam em 1962; Nazareno, em 1953. Emboabas, Arcângelo, Rio das Mortes, São Gonçalo do Amarante e São Sebastião da Vitória continuam distritos.",
"Distritos atuais: Arcângelo, Emboabas, Rio das Mortes, São Gonçalo do Amarante e São Sebastião da Vitória.",
["ibgehist"],["vcg"]); V(2,17);

q("cg",3,"Plano Diretor de São João del-Rei",
"No Plano Diretor de São João del-Rei, a zona destinada prioritariamente à preservação dos recursos naturais, que abrange a Serra do Lenheiro e seus sítios rupestres, é a:",
["Zona de Adequação Ambiental.","Zona de Reabilitação Ambiental.","Zona de Proteção Ambiental.","Zona de Controle Ambiental."],2,
"Há quatro zonas: Proteção, Controle, Reabilitação (áreas degradadas, como voçorocas) e Adequação (áreas urbanas).",
"Serra do Lenheiro = PROTEÇÃO.",
["pd"],["vpd"]); V(2,18);

q("cg",1,"História de São João del-Rei",
"A Guerra dos Emboabas, que abalou o arraial do Rio das Mortes no início do século XVIII, opôs:",
["indígenas e jesuítas.","holandeses e portugueses.","monarquistas e republicanos.","paulistas, descobridores das minas, e forasteiros (sobretudo portugueses), chamados emboabas."],3,
"Conflito de 1707 a 1709 pelo direito de explorar o ouro. Os emboabas, liderados por Manuel Nunes Viana, venceram. O episódio do Capão da Traição ocorreu nessa guerra, na região.",
"'Emboaba' era o apelido dado aos forasteiros pelos paulistas.",
["ibgehist"],["vcg"]); V(2,19);

q("cg",4,"Atualidades",
"Em 2024, o IBGE substituiu o termo 'aglomerados subnormais' por:",
["Assentamentos precários informais.","Favelas e Comunidades Urbanas.","Zonas Especiais de Interesse Social.","Núcleos urbanos periféricos."],1,
"A mudança buscou um nome menos estigmatizante, após diálogo com movimentos sociais. ZEIS são instrumento de planejamento dos planos diretores.",
"O edital cita 'favelas, aglomerados e áreas de vulnerabilidade': conheça o novo termo.",
["ibge"],["vcg"]); V(2,20);

q("leg",2,"Direito Administrativo: poderes",
"Sobre o poder de polícia, é correto afirmar:",
["segundo o STF, é constitucional atribuir às guardas municipais o poder de polícia de trânsito, inclusive para aplicar multas.","poder de polícia é o mesmo que segurança pública, exclusivo das polícias do art. 144.","instituições policiais não podem exercer poder de polícia.","Municípios podem atribuir à guarda o poder de polícia judiciária."],0,
"STF, RE 658.570 (Tema 472). Polícia administrativa limita direitos em favor do interesse público; polícia judiciária (investigação) é das polícias civis e federal.",
"A GCM de SJDR nasceu de agentes de trânsito: esse tema tem tudo para cair.",
["stf472"],["vadm"]); V(2,21);

q("leg",2,"Código Penal: do crime",
"Sobre as excludentes de ilicitude, é INCORRETO afirmar:",
["quem provocou dolosamente o perigo não pode alegar estado de necessidade.","o STF declarou inconstitucional a tese da 'legítima defesa da honra'.","em legítima defesa e estado de necessidade responde-se por excesso doloso ou culposo, mas no estrito cumprimento do dever legal e no exercício regular de direito só pelo doloso.","o agente de segurança que repele agressão a refém está em legítima defesa."],2,
"O parágrafo único do art. 23 do CP alcança TODAS as excludentes: excesso doloso ou culposo é punível em qualquer delas. A legítima defesa da honra foi afastada pelo STF na ADPF 779.",
"Excesso punível vale para as QUATRO excludentes.",
["cp"],["pen1","vpen"]); V(2,23);

q("esp",2,"Lei de Drogas (Lei 11.343/2006)",
"Sobre o porte de droga para consumo pessoal, é INCORRETO afirmar:",
["as medidas podem ser aplicadas isolada ou cumulativamente.","quem se recusa injustificadamente a cumprir as medidas fica sujeito a pena de detenção.","as medidas são advertência, prestação de serviços e comparecimento a programa educativo.","para avaliar o consumo pessoal, o juiz considera natureza e quantidade da droga, circunstâncias e antecedentes."],1,
"Na recusa, o juiz pode aplicar, sucessivamente, admoestação verbal e multa (art. 28, § 6º). O art. 28 não prevê prisão em nenhuma hipótese.",
"Usuário NUNCA vai para a prisão pelo art. 28.",
["drogas"],["vdrogas"]); V(2,24);

q("leg",3,"Direitos Humanos: Regras de Beijing",
"Entre as diretrizes das Regras de Beijing está a de que:",
["jovens detidos cumpram medidas junto com adultos.","a identidade do jovem pode ser divulgada para prevenção geral.","a privação de liberdade do jovem seja o último recurso e pelo menor prazo possível.","ficam vedadas medidas alternativas, como liberdade assistida."],2,
"Regra 19. Também exigem separação de adultos, proteção da privacidade e preferência por medidas alternativas, ideias que influenciaram o ECA.",
"Mesma lógica do ECA: brevidade e excepcionalidade da internação.",
["eca"],["vdh"]); V(2,25);

q("esp",2,"Estatuto Geral das Guardas (Lei 13.022/2014)",
"Sobre a Lei 13.022/2014, é correto afirmar:",
["para os cargos em todos os níveis da carreira deve ser observado percentual mínimo para o sexo feminino, definido em lei municipal.","são princípios o patrulhamento ostensivo e a preservação do patrimônio.","a guarda é subordinada ao Secretário de Segurança Pública.","cargos em comissão podem ser providos por pessoas externas ao quadro."],0,
"Art. 15, § 3º. Em SJDR, a Lei 6.051 fixou 20%. Cargos em comissão: só membros efetivos do quadro. Princípio é patrulhamento PREVENTIVO. A guarda é subordinada ao chefe do Executivo.",
"Preventivo, não ostensivo. Comissão só para efetivos.",
["egm","l6051"],["v13022"]); V(2,26);

q("esp",3,"Crimes de Trânsito (CTB)",
"Sobre o CTB, é correto afirmar:",
["o condutor condenado definitivamente por receptação, descaminho ou contrabando praticado com uso de veículo terá a habilitação cassada ou será proibido de obtê-la por 5 anos.","dirigir sem habilitação é sempre crime, mesmo sem gerar perigo de dano.","compete à PM o patrulhamento ostensivo para preservar o patrimônio da União nas rodovias federais.","a ultrapassagem deve ser feita pela direita."],0,
"Art. 278-A. Dirigir sem habilitação só é crime (art. 309) se gerar perigo de dano; sem isso, é infração administrativa. O patrulhamento das rodovias federais é da PRF. Ultrapassagem é pela esquerda, salvo quando o da frente sinaliza que vai virar à esquerda.",
"Sem habilitação e sem perigo de dano = infração, não crime.",
["ctb"],["vctb"]); V(2,29);

q("leg",3,"Direitos Humanos: PIDCP",
"Sobre o Pacto Internacional dos Direitos Civis e Políticos, é INCORRETO afirmar:",
["o direito à vida é inerente à pessoa humana e ninguém será arbitrariamente privado dela.","o estrangeiro legalmente no território poderá expor razões contra sua expulsão, ainda que razões imperativas de segurança nacional se oponham.","onde não abolida, a pena de morte só pode ser imposta aos crimes mais graves, por sentença definitiva de tribunal competente.","o regime penitenciário visa à reabilitação, e jovens infratores ficam separados dos adultos."],1,
"Art. 13: a possibilidade de expor razões existe 'a menos que' razões imperativas de segurança nacional se oponham. A alternativa troca a exceção por 'ainda que', invertendo o sentido.",
"Troca de conectivo ('a menos que' x 'ainda que') muda tudo. Leia devagar.",
["pidcp"],["vdh"]); V(2,30);

/* ---------------- SIMULADO 03 ---------------- */
q("por",4,"Interpretação de textos",
"Antes de perder o sinal no lado oculto da Lua, um astronauta deixou a mensagem: 'Ainda vamos sentir o amor de vocês vindo da Terra. Nós amamos vocês, da Lua. Nos vemos do outro lado.' O tom predominante é:",
["intimista: comunicação afetiva e próxima com os destinatários.","empático com as dificuldades de quem ficou na Terra.","realista, com informações técnicas.","persuasivo, defendendo a exploração espacial."],0,
"Vocabulário afetivo, interlocução direta ('vocês') e despedida calorosa. Não há dados técnicos nem tese argumentativa.",
"Não confunda 'intimista' (proximidade afetiva) com 'empático' (compreender a dor do outro).",
["volp"],["p12","vport"]); V(3,1);

q("por",3,"Sintaxe",
"Em 'Ainda vamos sentir o amor de vocês', o sujeito de 'vamos sentir' é:",
["composto.","oculto (desinencial), identificado pela terminação verbal.","simples, de núcleo 'amor'.","indeterminado."],1,
"A desinência '-mos' indica 'nós'. 'O amor de vocês' é objeto direto. Indeterminado é quando não se pode identificar quem age.",
"Dá para descobrir o sujeito pela terminação? Oculto.",
["volp"],["vport"]); V(3,2);

q("rl",1,"Lógica de argumentação",
"Premissas: 'Se o guarda está de plantão, então a base está aberta' e 'A base não está aberta'. Conclusão válida:",
["O guarda não está de plantão.","O guarda está de plantão.","A base está aberta.","Nenhuma conclusão é possível."],0,
"Modus tollens: de P → Q e ~Q, conclui-se ~P (contrapositiva).",
"Negou o consequente? Negue o antecedente.",
[],["vrl"]); V(3,6);

q("rl",1,"Tabela-verdade",
"Uma tabela-verdade com cinco proposições simples tem quantas linhas?",
["64","25","32","16"],2,
"2ⁿ linhas: 2⁵ = 32. 25 seria 5², erro comum.",
"Linhas = 2 elevado ao número de proposições.",
[],["rl1","vrl"]); V(3,7);

q("rl",3,"Análise combinatória",
"Um código tem 4 caracteres: 2 letras escolhidas entre G, C, M e P, seguidas de 2 algarismos entre 1, 2, 3 e 4, com repetição permitida. Quantos códigos são possíveis?",
["32","64","256","144"],2,
"4 × 4 × 4 × 4 = 256. Sem repetição seria 4 × 3 × 4 × 3 = 144.",
"Leia se a repetição é permitida antes de calcular.",
[],["rl12","vrl"]); V(3,9);

q("inf",1,"Windows 10",
"Sobre arquivos e pastas no Windows 10, é correto:",
["TXT é formato de apresentação do PowerPoint.","as extensões conhecidas sempre aparecem e não podem ser ocultadas.","os caracteres \\ / : * ? \" < > | não podem ser usados em nomes de arquivos e pastas.","XLSX é extensão de texto simples."],2,
"São caracteres reservados. Por padrão, o Explorador OCULTA extensões conhecidas (Exibir > Extensões de nomes de arquivos). PPTX = PowerPoint; XLSX = Excel; TXT = texto simples.",
"Nove caracteres proibidos: \\ / : * ? \" < > |",
["ms"],["in13","vinf"]); V(3,11);

q("inf",2,"Word (Microsoft 365)",
"No Word em português, os grupos Fonte, Parágrafo e Estilos ficam na guia:",
["Layout.","Correspondências.","Inserir.","Página Inicial."],3,
"Layout: margens, orientação, quebras. Correspondências: mala direta e envelopes. Inserir: tabelas, imagens, cabeçalho.",
"Formatação do dia a dia = Página Inicial.",
["ms"],["in11","vinf"]); V(3,12);

q("inf",3,"Segurança da informação",
"Sobre vulnerabilidades: I. Perda, roubo e danos físicos são vulnerabilidades de mídias. II. Poeira, umidade e falta de energia afetam o software. III. Erros de codificação e configuração afetam o hardware. IV. Falta de treinamento gera vulnerabilidade humana. Está correto:",
["II e III.","I e IV.","Todas.","I e II."],1,
"II e III trocam os conceitos: fatores físicos afetam o HARDWARE; erros de código e configuração afetam o SOFTWARE.",
"Ambiente físico = hardware. Código = software.",
["cert"],["in7","vinf"]); V(3,13);

q("inf",3,"Segurança da informação",
"Um servidor recebe por aplicativo de mensagens um link de 'atualização cadastral urgente' pedindo sua senha e o código de verificação enviado ao celular. A conduta correta é:",
["informar o código, pois expira rápido.","confiar, pois veio de aplicativo conhecido.","publicar escalas e rotas nas redes por transparência.","tratar como provável phishing: não clicar, não informar códigos, confirmar por canal oficial e manter a verificação em duas etapas ativa."],3,
"Urgência + pedido de senha + pedido de código = golpe clássico. Quem tem o código assume a conta. Informações operacionais da Guarda não devem ir para perfis pessoais.",
"Nenhum órgão sério pede código de verificação por mensagem.",
["cert"],["in8","vinf"]); V(3,15);

q("cg",1,"História de São João del-Rei",
"Tomé Portes del-Rei, vindo de Taubaté, passou a cobrar a passagem do Rio das Mortes. A localidade, ponto de passagem das embarcações, era chamada:",
["Porto Real.","Arraial do Pilar.","Capão da Traição.","Serra Negra."],0,
"Ali surgiu o primeiro arraial. Após a morte de Tomé Portes (1702), seu genro Antônio Garcia da Cunha o sucedeu. A primeira igreja, no atual Morro da Forca, era dedicada a Nossa Senhora do Pilar.",
"Capão da Traição = episódio da Guerra dos Emboabas.",
["ibgehist"],["vcg"]); V(3,16);

q("cg",2,"História de São João del-Rei",
"O distrito de Nazareno foi desmembrado de São João del-Rei e elevado a município em:",
["1923","1953","1962","1991"],1,
"Lei Estadual 1.039/1953. Em 1962 saíram Ritápolis e Cassiterita. Em 1991 o distrito de Caburu passou a se chamar São Gonçalo do Amarante.",
"Nazareno 1953; Ritápolis e Cassiterita 1962.",
["ibgehist"],["vcg"]); V(3,17);

q("cg",3,"Geografia urbana",
"O Decreto 7.053/2009 (Política Nacional para a População em Situação de Rua) define essa população como:",
["grupo heterogêneo com pobreza extrema, vínculos familiares interrompidos ou fragilizados e sem moradia convencional regular, que usa logradouros e áreas degradadas como moradia e sustento, temporária ou permanentemente, além das unidades de acolhimento.","grupo homogêneo de migrantes sazonais.","pessoas com dependência química, que estão na rua só por isso.","pessoas com renda formal que escolhem morar em espaço público."],0,
"Art. 1º, parágrafo único. Reivindicações comuns: moradia, trabalho, saúde e fim de práticas violentas e higienistas. O edital cobra 'população em situação de rua'.",
"Heterogêneo: o fenômeno não tem causa única.",
["d7053"],["vcg"]); V(3,19);

q("cg",4,"Atualidades",
"Em maio de 2025, o cardeal norte-americano Robert Francis Prevost foi eleito papa e adotou o nome:",
["Pio XIII.","Leão XIV.","Bento XVII.","João Paulo III."],1,
"Eleito em 8 de maio de 2025, após a morte do papa Francisco. O nome remete a Leão XIII, autor da encíclica Rerum Novarum (1891), marco da doutrina social da Igreja.",
"Primeiro papa nascido nos EUA, com longa atuação no Peru.",
[],["vcg"]); V(3,20);

q("leg",2,"Direito Administrativo: responsabilidade civil",
"Motorista de concessionária de ônibus municipal avança o sinal e fere Caio. Pelo art. 37, § 6º, da CF:",
["só o motorista responde perante a vítima.","a concessionária responde pelos danos, com direito de regresso contra o motorista em caso de dolo ou culpa.","a concessionária só responde se provada falha de fiscalização do Poder Público.","o Município responde exclusivamente."],1,
"Pessoas jurídicas de direito privado prestadoras de serviço público também respondem objetivamente. O Município responde só subsidiariamente. Pela tese da dupla garantia (STF, Tema 940), a vítima aciona a pessoa jurídica, não o agente diretamente.",
"Concessionária de serviço público = responsabilidade objetiva também.",
["cf"],["vadm"]); V(3,21);

q("leg",1,"CF: Direitos e garantias (art. 5º)",
"Sobre os direitos das pessoas presas, é INCORRETO afirmar:",
["a prisão e o local onde o preso se encontra serão comunicados imediatamente ao juiz e à família ou pessoa indicada.","constranger o preso a exibir o corpo à curiosidade pública é abuso de autoridade.","às presidiárias serão asseguradas condições de permanecer com os filhos durante a amamentação, mediante prévia autorização judicial.","o preso será informado do direito de permanecer calado, com assistência da família e de advogado."],2,
"Art. 5º, L, da CF garante esse direito SEM condicioná-lo a autorização judicial. As demais estão no art. 5º e no art. 13 da Lei 13.869/2019.",
"A banca acrescenta uma condição que a lei não tem ('mediante autorização').",
["cf","abuso"],["cf3","vconst"]); V(3,22);

q("leg",3,"CPP: prisões e medidas cautelares",
"Sobre a prisão em flagrante, é INCORRETO afirmar:",
["nas infrações permanentes, como o cárcere privado, há flagrante enquanto durar a permanência.","não há crime quando a preparação do flagrante pela polícia torna impossível a consumação.","a inviolabilidade do domicílio cede diante do flagrante delito.","no flagrante por perseguição logo após o crime, é indispensável encontrar com o agente instrumentos ou objetos que façam presumir a autoria."],3,
"A alternativa mistura os incisos III (perseguição logo após) e IV (encontrado logo depois com objetos) do art. 302. Na perseguição, não se exige encontrar objetos. Flagrante preparado: Súmula 145 do STF.",
"Perseguido = impróprio. Encontrado com objetos = presumido. São hipóteses diferentes.",
["cpp"],["pen4","vcpp"]); V(3,23);

q("esp",3,"Decreto 11.841/2023",
"Uma equipe da Guarda é a primeira a chegar a uma ocorrência com risco à integridade das pessoas e indícios de crime. Pelo Decreto 11.841/2023, deve:",
["assumir a investigação e concluir a apuração.","levar todos os envolvidos à polícia, haja ou não flagrante.","adotar os procedimentos iniciais, acionar os órgãos de segurança necessários, apoiar a continuidade do atendimento e, havendo flagrante, tomar as providências legais.","isolar o local e não fazer mais nada até a polícia judiciária chegar."],2,
"O decreto detalha a cooperação prevista no art. 5º da Lei 13.022. A guarda não investiga (A), não conduz pessoas sem flagrante (B) e não fica inerte (D).",
"Primeiro a chegar: age, aciona, apoia. Não investiga.",
["d11841","egm"],["v13022"]); V(3,26);

q("esp",2,"SUSP (Lei 13.675/2018)",
"Segundo a Lei 13.675/2018, a integração entre os órgãos do SUSP se dá por:",
["operações conjuntas que permitem a um órgão exercer atribuições de outro.","operações e dados integrados, com competências definidas por protocolos dos próprios órgãos.","operações com planejamento e execução integrados, compartilhamento de informações, intercâmbio de conhecimentos técnicos e científicos e integração de dados, respeitadas as competências constitucionais e legais de cada instituição.","operações cujas competências são fixadas pelo órgão central."],2,
"Art. 10. As competências vêm da Constituição e da lei, não de protocolos nem do órgão central, e ninguém assume atribuição alheia.",
"Integração SEM invasão de competência.",
["susp"],["vsusp"]); V(3,28);

q("esp",2,"Estatuto do Desarmamento (Lei 10.826/2003)",
"Sobre o Estatuto do Desarmamento, é correto afirmar:",
["armas de uso restrito são registradas na Polícia Federal.","o certificado de registro é expedido pelas Forças Armadas.","a autorização de porte de arma de uso permitido, em todo o território nacional, é da Polícia Federal e depende de autorização prévia do Sinarm.","guardas de municípios de regiões metropolitanas têm porte em serviço e fora dele, pela redação legal."],2,
"Art. 10. Uso restrito: registro no Comando do Exército. Certificado de registro: Polícia Federal, precedido de autorização do Sinarm. A redação legal para regiões metropolitanas previa porte só em serviço.",
"Uso restrito = Exército. Uso permitido = Polícia Federal/Sinarm.",
["desarm"],["vdesarm"]); V(3,29);

/* ---------------- REFORÇO: LÍNGUA PORTUGUESA (peso 4) ---------------- */
q("por",1,"Crase",
"Assinale a alternativa em que o 'a' destacado NÃO deve receber acento grave:",
["Fui A delegacia registrar a ocorrência.","Entreguei o relatório A comandante Ana.","O guarda ficou frente A frente com o suspeito.","Obedeço A norma interna."],2,
"Não há crase entre palavras repetidas (frente a frente, cara a cara, gota a gota). Nas demais, há preposição + artigo: 'à delegacia', 'à comandante', 'à norma'.",
"Expressões com palavras repetidas nunca têm crase.",
["volp"],["p9","vport"]);

q("por",1,"Crase",
"Está correto o uso do acento grave em:",
["Chegou à pé.","Saiu às pressas.","Começou à chover.","Disse à ela a verdade."],1,
"Locuções adverbiais femininas ('às pressas', 'à noite', 'às vezes') levam crase. Não há crase antes de palavra masculina ('pé'), verbo ou pronome pessoal.",
"Locução adverbial feminina = crase.",
["volp"],["p9","vport"]);

q("por",1,"Concordância nominal",
"Assinale a frase correta:",
["Seguem anexo os documentos.","Seguem anexos os documentos.","Ela mesmo fez o relatório.","Eles estão quites, menas preocupações."],1,
"'Anexo' concorda com o substantivo: anexos os documentos ('em anexo' é invariável). 'Ela mesma'. 'Menos' é invariável; 'menas' não existe.",
"Anexo, incluso, obrigado e mesmo concordam com o termo a que se referem.",
["volp"],["p8","vport"]);

q("por",1,"Concordância verbal",
"Assinale a frase em que a concordância está INCORRETA:",
["Fui eu que fiz a ronda.","Fui eu quem fez a ronda.","Haja vista os problemas, a ronda foi mantida.","Devem haver novas vagas no próximo concurso."],3,
"O auxiliar de 'haver' impessoal também fica no singular: 'Deve haver novas vagas'. Com 'que', o verbo concorda com o pronome anterior (eu fiz); com 'quem', pode ir para a 3ª pessoa (quem fez).",
"Haver = existir: ele E o auxiliar ficam no singular.",
["volp"],["p8","vport"]);

q("por",2,"Regência nominal",
"Está correta quanto à regência nominal:",
["O guarda é apto para o serviço e tem acesso ao arquivo.","Ele tem preferência por café do que chá.","Ele é obediente com o regulamento.","A medida é contrária com a lei."],0,
"Apto a/para; acesso a; obediente a; contrário a. 'Preferência por X a Y' (sem 'do que').",
"'Do que' não combina com preferir/preferência.",
["volp"],["p9","vport"]);

q("por",2,"Pontuação",
"Assinale a alternativa corretamente pontuada:",
["O comandante, disse que a operação começaria às 6h.","Quando a viatura chegou, o suspeito já havia fugido.","A guarda municipal protege, bens serviços e instalações.","Os guardas chegaram e, prenderam o suspeito."],1,
"Oração subordinada adverbial anteposta é separada por vírgula. Não se separa sujeito de verbo nem verbo de complemento; em enumeração, a vírgula separa os itens ('bens, serviços e instalações').",
"Oração adverbial no início da frase = vírgula depois dela.",
["volp"],["p7","vport"]);

q("por",2,"Acentuação gráfica",
"Todas as palavras estão corretamente acentuadas em:",
["juíz, saída, raíz.","juiz, saída, raiz.","júri, viúvo, tênis, ônibus.","herói, idéia, vôo."],2,
"Juiz e raiz (oxítonas terminadas em z, hiato com i seguido de z na mesma sílaba) não levam acento; saída leva. 'Júri', 'tênis' (paroxítonas em i/is), 'viúvo' (hiato) e 'ônibus' (proparoxítona) estão certas. 'Ideia' e 'voo' perderam o acento.",
"Hiato i/u tônico leva acento, exceto se seguido de l, m, n, r ou z na mesma sílaba (juiz, raiz, ruim).",
["volp"],["p1","vport"]);

q("por",2,"Ortografia",
"Assinale a alternativa em que todas as palavras estão escritas corretamente:",
["paralisar, análise, pesquisar, catequizar.","paralizar, análize, pesquizar, catequisar.","paralisar, analize, pesquisar, catequisar.","paralizar, análise, pesquizar, catequizar."],0,
"Palavras com 's' no radical mantêm o 's' (análise → analisar, paralisia → paralisar, pesquisa → pesquisar). O sufixo '-izar' entra quando o radical não tem 's' (catequese → catequizar, real → realizar).",
"Tem 's' no radical? Fica 'isar'. Não tem? Usa 'izar'.",
["volp"],["p1","vport"]);

q("por",3,"Conectivos e coesão",
"Em 'O guarda foi elogiado, PORQUANTO agiu com prudência', o conectivo pode ser substituído, sem mudança de sentido, por:",
["embora.","uma vez que.","conquanto.","a fim de que."],1,
"'Porquanto' indica causa/explicação, como 'porque', 'pois', 'uma vez que', 'visto que'. 'Embora' e 'conquanto' são concessivos; 'a fim de que', final.",
"PorQUANTO (causa) x conQUANTO (concessão): parecem iguais e têm sentidos opostos.",
["volp"],["p3","vport"]);

q("por",3,"Conectivos e coesão",
"Em 'A ronda foi intensificada; LOGO, os furtos diminuíram', o conectivo estabelece relação de:",
["adversidade.","conclusão.","explicação.","adição."],1,
"Conclusivas: logo, portanto, então, por isso, assim, pois (depois do verbo).",
"'Pois' antes do verbo = explicação; depois do verbo, entre vírgulas = conclusão.",
["volp"],["p3","vport"]);

q("por",3,"Verbos",
"Assinale a frase em que o verbo está conjugado corretamente:",
["Se ele manter a calma, tudo se resolve.","Quando você ver o comandante, avise.","Os guardas reaveram os objetos furtados.","Se eles detiverem o suspeito, comuniquem a central."],3,
"Deter segue 'ter': se eles detiverem. Manter: se ele mantiver. Ver: quando você vir. Reaver segue 'haver' só onde há 'v': reouveram.",
"Derivados de ter, vir, ver e pôr seguem o verbo primitivo.",
["volp"],["p4","vport"]);

q("por",3,"Classes de palavras",
"Em 'Ele trabalha MEIO período e estava MEIO cansado', as palavras destacadas são, respectivamente:",
["advérbio e numeral.","numeral (adjetivo) e advérbio.","substantivo e adjetivo.","advérbio e advérbio."],1,
"'Meio período' = metade (varia: meia hora). 'Meio cansado' = um pouco (advérbio, invariável: 'meio cansada').",
"Dá para trocar por 'um pouco'? É advérbio e não varia.",
["volp"],["p2","vport"]);

q("por",4,"Tipologia textual",
"Um manual que orienta passo a passo como preencher o boletim de ocorrência é predominantemente um texto:",
["narrativo.","descritivo.","injuntivo (instrucional).","dissertativo-argumentativo."],2,
"Injuntivo usa verbos no imperativo ou no infinitivo para orientar ações: 'preencha', 'anote'.",
"Manual, receita, bula e edital têm trechos injuntivos.",
["volp"],["p12","vport"]);

q("por",4,"Semântica",
"Em 'A guarda RATIFICOU a decisão do comandante', o verbo destacado significa:",
["corrigiu.","confirmou.","anulou.","adiou."],1,
"Ratificar = confirmar. Retificar = corrigir. Parônimos clássicos de prova.",
"RAtificar = Reafirmar. REtificar = Reparar o erro.",
["volp"],["p12","vport"]);

q("por",4,"Figuras de linguagem",
"Em 'A cidade dormia enquanto os guardas vigiavam', há a figura de linguagem chamada:",
["metáfora.","personificação (prosopopeia).","hipérbole.","ironia."],1,
"Atribui-se ação humana (dormir) a um ser inanimado (a cidade). Hipérbole = exagero; ironia = dizer o contrário do que se pensa.",
"Coisa agindo como gente = personificação.",
["volp"],["vport"]);

/* ---------------- REFORÇO: CONHECIMENTOS GERAIS ---------------- */
q("cg",2,"Patrimônio cultural",
"A Igreja de São Francisco de Assis, um dos principais monumentos de São João del-Rei, tem projeto tradicionalmente atribuído a:",
["Oscar Niemeyer.","Antônio Francisco Lisboa, o Aleijadinho.","Mestre Valentim.","Lúcio Costa."],1,
"O risco (projeto) da fachada é atribuído ao Aleijadinho. Outros marcos: Catedral Basílica de Nossa Senhora do Pilar, Igreja do Carmo, pontes de pedra e o Complexo Ferroviário.",
"Niemeyer e Lúcio Costa são do modernismo (Brasília), não do barroco.",
["iphan"],["vcg"]);

q("cg",2,"Turismo e patrimônio",
"A Estrada de Ferro Oeste de Minas chegou a São João del-Rei, com a inauguração da estação, em:",
["1713","1838","1881","1938"],2,
"1881: estação e ferrovia, inaugurada com a presença de D. Pedro II. 1713: vila. 1838: cidade. 1938: tombamento federal.",
"Decore as quatro datas: 1713, 1838, 1881, 1938.",
["pref"],["vcg"]);

q("cg",3,"Geografia urbana",
"Na geografia urbana de São João del-Rei, o fenômeno das voçorocas está associado a:",
["inundações causadas pelo Rio Grande.","erosões profundas do solo, típicas de áreas degradadas, tratadas como zona de reabilitação ambiental no Plano Diretor.","terremotos frequentes.","áreas de mineração de diamantes."],1,
"Voçorocas são grandes erosões que expõem o subsolo; ligam-se ao tema de áreas de risco geológico do edital.",
"Edital cobra 'áreas de risco geológico e medidas de prevenção'.",
["pd"],["vcg"]);

q("cg",4,"Cidadania",
"O Estatuto da Cidade (Lei 10.257/2001), que regulamenta os arts. 182 e 183 da CF, torna o plano diretor obrigatório para cidades com mais de:",
["5 mil habitantes.","20 mil habitantes.","100 mil habitantes.","500 mil habitantes."],1,
"Também para integrantes de regiões metropolitanas, áreas de interesse turístico e outras hipóteses legais. O plano diretor deve ser revisto pelo menos a cada 10 anos.",
"20 mil habitantes: número da própria Constituição (art. 182, § 1º).",
["cf"],["vcg"]);

/* ---------------- DUPLICATAS: questões já existentes que correspondem a itens dos simulados ---------------- */
const SIM_DUPS = [
  [1,3,"o termo destacado pode ser substituído, sem alteração de sentido, por:"],
  [1,8,"Duas rondas passam pela praça"],
  [1,10,"Um furto foi cometido por exatamente um"],
  [1,14,"O tipo de backup que copia apenas"],
  [1,19,"O trem turístico Maria Fumaça"],
  [1,24,"São medidas cautelares diversas da prisão previstas"],
  [1,25,"Pelo Estatuto dos Servidores de São João del-Rei, a posse"],
  [1,26,"NÃO é princípio mínimo de atuação"],
  [1,27,"De acordo com a Lei Municipal nº 6.051/2024, a Guarda Civil Municipal de São João del-Rei é:"],
  [1,29,"Após as alterações da Lei nº 14.230/2021"],
  [2,4,"Há erro no emprego do acento grave"],
  [2,10,"Em uma urna há 3 bolas azuis"],
  [2,11,"ao selecionar um arquivo e pressionar Shift + Delete"],
  [2,14,"Sobre o uso de ferramentas de IA generativa"],
  [2,16,"A Vila de São João del-Rei foi elevada à categoria de CIDADE"],
  [2,22,"Compete aos Municípios, nos termos do art. 30"],
  [2,27,"A estrutura hierárquica da GCM, conforme o art. 28"],
  [2,28,"Segundo o art. 106 do ECA"],
  [3,3,"Prefiro mais patrulhar"],
  [3,4,"Está correta quanto à colocação pronominal"],
  [3,5,"De acordo com o Acordo Ortográfico vigente, todas as palavras"],
  [3,8,"Numa turma de 40 candidatos"],
  [3,10,"Quantos divisores naturais tem o número 360"],
  [3,14,"o campo que permite incluir destinatários sem que os demais"],
  [3,18,"O conjunto arquitetônico e urbanístico de São João del-Rei foi tombado"],
  [3,24,"O servidor que EXIGE, para si"],
  [3,25,"a proposta de emenda à Lei Orgânica"],
  [3,27,"As sanções disciplinares previstas no Regimento Interno"],
  [3,30,"Sobre a Lei de Tortura, assinale a correta"]
];
SIM_DUPS.forEach(([s, n, frag]) => {
  const hit = QS.find(x => (x.text + JSON.stringify(x.opts)).includes(frag) && !x.vs);
  if (hit) hit.vs = [s, n]; else console.warn("DUP não encontrada", s, n, frag);
});
