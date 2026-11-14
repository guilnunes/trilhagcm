// ===== LOTE 14: questões reais de Raciocínio Lógico (Estratégia, curso 401340), reescritas e adaptadas para 4 alternativas =====
E.rl0 = ["Raciocínio Lógico, Aula 00: Estruturas lógicas I", EC + "401340/aulas/4040803"];
E.rl3 = ["Raciocínio Lógico, Aula 03: Quantificadores", EC + "401340/aulas/4040806"];
E.rl4 = ["Raciocínio Lógico, Aula 04: Argumentos", EC + "401340/aulas/4040807"];
E.rl8 = ["Raciocínio Lógico, Aula 08", EC + "401340/aulas/4040811"];
E.rl10 = ["Raciocínio Lógico, Aula 10", EC + "401340/aulas/4040813"];

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
