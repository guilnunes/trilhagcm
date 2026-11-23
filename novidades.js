// Novidades: a entrada mais recente fica no topo. Cada nova adição ao app ganha um id novo (maior que o anterior).
const NEWS = [
  { id: 8, data: "23/11/2026", titulo: "+24 questões de Informática",
    itens: [
      "Nuvem: SaaS, PaaS, IaaS e armazenamento on-line",
      "Outlook e e-mail: Cc, Cco, encaminhar e regras",
      "Segurança: criptografia, integridade, confidencialidade e 2FA",
      "Malware e golpes: trojan, ransomware, DDoS e antecipação de recursos"
    ],
    total: 790 },
  { id: 7, data: "23/11/2026", titulo: "+33 questões de Informática",
    itens: [
      "Internet e redes: LAN, MAN, WAN, switch, protocolos e endereço IP",
      "Intranet, extranet e VPN",
      "Navegadores: atalhos, cookies e navegação anônima",
      "Pesquisa no Google: aspas, sinal de menos, site: e allintitle:"
    ],
    total: 766 },
  { id: 6, data: "22/11/2026", titulo: "+8 questões de Probabilidade",
    itens: [
      "Probabilidade da união, do complementar e de eventos independentes",
      "Probabilidade total e teorema de Bayes",
      "Questões da PM/PE, PC/MG, MP/MG e Pref. Mariana/MG"
    ],
    total: 733 },
  { id: 5, data: "14/11/2026", titulo: "+77 questões de Raciocínio Lógico",
    itens: [
      "Proposições, conectivos, tabela-verdade e quantificadores",
      "Equivalências, negações e argumentos (inclui 1 da IBGP)",
      "Sequências, verdades e mentiras e problemas de lógica",
      "Conjuntos, operações, MMC e análise combinatória",
      "Várias de GCM São José dos Campos, PM e Bombeiros"
    ],
    total: 725 },
  { id: 4, data: "14/11/2026", titulo: "+34 questões de Direito Administrativo",
    itens: [
      "Estado, Governo e Administração, com 3 questões de Guarda Municipal",
      "Atos: caducidade, decadência de 5 anos, atos negociais e homologação",
      "Organização: direta, indireta, outorga, delegação e desconcentração",
      "Agentes públicos, serviços públicos (Lei 8.987) e controle da Administração"
    ],
    total: 648 },
  { id: 3, data: "14/11/2026", titulo: "+27 questões de Direitos Humanos",
    itens: [
      "Teoria geral, características e gerações dos direitos humanos",
      "Carta da ONU, OEA e Declaração Universal de 1948",
      "Tratados no Brasil: status de emenda, supralegal e deslocamento de competência",
      "Regras de Beijing e Estatuto da Igualdade Racial (Lei 12.288)",
      "Várias de provas de Policial Penal e Polícia Civil de MG"
    ],
    total: 614 },
  { id: 2, data: "14/11/2026", titulo: "+101 questões de Português",
    itens: [
      "Questões reais de todas as 15 aulas de Português do Estratégia",
      "Crase, concordância, regência, colocação e pontuação",
      "Conectivos, verbos, sintaxe e formação de palavras",
      "Semântica, figuras de linguagem e variação linguística",
      "Mais de 25 de provas de prefeituras e câmaras de Minas Gerais"
    ],
    total: 588 },
  { id: 1, data: "14/11/2026", titulo: "+82 questões de provas reais",
    itens: [
      "Constitucional: princípios, art. 5º, remédios, Municípios, Administração Pública, Judiciário",
      "Segurança Pública (art. 144), com a decisão do STF de 2025 sobre as guardas",
      "Penal e Processo Penal: penas, prisão domiciliar, cautelares e fiança",
      "Administrativo: princípios, poderes, atos e responsabilidade civil",
      "Mais de 25 vêm de concursos de Guarda Municipal e 3 da banca IBGP"
    ],
    total: 487 }
];
