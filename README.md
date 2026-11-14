# Trilha GCM São João del-Rei

Trilha de estudos por questões para a prova objetiva da Guarda Civil Municipal de São João del-Rei/MG (Edital 04/2026, banca IBGP, prova em 20/12/2026).

App: https://guilnunes.github.io/trilhagcm/

## O que tem

- Mais de 400 questões de 4 alternativas, no estilo IBGP, distribuídas pelas 6 partes da prova e priorizadas pelo peso de cada matéria
- Depois de cada resposta: gabarito, comentário, pegadinha, link para a lei e para a aula correspondente (Estratégia e Vale Concursos)
- Trilha por fases até a data da prova, revisão de erros, simulados de 30 questões com os pesos reais e cronômetro de 3 h
- Funciona offline e pode ser instalado no celular (no Chrome: menu ⋮ > Instalar app / Adicionar à tela inicial)
- Progresso salvo no próprio aparelho, com exportação e importação em JSON (tela Progresso)

O login é só para separar o progresso de cada pessoa no aparelho. Não é segurança: o repositório é público.

## Estrutura

| Arquivo | Conteúdo |
| --- | --- |
| index.html | Tela e estilos |
| app.js | Lógica do app (login, trilha, quiz, simulados, revisão, plano) |
| questoes/01-base.js | Lote 1 e definições: links de leis (L), aulas (E) e a função q() |
| questoes/02-leis-municipais-e-federais.js | Lote 2: leis municipais, leis federais, CTB, primeiros socorros |
| questoes/03-simulados-vale.js | Lote 3: simulados do Vale Concursos adaptados |
| questoes/04-estrategia-penal.js | Lote 4: questões reais de Penal e Processo Penal (via Estratégia) |
| questoes/99-links-vale.js | Liga cada questão à aula do Vale Concursos (sempre por último) |
| novidades.js | Avisos de conteúdo novo, mostrados uma vez ao abrir o app |
| tools/build.py | Inclui os lotes de questoes/ no index.html e no sw.js e atualiza a versão do cache |
| sw.js, manifest.webmanifest, icons/ | PWA (instalação e uso offline) |

## Como acrescentar questões

Criar um novo arquivo em `questoes/` (por exemplo `11-direitos-humanos.js`), rodar `python3 tools/build.py` e acrescentar uma entrada no topo de `novidades.js`, com `id` maior que o anterior. O aviso aparece uma vez para cada usuário.

Formato:

```js
q(materia, fase, "Tópico", "Enunciado", ["A", "B", "C", "D"], indiceCorreto,
  "Comentário", "Pegadinha", ["chaveLei"], ["chaveAula"]);
```

`materia`: esp, leg, por, rl, inf ou cg. `fase`: 1 a 4.
