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

/* Aula 09: Backup */
q("inf",3,"Backup",
"Complete: o(a) ______ é o mecanismo de segurança que permite recuperar dados perdidos por acidente.",
["backup","criptografia","stand by","top file"],0,
"Backup é a cópia de segurança guardada em outro lugar (HD externo, nuvem) para restaurar os arquivos depois de exclusão, defeito ou ataque. Criptografia protege o sigilo, mas não recupera nada.",
"Recuperar o que se perdeu = backup.",
[],["in9","vinf"]); SRC("IBGP, Pref. Uberaba/MG, 2019");

q("inf",3,"Backup",
"Sobre o backup do tipo DELTA, é correto afirmar que ele:",
["copia todos os dados de um servidor para outro local.","guarda só a diferença entre a versão atual e a anterior de cada arquivo.","copia os arquivos alterados desde o último backup completo.","é sempre feito em dispositivo físico externo, como HD externo."],1,
"O delta não copia o arquivo inteiro: grava apenas os trechos (blocos) que mudaram entre uma versão e outra, o que economiza espaço. Copiar tudo é o backup completo; copiar arquivos alterados desde o último completo é o diferencial.",
"Delta = só a parte que mudou DENTRO do arquivo.",
[],["in9","vinf"]); SRC("IBGP, Pref. Dores do Indaiá/MG, 2021");

q("inf",3,"Backup",
"A prefeitura usa backup completo seguido de backups DIFERENCIAIS. Para recuperar os dados, o técnico precisa de:",
["apenas o último diferencial.","o último completo e o último diferencial.","o último completo e todos os diferenciais.","apenas o último completo."],1,
"Cada diferencial guarda tudo o que mudou desde o último completo; por isso o último diferencial já contém os anteriores. Basta restaurar o completo e, em seguida, o diferencial mais recente. No incremental, seriam necessários o completo e TODOS os incrementais.",
"Diferencial: 2 peças. Incremental: o completo + todos os incrementais.",
[],["in9","vinf"]); SRC("FCC, Assistente de TI Pref. Manaus/AM, 2019");

q("inf",3,"Backup",
"Uma empresa faz backup completo aos domingos. De segunda a sábado, copia só os arquivos alterados ou criados em relação ao backup do DIA ANTERIOR. Esses backups diários são:",
["completos.","incrementais.","diferenciais.","espelhos."],1,
"Comparar com o backup anterior, de qualquer tipo, é incremental (cada dia guarda só o daquele dia). Se comparasse sempre com o último completo (domingo), seria diferencial.",
"Referência = backup de ontem? Incremental. Referência = último completo? Diferencial.",
[],["in9","vinf"]); SRC("Vunesp, Câmara de Piracicaba/SP, 2019");

q("inf",3,"Backup",
"A política de backup de uma empresa exige, acima de tudo, o MENOR TEMPO DE RESTAURAÇÃO. Deve-se escolher o backup:",
["completo.","diferencial com incremental.","incremental.","progressivo."],0,
"Com o completo, tudo está numa única cópia e a restauração é direta. Em contrapartida, ele é o que mais ocupa espaço e mais demora para ser feito. O incremental é o oposto: rápido para fazer, mais trabalhoso para restaurar.",
"Rápido para restaurar = completo; rápido para fazer = incremental.",
[],["in9","vinf"]); SRC("Vunesp, Pref. Ribeirão Preto/SP, 2018");

q("inf",3,"Backup",
"É uma prática recomendada em relação a backups:",
["copiar apenas os dados mais recentes.","guardar todas as cópias no mesmo local.","manter várias cópias em locais diferentes.","fazer backup uma vez por ano para economizar espaço."],2,
"Cópias em lugares diferentes (por exemplo, uma local e outra na nuvem ou fora do prédio) evitam perder tudo num incêndio, furto ou ataque. É a ideia da regra 3-2-1: 3 cópias, 2 mídias diferentes, 1 fora do local.",
"Backup no mesmo lugar do original morre junto com ele.",
[],["in9","vinf"]); SRC("Cebraspe, Polícia Civil/PE, 2024");

q("inf",3,"Backup",
"Num plano de recuperação de desastres, qual a diferença entre RPO e RTO?",
["RPO: quantidade máxima de dados que se aceita perder; RTO: tempo máximo para voltar a funcionar.","RPO: frequência dos backups; RTO: ordem de prioridade dos sistemas.","RPO: tempo de replicação dos dados; RTO: tempo para retomar as operações.","RPO: tempo máximo parado; RTO: quantidade máxima de dados perdidos."],0,
"RPO (ponto de recuperação) responde 'até que momento consigo voltar?', ou seja, quanto dado posso perder; ele define a frequência mínima dos backups. RTO (tempo de recuperação) responde 'em quanto tempo volto a funcionar?'.",
"P de Point (ponto no passado, dados); T de Time (tempo parado).",
[],["in9","vinf"]); SRC("Consulplan, Câmara de Poços de Caldas/MG, 2024");

/* Aula 10: Excel */
q("inf",2,"Excel (Microsoft 365)",
"No Excel, um secretário quer inserir funções, rastrear precedentes e conferir cálculos. A guia que reúne esses recursos é:",
["Dados.","Revisão.","Fórmulas.","Exibir."],2,
"A guia Fórmulas tem a Biblioteca de Funções, os Nomes Definidos e a Auditoria de Fórmulas (rastrear precedentes e dependentes, mostrar fórmulas, verificar erros). Dados cuida de classificar, filtrar e importar; Revisão, de ortografia e comentários.",
"Rastrear precedentes fica em Fórmulas > Auditoria de Fórmulas.",
["ms"],["in10","vinf"]); SRC("IBGP, Pref. Uberaba/MG, 2023");

q("inf",2,"Excel (Microsoft 365)",
"Um guarda municipal quer usar o comando Classificar no Excel, versão em português. Ele o encontra na guia:",
["Exibir.","Inserir.","Fórmulas.","Dados."],3,
"Classificar e Filtrar ficam na guia Dados (há também um atalho em Página Inicial > Edição). Exibir muda a visualização; Inserir coloca tabelas, gráficos e imagens.",
"Ordenar e filtrar = Dados.",
["ms"],["in10","vinf"]); SRC("IBGP, Pref. Betim/MG, 2022");

q("inf",2,"Excel (Microsoft 365)",
"Para o Excel entender o que foi digitado numa célula como fórmula ou função, o conteúdo deve começar com:",
["aspas (\").","sinal de igual (=).","dois-pontos (:).","porcentagem (%)."],1,
"Fórmulas começam com = (o Excel também aceita + ou - no início, por compatibilidade). Aspas marcam texto dentro da fórmula e dois-pontos indicam intervalo (A1:A10).",
"Sem o = na frente, o Excel trata como texto.",
["ms"],["in10","vinf"]); SRC("IBGP, Pref. Uberaba/MG, 2023");

q("inf",2,"Excel (Microsoft 365)",
"No Excel, ao digitar =12/3+100*2-20 e teclar Enter, o resultado é:",
["204.","184.","#VALOR!","36."],1,
"O Excel segue a precedência da matemática: primeiro divisão e multiplicação (12/3 = 4; 100*2 = 200), depois soma e subtração: 4 + 200 - 20 = 184.",
"Não calcule da esquerda para a direita sem olhar a precedência.",
["ms"],["in10","vinf"]); SRC("IBGP, Pref. Santa Luzia/MG, 2018");

q("inf",2,"Excel (Microsoft 365)",
"A célula A2 da planilha Plan1 tem um número. Para que a célula A5 da Plan2, no mesmo arquivo, mostre esse valor e se atualize quando ele mudar, deve-se digitar em A5:",
["=COPIAR(Plan1!A2)","=Plan1!A2","=VINCULAR(Plan1!$A$2)","=Plan1>>A2"],1,
"Referência a outra planilha do mesmo arquivo: nome da planilha, ponto de exclamação e a célula (=Plan1!A2). COPIAR e VINCULAR não são funções do Excel.",
"Outra planilha = Nome! antes da célula.",
["ms"],["in10","vinf"]); SRC("FCC, Pref. São José do Rio Preto/SP, 2019");

q("inf",2,"Excel (Microsoft 365)",
"As horas paradas dos computadores 1 a 10 estão em A1 a A10. A fórmula =MÉDIA(A1:A4;A6;A10) calcula a média dos computadores:",
["1, 4, 6 e 10.","1, 2, 3, 4, 6 e 10.","1 a 10.","1 a 6 e 10."],1,
"Dois-pontos indica intervalo (A1:A4 = 1, 2, 3 e 4) e ponto e vírgula separa argumentos (A6 e A10 entram sozinhos). Ficam de fora 5, 7, 8 e 9.",
"':' = 'até'; ';' = 'e'.",
["ms"],["in10","vinf"]); SRC("FCC, Auditor Fiscal Manaus/AM, 2019");

q("inf",2,"Excel (Microsoft 365)",
"No Excel, A1 = 10, A2 = -5, A3 = 20 e A4 = -8. A fórmula =SOMA(A1;A4) em A5 resulta em:",
["2.","17.","30.","43."],0,
"Com ponto e vírgula, só entram A1 e A4: 10 + (-8) = 2. Com dois-pontos (=SOMA(A1:A4)) seriam as quatro células: 17.",
"Olhe o separador antes de somar tudo.",
["ms"],["in10","vinf"]); SRC("FGV, Pref. São José dos Campos/SP, 2024");

/* Aula 11: Word */
q("inf",2,"Word (Microsoft 365)",
"Uma professora selecionou um trecho no Word para pôr em negrito, mas acabou apagando o texto sem querer. Para desfazer a última ação, ela deve teclar:",
["Ctrl+T.","Ctrl+N.","Ctrl+D.","Ctrl+Z."],3,
"Ctrl+Z desfaz a última ação (e pode ser repetido); Ctrl+Y refaz. No Word em português, Ctrl+T seleciona tudo, Ctrl+N aplica negrito e Ctrl+D abre a janela Fonte.",
"No Word em português os atalhos mudam: N = negrito, T = selecionar tudo.",
["ms"],["in11","vinf"]); SRC("IBGP, Pref. Uberaba/MG, 2023");

q("inf",2,"Word (Microsoft 365)",
"No Word em português, configuração padrão, julgue: I. O botão Substituir localiza todas as ocorrências de uma palavra e as troca por outra. II. Ctrl+G alinha o parágrafo à direita. III. O Painel de Seleção fica na guia Design. Está correto o que se afirma em:",
["I e II, apenas.","I e III, apenas.","II e III, apenas.","I, II e III."],0,
"I está certa (Página Inicial > Edição > Substituir, ou Ctrl+U). II está certa no Word em português: Ctrl+G alinha à direita, Ctrl+E centraliza, Ctrl+J justifica e Ctrl+Q alinha à esquerda (no Word em inglês o Ctrl+G seria 'Ir para'). III está errada: o Painel de Seleção fica em Página Inicial > Selecionar e em Layout > Organizar.",
"Alinhamentos no Word PT: Q, E, G, J (esquerda, centro, direita, justificado).",
["ms"],["in11","vinf"]); SRC("IBGP, Pref. Betim/MG, 2022");

q("inf",2,"Word (Microsoft 365)",
"No Word, para gravar um arquivo que já existe como um NOVO arquivo, com outro nome, usa-se:",
["Novo.","Abrir.","Salvar como.","Salvar."],2,
"Salvar como permite escolher outro nome, local ou formato (F12 no Windows), mantendo o original intacto. Salvar (Ctrl+B no Word em português) só grava as alterações no mesmo arquivo.",
"Salvar sobrescreve; Salvar como cria outra cópia.",
["ms"],["in11","vinf"]); SRC("Cebraspe, Guarda Civil Municipal Boa Vista/RR, 2023");

q("inf",2,"Word (Microsoft 365)",
"No Word, o botão Mostrar Tudo (¶), no grupo Parágrafo da guia Página Inicial, faz com que:",
["todos os parágrafos recebam recuo de 1,25 cm.","as marcas de formatação (parágrafo, espaço, tabulação) apareçam no texto.","os títulos sejam classificados automaticamente como Título 1, Título 2.","se abra uma área para criar equações."],1,
"Ele exibe os caracteres ocultos: ¶ no fim de cada parágrafo, pontos nos espaços, setas nas tabulações. Ajuda a achar espaços e quebras sobrando. Essas marcas não saem na impressão. Atalho: Ctrl+Shift+8.",
"As marcas aparecem na tela, mas não são impressas.",
["ms"],["in11","vinf"]); SRC("FCC, Pref. São José do Rio Preto/SP, 2019");

q("inf",2,"Word (Microsoft 365)",
"Um técnico digitou um texto longo todo em MAIÚSCULAS. Com o texto selecionado, para deixar maiúscula só a primeira letra de cada frase, ele deve:",
["redigitar tudo, pois o Word não tem essa opção.","usar o botão Maiúsculas e Minúsculas, na guia Página Inicial.","usar o comando Inverter Letras, na guia Layout.","usar a Correção Automática da guia Revisão."],1,
"O botão Maiúsculas e Minúsculas (Aa), no grupo Fonte da Página Inicial, tem a opção 'Primeira letra da frase em maiúscula'. Shift+F3 alterna entre os formatos.",
"Shift+F3 alterna maiúsculas, minúsculas e iniciais maiúsculas.",
["ms"],["in11","vinf"]); SRC("FCC, Técnico TJ/MA, 2019");

q("inf",2,"Word (Microsoft 365)",
"No Word, as Quebras de Seção são importantes quando é preciso:",
["definir espaçamento antes e depois dos parágrafos.","inserir caixas de texto.","mesclar células de uma tabela.","usar cabeçalhos, rodapés ou orientação de página diferentes em partes do documento."],3,
"Cada seção pode ter margens, orientação (retrato ou paisagem), colunas, numeração e cabeçalho/rodapé próprios. As quebras ficam em Layout > Quebras. Mesclar células fica em Layout da Tabela.",
"Mudar a configuração de página só em um trecho = quebra de seção.",
["ms"],["in11","vinf"]); SRC("FGV, Polícia Militar/SP, 2022");

/* Aula 12: PowerPoint */
q("inf",2,"PowerPoint (Microsoft 365)",
"Um arquivo com a extensão .pps está associado ao programa:",
["Adobe Photoshop.","Microsoft Publisher.","Adobe Acrobat.","Microsoft PowerPoint."],3,
".pps (e o atual .ppsx) é a 'apresentação de slides' do PowerPoint, que abre direto no modo de exibição. O formato de edição comum é .pptx (antigo .ppt).",
"PPS = abre já apresentando; PPT/PPTX = abre para editar.",
["ms"],["in12","vinf"]); SRC("IBGP, Pref. Andradas/MG, 2017");

q("inf",2,"PowerPoint (Microsoft 365)",
"Um técnico ainda não sabe que logotipo e estilo os slides terão. Para mudar isso depois em todos de uma vez, ele deve editar o slide especial em que os outros se baseiam, chamado:",
["Slide Mestre.","Folha de Estilo.","Folheto Mestre.","Anotações Mestras."],0,
"O Slide Mestre (Exibir > Slide Mestre) guarda fundo, fontes, cores, logotipo e layouts; o que muda nele vale para todos os slides baseados nele. Folheto Mestre e Anotações Mestras cuidam só das versões impressas.",
"Mudança em todos os slides de uma vez = Slide Mestre.",
["ms"],["in12","vinf"]); SRC("FCC, Técnico Fazendário SEFAZ/MA, 2019");

q("inf",2,"PowerPoint (Microsoft 365)",
"Durante a apresentação de slides, o atalho que ativa o ponteiro laser no PowerPoint é:",
["Ctrl+Q.","Ctrl+W.","Ctrl+O.","Ctrl+L."],3,
"No modo de apresentação, Ctrl+L liga o ponteiro laser e Ctrl+P a caneta para desenhar sobre o slide. Esc encerra a apresentação.",
"L de laser; P de pen (caneta).",
["ms"],["in12","vinf"]); SRC("Vunesp, Pref. Guarulhos/SP, 2023");

q("inf",2,"PowerPoint (Microsoft 365)",
"O texto digitado no painel de Anotações de um slide, ao iniciar a apresentação com F5:",
["aparece por cima do conteúdo do slide.","aparece antes do conteúdo do slide.","não é exibido para o público.","só aparece se o apresentador apertar Enter."],2,
"As anotações são lembretes de quem apresenta. O público não as vê; elas aparecem no Modo de Exibição do Apresentador e podem ser impressas.",
"Anotação é cola do apresentador, não conteúdo do slide.",
["ms"],["in12","vinf"]); SRC("Vunesp, Pref. São Bernardo do Campo/SP, 2023");

q("inf",2,"PowerPoint (Microsoft 365)",
"Com dois monitores, o recurso do PowerPoint em que o público vê só o slide enquanto quem apresenta vê também anotações, o próximo slide e o tempo decorrido é o:",
["Modo de Exibição do Apresentador.","Modo de Exibição Anotações.","Recurso de Divisão de Janelas.","Modo de Classificação de Slides."],0,
"O Modo de Exibição do Apresentador mostra ao orador o slide atual, o próximo, as anotações e um cronômetro, enquanto o projetor exibe só o slide em tela cheia. Alt+F5 abre esse modo.",
"Público vê o slide; o apresentador vê o 'painel de controle'.",
["ms"],["in12","vinf"]); SRC("Vunesp, Pref. Mogi das Cruzes/SP, 2018");

q("inf",2,"PowerPoint (Microsoft 365)",
"No PowerPoint, o atalho de teclado que insere um novo slide é:",
["Ctrl+M.","Ctrl+N.","Ctrl+P.","Ctrl+J."],0,
"Ctrl+M insere um novo slide depois do atual. Ctrl+N cria uma nova apresentação em branco e Ctrl+P abre a impressão.",
"M de mais um slide; N de novo arquivo.",
["ms"],["in12","vinf"]); SRC("Vunesp, Pref. Buritizal/SP, 2018");

/* Aula 13: Windows 10 */
q("inf",1,"Windows",
"No Windows 10 em português, assinale o atalho com a função CORRETA:",
["Win+O: abre a central de ações.","Win+D: mostra e oculta a área de trabalho.","Win+M: abre o Explorador de Arquivos.","Win+C: abre as Configurações."],1,
"Win+D minimiza tudo e mostra a área de trabalho; repetindo, as janelas voltam. Explorador de Arquivos é Win+E, Configurações é Win+I e central de ações é Win+A. Win+M só minimiza as janelas.",
"D de desktop; E de Explorer; I de configurações.",
["ms"],["in13","vinf"]); SRC("IBGP, Pref. Betim/MG, 2022");

q("inf",1,"Windows",
"Sobre o Gerenciador de Tarefas do Windows 10, julgue (V ou F): ( ) otimiza as unidades de disco para funcionarem melhor; ( ) monitora o desempenho de recursos como processador e memória; ( ) mostra os programas abertos e os que rodam em segundo plano. A sequência correta é:",
["F, V, F.","F, V, V.","V, F, F.","V, F, V."],1,
"O Gerenciador de Tarefas (Ctrl+Shift+Esc) lista processos e aplicativos, mostra o uso de CPU, memória, disco e rede e permite finalizar programas travados. Otimizar unidades é tarefa da ferramenta 'Desfragmentar e Otimizar Unidades'.",
"Gerenciador de Tarefas mostra e encerra; não desfragmenta.",
["ms"],["in13","vinf"]); SRC("IBGP, Pref. São João del-Rei/MG, 2021");

q("inf",1,"Windows",
"No Windows 10, os aplicativos que estão abertos podem ser vistos na:",
["Barra de Arquivos.","Barra de Tarefas.","Barra de Ferramentas.","Painel de Controle."],1,
"A Barra de Tarefas, normalmente na parte de baixo da tela, mostra os ícones dos programas abertos (com um traço embaixo) e permite alternar entre eles. 'Barra de Arquivos' não existe.",
"Programa aberto = ícone sublinhado na Barra de Tarefas.",
["ms"],["in13","vinf"]); SRC("IBGP, Pref. São João del-Rei/MG, 2021");

q("inf",1,"Windows",
"Um servidor quer adicionar uma impressora no computador com Windows 10 em português. Entre as opções, ele deve usar o:",
["Gerenciamento do computador.","Windows Explorer.","Gerenciador de Dispositivos.","Painel de Controle."],3,
"No Painel de Controle, 'Dispositivos e Impressoras' tem a opção Adicionar impressora. No Windows 10 atual o caminho mais comum é Configurações (Win+I) > Dispositivos > Impressoras e scanners. O Gerenciador de Dispositivos só mostra o hardware e seus drivers.",
"Gerenciador de Dispositivos cuida de drivers; não é onde se adiciona impressora.",
["ms"],["in13","vinf"]); SRC("IBGP, Pref. São João del-Rei/MG, 2021");

q("inf",1,"Windows",
"No Explorador de Arquivos do Windows 10, o atalho que cria uma NOVA PASTA é:",
["Ctrl+P.","Alt+Shift+N.","Ctrl+N.","Ctrl+Shift+N."],3,
"Ctrl+Shift+N cria uma nova pasta no local aberto. Ctrl+N abre uma nova janela do Explorador e Ctrl+P é imprimir.",
"Com Shift, o N vira 'nova pasta'; sem Shift, 'nova janela'.",
["ms"],["in13","vinf"]); SRC("IBGP, Pref. Dores do Indaiá/MG, 2021");

q("inf",1,"Windows",
"No Windows 10, o atalho que abre as Configurações do Windows é:",
["Win+C.","Ctrl+C.","Win+I.","Ctrl+W."],2,
"Win+I abre as Configurações. Ctrl+C copia e Ctrl+W fecha a janela ou guia atual.",
"I de 'ícone de engrenagem' (Configurações).",
["ms"],["in13","vinf"]); SRC("IBGP, Pref. Dores do Indaiá/MG, 2021");

q("inf",1,"Windows",
"No Windows 10 é possível criar uma conta para cada pessoa que usa o computador, porque ele é um sistema operacional:",
["aberto.","de arquitetura livre.","de domínio público.","multiusuário."],3,
"Multiusuário: várias contas no mesmo computador, cada uma com arquivos, área de trabalho e configurações próprias. O Windows é proprietário (pago), não é aberto nem de domínio público.",
"Windows é proprietário; Linux é que é de código aberto.",
["ms"],["in13","vinf"]); SRC("IBGP, Pref. Itabira/MG, 2020");

/* Aula 14: Hardware e software */
q("inf",4,"Hardware e software",
"Um professor vai ligar o notebook ao projetor (datashow) da sala. São padrões de conexão de VÍDEO:",
["HDMI, P2 e VGA.","VGA, USB e SATA.","Serial, SATA e VGA.","HDMI, DVI e VGA."],3,
"VGA (analógico, conector azul), DVI e HDMI (digitais; o HDMI leva também o áudio) transmitem imagem. P2 é o conector de áudio de fone, SATA liga discos dentro do computador e USB é de uso geral.",
"P2 é áudio; SATA é disco.",
[],["in14","vinf"]); SRC("IBGP, Pref. Uberaba/MG, 2023");

q("inf",4,"Hardware e software",
"Um pen drive de 16 GB, vazio, vai receber arquivos de 400 KB cada. O número máximo de arquivos que cabem nele fica mais próximo de:",
["400.","4.000.","40.000.","400.000."],2,
"16 GB = 16 × 1.024 × 1.024 KB = 16.777.216 KB. Dividindo por 400 KB, cabem cerca de 41.900 arquivos, ou seja, na casa dos 40.000. (Com a conta aproximada em base 1.000: 16.000.000 ÷ 400 = 40.000.)",
"Cada degrau (KB, MB, GB, TB) multiplica por 1.024, cerca de mil.",
[],["in14","vinf"]); SRC("IBGP, SEJUSP/MG, 2021");

q("inf",4,"Hardware e software",
"Sobre o hardware, é INCORRETO afirmar que:",
["scanner, gabinete e multifuncional são exemplos dele.","suas peças podem ser trocadas por outras.","é a parte lógica do computador.","pode se desgastar com o tempo."],2,
"Hardware é a parte física (o que se pode tocar). A parte lógica (programas, sistemas, arquivos) é o software.",
"Físico = hardware; lógico = software.",
[],["in14","vinf"]); SRC("IBGP, Pref. São João del-Rei/MG, 2021");

q("inf",4,"Hardware e software",
"Um anúncio diz: 'Notebook Intel Core i7, 4 GB, 1 TB'. Os três dados se referem, nessa ordem, a:",
["processador, memória de vídeo e disco rígido.","memória RAM, processador e disco rígido.","processador, memória RAM e memória de vídeo.","processador, memória RAM e disco rígido."],3,
"Core i7 é o processador; 4 GB é a memória RAM, de trabalho; 1 TB é o armazenamento (HD ou SSD). Em anúncios, o número menor em GB costuma ser a RAM, e o maior (TB) o disco.",
"RAM em GB; armazenamento em centenas de GB ou TB.",
[],["in14","vinf"]); SRC("IBGP, Pref. Dores do Indaiá/MG, 2021");

q("inf",4,"Hardware e software",
"'Memória muito rápida e cara, usada para guardar temporariamente os dados que o processador mais usa.' O trecho define a memória:",
["cache.","EEPROM.","ROM.","RAM."],0,
"A cache fica junto do processador e guarda cópias do que ele usa com frequência, evitando buscar na RAM, que é mais lenta. Na ordem de velocidade: registradores > cache > RAM > disco.",
"Cache trabalha colada ao processador.",
[],["in14","vinf"]); SRC("IBGP, Pref. Itabira/MG, 2021");

q("inf",4,"Hardware e software",
"No anúncio 'Notebook Intel Core i5, 4 GB, 1 TB, tela LED 15,6\", Windows 10', as referências 1 TB e i5 correspondem, respectivamente, a:",
["microprocessador e disco rígido.","disco rígido e memória.","memória e disco rígido.","disco rígido e microprocessador."],3,
"1 TB é a capacidade do disco (armazenamento) e i5 é o modelo do processador Intel. Repare na ordem pedida: primeiro o 1 TB, depois o i5.",
"Questão de ordem: confira 'respectivamente'.",
[],["in14","vinf"]); SRC("IBGP, Pref. Itabira/MG, 2021");

/* Aula 15: Inteligência Artificial */
q("inf",4,"Inteligência Artificial",
"Em 2023 se popularizou no Brasil o uso de máquinas que executam tarefas e tomam decisões por algoritmos, como os assistentes que conversam de forma quase humana. Esse conceito é o de:",
["Realidade Virtual.","Inteligência Artificial.","Internet das Coisas.","Computação em Nuvem."],1,
"Chatbots que simulam conversa humana (ChatGPT, Copilot, Gemini) são aplicações de Inteligência Artificial. Realidade Virtual cria ambientes imersivos; Internet das Coisas liga objetos à rede; nuvem é a oferta de recursos de computação pela internet.",
"Simular raciocínio ou conversa humana = IA.",
[],["in15","vinf"]); SRC("COTEC, Pref. Limeira do Oeste/MG, 2024");

q("inf",4,"Inteligência Artificial",
"Ferramentas como o ChatGPT podem ser classificadas como:",
["bancos de dados.","algoritmos determinísticos de automação industrial.","sistemas de aprendizado de máquina e processamento de linguagem natural.","modelos criptográficos de segurança digital."],2,
"São grandes modelos de linguagem (LLM): aprenderam padrões a partir de enormes volumes de texto (aprendizado de máquina) e entendem e geram linguagem humana (PLN). Não consultam um banco de dados com respostas prontas, e a mesma pergunta pode ter respostas diferentes.",
"IA generativa não é determinística: a resposta pode variar.",
[],["in15","vinf"]); SRC("FAFIPA, Pref. Araucária/PR, 2025");

q("inf",4,"Inteligência Artificial",
"Na IA generativa, a engenharia de prompt serve para:",
["orientar a IA a produzir resultados desejados, relevantes e de qualidade.","construir modelos especialistas para cada contexto.","fazer o ajuste fino (fine tuning) do modelo.","aumentar a velocidade de resposta do modelo."],0,
"Engenharia de prompt é escrever bem o pedido: contexto, papel, formato da resposta, exemplos e limites. Ela não muda o modelo; fine tuning, sim, retreina o modelo com dados novos.",
"Prompt muda o pedido; fine tuning muda o modelo.",
[],["in15","vinf"]); SRC("Instituto Ágata, Pref. Piçarra/PA, 2025");

q("inf",4,"Inteligência Artificial",
"O TSE proibiu nas eleições o uso de um recurso que cria vídeos falsos trocando ou combinando rosto e voz de uma pessoa, sincronizando lábios e expressões, para fingir que ela disse ou fez algo. Esse recurso é o:",
["moviefake.","fake face.","deepfake.","fakeperson."],2,
"Deepfake usa IA (aprendizado profundo, deep learning) para fabricar vídeos e áudios falsos muito realistas. É usado em golpes, desinformação e fraudes; desconfie de vídeos com pedidos de dinheiro ou dados.",
"Deep vem de deep learning, a técnica de IA usada.",
[],["in15","vinf"]); SRC("Instituto Abaré-eté, Pref. São Gabriel da Cachoeira/AM, 2024");

q("inf",4,"Inteligência Artificial",
"O conceito fundamental para criar sistemas de IA que aprendem e se adaptam a partir de dados é:",
["algoritmos de criptografia.","redes de computadores.","aprendizado de máquina.","programação orientada a objetos."],2,
"Aprendizado de máquina (machine learning) é a área da IA em que o sistema aprende padrões com exemplos, em vez de seguir só regras escritas à mão. Deep learning é um tipo de aprendizado de máquina com redes neurais de muitas camadas.",
"Aprender com dados = machine learning.",
[],["in15","vinf"]); SRC("DECORP, Pref. Feijó/AC, 2024");

q("inf",4,"Inteligência Artificial",
"Na interação com a IA generativa, o prompt é:",
["um conjunto de algoritmos que melhora a precisão do modelo.","um texto em linguagem natural que orienta a IA a executar uma tarefa e gerar o conteúdo.","uma interface que dispensa o uso de linguagem natural.","o banco de dados onde a IA guarda as respostas."],1,
"Prompt é a instrução escrita pelo usuário em linguagem comum (pergunta, pedido, contexto). O modelo, já treinado, gera o conteúdo a partir dela.",
"Prompt = o pedido que você digita.",
[],["in15","vinf"]); SRC("IBFC, TRF 5ª Região, 2024");

/* Aula 16: Teams */
q("inf",2,"Teams",
"Sobre a colaboração em documentos no Microsoft Teams, julgue (V ou F): ( ) O Teams só trabalha com documentos do Word e do Excel. ( ) Vários usuários podem editar ao mesmo tempo um documento compartilhado. ( ) O Teams se integra a outros serviços, como o SharePoint. A sequência correta é:",
["F, V, V.","F, F, V.","V, V, V.","V, F, F."],0,
"O Teams abre e permite coeditar arquivos do Word, Excel e PowerPoint, além de exibir PDFs e outros formatos. Os arquivos de cada equipe ficam guardados no SharePoint; os do chat, no OneDrive.",
"Arquivos da equipe ficam no SharePoint; os do chat, no OneDrive.",
["ms"],["in16","vinf"]); SRC("Instituto Access, Pref. Itaguara/MG, 2024");

q("inf",2,"Teams",
"Complete, na ordem: ______ são grupos de pessoas, conteúdos e ferramentas em torno de projetos; ______ podem ser padrão, compartilhados ou privados; ______ podem ser públicas, permitindo que qualquer pessoa da organização entre.",
["Canais / Canais / Equipes","Equipes / Canais / Equipes","Equipes / Equipes / Canais","Canais / Equipes / Canais"],1,
"A Equipe é o grupo maior (pública ou privada). Dentro dela ficam os Canais, que dividem os assuntos e podem ser padrão (todos da equipe), compartilhados (com gente de fora da equipe) ou privados (só alguns membros).",
"Equipe contém canais, nunca o contrário.",
["ms"],["in16","vinf"]); SRC("Vunesp, Pref. Campinas/SP, 2025");

q("inf",2,"Teams",
"No Microsoft Teams, o recurso que reúne todas as suas menções, respostas e demais notificações é:",
["Chat.","Canal.","Tarefas.","Atividade."],3,
"O feed de Atividade (ícone de sino) concentra @menções, respostas, curtidas e avisos de canais. O Chat é para conversas individuais ou em grupo; o Canal é o espaço de cada assunto dentro de uma equipe.",
"Sino = Atividade.",
["ms"],["in16","vinf"]); SRC("Consulplan, Câmara de Araraquara/SP, 2025");

q("inf",2,"Teams",
"No Microsoft Teams, o espaço dentro de uma equipe onde os membros conversam e compartilham arquivos sobre um assunto específico é o:",
["canal.","chat privado.","reunião.","grupo de e-mail."],0,
"Cada equipe se divide em canais (por exemplo, 'Escalas', 'Ocorrências'), cada um com conversas, arquivos e abas próprios. Todo time começa com o canal Geral.",
"Assunto específico dentro da equipe = canal.",
["ms"],["in16","vinf"]); SRC("PROMUN, Pref. Campos do Jordão/SP, 2025");

q("inf",2,"Teams",
"Sobre uma Equipe no Microsoft Teams, é correto afirmar que ela:",
["precisa ter um chefe cadastrado como organizador.","só pode ter um chat.","só aceita pessoas da mesma organização.","aceita membro externo à organização apenas na categoria de convidado."],3,
"Pessoas de fora entram como convidados, com permissões mais restritas que as dos membros. Cada equipe tem proprietários (que administram), membros e, se permitido, convidados.",
"Proprietário administra; membro participa; convidado vem de fora.",
["ms"],["in16","vinf"]); SRC("Vunesp, Pref. Monte Alto/SP, 2024");

q("inf",2,"Teams",
"O software de reuniões on-line que tem integração nativa com o OneDrive, por ser da mesma empresa, é o:",
["Zoom.","WhatsApp.","Google Meet.","Microsoft Teams."],3,
"Teams e OneDrive são da Microsoft e fazem parte do Microsoft 365, junto com Outlook, SharePoint, Word e Excel. O Google Meet se integra ao Google Drive.",
"Microsoft com Microsoft; Google com Google.",
["ms"],["in16","vinf"]); SRC("IDECAN, Pref. Mossoró/RN, 2024");

/* Aula 17: Redes sociais */
q("inf",4,"Redes sociais",
"São exemplos de redes sociais na internet:",
["Facebook, Hotmail e Twitter.","Skype, Facebook e Gmail.","Flickr, LinkedIn e Gmail.","LinkedIn, Facebook e Twitter."],3,
"LinkedIn, Facebook e Twitter (hoje X) são redes sociais: perfis, conexões e publicações. Hotmail (Outlook.com) e Gmail são serviços de e-mail; Skype é de chamadas e mensagens.",
"E-mail não é rede social.",
[],["in17","vinf"]); SRC("IBGP, CISSUL/MG, 2017");

q("inf",4,"Redes sociais",
"São exemplos de redes sociais:",
["Twitter, Bing, TikTok e Google.","Facebook, Instagram, LinkedIn e Twitter.","Bing, Instagram, Facebook e YouTube.","Instagram, TikTok, Google e Gmail."],1,
"Todas as da opção certa são redes sociais. Bing e Google são buscadores e Gmail é e-mail, o que derruba as outras opções.",
"Basta um intruso (buscador, e-mail) para eliminar a alternativa.",
[],["in17","vinf"]); SRC("Cebraspe, Pref. São Cristóvão/SE, 2023");

q("inf",4,"Redes sociais",
"O termo 'hashtag', muito usado nas redes sociais, está associado ao símbolo:",
["# (cerquilha ou jogo da velha).","@ (arroba).","& (e comercial).","% (porcentagem)."],0,
"A hashtag (#tema) agrupa publicações sobre o mesmo assunto e vira link clicável. A arroba (@nome) serve para mencionar uma pessoa ou perfil.",
"# marca assunto; @ marca pessoa.",
[],["in17","vinf"]); SRC("IBFC, MGS/MG, 2024");

q("inf",4,"Redes sociais",
"Para usar o WhatsApp no computador (WhatsApp Web), o reconhecimento entre o computador e o celular é feito por meio de:",
["senha do WhatsApp.","cabo USB ligando os aparelhos.","código numérico enviado por e-mail.","QR code exibido no computador e lido pela câmera do celular."],3,
"Em Aparelhos conectados, no celular, lê-se o QR code mostrado em web.whatsapp.com (há também a opção de vincular com o número de telefone). Golpistas pedem fotos desse QR code para clonar a sessão: nunca envie a ninguém.",
"Quem lê o seu QR code passa a ver suas conversas.",
[],["in17","vinf"]); SRC("FGV, SEFAZ/AM, 2022");

q("inf",4,"Redes sociais",
"Uma empresa quer uma rede social voltada ao mundo profissional, para fazer contatos, divulgar vagas e procurar profissionais no mercado. A mais indicada é o:",
["Skype.","Instagram.","LinkedIn.","TikTok."],2,
"O LinkedIn é a rede profissional: currículo (experiência, formação), vagas, páginas de empresas e networking. Instagram e TikTok focam em fotos e vídeos curtos de entretenimento.",
"Currículo e vagas = LinkedIn.",
[],["in17","vinf"]); SRC("Cesgranrio, Banco do Brasil, 2023");

q("inf",4,"Redes sociais",
"Um aplicativo chinês, da empresa ByteDance, ficou entre os mais baixados do mundo em 2019 depois de se fundir com o antigo Musical.ly, sendo famoso pelos vídeos curtos. Trata-se do:",
["Snapchat.","TikTok.","Kwai.","Pinterest."],1,
"O TikTok, da ByteDance, popularizou os vídeos curtos verticais com música e efeitos. O Kwai é um concorrente de outra empresa chinesa; o Snapchat é americano e conhecido pelas mensagens que somem.",
"ByteDance + Musical.ly = TikTok.",
[],["in17","vinf"]); SRC("FCC, SABESP, 2019");
