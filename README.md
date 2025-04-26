# SHOW DO MILHÃO DE GUAXININS 🦝🎙️
Este é um quiz, no estilo "Show do Milhão", para celebrar o episódio 200 do podcast [Realidades Paralelas do Guaxinim (RPGuaxa)](https://www.deviante.com.br/podcasts/rpguaxa/)

| Tabela de Conteúdos |
|---------------------|
| [Lançamento](#lançamento-) |
| [Andamento do projeto](#andamento-do-projeto-) |
| [Linguagens](#linguagens-) |
| [Features planejadas](#features-planejadas-%EF%B8%8F) |
| [Desenvolvimento](#desenvolvimento-) |
| [Colaborações](#colaborações-) |
| [Agradecimentos](#agradecimentos-) |

## Lançamento 📅
A previsão do lançamento do projeto é 18/9/2025, uma semana antes do lançamento do episódio 200, que deve sair no dia 25/9/2025 (se a programação continuar 1 episódio a cada 15 dias). Se houver mudança na programação do podcast, a gente muda aqui também!

## Andamento do projeto ⌛
| Etapa | Andamento | Detalhes |
| ----- | --------- | -------- |
| Base do projeto | Finalizada | Projeto iniciado em 5/4/2025. Base inspirada no projeto final da 9ª Imersão Dev da Alura |
| Criação do JSON com as perguntas | Em andamento | Atualmente com 130 perguntas (23 fáceis, 66 médias, 41 difíceis) |
| Criação do JSON com os personagens convidados | Em andamento | Arquivo criado a partir de planilha disponibilizada por Felipe Xavier. Faltam os personagens dos episódios de 2025 |
| Criação das ajudas | Em andamento | - Personagem Convidado ✅ - Corrida Contra Personagens ✅ - Placas dos Padrinhos ⌛ - Saltar Pergunta ⌛ |
| Correção e melhoramento do código | Em andamento | Fazendo à medida que aprendo mais |
| Modo endurance | A seguir | ⌛ |
| Página de regras do jogo | A seguir | ⌛ |
| Página de agradecimentos | A seguir | ⌛ |
| Deploy | A seguir | Previsto para 11/9/2025 |

## Linguagens 💻
O projeto utiliza HTML, CSS e JavaScript, consumindo dois arquivos JSON.

## Features planejadas 🗒️
- [Modo clássico](#modo-clássico-%EF%B8%8F)
- [Modo endurance](#modo-endurance-)
- [Sistema de ajudas](#ajudas-)
- [Explicação das regras](#explicação-das-regras-)
- [Lista de colaboradores do projeto](#lista-de-colaboradores-do-projeto-) 

### Modo clássico 🕹️
O jogo terá 15 perguntas, divididas em 3 níveis: fácil, médio e difícil. As perguntas serão aleatórias, recebidas de um arquivo JSON.
Durante o jogo, o jogador terá três possibilidades de receber ajudas, assim como no clássico Show do Milhão.

### Modo endurance 🎲
O jogador receberá perguntas de níveis aleatórios, até que erre uma pergunta. Quando errar, o jogo acaba.
Neste modo, o jogador terá 5 ajudas.

### Ajudas 🛟
São 3 ajudas que o jogador pode solicitar no jogo clássico, e mais duas, que poderão ser solicitadas no modo endurance:
- 📞**Personagem convidado**: Funciona como o "Pedir ajuda aos universitários", do Show do Milhão, ou o "Fazer uma ligação", do "Quem quer ser um milionário?". Um personagem de algum episódio do RPGuaxa é sorteado de uma lista, e ele dá a resposta para o jogador. Mas cuidado: ele pode estar errado! Por isso, é o jogador quem decide se vai aceitar a resposta dada ou não. (Mecanicamente, no início do jogo, o jogador escolherá um "atributo". Usando as regras do Guaxinins & Gambiarras, será feito um teste mental normal, para determinar se o personagem convidado vai responder corretamente a pergunta ou não. Quanto menor for o atributo do jogador, maior a chance do personagem dar a resposta correta.)

*Chance de receber a resposta correta se o atributo for...*
| 2 | 3 | 4 | 5 |
| - | - | - | - |
| 60,88% | 56,94% | 53,47 % | 50,46% |

- 🏎️**Corrida contra personagens**: Funciona como a ajuda "Cartas", do Show do Milhão. O jogador disputa contra 3 personagens e, para cada um que é derrotado, uma alternativa errada é eliminada. (Mecanicamente, será feito um teste físico normal, para determinar o resultado do jogador na "corrida" contra os personagens. Quanto maior for o atributo do jogador, maior a chance de chegar em primeiro, eliminando 3 alternativas erradas.)

*Chance de eliminar 3 respostas erradas se o atributo for...*
| 2 | 3 | 4 | 5 |
| - | - | - | - |
| 30,55% | 30,55% | 30,55% | 30,55% |

- Isso é correspondente a tirar um acerto crítico. A chance de critar em um lance de dados é igual para todos os atributos, por isso todos tem a mesma porcentagem!

*Chance de eliminar 2 respostas erradas se o atributo for...*
| 2 | 3 | 4 | 5 |
| - | - | - | - |
| 2,77% | 11,11% | 25% | 44,44% |

*Chance de eliminar 1 resposta errada se o atributo for...*
| 2 | 3 | 4 | 5 |
| - | - | - | - |
| 22,22% | 33,33% | 33,33% | 22,22% |

*Chance de eliminar 0 respostas erradas se o atributo for...*
| 2 | 3 | 4 | 5 |
| - | - | - | - |
| 44,44% | 25% | 11,11% | 2,77% |

- 🪧**Placas dos Padrinhos**: Assim como a plateia pode opinar, votando na alternativa certa, os padrinhos do RPGuaxa vão ajudar o jogador. (Mecanicamente, é feito um teste fácil contrário à aptidão do atributo do jogador - ou seja: se o atributo for 2 ou 3, é feito um teste físico; se o atributo for 4 ou 5, é feito um teste mental. De acordo com o resultado do teste, o jogador recebe porcentagens das "respostas dos padrinhos" para cada alternativa. Atributos medianos - 3 e 4 - têm mais chances de receberem porcentagens mais altas na resposta correta.)
- 🦘**Saltar pergunta** - No modo endurance, o jogador pode usar essa ajuda 2 vezes. Quando o jogdor opta por saltar a pergunta, ela não conta como uma pergunta respondida corretamente. *Ajuda disponível apenas no modo endurance* 

### Explicação das regras 💡
Haverá um espaço com explicação das regras, que o jogador poderá acessar a qualquer momento, sem precisar sair do jogo.

### Lista de colaboradores do projeto 🤝
Será disponibilizada uma lista com os nomes de todas as pessoas que contribuíram para o projeto, seja com o envio de perguntas, seja auxiliando com aspectos técnicos, apoio moral e sugestões.

## Desenvolvimento 🧩
O responsável pelo projeto é [Allan Penoni](https://github.com/mapinguari11).

As perguntas do quiz são criadas de forma colaborativa, através de envios dos ouvintes do podcast por um [formulário disponível online](https://forms.gle/3nawWDW98icCsEGy6).

## Colaborações 🎁
**Sugestões de perguntas** (Em ordem alfabética)
- Domenica Mendes
- Fabíola Belo
- Felipe Xavier
- Jean Macedo
- Jujulili
- Luco Borgs
- Luisa Aguiar
- Anônimo(s)

**Auxílio técnico** (Em ordem alfabética)
- Felipe Xavier - planilha de personagens
- Raquel Araújo - auxílio com JSON
- Thiago de Souza - auxílio com JSON

## Agradecimentos 💚
- Marcelo Guaxinim, pela criação do RPGuaxa e pelo conseguinte surgimento da "guaxomunidade";
- Equipe da 9ª Imersão Dev, da Alura, pela inspiração do quiz e do modelo do site.