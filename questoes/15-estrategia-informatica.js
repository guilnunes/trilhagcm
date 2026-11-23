// ===== LOTE 15: questões reais de Noções de Informática (Estratégia, curso 400883), reescritas e adaptadas para 4 alternativas =====
E.in1 = ["Informática, Aula 01: Internet e redes (parte 2)", EC + "400883/aulas/4036111"];
E.in3 = ["Informática, Aula 03: Ferramentas, aplicativos e navegadores", EC + "400883/aulas/4036113"];
E.in4 = ["Informática, Aula 04: Recursos de pesquisa e busca", EC + "400883/aulas/4036114"];
E.in12 = ["Informática, Aula 12: PowerPoint", EC + "400883/aulas/4036122"];
E.in16 = ["Informática, Aula 16: Teams", EC + "400883/aulas/4036126"];
E.in17 = ["Informática, Aula 17: Redes sociais", EC + "400883/aulas/4036127"];

/* Aula 00: Internet e redes */
q("inf",3,"Redes",
"Sobre a Web, julgue: I. É um serviço que funciona sobre a internet. II. Apresenta a informação como hipertexto, com documentos ligados por links. III. Trouxe uma forma visual de publicar conteúdo, com linguagem própria (HTML). A sequência correta (V ou F) é:",
["F, V, F.","F, F, V.","V, V, F.","V, V, V."],3,
"As três estão certas. A internet é a infraestrutura; a Web é um dos serviços que rodam sobre ela, com páginas ligadas por links (hipertexto) e escritas em HTML, que trouxe a apresentação visual.",
"Internet e Web não são sinônimos: a Web é só uma parte da internet.",
[],["in0","vinf"]); SRC("IBGP, Pref. Uberaba/MG, 2019");

q("inf",3,"Redes",
"A rede que alcança algumas centenas de metros, cobrindo escritórios, casas e prédios, é chamada de:",
["MAN.","WAN.","SAN.","LAN."],3,
"LAN (rede local) cobre uma sala, um prédio ou um campus. MAN cobre uma cidade, WAN cobre países e continentes, e SAN é uma rede dedicada a armazenamento.",
"Pense no tamanho: PAN (poucos metros) < LAN < MAN < WAN.",
[],["in0","vinf"]); SRC("IBGP, Pref. Santa Luzia/MG, 2018");

q("inf",3,"Redes",
"Complete, na ordem: rede restrita a uma sala, prédio ou campus; rede pessoal de poucos metros, como o Bluetooth; rede que cobre uma cidade ou região metropolitana; rede que cobre um país ou continente.",
["LAN / MAN / WAN / PAN","MAN / LAN / WAN / PAN","LAN / PAN / MAN / WAN","PAN / LAN / MAN / WAN"],2,
"LAN = local (prédio, campus); PAN = pessoal (Bluetooth, poucos metros); MAN = metropolitana (cidade); WAN = de longa distância (país, continente).",
"A ordem segue a das definições, não a do tamanho das redes.",
[],["in0","vinf"]); SRC("Consulplan, Pref. Pouso Alegre/MG, 2024");

q("inf",3,"Redes",
"Para proteger uma rede Wi-Fi contra intrusos, qual opção oferece o maior grau de segurança?",
["WEP.","WEP com filtro de endereço MAC.","WPA com IP.","WPA2 com criptografia AES."],3,
"O WEP é antigo e se quebra em minutos; filtro de MAC é fácil de burlar, e IP nem é criptografia. Entre as opções, WPA2 com AES é a mais forte. Hoje existe também o WPA3, ainda mais seguro.",
"WEP = inseguro. Quanto mais novo o WPA, melhor.",
[],["in0","vinf"]); SRC("FGV, Policial Legislativo Senado Federal, 2022");

q("inf",3,"Redes",
"O técnico pediu a um servidor que identificasse o RJ45 do computador. RJ45 é:",
["o conector na ponta do cabo de rede.","o botão de reiniciar o roteador.","o aparelho que distribui o sinal sem fio.","a antena do roteador."],0,
"RJ45 é o conector (plug) do cabo de rede Ethernet de par trançado, que encaixa no computador, no switch ou no roteador.",
"RJ45 é o conector, não o cabo inteiro.",
[],["in0","vinf"]); SRC("FCC, Agente Administrativo Pref. São José do Rio Preto/SP, 2019");

q("inf",3,"Redes",
"Um agente precisa de um equipamento para ligar vários computadores numa rede local de modo que os dados sejam entregues só ao computador de destino, e não a todos. O equipamento é o:",
["hub.","switch.","modem.","firewall."],1,
"O switch aprende qual computador está em cada porta e envia os dados só para o destino. O hub repete tudo para todas as portas (broadcast). Modem converte sinais e firewall filtra tráfego.",
"Hub = manda para todos; switch = manda só para o destino.",
[],["in0","vinf"]); SRC("FCC, Agente de Trânsito DETRAN/SP, 2019");

q("inf",3,"Redes",
"Nos telefones IP de uma instituição, as pessoas conseguem falar e ouvir ao mesmo tempo, sem interrupção. Esse modo de comunicação é o:",
["simplex.","half-duplex.","full-duplex.","doubleplex."],2,
"Full-duplex: os dois lados transmitem ao mesmo tempo (telefone). Half-duplex: os dois transmitem, mas um de cada vez (rádio walkie-talkie). Simplex: só um sentido (TV aberta). Doubleplex não existe.",
"Walkie-talkie ('câmbio') é o exemplo clássico de half-duplex.",
[],["in0","vinf"]); SRC("Consulplan, Pref. Cacoal/RO, 2024");

/* Aula 01: Internet e redes (parte 2) */
q("inf",3,"Internet",
"Complete: os ______ são as regras que permitem que os vários dispositivos ligados à internet se comuniquem.",
["algoritmos","compiladores","protocolos","roteadores"],2,
"Protocolo é o conjunto de regras de comunicação (exemplos: TCP/IP, HTTP, SMTP). Algoritmo é sequência de passos, compilador traduz programas e roteador é um equipamento.",
"Roteador usa protocolos, mas é um aparelho, não a regra.",
[],["in1","vinf"]); SRC("IBGP, Pref. São João del-Rei/MG, 2021");

q("inf",3,"Internet",
"Os computadores se comunicam usando um endereço físico e único gravado na interface de rede de cada dispositivo. Esse endereço é o:",
["MAC.","IP.","HTTP.","WWW."],0,
"O endereço MAC é físico e vem gravado na placa de rede pelo fabricante. O IP é lógico e pode mudar conforme a rede. HTTP é protocolo e WWW é o serviço da Web.",
"Físico = MAC; lógico = IP.",
[],["in1","vinf"]); SRC("IBGP, SEJUSP/MG, 2021");

q("inf",3,"Internet",
"No endereço http://www.andrelandia.mg.gov.br, a parte 'http' indica:",
["o domínio do site.","o tipo de instituição dona do domínio.","o protocolo de transferência.","o tipo de registro do endereço."],2,
"HTTP (protocolo de transferência de hipertexto) é o protocolo usado entre navegador e servidor. O domínio é andrelandia.mg.gov.br, e o '.gov.br' indica que o site é de governo.",
"O que vem antes de '://' é sempre o protocolo.",
[],["in1","vinf"]); SRC("IBGP, Pref. Andrelândia/MG, 2019");

q("inf",3,"Internet",
"O principal conjunto de protocolos, que permite a comunicação entre computadores de redes diferentes ligadas pela internet, é o:",
["HTML","HTTP","TCP/IP","WWW"],2,
"TCP/IP é a pilha de protocolos que sustenta a internet. HTTP é só um protocolo dessa pilha (o das páginas), HTML é linguagem de marcação e WWW é o serviço da Web.",
"'Conjunto' de protocolos = TCP/IP.",
[],["in1","vinf"]); SRC("IBGP, Pref. Sete Lagoas/MG, 2018");

q("inf",3,"Internet",
"Relacione o serviço com a função: 1. FTP; 2. SMTP; 3. POP3. ( ) envio de e-mails; ( ) leitura (download) de e-mails; ( ) transferência de arquivos. A sequência correta é:",
["1, 3, 2.","2, 1, 3.","2, 3, 1.","3, 1, 2."],2,
"SMTP envia mensagens; POP3 baixa as mensagens do servidor para leitura; FTP transfere arquivos. Sequência: 2, 3, 1.",
"SMTP manda, POP3 e IMAP recebem.",
[],["in1","vinf"]); SRC("IBGP, Pref. Santa Luzia/MG, 2018");

q("inf",3,"Internet",
"Numa rede IPv4, qual destes endereços é válido para um computador?",
["204.17.5.262","204.317.5.32","204.15.328.128","204.15.5.32"],3,
"No IPv4 cada um dos 4 números (octetos) vai de 0 a 255. Só 204.15.5.32 respeita esse limite; os outros têm 262, 317 ou 328.",
"Qualquer octeto acima de 255 invalida o endereço.",
[],["in1","vinf"]); SRC("FCC, Assistente de Gestão Pública Pref. Recife/PE, 2019");

/* Aula 02: Intranet */
q("inf",3,"Intranet",
"Sobre intranets, julgue: I. Aumentam a segurança e a proteção dos dados da organização. II. São redes privadas que usam os protocolos TCP/IP. III. A arquitetura aberta é uma desvantagem, pois dificulta ligar os computadores da organização. Está correto o que se afirma em:",
["II, apenas.","I e II, apenas.","I e III, apenas.","II e III, apenas."],1,
"I e II estão certas: a intranet é privada, restringe o acesso externo e usa a mesma tecnologia da internet (TCP/IP). III erra ao chamar a arquitetura aberta de desvantagem: é justamente o que facilita a integração.",
"Usar padrões abertos (TCP/IP, navegador) é vantagem da intranet, não defeito.",
[],["in2","vinf"]); SRC("IBGP, TJ/RS, 2021");

q("inf",3,"Intranet",
"Julgue: I. A intranet é uma rede pública que oferece os serviços da internet, mas restrita a uma empresa. II. O FTP serve para enviar e baixar arquivos numa conexão de internet. III. HTML é a linguagem padrão para criar páginas da Web. Estão corretas:",
["I e II, apenas.","I e III, apenas.","II e III, apenas.","I, II e III."],2,
"I está errada porque a intranet é PRIVADA (o resto da frase até está certo). II e III estão certas: FTP é o protocolo de transferência de arquivos e HTML é a linguagem de marcação das páginas.",
"Uma palavra derruba a frase: 'pública' no lugar de 'privada'.",
[],["in2","vinf"]); SRC("IBGP, Pref. Dores do Indaiá/MG, 2021");

q("inf",3,"Intranet",
"Um consórcio de saúde tem uma página acessada só pelos usuários da sua própria rede, na sede e nas regionais, por circuitos de dados exclusivos. Essa página corresponde ao conceito de:",
["internet.","extranet.","intranet.","VPN."],2,
"Página interna, acessada só por quem é da organização = intranet. Extranet abriria parte dela para parceiros de fora; VPN é o túnel seguro usado para acessar a rede interna de longe.",
"Liberou acesso a gente de FORA (fornecedor, cliente)? Aí é extranet.",
[],["in2","vinf"]); SRC("IBGP, CISSUL/MG, 2017");

q("inf",3,"Intranet",
"Para um professor acessar, do computador de casa, a intranet da universidade onde trabalha, o setor de TI deve liberar o acesso por:",
["DHCP.","LAN.","VPN.","FTP."],2,
"A VPN cria um túnel criptografado pela internet até a rede da instituição, como se o usuário estivesse lá dentro. DHCP distribui endereços IP, LAN é a rede local e FTP transfere arquivos.",
"Acesso remoto e seguro à rede interna = VPN.",
[],["in2","vinf"]); SRC("Cesgranrio, UNIRIO, 2016");

q("inf",3,"Intranet",
"Se a ligação entre a intranet de uma empresa e a internet cai, a intranet:",
["continua dando acesso à internet pelos servidores internos.","para de funcionar e desconecta todos os usuários.","mantém os serviços internos, inclusive o uso do navegador para acessá-los.","passa a cada computador um caminho alternativo de acesso à Web."],2,
"A intranet funciona dentro da rede da empresa. Sem o link externo, perde-se a internet, mas os serviços internos (portal, sistemas, e-mail interno) seguem acessíveis pelo navegador.",
"Intranet não depende da internet para funcionar por dentro.",
[],["in2","vinf"]); SRC("Cesgranrio, Petrobras, 2011");

q("inf",3,"Intranet",
"Uma intranet é um site do tipo:",
["público: qualquer pessoa na internet vê o conteúdo.","compartilhado: funcionários e clientes veem o conteúdo.","interno: só as pessoas ligadas à empresa veem o conteúdo.","seguro: qualquer pessoa com uma senha especial vê o conteúdo."],2,
"Intranet é interna: só quem é da organização acessa. Abrir para clientes ou fornecedores seria extranet; público é a internet comum.",
"Funcionários + clientes = extranet, não intranet.",
[],["in2","vinf"]); SRC("FGV, Pref. Salvador/BA, 2017");

/* Aula 03: Ferramentas, aplicativos e navegadores */
q("inf",3,"Navegadores",
"No Google Chrome em português, configuração padrão, julgue os atalhos: I. Ctrl+A abre a página inicial na guia atual. II. Ctrl+T abre uma nova guia e vai para ela. III. Ctrl+M abre o menu do Chrome. IV. Ctrl+L leva à barra de endereços. Estão corretos:",
["I e II, apenas.","I, II e III, apenas.","II e IV, apenas.","I, II, III e IV."],2,
"Ctrl+T abre nova guia e Ctrl+L seleciona a barra de endereços (F6 e Alt+D também). Ctrl+A seleciona tudo na página, e o menu do Chrome abre com Alt+F ou Alt+E, não com Ctrl+M.",
"Ctrl+A no navegador é 'selecionar tudo', como em quase todo programa.",
[],["in3","vinf"]); SRC("IBGP, SEJUSP/MG, 2021");

q("inf",3,"Navegadores",
"No Google Chrome, o atalho que abre uma NOVA JANELA do navegador é:",
["Alt+A.","Ctrl+T.","Alt+N.","Ctrl+N."],3,
"Ctrl+N abre uma nova janela; Ctrl+T abre uma nova guia (aba) na mesma janela; Ctrl+Shift+N abre janela anônima. A banca deu Ctrl+T na prova original, que pedia 'aba em nova janela', mas no Chrome quem abre janela é o Ctrl+N.",
"T de 'tab' (guia); N de 'new window' (janela).",
[],["in3","vinf"]); SRC("IBGP, Pref. Itabira/MG, 2021");

q("inf",3,"Navegadores",
"São pequenos arquivos que os sites visitados gravam no computador pelo navegador, com dados para reconhecer o visitante, personalizar a página ou manter informações entre as páginas do mesmo site. Trata-se de:",
["vírus.","cookie.","worm.","backdoor."],1,
"Cookies guardam preferências, sessão de login e itens do carrinho, por exemplo. Não são programas maliciosos e podem ser apagados nas configurações do navegador.",
"Cookie não é malware, mas pode ser usado para rastrear a navegação.",
[],["in3","vinf"]); SRC("IBGP, SEJUSP/MG, 2021");

q("inf",3,"Navegadores",
"Ao acessar uma página cujo endereço começa com HTTPS, entende-se que a página usa conexão:",
["segura.","suspeita.","insegura.","perigosa."],0,
"O S de HTTPS indica conexão criptografada (TLS) entre o navegador e o site, o que protege senhas e dados no caminho. Isso não garante que o site seja honesto: golpistas também usam HTTPS.",
"HTTPS protege o trajeto dos dados, não atesta a boa-fé do site.",
[],["in3","vinf"]); SRC("IBGP, Pref. São João del-Rei/MG, 2021");

q("inf",3,"Navegadores",
"No Microsoft Edge (e no antigo Internet Explorer), o modo de navegação que não guarda histórico, cookies nem dados de formulário depois de fechada a janela é o:",
["SecurityOn.","InSecurity.","PrivateOn.","InPrivate."],3,
"InPrivate é o nome da navegação privada da Microsoft (Ctrl+Shift+N no Edge). No Chrome se chama 'anônima' e no Firefox 'privativa'. A questão original citava o Internet Explorer, que foi descontinuado; o Edge mantém o mesmo nome.",
"Navegação privada não esconde nada do provedor nem dos sites.",
[],["in3","vinf"]); SRC("IBGP, Pref. Itabira/MG, 2021");

q("inf",3,"Navegadores",
"No Mozilla Firefox, com várias abas abertas, o atalho que leva à ÚLTIMA aba é:",
["Ctrl+U.","Ctrl+S.","Ctrl+9.","Ctrl+F12."],2,
"Ctrl+1 a Ctrl+8 vão para a aba daquela posição, e Ctrl+9 vai sempre para a última (vale também no Chrome e no Edge). Ctrl+U mostra o código-fonte e Ctrl+S salva a página.",
"O 9 não é 'nona aba': é sempre a última.",
[],["in3","vinf"]); SRC("IBGP, Pref. Dores do Indaiá/MG, 2021");

q("inf",3,"Navegadores",
"Um assistente fechou sem querer, no Google Chrome, a guia de um site que tinha achado depois de muita busca. Para reabrir a última guia fechada, ele deve usar:",
["Ctrl+Shift+T.","Ctrl+Shift+Z.","Alt+Tab.","Ctrl+T."],0,
"Ctrl+Shift+T reabre as guias fechadas, na ordem inversa (pode repetir). Ctrl+T abre uma guia nova em branco e Alt+Tab alterna entre programas abertos.",
"Ctrl+T abre guia nova; com Shift, desfaz o fechamento.",
[],["in3","vinf"]); SRC("FCC, Assistente Pref. Manaus/AM, 2019");

q("inf",3,"Navegadores",
"No modo de navegação anônima do Google Chrome:",
["o histórico e os cookies ficam salvos, mas só o usuário os vê.","os downloads e favoritos são apagados quando o Chrome é fechado.","a atividade continua visível para o provedor de internet.","os dados de formulários, menos as senhas, ficam salvos."],2,
"A janela anônima só deixa de gravar histórico, cookies e formulários NO APARELHO. O provedor, a rede da empresa e os sites visitados continuam vendo o acesso. Arquivos baixados e favoritos criados permanecem.",
"Anônimo para o computador, não para a internet.",
[],["in3","vinf"]); SRC("Cebraspe, Corpo de Bombeiros/TO, 2023");

/* Aula 04: Recursos de pesquisa e busca */
q("inf",3,"Pesquisa na internet",
"No Google, um usuário quer resultados sobre FUTEBOL, mas sem nenhuma página que contenha a palavra AMERICANO. Ele deve digitar:",
["futebol -americano","futebol: excluir americano","defina: futebol sem americano","pesquisa: futebol excluir \"americano\""],0,
"O sinal de menos colado à palavra (-americano) exclui da busca as páginas que a contêm. 'Excluir', 'sem' e 'pesquisa:' não são comandos do Google; 'defina:' só mostra definições. O gabarito divulgado para a questão original apontava outra opção, mas o comando que funciona no Google é o sinal de menos.",
"O menos vai COLADO na palavra: 'futebol - americano' (com espaço) não exclui nada.",
[],["in4","vinf"]); SRC("IBGP, Pref. São João del-Rei/MG, 2021");

q("inf",3,"Pesquisa na internet",
"Um técnico pesquisou uma frase no Google e viu que muitos sites traziam só parte dela. Para obter apenas as páginas com a frase exata, ele deve colocá-la entre:",
["asteriscos.","colchetes.","aspas.","os sinais < e >."],2,
"Aspas pedem correspondência exata: as palavras juntas e naquela ordem. O asterisco funciona como coringa (substitui uma palavra desconhecida). Colchetes e < > não são operadores do Google.",
"Asterisco é coringa, não busca exata.",
[],["in4","vinf"]); SRC("FCC, Técnico AFAP, 2019");

q("inf",3,"Pesquisa na internet",
"No Google, qual destas buscas retorna o MENOR número de resultados?",
["\"exemplo\" - exemplo","\"exemplo\" -exemplo","exemplo - exemplo","exemplo OR exemplo"],1,
"Em \"exemplo\" -exemplo, pede-se a palavra exata e, ao mesmo tempo, exclui-se toda página que a contenha: não sobra nada. Com espaço depois do menos, a exclusão não acontece, e OR apenas soma resultados.",
"Sinal de menos separado da palavra não exclui.",
[],["in4","vinf"]); SRC("FGV, Polícia Militar/SP, 2022");

q("inf",3,"Pesquisa na internet",
"O domínio de um banco é bancox.com.br. Quantos destes links poderiam ser do banco? (1) www.atendimento.bancox.br.ouvidoria.com (2) www.bancox.com.br.atendimento.com (3) www.ouvidoria.atendimento.bancox.br (4) www.atendimento.bancox.com.br/dividas",
["Nenhum.","Um.","Dois.","Três."],1,
"O que manda no endereço é o final do domínio, antes da primeira barra. Só o link 4 termina em bancox.com.br (é um subdomínio do banco). O 1 pertence a ouvidoria.com, o 2 a atendimento.com e o 3 a bancox.br, que é outro domínio.",
"Golpistas põem o nome do banco no COMEÇO do endereço; leia o final.",
[],["in4","vinf"]); SRC("FGV, Pref. Paulínia/SP, 2021");

q("inf",3,"Pesquisa na internet",
"Qual destas pesquisas no Google é a mais restritiva?",
["prefeitura municipal da estância de Cananéia","\"prefeitura municipal da estância de Cananéia\" site:www.cananeia.sp.gov.br","\"prefeitura municipal da estância de Cananéia\"","prefeitura municipal da *"],1,
"Ela combina duas restrições: a frase exata (aspas) e só dentro de um site (site:). As outras usam no máximo uma restrição ou nenhuma, e o * ainda amplia a busca.",
"Mais operadores somados = menos resultados.",
[],["in4","vinf"]); SRC("Vunesp, Pref. Cananéia/SP, 2020");

q("inf",3,"Pesquisa na internet",
"Para encontrar no Google páginas que tenham os termos SEFAZ e AC no TÍTULO, usa-se:",
["SEFAZ AC in caption","allintitle: SEFAZ AC","+ SEFAZ AC","~ SEFAZ AC"],1,
"allintitle: exige que todas as palavras estejam no título da página (intitle: vale para uma palavra só). O + e o ~ já foram operadores do Google, mas foram desativados; 'in caption' nunca existiu.",
"site: limita o site, filetype: o tipo de arquivo, intitle:/allintitle: o título.",
[],["in4","vinf"]); SRC("Cebraspe, SEFAZ/AC, 2023");

/* Aula 05: Segurança em nuvem */
q("inf",4,"Nuvem",
"Um professor quer colocar um arquivo na nuvem para compartilhar com os alunos. Qual destas opções NÃO é um serviço de armazenamento de arquivos na nuvem?",
["SharePoint.","Google Drive.","OneDrive.","Google Chrome."],3,
"Google Drive, OneDrive e SharePoint guardam e compartilham arquivos em servidores remotos. O Google Chrome é só o navegador, usado para acessar esses serviços, mas não armazena arquivos.",
"Navegador acessa a nuvem; não é a nuvem.",
[],["in5","vinf"]); SRC("IBGP, Pref. Uberaba/MG, 2023");

q("inf",4,"Nuvem",
"Um usuário quer fazer backup dos arquivos num serviço de nuvem, para acessá-los de qualquer computador ou celular ligado à internet. Atende a essa necessidade o:",
["Gmail.","Google Chrome.","Facebook.","Microsoft OneDrive."],3,
"O OneDrive é o armazenamento em nuvem da Microsoft, que sincroniza arquivos entre dispositivos. Gmail é e-mail, Chrome é navegador e Facebook é rede social.",
"Anexar arquivo num e-mail não é serviço de backup.",
[],["in5","vinf"]); SRC("IBGP, CISSUL/MG, 2017");

q("inf",4,"Nuvem",
"Um analista usa editores de texto e planilha (como o Google Docs) que não estão instalados no computador, mas em servidores na internet, e guarda lá os documentos. Esse modelo de nuvem é o:",
["Software como Serviço (SaaS).","Plataforma como Serviço (PaaS).","Infraestrutura como Serviço (IaaS).","Desenvolvimento como Serviço."],0,
"Quando o usuário usa o programa pronto pela internet, é SaaS (Google Docs, Microsoft 365 na Web, Gmail). PaaS oferece ambiente para programadores criarem aplicações; IaaS oferece servidores, armazenamento e rede.",
"SaaS = programa pronto; PaaS = ambiente para desenvolver; IaaS = máquinas.",
[],["in5","vinf"]); SRC("FCC, Analista TRT 6ª Região/PE, 2018");

q("inf",4,"Nuvem",
"O modelo de nuvem IaaS (Infraestrutura como Serviço) oferece, entre outros, o serviço de:",
["armazenamento de backup.","gerenciamento de banco de dados.","provedor de e-mail.","edição de documentos."],0,
"IaaS entrega recursos básicos de máquina: processamento, rede e armazenamento (por exemplo, espaço para backup). Banco de dados gerenciado é típico de PaaS; e-mail e editores prontos são SaaS.",
"Quanto mais 'cru' o recurso (disco, servidor), mais perto do IaaS.",
[],["in5","vinf"]); SRC("FCC, Analista CLDF, 2018");

q("inf",4,"Nuvem",
"O serviço de nuvem que oferece um ambiente para criar, implantar e testar aplicações feitas para a nuvem é chamado de:",
["SaaS.","PaaS.","IaaS.","DaaS."],1,
"PaaS (Plataforma como Serviço) dá ao desenvolvedor o ambiente pronto (sistema, banco de dados, ferramentas) para programar e testar, sem cuidar dos servidores.",
"Plataforma = para quem desenvolve.",
[],["in5","vinf"]); SRC("FCC, CNMP, 2015");

q("inf",4,"Nuvem",
"É uma DESVANTAGEM do armazenamento em nuvem:",
["pagar só pelo espaço que realmente usar.","não precisar instalar discos e servidores próprios.","o desempenho poder ser menor que o local, exigindo bom investimento em internet.","transferir para o provedor tarefas como backup e replicação."],2,
"Tudo passa pela internet: com conexão lenta ou fora do ar, o acesso fica lento ou impossível. As demais opções são vantagens da nuvem.",
"Sem internet, sem nuvem.",
[],["in5","vinf"]); SRC("FCC, TRE/AP, 2015");

/* Aula 06: Outlook */
q("inf",2,"Outlook e e-mail",
"São dois exemplos de programas clientes de correio eletrônico, usados para ler, escrever e organizar e-mails no computador:",
["Gmail e Microsoft Exchange.","Microsoft Outlook e Impress.","Microsoft Outlook e Mozilla Thunderbird.","Writer e Impress."],2,
"Outlook e Thunderbird são programas clientes de e-mail. O Gmail é um serviço de webmail, o Exchange é o servidor de e-mails da Microsoft, e Writer e Impress são o editor de texto e o de apresentações do LibreOffice.",
"Servidor (Exchange) guarda as mensagens; cliente (Outlook) é o programa do usuário.",
[],["in6","vinf"]); SRC("IBGP, Pref. Betim/MG, 2022");

q("inf",2,"Outlook e e-mail",
"Qual destes é um endereço de correio eletrônico escrito corretamente?",
["contato.saojoaodelrei.mg.gov.br","contato#saojoaodelrei.mg.gov.br","contato@saojoaodelrei.mg.gov.br","www.saojoaodelrei.mg.gov.br"],2,
"Todo e-mail tem o formato usuário@domínio, sem espaços. O www indica endereço de site, e # ou ponto no lugar do @ não formam e-mail. Na prova original a opção marcada como certa tinha um espaço depois do @, o que a tornaria inválida; aqui o endereço foi escrito do jeito correto.",
"Sem @ não é e-mail; com espaço também não.",
[],["in6","vinf"]); SRC("IBGP, Pref. São João del-Rei/MG, 2021");

q("inf",2,"Outlook e e-mail",
"Complete: o protocolo ______ foi criado para RECUPERAR (baixar) as mensagens de e-mail guardadas no servidor.",
["HTTP","POP","SMTP","TCP"],1,
"O POP (POP3) baixa as mensagens do servidor para o computador; o IMAP também recebe, mas mantém tudo sincronizado no servidor. O SMTP é o de envio e o HTTP o de páginas da Web.",
"Recuperar/receber = POP ou IMAP; enviar = SMTP.",
[],["in6","vinf"]); SRC("IBGP, Pref. Dores do Indaiá/MG, 2021");

q("inf",2,"Outlook e e-mail",
"Aline mandou um e-mail com Para: Beto; Cc: Carlos; Cco: Deise. Beto clicou em 'Responder a todos'. Quem recebe a resposta de Beto?",
["Aline e Carlos, apenas.","Carlos e Deise, apenas.","Aline, Carlos e Deise.","Somente Aline."],0,
"'Responder a todos' manda para o remetente (Aline) e para quem estava em Para e Cc (Carlos). Quem estava em Cco (Deise) ficou oculto, então ninguém sabe dela e ela não entra na resposta.",
"Cópia oculta fica fora do 'responder a todos'.",
[],["in6","vinf"]); SRC("Vunesp, Câmara de Marília/SP, 2023");

q("inf",2,"Outlook e e-mail",
"Tiago recebeu um e-mail com um arquivo anexo. A opção que, por padrão, já leva o anexo para a nova mensagem é:",
["Arquivar.","Responder a todos.","Responder.","Encaminhar."],3,
"Encaminhar repassa a mensagem a outra pessoa com os anexos. Responder e Responder a todos, por padrão, não reenviam o anexo, já que ele veio de quem vai receber a resposta.",
"Quer repassar o arquivo? Encaminhe.",
[],["in6","vinf"]); SRC("Vunesp, Pref. Piracicaba/SP, 2023");

q("inf",2,"Outlook e e-mail",
"Um agente quer que as mensagens de certo remetente sejam excluídas automaticamente no Microsoft Outlook. Isso é feito:",
["de forma nenhuma, pois o Outlook não tem regras de exclusão.","instalando um complemento chamado MSRules.","criando uma regra (Página Inicial > Regras > Criar Regra).","só com filtro antispam, que o Outlook não tem."],2,
"As Regras do Outlook aplicam ações automáticas (mover, excluir, sinalizar) a mensagens que atendem a condições, como o remetente. O Outlook também tem filtro de lixo eletrônico e a opção de bloquear remetente.",
"Automatizar no Outlook = Regras.",
["ms"],["in6","vinf"]); SRC("FCC, Oficial de Trânsito DETRAN/SP, 2019");

/* Aula 07: Segurança da informação */
q("inf",3,"Segurança da informação",
"Relacione o mecanismo à característica: 1. Criptografia; 2. Backup; 3. Antimalware. ( ) codifica a informação; ( ) previne contra códigos maliciosos; ( ) faz cópia de segurança dos arquivos. A sequência correta é:",
["1, 3, 2.","2, 1, 3.","2, 3, 1.","3, 1, 2."],0,
"Criptografia embaralha (codifica) os dados para que só quem tem a chave os leia; antimalware (antivírus) detecta e bloqueia códigos maliciosos; backup é a cópia de segurança para recuperar arquivos perdidos.",
"Backup não impede ataque: só permite recuperar depois.",
[],["in7","vinf"]); SRC("IBGP, Pref. São João del-Rei/MG, 2021");

q("inf",3,"Segurança da informação",
"Sobre criptografia, julgue: I. É um dos principais mecanismos para proteger dados dos riscos do uso da internet. II. Protege comunicações como as transações bancárias on-line. III. Conforme a chave usada, divide-se em simétrica e assimétrica. Está correto o que se afirma em:",
["I e II, apenas.","I e III, apenas.","II e III, apenas.","I, II e III."],3,
"As três estão certas. Na criptografia simétrica a mesma chave cifra e decifra; na assimétrica há um par de chaves, pública e privada. É ela que protege o HTTPS dos bancos e lojas.",
"Simétrica = 1 chave; assimétrica = par de chaves (pública e privada).",
[],["in7","vinf"]); SRC("IBGP, Pref. São João del-Rei/MG, 2021");

q("inf",3,"Segurança da informação",
"Sobre segurança da informação, assinale a opção correta.",
["Só receber um link com malware já contamina o aparelho, mesmo sem clicar.","Instalar e configurar programas de segurança basta para proteger os dados do computador.","Recomenda-se não abrir anexos de e-mails enviados por desconhecidos.","O firewall só melhora o desempenho do computador, sem ajudar na segurança."],2,
"Anexos de desconhecidos são porta clássica de malware. O link só contamina se for clicado e executar algo; programas de segurança ajudam, mas não bastam sem atualização e cuidado do usuário; o firewall filtra o tráfego de rede, ou seja, é ferramenta de segurança.",
"Nenhuma ferramenta 'basta' sozinha: o usuário é parte da segurança.",
[],["in7","vinf"]); SRC("Cebraspe, Pref. São Cristóvão/SE, 2023");

q("inf",3,"Segurança da informação",
"Na assinatura digital, a propriedade que detecta qualquer alteração no documento, fazendo a assinatura deixar de ser reconhecida, é a:",
["autenticidade.","integridade.","não repúdio.","disponibilidade."],1,
"Integridade = o conteúdo não foi alterado. Autenticidade = confirma quem é o autor. Não repúdio = o autor não pode negar que assinou. Disponibilidade = a informação está acessível quando precisa.",
"Alterou o conteúdo? Quebrou a integridade.",
[],["in7","vinf"]); SRC("FCC, Pref. Manaus/AM, 2019");

q("inf",3,"Segurança da informação",
"Numa VPN, a CONFIDENCIALIDADE dos dados garante que:",
["a mensagem não foi alterada no caminho.","a mensagem veio de uma fonte autêntica.","o emissor não poderá negar que enviou a mensagem.","a mensagem não poderá ser lida por quem não está autorizado."],3,
"Confidencialidade = sigilo: só quem tem autorização entende o conteúdo (por isso a VPN cifra o tráfego). Não alterar é integridade; origem confirmada é autenticidade; não poder negar o envio é não repúdio.",
"Confidencial = secreto; íntegro = sem alteração.",
[],["in7","vinf"]); SRC("Cebraspe, TRT 8ª Região, 2022");

q("inf",3,"Segurança da informação",
"A autenticação que exige dois ou mais fatores (por exemplo, senha e código no celular) para identificar o usuário tem como objetivo:",
["dificultar o acesso ao sistema para todos.","forçar o uso de senhas mais fortes.","impedir que o usuário compartilhe a senha.","reduzir o estrago caso um dos fatores seja descoberto ou roubado."],3,
"Se a senha vazar, o invasor ainda precisa do segundo fator (celular, token, biometria). Assim, a falha de um único fator não basta para entrar na conta.",
"2FA não deixa a senha mais forte: cria uma segunda barreira.",
[],["in7","vinf"]); SRC("Vunesp, Câmara de Piracicaba/SP, 2019");

/* Aula 08: Vírus, malwares e golpes digitais */
q("inf",3,"Malware e golpes",
"Navegando na internet, um aluno abriu um cartão virtual animado que pedia para executar um programa. Ao fazer isso, o computador foi infectado sem que ele notasse. O malware que cumpre a função aparente, mas executa às escondidas outras ações maliciosas, é o:",
["trojan (cavalo de Troia).","backdoor.","worm.","ransomware."],0,
"O cavalo de Troia chega disfarçado de algo útil ou divertido (cartão, jogo, programa grátis) e, ao ser executado pelo próprio usuário, instala as funções maliciosas. O worm se espalha sozinho; o backdoor é a porta de retorno que o invasor deixa aberta.",
"Presente que o usuário mesmo abre = cavalo de Troia.",
[],["in8","vinf"]); SRC("IBGP, Pref. Uberaba/MG, 2023");

q("inf",3,"Malware e golpes",
"Qual destes termos NÃO é um tipo de malware?",
["Backdoor.","Bot.","Firewall.","Keylogger."],2,
"O firewall é uma ferramenta de proteção que filtra o tráfego de rede. Backdoor (porta dos fundos para o invasor voltar), bot (computador controlado remotamente) e keylogger (grava o que se digita) são malwares.",
"Firewall protege; não ataca.",
[],["in8","vinf"]); SRC("IBGP, Pref. Betim/MG, 2022");

q("inf",3,"Malware e golpes",
"Julgue (V ou F): ( ) Worm se espalha sozinho pelas redes, mandando cópias de si mesmo de um computador a outro. ( ) Abrir anexo de e-mail infectado é uma das formas de contaminação. ( ) Malware é programa feito para executar ações danosas. ( ) Spyware é o programa que garante ao invasor o retorno a um computador já comprometido. A sequência correta é:",
["V, V, V, F.","F, V, V, V.","V, F, F, F.","V, F, V, F."],0,
"As três primeiras estão certas. A última descreve o backdoor; spyware é o programa que espiona e envia dados do usuário. Na prova original nenhuma alternativa trazia V, V, V, F e a banca marcou F, V, V, V; aqui as opções foram ajustadas para a sequência tecnicamente correta.",
"Spyware espiona; backdoor deixa a porta aberta para o invasor voltar.",
[],["in8","vinf"]); SRC("IBGP, Pref. São João del-Rei/MG, 2021");

q("inf",3,"Malware e golpes",
"No golpe chamado ______, o golpista tenta convencer a pessoa a entregar dados confidenciais ou pagar algo, prometendo um benefício futuro (prêmio, herança, empréstimo facilitado).",
["fraude de antecipação de recursos","furto de identidade","boato (hoax)","pharming"],0,
"Na fraude de antecipação de recursos a vítima adianta dados ou dinheiro esperando um ganho que nunca vem. Furto de identidade é usar os dados de outra pessoa; boato é notícia falsa; pharming desvia o usuário para um site falso mesmo digitando o endereço certo.",
"Promessa de ganho em troca de algo adiantado = antecipação de recursos.",
[],["in8","vinf"]); SRC("IBGP, Pref. São João del-Rei/MG, 2021");

q("inf",3,"Malware e golpes",
"O ransomware torna os dados inacessíveis e cobra resgate para liberá-los. Os dois tipos principais são:",
["Locker e Crypto.","Other e Crypto.","Locker e Logger.","Other e Logger."],0,
"O Locker bloqueia o acesso ao aparelho inteiro; o Crypto criptografa os arquivos. A melhor defesa é ter backup atualizado e guardado fora do alcance do computador.",
"Logger vem de keylogger, que grava teclas; não é ransomware.",
[],["in8","vinf"]); SRC("IBGP, Pref. Andrelândia/MG, 2019");

q("inf",3,"Malware e golpes",
"Sobre os ataques DoS e DDoS, é correto afirmar que:",
["enviam muitos e-mails com links falsos para downloads maliciosos.","interceptam conexões em redes públicas para capturar senhas.","tentam sobrecarregar servidores para impedir o funcionamento normal dos serviços.","testam senhas por tentativa e erro até invadir contas."],2,
"DoS é negação de serviço: inundar o alvo de requisições até ele cair ou ficar lento. No DDoS o ataque parte de muitas máquinas ao mesmo tempo, normalmente uma botnet. E-mails falsos são phishing; tentativa e erro de senha é força bruta.",
"DDoS não rouba dados: derruba o serviço.",
[],["in8","vinf"]); SRC("FGV, Policial Legislativo Senado Federal, 2022");
