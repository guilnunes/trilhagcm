// ===== LOTE 14: questões reais de Raciocínio Lógico (Estratégia, curso 401340), reescritas e adaptadas para 4 alternativas =====
E.rl0 = ["Raciocínio Lógico, Aula 00: Estruturas lógicas I", EC + "401340/aulas/4040803"];
E.rl3 = ["Raciocínio Lógico, Aula 03: Quantificadores", EC + "401340/aulas/4040806"];
E.rl4 = ["Raciocínio Lógico, Aula 04: Argumentos", EC + "401340/aulas/4040807"];
E.rl8 = ["Raciocínio Lógico, Aula 08: Conjuntos numéricos", EC + "401340/aulas/4040811"];
E.rl10 = ["Raciocínio Lógico, Aula 10: Módulo e funções", EC + "401340/aulas/4040813"];

/* Aula 00: proposições e conectivos */
q("rl",1,"Lógica proposicional",
"Considere a proposição: 'Se Gilmar corre e Priscila treina, então Rafael nada.' Sendo p: Gilmar corre; q: Priscila treina; r: Rafael nada, a representação simbólica correta é:",
["p → q","(p ∧ q) → r","(p ∨ q) → r","p ∧ (q → r)"],1,
"O 'se... então' é a condicional (→). O antecedente é 'Gilmar corre E Priscila treina' (p ∧ q), e o consequente é 'Rafael nada' (r). Logo, (p ∧ q) → r.",
"Os parênteses importam: o 'e' está todo dentro do 'se'.",
[],["rl0","vrl"]); SRC("IBGP, Pref. Monte Negro, 2025");

q("rl",1,"Lógica proposicional",
"Analise: I. Ela foi a melhor aluna da turma em 2022. II. Mário foi diretor do Colégio Liceu em 2020. III. x + y é um número par. É correto afirmar:",
["Todas são sentenças abertas.","Apenas III é sentença aberta.","Apenas I e III são sentenças abertas.","Apenas I é sentença aberta."],2,
"Sentença aberta tem termo indeterminado (variável), e por isso não dá para dizer se é verdadeira ou falsa. Em I, 'ela' não identifica ninguém; em III, x e y são variáveis. II identifica o sujeito e é proposição.",
"Pronome sem referente ('ele', 'ela', 'alguém') ou variável (x) = sentença aberta.",
[],["rl0"]); SRC("Pref. Irauçuba, 2022");

q("rl",1,"Lógica proposicional",
"São proposições: I. Brasília é a capital do Brasil. II. 4 + 3 = 7. III. Estude para ser aprovado! IV. Todo número par é divisível por 2.",
["apenas I e II.","apenas I e IV.","apenas I, II e IV.","I, II, III e IV."],2,
"Proposição é oração declarativa que pode ser julgada como verdadeira ou falsa. Frases imperativas (III), interrogativas e exclamativas não são proposições. Expressões matemáticas fechadas (II) são.",
"Ordem, pergunta, exclamação e desejo não são proposições.",
[],["rl0","vrl"]); SRC("FUNDATEC, Polícia Civil/RS, 2026");

q("rl",1,"Lógica proposicional",
"O princípio segundo o qual uma proposição NÃO pode ser verdadeira e falsa ao mesmo tempo é o princípio:",
["do terceiro excluído.","da identidade.","da não contradição.","da ambiguidade."],2,
"Não contradição: não pode ser V e F ao mesmo tempo. Terceiro excluído: ou é V ou é F, não há terceira opção. Identidade: uma proposição verdadeira é sempre verdadeira.",
"Não contradição = 'não as duas'. Terceiro excluído = 'não existe terceira'.",
[],["rl0"]); SRC("Pref. São José dos Basílios, 2023");

q("rl",1,"Negação",
"A negação da proposição 'Está quente em Paraí' é:",
["Está frio em Paraí.","Se está quente em Paraí, então chove.","Está quente em Paraí ou frio.","Não é verdade que está quente em Paraí."],3,
"Para negar uma proposição simples, acrescenta-se 'não' ou 'não é verdade que'. Antônimo (frio) não é negação: pode não estar quente nem frio (morno).",
"Negar não é usar o contrário: 'não quente' não é o mesmo que 'frio'.",
[],["rl0","rl2"]); SRC("Pref. Paraí, 2019");

q("rl",1,"Lógica proposicional",
"Para que a proposição p ∧ ¬q seja FALSA:",
["basta que p seja verdadeira ou que q seja falsa.","basta que p seja falsa ou que q seja verdadeira.","é necessário que p seja verdadeira e q seja falsa.","é necessário que p seja falsa e q seja verdadeira."],1,
"A conjunção só é verdadeira quando as duas partes são verdadeiras (p V e ¬q V, ou seja, q F). Para ser falsa, basta uma parte falsa: p falsa OU ¬q falsa (q verdadeira).",
"Conjunção (e): uma parte falsa já derruba tudo.",
[],["rl0","vrl"]); SRC("Pref. Santana do Parnaíba, 2022");

q("rl",1,"Lógica proposicional",
"Para que a proposição ¬p ∨ ¬q seja FALSA:",
["basta que p ou q seja verdadeira.","basta que p ou q seja falsa.","é necessário que p e q sejam verdadeiras.","é necessário que p e q sejam falsas."],2,
"A disjunção (ou) só é falsa quando as duas partes são falsas: ¬p F e ¬q F, isto é, p V e q V.",
"Disjunção (ou): só é falsa se tudo for falso.",
[],["rl0"]); SRC("Pref. Santana do Parnaíba, 2022");

/* Aula 01: estruturas lógicas II (precedência, tradução e tabela-verdade) */
q("rl",1,"Lógica proposicional",
"Na proposição (p ∨ ¬q) → (p ∧ q), o operador de MAIOR prioridade é:",
["a negação (¬q).","a disjunção (∨).","a conjunção (∧).","a condicional (→)."],0,
"Ordem de precedência: negação, depois conjunção, disjunção, condicional e, por último, bicondicional. Os parênteses sempre vêm antes de tudo.",
"Negação primeiro; condicional e bicondicional por último.",
[],["rl1"]); SRC("Pref. Farroupilha, 2018");

q("rl",1,"Lógica proposicional",
"Sendo p: Ana fala inglês; q: Ana fala alemão; r: Ana fala português, a forma simbólica de 'É falso que Ana fala alemão ou português, mas não fala inglês' é:",
["¬q ∨ ¬r ∧ ¬p","¬(q ∨ r) ∧ p","¬((q ∨ r) ∧ ¬p)","¬((q ∨ r) ∧ p)"],2,
"'Mas' equivale a 'e'. A frase interna é '(alemão ou português) e não inglês' = (q ∨ r) ∧ ¬p. O 'é falso que' nega tudo: ¬((q ∨ r) ∧ ¬p).",
"MAS, CONTUDO, PORÉM = conjunção (e).",
[],["rl1","vrl"]); SRC("Pref. Irauçuba, 2022");

q("rl",1,"Lógica proposicional",
"Sendo p: Eu estudo para um concurso; q: Eu me dedico com afinco, a proposição 'Ao estudar para um concurso, eu me dedico com afinco' tem a estrutura:",
["p ∧ q","p ↔ q","p ∨ q","p → q"],3,
"Não há conectivo explícito, mas o sentido é 'quando (se) estudo, então me dedico': condicional. Expressões como 'quando', 'sempre que', 'ao' + infinitivo costumam indicar p → q.",
"'Quando', 'sempre que', 'toda vez que', 'caso': condicional.",
[],["rl1"]); SRC("Pref. São Cristóvão, 2023");

q("rl",1,"Equivalências",
"Uma proposição equivalente a 'Você faltou com a verdade' é:",
["Você não falou a verdade.","Você não falou mentira.","Você faltou com a mentira.","Você falou a verdade."],0,
"'Faltar com a verdade' significa não dizer a verdade. As demais alternativas afirmam o contrário ou mudam o sentido.",
"Leia o sentido da expressão antes de pensar em símbolos.",
[],["rl1"]); SRC("CEBRASPE, Polícia Militar/SC, 2023");

q("rl",1,"Tabela-verdade",
"Preenchendo a coluna de ¬p ∨ q nas linhas (p, q) = (V,V), (V,F), (F,V), (F,F), nessa ordem, obtém-se:",
["V, F, F, V.","F, V, V, F.","V, F, V, V.","F, F, F, F."],2,
"Linha 1: ¬p = F, q = V, F ∨ V = V. Linha 2: F ∨ F = F. Linha 3: V ∨ V = V. Linha 4: V ∨ F = V. Resultado: V, F, V, V (é a mesma tabela de p → q).",
"¬p ∨ q é equivalente a p → q.",
[],["rl1","rl2"]); SRC("FUNDATEC, Pref. Xangri-lá, 2025");

q("rl",1,"Tabela-verdade",
"Para R(p, q) = ¬(p ∨ q) ∧ ¬p, a última coluna da tabela-verdade, nas linhas (V,V), (V,F), (F,V), (F,F), é:",
["F, F, F, V.","V, F, F, F.","F, V, V, F.","F, F, V, V."],0,
"¬(p ∨ q) só é V quando p e q são F (última linha). Nessa linha, ¬p também é V, então R é V. Nas demais, ¬(p ∨ q) é F, e a conjunção é F.",
"Conjunção com uma parte falsa: F.",
[],["rl1"]); SRC("CPCON/UEPB, Pref. Nazarezinho, 2025");

q("rl",1,"Tabela-verdade",
"Sobre (p → q) ∨ (r ↔ p), analise: I. É composta por 3 proposições simples. II. Sua tabela-verdade tem 16 linhas. III. É tautologia. IV. É contingência. Está correto apenas:",
["IV.","I, II e IV.","II e III.","I e IV."],3,
"Há 3 proposições simples (p, q, r), logo 2³ = 8 linhas, não 16. Com p = V, q = F e r = F: p → q é F e r ↔ p é F, então a proposição é F. Como ela também assume V em outras linhas, é contingência, não tautologia.",
"Número de linhas = 2 elevado ao número de proposições simples.",
[],["rl1"]); SRC("CPCON/UEPB, Pref. Condado, 2026");

/* Aula 02: equivalências e negações */
q("rl",1,"Equivalências",
"Uma proposição equivalente a 'Se a prova está difícil, então Antônio não será aprovado' é:",
["A prova está difícil e Antônio não será aprovado.","Se Antônio for aprovado, então a prova não está difícil.","A prova está fácil e Antônio foi aprovado.","Se a prova não está difícil, então Antônio será aprovado."],1,
"Contrapositiva: p → q equivale a ¬q → ¬p. Aqui, p → ¬a vira a → ¬p: 'Se Antônio for aprovado, então a prova não está difícil'. Negar os dois lados sem inverter (última alternativa) NÃO é equivalente.",
"Contrapositiva: inverte E nega. Só negar ou só inverter não vale.",
[],["rl2","vrl"]); SRC("Pref. Bagé, 2020");

q("rl",1,"Equivalências",
"Equivale a 'Se o oficial faltou ao serviço, então a instrução foi cancelada':",
["O oficial não faltou ao serviço ou a instrução foi cancelada.","O oficial não faltou ao serviço ou a instrução não foi cancelada.","O oficial faltou ao serviço ou a instrução foi cancelada.","O oficial faltou ao serviço e a instrução não foi cancelada."],0,
"p → q equivale a ¬p ∨ q (regra do 'nega a primeira, mantém a segunda, troca por ou'). A última alternativa (p ∧ ¬q) é a NEGAÇÃO da condicional.",
"Equivalência NEYMAR: Nega a primeira, mantém a segunda, troca 'se então' por 'ou'.",
[],["rl2","vrl"]); SRC("Polícia Militar/RN, 2023");

q("rl",1,"Equivalências",
"É equivalente a 'Se Marcos cozinha, então ele não lava a louça':",
["Marcos não cozinha ou não lava a louça.","Marcos não cozinha ou lava a louça.","Se Marcos não lava a louça, então ele cozinha.","Se Marcos lava a louça, então ele cozinha."],0,
"c → ¬l equivale a ¬c ∨ ¬l: 'Marcos não cozinha ou não lava a louça'. A contrapositiva seria 'Se lava a louça, então não cozinha'.",
"Mantenha a segunda parte exatamente como está (aqui ela já tem 'não').",
[],["rl2"]); SRC("Pref. Santana do Parnaíba, 2023");

q("rl",1,"Negação",
"Sabe-se que NÃO é verdade que 'o policial de serviço pode dormir e pode usar a viatura para fins pessoais'. Logo:",
["O policial pode dormir ou pode usar a viatura para fins pessoais.","O policial não pode dormir ou não pode usar a viatura para fins pessoais.","O policial pode dormir ou não pode usar a viatura.","O policial não pode dormir e não pode usar a viatura."],1,
"Lei de De Morgan: ¬(p ∧ q) equivale a ¬p ∨ ¬q. Nega as duas partes e troca 'e' por 'ou'.",
"Negação do 'e': nega tudo e troca por 'ou'. Negação do 'ou': nega tudo e troca por 'e'.",
[],["rl2","vrl"]); SRC("Polícia Militar/CE, 2023");

q("rl",1,"Negação",
"A negação de 'Estou doente e, se o médico permite, então viajo' é:",
["Estou doente e o médico permite e não viajo.","Não estou doente ou o médico permite e não viajo.","Não estou doente e o médico permite e viajo.","Estou doente ou o médico não permite."],1,
"A sentença é d ∧ (m → v). Negação: ¬d ∨ ¬(m → v), e ¬(m → v) = m ∧ ¬v. Resultado: 'Não estou doente OU (o médico permite e não viajo)'.",
"Negação da condicional: mantém a primeira E nega a segunda (MANÉ).",
[],["rl2"]); SRC("Corpo de Bombeiros/SC, 2023");

q("rl",1,"Equivalências",
"Uma proposição equivalente a 'Adriano é pai se, e somente se, Giuliano é filho' é:",
["Se Giuliano não é filho, então Adriano não é pai, e se Adriano não é pai, então Giuliano não é filho.","Adriano é pai e Giuliano não é filho.","Ou Adriano é pai, ou Giuliano é filho.","Se Adriano é pai, então Giuliano é filho (apenas)."],0,
"p ↔ q equivale a (p → q) ∧ (q → p), ou à forma com as contrapositivas: (¬q → ¬p) ∧ (¬p → ¬q). Uma única condicional não basta. 'Ou... ou...' (disjunção exclusiva) é a NEGAÇÃO da bicondicional.",
"Bicondicional = ida e volta. 'Ou... ou...' = negação dela.",
[],["rl2"]); SRC("APPGG Pref. São Paulo, 2023");

q("rl",1,"Negação",
"A negação de 'João passa no concurso se, e somente se, João estuda' é:",
["João não passa no concurso se, e somente se, João não estuda.","João não passa e João não estuda.","Ou João passa no concurso, ou João estuda.","Se João passa no concurso, então João estuda."],2,
"A negação da bicondicional é a disjunção exclusiva: 'ou p, ou q' (exatamente uma é verdadeira). Também vale 'p ↔ ¬q'. Negar os dois lados mantendo o ↔ dá uma proposição equivalente à original, não a negação.",
"¬(p ↔ q) = ou p, ou q = p ↔ ¬q.",
[],["rl2"]); SRC("Pref. Vila Lângaro, 2019");

q("rl",1,"Negação",
"Numa auditoria, a regra é: 'Se um relatório apresenta inconsistências, então ele deve ser revisado'. A negação dessa regra é:",
["Um relatório não apresenta inconsistências e é revisado.","Um relatório apresenta inconsistências ou é revisado.","Um relatório apresenta inconsistências e não é revisado.","Se o relatório é revisado, então não apresenta inconsistências."],2,
"¬(p → q) = p ∧ ¬q: mantém a primeira, nega a segunda e troca por 'e'. A regra é quebrada quando há inconsistência e não há revisão.",
"Negação da condicional nunca é outra condicional.",
[],["rl2","vrl"]); SRC("FEPESE, Pref. Campos Novos, 2026");

/* Aula 03: lógica de argumentação com quantificadores */
q("rl",2,"Quantificadores",
"Entre as proposições p: ∃x, x + 1 = 5; q: ∀x, (x + 1)² = x² + 2x + 1; r: x > 0 ⇔ 5x > 0; s: x² = 4 ⇒ x = 2 ∨ x = −2, a única que usa o quantificador UNIVERSAL é:",
["p","q","r","s"],1,
"∀ é o quantificador universal ('para todo'); ∃ é o existencial ('existe pelo menos um'). Só q traz o ∀.",
"∀ = todo. ∃ = existe. ∄ = não existe.",
[],["rl3","vrl"]); SRC("Pref. São Gonçalo, 2022");

q("rl",2,"Quantificadores",
"A negação de 'Todo professor de estatística é professor de lógica' é:",
["Todo professor de estatística não é professor de lógica.","Nenhum professor de estatística é professor de lógica.","Nenhum professor de lógica é professor de estatística.","Existe professor de estatística que não é professor de lógica."],3,
"Para negar 'todo A é B', basta um contraexemplo: 'existe (algum, pelo menos um) A que não é B'. 'Nenhum' é o exagero oposto, não a negação.",
"Negação de TODO: ALGUM... NÃO. Negação de NENHUM: ALGUM.",
[],["rl3","vrl"]); SRC("IPE Saúde, 2022");

q("rl",2,"Quantificadores",
"A negação de 'Nenhuma cobra voa' é:",
["Pelo menos uma cobra voa.","Todas as cobras voam.","Alguns animais que voam não são cobras.","Nenhuma cobra deixa de voar."],0,
"'Nenhum A é B' é negado por 'algum (pelo menos um) A é B'. 'Todas voam' é mais do que a negação exige.",
"Negar 'nenhum' = mostrar que existe pelo menos um.",
[],["rl3"]); SRC("SEFAZ/ES, 2022");

q("rl",2,"Quantificadores",
"Se é FALSA a afirmação 'Existem insetos que não são pretos', então é verdade que:",
["nenhum inseto é preto.","todo inseto é preto.","todos os animais pretos são insetos.","nem todos os insetos são pretos."],1,
"Se a frase é falsa, vale a sua negação. Negar 'existe A que não é B' resulta em 'todo A é B': todo inseto é preto.",
"Frase falsa? Escreva a negação e ela será a verdade.",
[],["rl3"]); SRC("MPE/AL, 2018");

q("rl",2,"Quantificadores",
"O avô disse: 'Com óculos, todas as fotos são nítidas'. Se a frase é FALSA, conclui-se que:",
["sem óculos, todas as fotos são nítidas.","com óculos, nenhuma foto é nítida.","sem óculos, há fotos que não são nítidas.","com óculos, há pelo menos uma foto que não é nítida."],3,
"A condição 'com óculos' fica igual; nega-se só o 'todas são nítidas', que vira 'pelo menos uma não é nítida'. Mudar para 'sem óculos' é trocar o assunto.",
"Mantenha o cenário da frase; negue apenas o quantificador.",
[],["rl3"]); SRC("Câmara de Taubaté, 2022");

q("rl",2,"Quantificadores",
"Uma afirmação logicamente equivalente a 'Todo baiano é um homem feliz' é:",
["Todo homem feliz é baiano.","Um homem que não é feliz não é baiano.","Quem não é baiano não é feliz.","Algum baiano não é feliz."],1,
"'Todo A é B' equivale a 'se é A, então é B', cuja contrapositiva é 'se não é B, então não é A': quem não é feliz não é baiano. Inverter ('todo feliz é baiano') não é equivalente.",
"Todo A é B = Se não é B, não é A.",
[],["rl3"]); SRC("MPE/BA, 2017");

/* Aula 04: argumentação */
q("rl",2,"Argumentos",
"'Um ________ pode ser representado por P1 ∧ P2 ∧ ... ∧ Pn → Q, em que P1, ..., Pn são as ________ e Q é a ________.' Completam a frase:",
["predicado; hipóteses; premissa.","argumento indutivo; variáveis; conclusão.","argumento dedutivo; premissas; conclusão.","argumento válido; premissas; hipótese."],2,
"Num argumento dedutivo, as premissas (P1 a Pn) sustentam a conclusão (Q). Ele é válido se, sendo todas as premissas verdadeiras, a conclusão for necessariamente verdadeira.",
"Premissas = o que se dá. Conclusão = o que se tira.",
[],["rl4"]); SRC("Pref. Limoeiro de Anadia, 2013");

q("rl",2,"Argumentos",
"Das premissas 'Ana vai ao festival ou Rita não vai' e 'Ana não vai ao festival, se Tiago for', conclui-se validamente:",
["Rita e Tiago vão ao festival.","Tiago e Rita não vão.","Se Tiago não for, Rita vai.","Se Rita for ao festival, Tiago não vai."],3,
"'Ana vai ou Rita não vai' equivale a 'se Rita vai, então Ana vai' (r → a). 'Se Tiago for, Ana não vai' tem contrapositiva 'se Ana vai, Tiago não vai' (a → ¬t). Encadeando: r → a → ¬t, logo r → ¬t.",
"Transforme 'ou' em 'se... então' e encadeie as condicionais.",
[],["rl4","rl2"]); SRC("Pref. Penedo, 2023");

q("rl",2,"Argumentos",
"Premissas: P1: Se o desperdício é evitado e as pessoas são conscientes, então o lixo nas ruas diminui. P2: O lixo nas ruas não diminuiu. Uma conclusão válida é:",
["O desperdício foi evitado ou as pessoas foram conscientes.","O desperdício não foi evitado ou as pessoas não foram conscientes.","O desperdício não foi evitado e as pessoas não foram conscientes.","As pessoas foram conscientes."],1,
"Modus tollens: de (d ∧ p) → l e ¬l, conclui-se ¬(d ∧ p), que por De Morgan é ¬d ∨ ¬p. Não dá para afirmar que as DUAS coisas falharam, só que pelo menos uma falhou.",
"Consequente falso derruba o antecedente inteiro; se ele era um 'e', vira 'ou' negado.",
[],["rl4","rl2"]); SRC("Corpo de Bombeiros/SC, 2023");

q("rl",2,"Argumentos",
"Analise: I. Se chove, a rua fica molhada. A rua está molhada. Logo, choveu. II. Se A ganha, B perde. B perdeu. Logo, A ganhou. III. Se estudo, passo na prova. Não passei. Logo, não estudei. Quantos argumentos são válidos?",
["Nenhum.","Apenas 1.","Apenas 2.","Todos os 3."],1,
"I e II afirmam o consequente, o que é falácia (a rua pode estar molhada por outra razão). III é modus tollens (p → q, ¬q, logo ¬p): válido.",
"Afirmar a segunda parte não prova a primeira. Negar a segunda prova que a primeira é falsa.",
[],["rl4"]); SRC("Legalle, Pref. Caxias do Sul, 2025");

q("rl",2,"Argumentos",
"A partir de um conjunto de hipóteses, previu-se um terremoto global, que não ocorreu. Supondo o raciocínio válido, deve-se concluir que:",
["todas as hipóteses são falsas.","pelo menos uma hipótese é falsa.","pelo menos uma hipótese é verdadeira.","a maioria das hipóteses é falsa."],1,
"Num argumento válido, premissas todas verdadeiras levam a conclusão verdadeira. Se a conclusão é falsa, então nem todas as premissas são verdadeiras: pelo menos uma é falsa.",
"Conclusão falsa em argumento válido = alguma premissa falsa (não necessariamente todas).",
[],["rl4"]); SRC("Instituto AOCP, Polícia Militar/PE, 2024");

q("rl",2,"Argumentos",
"Regras: se o uso de CPU passa de 85% por mais de 5 minutos, gera-se alerta crítico; sempre que há alerta crítico, inicia-se um diagnóstico. Hoje um diagnóstico foi iniciado. Logicamente:",
["houve alerta crítico, com certeza.","a CPU passou de 85%, com certeza.","não se pode concluir que houve alerta crítico nem que a CPU passou de 85%.","a CPU não passou de 85%."],2,
"As regras são C → A e A → D. Saber que D ocorreu é afirmar o consequente: o diagnóstico pode ter sido iniciado por outro motivo. Nada se conclui sobre A ou C.",
"Consequente verdadeiro não diz nada sobre o antecedente.",
[],["rl4"]); SRC("FEPESE, Pref. Campos Novos, 2026");

/* Aula 05: raciocínio sequencial */
q("rl",4,"Sequências",
"Numa sequência, o 1º termo é 23 e cada termo, a partir do 2º, é 24 unidades maior que o anterior. O 100º termo é:",
["2423.","2400.","2399.","2324."],2,
"É uma PA com a1 = 23 e razão 24. an = a1 + (n − 1) · r = 23 + 99 · 24 = 23 + 2376 = 2399.",
"Do 1º ao 100º termo há 99 saltos, não 100.",
[],["rl5","vrl"]); SRC("FGV, Corpo de Bombeiros/RJ, 2024");

q("rl",4,"Sequências",
"A sequência 7, 6, 5, 6, 7, 8, 7, 6, 7, 8, 9, 8, 7, 8, 9, 10, ... segue um padrão. A diferença entre o 45º e o 33º termos é:",
["6.","5.","4.","3."],2,
"Agrupe de 5 em 5: (7,6,5,6,7), (8,7,6,7,8), (9,8,7,8,9)... O grupo g começa em 6 + g e segue a, a−1, a−2, a−1, a. O 45º é o 5º termo do grupo 9: a = 15. O 33º é o 3º termo do grupo 7: a = 13, termo = 13 − 2 = 11. Diferença: 15 − 11 = 4.",
"Ache o tamanho do bloco que se repete e localize a posição pelo resto.",
[],["rl5"]); SRC("VUNESP, Pref. Marília, 2023");

q("rl",4,"Sequências",
"Na sequência (−8, −7, −3, 4, 14, __), o próximo termo é:",
["33.","31.","29.","27."],3,
"As diferenças são +1, +4, +7, +10, crescendo de 3 em 3. A próxima é +13: 14 + 13 = 27.",
"Quando a diferença não é fixa, olhe a diferença das diferenças.",
[],["rl5"]); SRC("Instituto AOCP, Pref. João Pessoa, 2021");

q("rl",4,"Sequências",
"Na sequência (100, 80, 40, 20, 10, −10, −5, ...), o termo imediatamente após −5 é:",
["−25.","35.","−20.","−10."],0,
"As operações se alternam: −20, ÷2, −20, ÷2... (100 − 20 = 80; 80 ÷ 2 = 40; 40 − 20 = 20; 20 ÷ 2 = 10; 10 − 20 = −10; −10 ÷ 2 = −5). A próxima é −20: −5 − 20 = −25.",
"Padrões com duas operações alternadas são comuns.",
[],["rl5"]); SRC("Instituto AOCP, Pref. João Pessoa, 2021");

q("rl",4,"Sequências",
"Na sequência 1, 9, 8, 2, 1, 9, 8, 3, 1, 9, 8, ( ), o número que completa é:",
["4.","5.","6.","7."],0,
"O bloco 1, 9, 8 se repete, e depois dele vem um contador que aumenta: 2, 3, 4.",
"Separe a parte fixa da parte que varia.",
[],["rl5"]); SRC("FUNDATEC, Pref. Tramandaí, 2021");

q("rl",4,"Sequências",
"Na sequência de letras K L M N N M K K L M N N M K ..., a letra na posição 2020 é:",
["K.","L.","M.","N."],3,
"O bloco K L M N N M K tem 7 letras. 2020 ÷ 7 = 288 com resto 4. A 4ª letra do bloco é N.",
"Posição n em ciclo de tamanho k: use o resto de n ÷ k (resto 0 = último do bloco).",
[],["rl5"]); SRC("IDIB, Pref. Araguaína, 2020");

/* Aula 06: problemas de lógica (associação, verdades e mentiras) */
q("rl",4,"Problemas de lógica",
"Um soldado, um cabo e um sargento trabalham nas salas α, β e γ, nas funções P1, P2 e P3, não necessariamente nessa ordem. O sargento é P3; quem trabalha na sala α é o P2; o soldado não trabalha na sala γ nem é P2. Quem trabalha na sala α e quem é o P1 são, respectivamente:",
["o soldado e o sargento.","o cabo e o sargento.","o cabo e o soldado.","o sargento e o cabo."],2,
"O sargento é P3 e o soldado não é P2, então o soldado é P1 e o cabo é P2. Como a sala α é do P2, o cabo está em α. O soldado não está em γ nem em α: fica em β; o sargento, em γ.",
"Monte a tabela e elimine primeiro as certezas.",
[],["rl6","vrl"]); SRC("IDECAN, Polícia Militar/CE, 2023");

q("rl",4,"Verdades e mentiras",
"Um objeto foi guardado atrás de uma de três portas. Lúcia: 'Está na porta da esquerda!'. Carla: 'Está na porta da direita!'. Vanessa: 'Lúcia está mentindo!'. Só uma disse a verdade. Pode-se afirmar com certeza que o objeto:",
["está na porta da esquerda.","está na porta do meio.","não está na porta da direita.","está na porta da direita."],2,
"Lúcia e Vanessa se contradizem, então exatamente uma delas fala a verdade, e Carla mente: o objeto não está à direita. Se Lúcia diz a verdade, está à esquerda; se é Vanessa, está no meio. Só é certo que não está à direita.",
"Duas falas contraditórias: uma é V e a outra é F. Use isso para descobrir os demais.",
[],["rl6"]); SRC("Instituto AOCP, IF/RO, 2022");

q("rl",4,"Verdades e mentiras",
"Num sorteio entre motorista, médico, operário, tesoureiro e enfermeira, só um venceu. Motorista: 'Não venci'. Médico: 'O operário venceu'. Operário: 'A enfermeira venceu'. Tesoureiro: 'O motorista disse a verdade'. Enfermeira: 'O médico mentiu'. Se só um mentiu, o vencedor foi:",
["o operário.","a enfermeira.","o motorista.","o médico."],1,
"Médico e operário apontam vencedores diferentes, então um deles mente; logo os outros três dizem a verdade. A enfermeira diz que o médico mentiu (verdade), então o operário fala a verdade: a enfermeira venceu.",
"Com um único mentiroso, ache o par de falas incompatíveis.",
[],["rl6"]); SRC("Legalle, Pref. Hulha Negra, 2022");

q("rl",4,"Verdades e mentiras",
"Uma janela foi quebrada. Cristina: 'Foi Alice'. Mariana: 'Fui eu'. Alice: 'Foi Mariana'. Só uma disse a verdade, e Mariana mentiu. Então:",
["Mariana quebrou a janela.","Alice quebrou a janela, e Cristina disse a verdade.","Cristina quebrou a janela.","Alice disse a verdade."],1,
"Se Mariana mentiu, não foi ela; então a fala de Alice ('foi Mariana') também é falsa. Sobra Cristina como a única verdadeira: foi Alice.",
"Comece pela informação certa (Mariana mentiu) e propague.",
[],["rl6"]); SRC("Consulplan, Pref. Caeté/MG, 2022");

q("rl",4,"Problemas de lógica",
"Dois pacotes de castanha pesam o mesmo que um de ameixa e um de chá verde. Um de castanha e um de ameixa pesam o mesmo que um de castanha e cinco de chá. Pondo 3 pacotes de castanha num prato e 2 de ameixa no outro, para equilibrar a balança é preciso:",
["acrescentar 1 pacote de chá ao prato das castanhas.","acrescentar 1 pacote de chá ao prato das ameixas.","acrescentar 1 pacote de castanha ao prato das ameixas.","nada, pois já está equilibrada."],0,
"Da 2ª informação: A = 5V. Da 1ª: 2C = A + V = 6V, logo C = 3V. Então 3C = 9V e 2A = 10V. O prato das castanhas tem 1V a menos: acrescente 1 chá a ele.",
"Escreva tudo na mesma unidade (aqui, pacotes de chá).",
[],["rl6","rl9"]); SRC("FCC, Pref. Jaboatão dos Guararapes, 2024");

q("rl",4,"Problemas de lógica",
"Há 5 gavetas: 1ª: camisa e calça; 2ª: camisa, calça, meia, lenço e casaco; 3ª: calça; 4ª: camisa, casaco, calça e meia; 5ª: casaco e camisa. João quer uma camisa, uma calça, uma meia, um lenço e um casaco, tirando uma peça de cada gaveta. Da 5ª gaveta ele tira:",
["o casaco.","a camisa.","a meia.","a calça."],0,
"A 3ª só tem calça. O lenço só existe na 2ª. A 1ª então dá a camisa (a calça já veio da 3ª). A 5ª fica com o casaco (a camisa já foi), e a 4ª dá a meia.",
"Comece pelas gavetas com uma única opção possível.",
[],["rl6"]); SRC("FCC, Pref. Jaboatão dos Guararapes, 2024");

/* Aula 07: conjuntos */
q("rl",2,"Conjuntos",
"Num grupo de 50 guardas, 35 estão de bermuda e 27 de boné. Todos usam bermuda ou boné. Quantos usam bermuda e boné?",
["35.","27.","15.","12."],3,
"Pela inclusão e exclusão: n(A ∪ B) = n(A) + n(B) − n(A ∩ B). 50 = 35 + 27 − x, logo x = 62 − 50 = 12.",
"A soma passa do total? O excesso é a interseção.",
[],["rl7","vrl"]); SRC("FGV, Guarda Civil Municipal São José dos Campos, 2024");

q("rl",2,"Conjuntos",
"De 21 policiais, 9 atuaram na operação Delta, 11 na Águia, 8 na Brasa; 4 em Delta e Águia, 3 em Águia e Brasa, 2 em Delta e Brasa; 1 não participou de nenhuma. Quantos participaram APENAS da Brasa?",
["1.","2.","3.","4."],3,
"Participantes: 21 − 1 = 20. Inclusão e exclusão: 20 = 9 + 11 + 8 − 4 − 3 − 2 + x, logo x = 1 (as três). Só Brasa = 8 − (2 − 1) − (3 − 1) − 1 = 8 − 1 − 2 − 1 = 4.",
"No diagrama de Venn, preencha do centro (três operações) para fora.",
[],["rl7"]); SRC("UFMT, Corpo de Bombeiros/MT, 2022");

q("rl",2,"Conjuntos",
"Sendo A = {pessoas que moram em São Gonçalo} e B = {pessoas que trabalham em Niterói}, o conjunto A − (A − B) é formado por pessoas que:",
["moram em São Gonçalo e trabalham em Niterói.","moram em Niterói e trabalham em São Gonçalo.","moram em São Gonçalo e não trabalham em Niterói.","não moram em São Gonçalo."],0,
"A − B são os moradores de São Gonçalo que não trabalham em Niterói. Tirando-os de A, sobram os que moram em São Gonçalo e trabalham em Niterói: A − (A − B) = A ∩ B.",
"A − (A − B) = A ∩ B.",
[],["rl7"]); SRC("SELECON, Pref. São Gonçalo, 2022");

q("rl",2,"Conjuntos",
"Dados A = {0, 1, 2, 3}, B = {2, 4, 5, 6} e C = {2, 5, 7, 9}, o conjunto (A ∪ B) − (B ∩ C) é:",
["{0, 1, 3, 4, 6}","{0, 1, 2, 3, 5, 7, 9}","{0, 1, 2, 3, 4, 5, 6}","{2, 5}"],0,
"A ∪ B = {0, 1, 2, 3, 4, 5, 6}. B ∩ C = {2, 5}. Retirando 2 e 5: {0, 1, 3, 4, 6}.",
"Resolva cada parêntese antes da diferença.",
[],["rl7"]); SRC("Consulplan, Pref. Gonçalves/MG, 2022");

q("rl",2,"Conjuntos",
"Sendo A = {2, 4, 6, 8, 10, 12} e B = {2, 4, 6, 8, 10, 12, 14, 16}, é correto afirmar:",
["A contém B.","A está contido em B.","B está contido em A.","B pertence a A."],1,
"Todo elemento de A está em B, então A ⊂ B (A está contido em B; B contém A). 'Pertence' relaciona elemento e conjunto, não dois conjuntos.",
"Contido/contém: conjunto com conjunto. Pertence: elemento com conjunto.",
[],["rl7"]); SRC("FUNDATEC, Pref. Tramandaí, 2021");

/* Aula 08: conjuntos numéricos */
q("rl",2,"Conjuntos numéricos",
"Sendo a e b irracionais distintos, julgue: I. a + b é sempre irracional. II. a × b é sempre irracional. III. aⁿ é sempre irracional, para todo n natural.",
["Apenas I está certo.","Apenas II está certo.","Apenas III está certo.","Nenhum item está certo."],3,
"Contraexemplos: √2 + (−√2) = 0 (racional); √2 × √8 = √16 = 4 (racional); (√2)² = 2 (racional). Logo, nenhuma das afirmações vale sempre.",
"'Sempre' cai com um único contraexemplo.",
[],["rl8"]); SRC("CEBRASPE, Pref. Camaçari, 2024");

q("rl",2,"Conjuntos numéricos",
"NÃO pertence ao conjunto dos números irracionais:",
["√2 + 1","π","e (número de Euler)","8"],3,
"8 é natural (logo também inteiro, racional e real). π, e e √2 + 1 têm infinitas casas decimais não periódicas: são irracionais.",
"Raiz quadrada de número que não é quadrado perfeito é irracional.",
[],["rl8"]); SRC("IDECAN, Corpo de Bombeiros/ES, 2022");

q("rl",2,"Conjuntos numéricos",
"Palíndromo é o número que se lê igual nos dois sentidos (como 5225). Sendo X o maior palíndromo de 4 algarismos e Y o menor de 5 algarismos, X + Y é:",
["20000","20020","20099","20202"],0,
"O maior palíndromo de 4 algarismos é 9999; o menor de 5 algarismos é 10001 (não pode começar com 0). 9999 + 10001 = 20000.",
"O primeiro algarismo de um número não pode ser zero.",
[],["rl8"]); SRC("FCC, Pref. São José do Rio Preto, 2019");

q("rl",2,"Conjuntos numéricos",
"Avalie: I. De 7 a 20 há mais ímpares do que pares. II. A soma dos ímpares de 4 a 15 é igual à soma dos pares de 7 a 18. III. A soma de dois ímpares é sempre par. Está correto apenas:",
["II.","III.","I e II.","I e III."],1,
"I: de 7 a 20 há 7 ímpares (7 a 19) e 7 pares (8 a 20): falso. II: 5+7+9+11+13+15 = 60 e 8+10+12+14+16+18 = 78: falso. III: ímpar + ímpar = par: verdadeiro.",
"Conte e some de verdade: a banca aposta na intuição.",
[],["rl8","rl9"]); SRC("FCM, Pref. Timóteo/MG, 2022");

q("rl",2,"Conjuntos numéricos",
"Julgue: ( ) 34 é sucessor de 35. ( ) Todo número natural tem antecessor natural, menos o zero. ( ) 3, 5, 7, 9, 11 é uma sequência de naturais pares. A ordem correta é:",
["F, V, F.","V, F, V.","F, F, V.","V, V, F."],0,
"34 é ANTECESSOR de 35. No conjunto dos naturais, só o zero não tem antecessor. 3, 5, 7, 9, 11 são ímpares.",
"Sucessor = +1; antecessor = −1.",
[],["rl8"]); SRC("FUNDATEC, Pref. Imbé, 2020");

q("rl",2,"Conjuntos numéricos",
"Sobre os números naturais: I. A soma de dois pares é sempre par. II. A soma de dois ímpares é sempre ímpar. III. Há infinitos números primos. Estão corretas:",
["apenas I.","apenas II.","apenas I e II.","apenas I e III."],3,
"Par + par = par (I certa). Ímpar + ímpar = par (II errada: 3 + 5 = 8). Euclides provou que os primos são infinitos (III certa).",
"Ímpar + ímpar = par; par + ímpar = ímpar.",
[],["rl8"]); SRC("FUNDATEC, Pref. Paraí, 2019");

/* Aula 09: operações básicas */
q("rl",2,"Operações básicas",
"Ângela e Beatriz começaram a ler o mesmo livro no mesmo dia. Ângela leu 20 páginas por dia e terminou em 18 dias; Beatriz leu 15 páginas por dia. Depois que Ângela terminou, Beatriz ainda levou quantos dias?",
["2.","3.","4.","6."],3,
"O livro tem 20 × 18 = 360 páginas. Beatriz leva 360 ÷ 15 = 24 dias. Diferença: 24 − 18 = 6 dias.",
"Ache primeiro o total (páginas) e depois divida pelo ritmo de cada uma.",
[],["rl9","vrl"]); SRC("FGV, Guarda Civil Municipal São José dos Campos, 2024");

q("rl",2,"Operações básicas",
"Um tenente chamou para uma reunião 4 sargentos, e cada sargento trouxe 6 cabos. O total de pessoas na reunião foi:",
["10.","24.","28.","29."],3,
"Cabos: 4 × 6 = 24. Somando os 4 sargentos e o próprio tenente: 24 + 4 + 1 = 29.",
"Não esqueça quem convocou a reunião.",
[],["rl9"]); SRC("FGV, Guarda Civil Municipal São José dos Campos, 2024");

q("rl",2,"Operações básicas",
"Na subtração Y4 − 5X = 36, em que X e Y são algarismos, os valores são:",
["X = 8 e Y = 8.","X = 8 e Y = 9.","X = 9 e Y = 8.","X = 9 e Y = 9."],1,
"Na unidade, 4 − X precisa terminar em 6 com 'empréstimo': 14 − X = 6, logo X = 8. Na dezena, Y − 1 − 5 = 3, logo Y = 9. Conferindo: 94 − 58 = 36.",
"Confira a resposta fazendo a conta de volta: 58 + 36 = 94.",
[],["rl9"]); SRC("OBJETIVA, Pref. Simão Dias, 2022");

q("rl",2,"Operações básicas",
"Sendo X = 56³, o valor de X ÷ 2 − 1 é:",
["175.616.","3.135.","87.807.","87.808."],2,
"56² = 3.136 e 56³ = 3.136 × 56 = 175.616. Dividindo por 2: 87.808. Menos 1: 87.807.",
"Faça a divisão antes da subtração (ordem das operações).",
[],["rl9"]); SRC("OMNI, Pref. São João Batista, 2021");

q("rl",2,"Operações básicas",
"Para fabricar 1.000 unidades de um produto, há custo fixo de R$ 500,00 e custo variável de R$ 5,00 por unidade. O custo total é:",
["R$ 550,00.","R$ 5.500,00.","R$ 1.505,00.","R$ 5.000,00."],1,
"Custo total = fixo + variável × quantidade = 500 + 5 × 1.000 = 500 + 5.000 = R$ 5.500,00.",
"Custo fixo entra uma vez só; o variável multiplica pela quantidade.",
[],["rl9"]); SRC("CEBRASPE, Pref. Camaçari, 2024");

/* Aula 10: módulo */
q("rl",3,"Módulo",
"Para a função f(x) = |x − 4|, é correto afirmar:",
["f(−1) = −5.","f(−3) + f(3) = 0.","f(−2) = f(10).","f(0) = −4."],2,
"f(−2) = |−6| = 6 e f(10) = |6| = 6. Módulo nunca é negativo: f(−1) = 5, f(0) = 4, e f(−3) + f(3) = 7 + 1 = 8.",
"Módulo é a distância até o zero: sempre ≥ 0.",
[],["rl10"]); SRC("FAFIPA, Pref. Arapongas, 2020");

q("rl",3,"Módulo",
"Para f(x) = 1 − |x + 2|, o valor de f(−3) é:",
["−1.","0.","1.","2."],1,
"f(−3) = 1 − |−3 + 2| = 1 − |−1| = 1 − 1 = 0.",
"Resolva o que está dentro do módulo primeiro.",
[],["rl10"]); SRC("MS Concursos, SEAD Passo Fundo, 2016");

q("rl",3,"Módulo",
"Quando x ≤ 2, a expressão |x − 2| + |3 − x| é igual a:",
["5.","2x − 5.","x + 2.","5 − 2x."],3,
"Se x ≤ 2, então x − 2 ≤ 0, logo |x − 2| = 2 − x; e 3 − x > 0, logo |3 − x| = 3 − x. Soma: 5 − 2x. Teste com x = 0: 2 + 3 = 5 = 5 − 0.",
"Teste um valor do intervalo para conferir.",
[],["rl10"]); SRC("Instituto AOCP, IBC, 2013");

/* Aula 11: divisibilidade, MMC e MDC */
q("rl",2,"Divisibilidade",
"Sendo m um algarismo, o número 3m133m432 é divisível por 18 para:",
["m = 1.","m = 4.","m = 5.","m = 7."],1,
"Divisível por 18 = divisível por 2 e por 9. Termina em 2 (par). Soma dos algarismos: 3 + m + 1 + 3 + 3 + m + 4 + 3 + 2 = 19 + 2m, que deve ser múltiplo de 9: 19 + 8 = 27, logo m = 4.",
"Por 9: soma dos algarismos múltipla de 9. Por 18: isso e ser par.",
[],["rl11","vrl"]); SRC("Pref. Joinville, 2024");

q("rl",2,"MMC e MDC",
"Marcelo visita um supermercado de 10 em 10 dias e Francisco, de 12 em 12 dias. Se hoje foram juntos, a próxima visita conjunta será daqui a:",
["24 dias.","30 dias.","45 dias.","60 dias."],3,
"Encontros periódicos: MMC(10, 12). 10 = 2 × 5 e 12 = 2² × 3, então MMC = 2² × 3 × 5 = 60.",
"'Quando voltam a coincidir?' = MMC. 'Maior tamanho possível de grupos iguais' = MDC.",
[],["rl11"]); SRC("Pref. Buritama, 2024");

q("rl",2,"MMC e MDC",
"Às 6h um padeiro assa juntas fornadas de pão salgado, doce e de queijo. Depois, assa pão salgado a cada 2 horas, doce a cada 3 e de queijo a cada 4. As três voltam a sair juntas às:",
["12 horas.","14 horas.","16 horas.","18 horas."],3,
"MMC(2, 3, 4) = 12 horas. 6h + 12h = 18h.",
"Some o MMC ao horário inicial.",
[],["rl11"]); SRC("VUNESP, Pref. Piracicaba, 2023");

q("rl",2,"MMC e MDC",
"Uma quantidade menor que 100 unidades pode ser separada, sem sobras, em grupos de 12 ou de 14. Para separá-la em grupos de 13, o mínimo de unidades a acrescentar é:",
["5.","6.","7.","8."],2,
"A quantidade é múltiplo comum de 12 e 14: MMC = 84 (o próximo, 168, passa de 100). O múltiplo de 13 seguinte a 84 é 91. Faltam 91 − 84 = 7.",
"Múltiplos de 13: 78, 91, 104...",
[],["rl11"]); SRC("VUNESP, Pref. Sertãozinho, 2023");

q("rl",2,"MMC e MDC",
"Num caminhão dos bombeiros, a escada é revisada a cada 2 dias, os extintores a cada 3 e as mangueiras a cada 5. Hoje tudo foi revisado junto. Isso se repetirá em:",
["10 dias.","15 dias.","30 dias.","40 dias."],2,
"2, 3 e 5 são primos entre si: MMC = 2 × 3 × 5 = 30 dias.",
"Números primos entre si: o MMC é o produto deles.",
[],["rl11"]); SRC("IBFC, Corpo de Bombeiros/AC, 2022");

/* Aula 12: análise combinatória */
q("rl",3,"Análise combinatória",
"Com os algarismos 1, 2, 4, 5, 7 e 8, formam-se todos os números de três algarismos distintos, escritos em ordem crescente. O número na 50ª posição é:",
["417","428","452","517"],2,
"Começando com 1: 5 × 4 = 20 números (posições 1 a 20); com 2: posições 21 a 40; com 4: a partir da 41ª. Dentro do 4: 41_ (4 números, 41ª a 44ª), 42_ (45ª a 48ª), 45_ começa na 49ª: 451, e a 50ª é 452.",
"Conte em blocos pelo primeiro algarismo, depois pelo segundo.",
[],["rl12","vrl"]); SRC("FCM/CEFET-MG, Pref. Contagem/MG, 2023");

q("rl",3,"Análise combinatória",
"De um grupo de 12 tenentes (6 homens e 6 mulheres), será formada uma equipe de 5 pessoas com homens e mulheres, tendo mais mulheres que homens. O número de equipes possíveis é:",
["300.","390.","420.","792."],1,
"Casos possíveis: 3 mulheres e 2 homens: C(6,3) × C(6,2) = 20 × 15 = 300; 4 mulheres e 1 homem: C(6,4) × C(6,1) = 15 × 6 = 90. Total: 390. (5 mulheres não vale, pois a equipe precisa ter homens.)",
"Separe em casos e some ('ou' = soma; 'e' = multiplica).",
[],["rl12"]); SRC("Instituto AOCP, Polícia Militar/PE, 2024");

q("rl",3,"Análise combinatória",
"De 8 policiais militares, 6 civis e 5 federais, quer-se formar uma equipe com 3 militares, 2 civis e 2 federais. O número de equipes possíveis é:",
["1.120.","4.200.","8.400.","16.800."],2,
"A ordem não importa: combinações. C(8,3) × C(6,2) × C(5,2) = 56 × 15 × 10 = 8.400.",
"Escolher pessoas para um grupo sem cargos = combinação.",
[],["rl12"]); SRC("Instituto AOCP, Polícia Militar/PE, 2024");

q("rl",3,"Análise combinatória",
"De 10 funcionários, entre eles Carlos e Beatriz, será escolhida uma comissão de 4, mas Carlos e Beatriz não podem ir juntos. O número de comissões possíveis é:",
["182.","196.","210.","238."],0,
"Total sem restrição: C(10,4) = 210. Comissões com os dois juntos: escolhem-se os outros 2 entre 8, C(8,2) = 28. Válidas: 210 − 28 = 182.",
"Restrição 'não juntos': total menos os casos proibidos.",
[],["rl12"]); SRC("FCM/CEFET-MG, Pref. Contagem/MG, 2023");

q("rl",3,"Análise combinatória",
"Uma prova tem 8 questões de verdadeiro ou falso. De quantas maneiras diferentes o cartão de respostas pode ser preenchido, marcando uma resposta em cada questão?",
["16.","64.","128.","256."],3,
"Cada questão tem 2 opções. Pelo princípio multiplicativo: 2⁸ = 256.",
"Escolhas independentes em sequência: multiplique.",
[],["rl12"]); SRC("FEPESE, Pref. Chapecó, 2022");

q("rl",3,"Análise combinatória",
"Quantos números PARES de quatro algarismos podem ser formados com 1, 5, 6, 7 e 8, permitindo repetição?",
["250.","230.","180.","120."],0,
"O último algarismo precisa ser par: 6 ou 8 (2 opções). Os outros três podem ser qualquer um dos 5: 5 × 5 × 5 × 2 = 250.",
"Comece pela posição com restrição.",
[],["rl12"]); SRC("IDECAN, Corpo de Bombeiros/MS, 2022");

q("rl",3,"Análise combinatória",
"O número de anagramas da palavra PLANETA é:",
["5.040.","4.480.","3.620.","2.520."],3,
"São 7 letras com o A repetido 2 vezes: 7! ÷ 2! = 5.040 ÷ 2 = 2.520.",
"Letras repetidas: divida pelo fatorial das repetições.",
[],["rl12"]); SRC("OBJETIVA, Pref. Roca Sales, 2022");

/* Aula 13: probabilidade */
q("rl",3,"Probabilidade",
"Na fabricação de um remédio, a chance de se usar o composto X é 0,28, a de se usar o composto Y é 0,11 e a de se usarem os dois é 0,04. Qual a probabilidade de o remédio ser feito sem X e sem Y?",
["0,35","0,43","0,57","0,65"],3,
"Primeiro a união: P(X ou Y) = 0,28 + 0,11 - 0,04 = 0,35. 'Nem X nem Y' é o complementar da união: 1 - 0,35 = 0,65.",
"0,35 é a chance de usar ao menos um; a pergunta pede o contrário disso.",
[],["rl13","vrl"]); SRC("Consulplan, Polícia Militar/RN, 2022");

q("rl",3,"Probabilidade",
"O RH de uma prefeitura constatou que um servidor falta com probabilidade de 12% em dia de chuva e de 2% em dia sem chuva. Se a previsão dá 40% de chance de chover amanhã, qual a probabilidade de um servidor qualquer faltar?",
["4,8%","5,2%","5,6%","6%"],3,
"Probabilidade total: soma dos dois cenários. Chuva: 0,4 × 0,12 = 0,048. Sem chuva: 0,6 × 0,02 = 0,012. Total: 0,06 = 6%.",
"4,8% considera só o dia de chuva; falta somar o cenário sem chuva (60%).",
[],["rl13","vrl"]); SRC("AOCP, Pref. Pinhais/PR, 2022");

q("rl",3,"Probabilidade",
"Três irmãos gêmeos idênticos são suspeitos de um crime cometido por apenas um deles. Duas testemunhas, sem conseguir distingui-los, apontam cada uma, ao acaso e de forma independente, um dos três. A probabilidade de as duas acertarem o culpado é de aproximadamente:",
["50%.","33%.","17%.","11%."],3,
"Cada testemunha acerta com probabilidade 1/3. Eventos independentes que precisam ocorrer juntos se multiplicam: 1/3 × 1/3 = 1/9 ≈ 11%.",
"33% é a chance de UMA testemunha acertar; 'ambas' pede o produto.",
[],["rl13","vrl"]); SRC("AOCP, Polícia Militar/PE, 2024");

q("rl",3,"Probabilidade",
"Num teste físico com duas etapas, E1 e E2, todos fizeram as duas. 300 pessoas passaram em E1, 135 foram reprovadas em E2, 180 passaram nas duas e 150 passaram em apenas uma. É correto afirmar que:",
["35 pessoas foram reprovadas nas duas etapas.","a probabilidade de alguém ter passado nas duas etapas é menor que 50%.","a probabilidade de alguém, sorteado ao acaso, ter sido reprovado em pelo menos uma etapa passa de 50%.","a probabilidade de um sorteado ter sido reprovado nas duas etapas é 1/23."],3,
"Passou em E1 e não em E2: 300 - 180 = 120. Reprovado nas duas: 135 - 120 = 15. Passou só em E2: 150 - 120 = 30. Total: 180 + 120 + 30 + 15 = 345. Reprovado nas duas: 15/345 = 1/23. Passou nas duas: 180/345 ≈ 52%; reprovado em alguma: 165/345 ≈ 48%.",
"Monte a tabela de dupla entrada antes de calcular; o total (345) não é dado.",
[],["rl13","vrl"]); SRC("AOCP, Polícia Militar/PE, 2024");

q("rl",3,"Probabilidade",
"Um casal e seis amigos alugaram um carro com motorista que tem 3 bancos de 3 lugares; um dos lugares da ponta de um banco é o do motorista. Se as 8 pessoas ocupam os 8 lugares livres ao acaso, a probabilidade de o casal ficar lado a lado é:",
["1/8","5/56","5/28","1/28"],2,
"Total: 8!. Pares de lugares vizinhos: 1 no banco do motorista e 2 em cada um dos outros bancos = 5; o casal pode trocar de lugar entre si (× 2) e os 6 amigos se arrumam de 6! modos. P = 10 × 6! / 8! = 10/56 = 5/28.",
"No banco com o motorista sobra só 1 par de vizinhos, não 2.",
[],["rl13","vrl"]); SRC("FUNDEP, Pref. Mariana/MG, 2022");

q("rl",3,"Probabilidade",
"De um grupo de 6 homens e 8 mulheres será sorteada uma comissão de 3 pessoas. A probabilidade de a comissão ter exatamente 2 mulheres e 1 homem é:",
["3/8","5/12","6/13","8/15"],2,
"Casos possíveis: C(14,3) = 364. Favoráveis: C(8,2) × 6 = 28 × 6 = 168. P = 168/364 = 6/13.",
"Comissão não tem ordem: use combinação no total e nos favoráveis.",
[],["rl13","vrl"]); SRC("FGV, Técnico TRT 24ª Região, 2025");

q("rl",3,"Probabilidade",
"Em certa comarca, os promotores A e B respondem por 60% e 40% dos processos, e deixam sem conclusão 3% e 7% dos seus processos, respectivamente. Sorteado um processo sem conclusão, a probabilidade de ele ser do promotor B é de:",
["50,87%","55,87%","60,87%","65,87%"],2,
"Teorema de Bayes. P(sem conclusão) = 0,6 × 0,03 + 0,4 × 0,07 = 0,018 + 0,028 = 0,046. P(B | sem conclusão) = 0,028 / 0,046 ≈ 60,87%.",
"Já se sabe que o processo é inconclusivo: divida pela probabilidade de ser inconclusivo, não por 1.",
[],["rl13","vrl"]); SRC("Consulplan, Ministério Público/MG, 2023");

q("rl",3,"Probabilidade",
"Das denúncias recebidas por uma delegacia, 44% são de roubo, 36% de fraude eletrônica e 20% de tráfico. São improcedentes 10% das de roubo, 30% das de fraude e 20% das de tráfico. Sorteada uma denúncia procedente, a probabilidade de ela ser de roubo é de aproximadamente:",
["50%","49%","48%","47%"],1,
"Procedentes: roubo 0,44 × 0,9 = 0,396; fraude 0,36 × 0,7 = 0,252; tráfico 0,2 × 0,8 = 0,16; total 0,808. Bayes: 0,396 / 0,808 ≈ 0,49 = 49%.",
"Use a taxa de PROCEDENTES (100% menos a de improcedentes) em cada tipo.",
[],["rl13","vrl"]); SRC("FGV, Polícia Civil/MG, 2025");
