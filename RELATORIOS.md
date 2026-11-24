# Relatórios de atividade (para a página de status no Notion)

Página de status: https://www.notion.so/415fa617db4f8191800de0eef44711da

Regras deste arquivo:

- Cada sessão que publicar questões acrescenta aqui um relatório novo, NO TOPO (logo abaixo desta lista), no mesmo commit ou pull request do lote.
- Cada relatório traz: data, conta, lote e pull requests, totais por matéria, o que foi feito, onde parou, a linha de registro, gabaritos decididos pela conta ou pelo comportamento atual, questões atualizadas e problemas de configuração.
- Quem atualizar o Notion copia os relatórios ainda não lançados e marca o campo "Notion" do relatório como "lançado em DD/MM/AAAA". Relatórios antigos não são apagados.
- Sem travessão nos textos, como no resto do repositório.

---

## 24/11/2026 (Chat, conta do Fred): mapa das aulas do Vale Concursos

Notion: lançado em 24/11/2026

Total: 900 questões (esp 166, leg 208, por 165, rl 121, inf 155, cg 85), sem questões novas nesta parte.

Linha de registro: 24/11/2026 (Chat, conta do Fred): mapa das 213 aulas do Vale; 765 questões com link para a aula exata; total 900

O que foi feito:
- Novo arquivo questoes/98-vale-aulas.js com as 213 aulas de conteúdo do curso GCM São João del-Rei no Hotmart (15 módulos), cada uma como chave E.va_<id>, e as regras VALE_REGRAS que ligam tópico e enunciado à aula.
- questoes/99-links-vale.js passou a usar essas regras: a questão aponta para a aula exata, no lugar do link do módulo ou da lei. Links de simulado e da lista de 60 questões de Desarmamento continuam.
- Resultado: 765 questões com link para a aula exata; 135 continuam com o link do módulo porque o Vale não tem aula específica do tema (Atualidades, Cidadania, Cultura, Meio ambiente, Backup, Nuvem, IA, Teams, Hardware, Redes sociais, Semântica, Sintaxe, Figuras de linguagem, Formação de palavras).
- 114 das 213 aulas já têm questões ligadas. As outras 99 (por exemplo, a maior parte dos crimes em espécie do Código Penal, partes 2 em diante de ECA, Improbidade e Idoso, CF arts. 38 a 43, abas do Word, do PowerPoint e do Excel, Matemática) ficam como pauta para questões novas.
- Novidade id 13 (sem mudança no total).

Observações:
- Os PDFs do Vale têm DRM do Hotmart (não copiáveis, com marca d'água do assinante). Por isso não foram extraídos; só os títulos e os endereços das aulas entraram no app.
- As videoaulas não foram assistidas (a sessão não tem acesso a vídeo). Questões novas para as aulas sem cobertura são escritas a partir do tema da aula e da lei oficial.

Problemas de configuração: nenhum.

---

## 23/11/2026 (Chat, conta do Fred): lote 16, Conhecimentos Gerais e Atualidades

Notion: lançado em 24/11/2026

Total: 900 questões (esp 166, leg 208, por 165, rl 121, inf 155, cg 85)

Linha de registro: 23/11/2026 (Chat, conta do Fred): +53 questões de Conhecimentos Gerais (aulas 00 a 08); total 900

Pull requests:
- https://github.com/guilnunes/trilhagcm/pull/6 (aulas 00 a 04, +30): mergeado
- https://github.com/guilnunes/trilhagcm/pull/7 (aulas 05 a 08, +23): mergeado

O que foi feito (arquivo questoes/16-estrategia-conhecimentos-gerais.js, curso 400876):
- Parte 1, aulas 00 a 04: Mercosul, UE e Brexit (6); Oriente Médio e 11 de setembro (6); refugiados, xenofobia e guerra na Ucrânia (6); agro, parceiros comerciais, Copom e transportes (6); eleições, presidencialismo, federação, coleta seletiva e Censo 2022 (6).
- Parte 2, aulas 05 a 08: dengue, febre amarela, população carcerária e Não é Não (6); marco temporal, ODS, Acordo de Paris e créditos de carbono (6); Pampulha, Chaplin, TV Tupi, Jovem Guarda e Raízes do Brasil (6); cidadania e Constituição Cidadã (5).
- Chaves criadas no arquivo 16: E.cg0 a cg9 e cg11, cg13, cg15, cg17, cg19.
- Novidades: ids 11 e 12. Site publicado com cache trilhagcm-v21.

Onde parou: Conhecimentos Gerais concluído. As aulas 09 a 20 são retrospectivas (só texto) e simulados com questões inéditas do Estratégia, que pelo README não entram.

Conferência final do pacote no Estratégia: todas as aulas com questões dos 8 cursos estão cobertas (Penal 00 a 05, Constitucional 00 a 07, Administrativo 00 a 09, Direitos Humanos 00 a 06, Português 00 a 14, Raciocínio Lógico 00 a 13, Informática 00 a 17, Conhecimentos Gerais 00 a 08). Administrativo aula 10 só tem resumo, sem questões. Extração do Estratégia encerrada. Aulas com poucas questões, se quiser reforçar depois: Constitucional 00 (2), Direitos Humanos 02 (2) e 05 (2).

Gabaritos decididos pela conta e não pelo PDF: nenhum.

Questões atualizadas:
- Acordo Mercosul e UE: escrito como "negociações concluídas em dezembro de 2024", sem afirmar a assinatura final.
- Eleições de 2026: enunciado no passado, porque a votação já aconteceu.
- Marco temporal: comentário cita a decisão do STF de 2023 e a Lei 14.701/2023.
- Mercosul: comentário cita a Bolívia como membro pleno desde 2024 e a Venezuela suspensa.
- Fontes incompletas no PDF: IDECAN, Pref. Marilândia/ES (sem ano); UNICENTRO 2011 e 2012 (sem cargo).

Problemas de configuração: nenhum (push, PR pela API REST e auto-merge funcionaram).

---

## 23/11/2026 (Chat, conta do Fred): lote 15, Noções de Informática

Notion: lançado em 24/11/2026

Total ao fim do lote: 847 questões (esp 166, leg 208, por 165, rl 121, inf 155, cg 32)

Linha de registro: 23/11/2026 (Chat, conta do Fred): +114 questões de Informática (aulas 00 a 17); total 847

Pull requests:
- https://github.com/guilnunes/trilhagcm/pull/2 (aulas 00 a 04, +33): mergeado
- https://github.com/guilnunes/trilhagcm/pull/3 (aulas 05 a 08, +24): mergeado
- https://github.com/guilnunes/trilhagcm/pull/4 (aulas 09 a 12, +26): mergeado
- https://github.com/guilnunes/trilhagcm/pull/5 (aulas 13 a 17, +31): mergeado

O que foi feito (arquivo questoes/15-estrategia-informatica.js, curso 400883):
- Parte 1, aulas 00 a 04: internet e redes (7), redes parte 2 (6), intranet (6), navegadores (8), pesquisa e busca (6).
- Parte 2, aulas 05 a 08: nuvem (6), Outlook (6), segurança da informação (6), malware e golpes (6).
- Parte 3, aulas 09 a 12: backup (7), Excel (7), Word (6), PowerPoint (6).
- Parte 4, aulas 13 a 17: Windows 10 (7), hardware (6), IA (6), Teams (6), redes sociais (6).
- Chaves criadas no arquivo 15: E.in1, in3, in4, in12, in16, in17.
- Novidades: ids 7, 8, 9 e 10. Site publicado com cache trilhagcm-v18.

Onde parou: Noções de Informática concluída (aulas 00 a 17).

Gabaritos decididos pela conta ou pelo comportamento atual, e não pelo PDF ou pela banca:
- Aula 03, IBGP Itabira 2021: nova janela no Chrome. A banca deu Ctrl+T; usado Ctrl+N (Ctrl+T abre guia).
- Aula 04, IBGP São João del-Rei 2021: excluir palavra no Google. O PDF apontava "pesquisa: futebol excluir"; usado "futebol -americano", o operador real.
- Aula 06, IBGP São João del-Rei 2021: exemplo de e-mail. A opção da banca tinha espaço depois do @ (inválida); reescrita com o endereço correto.
- Aula 08, IBGP São João del-Rei 2021: V ou F de malware. A sequência correta (V V V F) não estava entre as opções e a banca marcou F V V V; alternativas ajustadas.
- Aula 11, IBGP Betim 2022: Ctrl+G no Word. O comentário do PDF diz "Ir para" (Word em inglês); no Word em português Ctrl+G alinha à direita, então ficou "I e II".

Questões atualizadas:
- Aula 03: navegação InPrivate citada no Internet Explorer (descontinuado); reescrita para o Edge.
- Aula 00: WPA2 como opção mais segura; comentário acrescenta o WPA3.
- Aula 13: adicionar impressora pelo Painel de Controle; comentário indica o caminho atual em Configurações.

Problemas de configuração:
- Nenhum bloqueio: push, PR pela API REST e auto-merge funcionaram.
- O tools/extract.js foi carregado por import do próprio site (opção prevista no cabeçalho do arquivo) em vez de colado; é o mesmo código.
- Algumas chamadas de JavaScript falharam durante a troca de página para o PDF; repetir a chamada resolveu.

---

## 22/11/2026 (Chat, conta do Fred): lote 14, Raciocínio Lógico aula 13 (teste)

Notion: lançado em 22/11/2026

Total ao fim do lote: 733 questões (esp 166, leg 208, por 165, rl 121, inf 41, cg 32)

Linha de registro: 22/11/2026 (Chat, conta do Fred): +8 questões de Probabilidade (RL aula 13); total 733

Pull request:
- https://github.com/guilnunes/trilhagcm/pull/1: mergeado (o merge foi feito pelo Guilherme, porque a sessão não tinha permissão de merge)

O que foi feito: 8 questões reais de Probabilidade (curso 401340, aula 4040816) acrescentadas no fim de questoes/14-estrategia-raciocinio-logico.js, bloco "/* Aula 13: probabilidade */", fase 3, aulas ["rl13","vrl"]. Bancas: AOCP (PM/PE e Pref. Pinhais), Consulplan (PM/RN e MP/MG), FGV (PC/MG e TRT 24), FUNDEP (Pref. Mariana/MG). Novidade id 6.

Onde parou: Raciocínio Lógico concluído (aulas 00 a 13).

Gabaritos decididos pela conta e não pelo PDF: nenhum (as 8 contas bateram com o PDF).

Problemas de configuração:
- Na primeira tentativa a sessão negou anexar o repositório com push; funcionou depois do ajuste nas configurações.
- O gh pr create falha (GraphQL indisponível na sessão); o PR foi aberto pela API REST.
- A sessão bloqueou o merge direto; nas sessões seguintes passou a ser usado o auto-merge.
- Screenshots do Chrome falharam na extensão; leitura e JavaScript na aba funcionaram.
