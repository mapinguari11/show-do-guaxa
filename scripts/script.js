//###VARIÁVEIS GERAIS###
//Lista de perguntas e respostas
let perguntasRPGuaxa; // Variável global para armazenar o JSON
// pequena mostra de perguntas para testes
const perguntas = [
  {
    "nivel": "Fácil",
    "questoes": [
      {
        "pergunta": "Qual o nome do sistema utilizado no RPGuaxa?",
        "alternativas": [
            {
                "texto": "Guaxinins & Gambiarras",
                "correto": true
            },
            {
                "texto": "Dungeons & Dragons",
                "correto": false
            },
            {
                "texto": "Tormenta 20",
                "correto": false
            },
            {
                "texto": "Táquions",
                "correto": false
            }
        ],
        "autoria": []
    },
    {
        "pergunta": "Como se chama a parte final do episódio, em que o Guaxa comenta um pouco sobre a aventura e dá alguns avisos?",
        "alternativas": [
            {
                "texto": "Guaxaverso",
                "correto": false
            },
            {
                "texto": "Escudo do Mestre",
                "correto": true
            },
            {
                "texto":"Fala, Guaxa!",
                "correto": false
            },
            {
                "texto": "Epílogo",
                "correto": false
            }
        ],
        "autoria": []
    },
    {
        "pergunta": "Qual a verdadeira identidade da Morte?",
        "alternativas": [
            {
                "texto": "Ewa",
                "correto": false
            },
            {
                "texto": "Sílvio",
                "correto": false
            },
            {
                "texto": "Lillith",
                "correto": true
            },
            {
                "texto":"Lúcifer",
                "correto": false
            }
            
        ],
        "autoria": ["Fabíola Belo"]
    },
    {
        "pergunta": "A qual vilão pertence a icônica frase: \"Te achei, Coelhinha...!\"",
        "alternativas": [
            {
                "texto": "Rasturak",
                "correto": false
            },
            {
                "texto": "A Boba",
                "correto": false
            },
            {
                "texto": "O Pintor",
                "correto": false
            },
            {
                "texto":"Jaqueta Vermelha",
                "correto": true
            }
            
        ],
        "autoria": ["Jean Macedo"]
    },
    {
        "pergunta": "Qual o nome do principal unicórnio que auxilia os gnomos/elfos/duendes de Natal?",
        "alternativas": [
            {
                "texto": "Verso",
                "correto": false
            },
            {
                "texto": "Capitão",
                "correto": false
            },
            {
                "texto": "Grande Vermelho",
                "correto": false
            },
            {
                "texto":"Z-75",
                "correto": true
            }
            
        ],
        "autoria": []
    }
    ]
  },
  {
    "nivel": "Médio",
    "questoes": [
      {
        "pergunta": "Qual a cor da pedra que estava dentro da caixinha do episódio 1 do RPGuaxa: A bruxa, a Morte e as 4 gatas?",
        "alternativas": [
            {
                "texto": "Verde",
                "correto": true
            },
            {
                "texto": "Amarela",
                "correto": false
            },
            {
                "texto": "Azul",
                "correto": false
            },
            {
                "texto": "Vermelha",
                "correto": false
            }
        ],
        "autoria": ["Felipe Xavier"]
    },
    {
        "pergunta": "Qual brinquedo que Eliot levou consigo durante a aventura do episódio 2 do RPGuaxa: O Corvo?",
        "alternativas": [
            {
                "texto": "Um timão",
                "correto": false
            },
            {
                "texto": "Um urso de pelúcia",
                "correto": true
            },
            {
                "texto": "Um carrinho de controle remoto",
                "correto": false
            },
            {
                "texto": "Um ioiô",
                "correto": false
            }
        ],
        "autoria": ["Felipe Xavier"]
    },
    {
        "pergunta": "Quais os nomes dos 3 martelos que o Murin utilizou no episódio 3 do RPGuaxa: A Herança?",
        "alternativas": [
            {
                "texto": "Fúria, Fulgor, Ferrão",
                "correto": false
            },
            {
                "texto": "Drama, Diálogo, Dueto",
                "correto": false
            },
            {
                "texto": "Marmelo, Marchello, Martelin",
                "correto": true
            },
            {
                "texto": "Perdão, Paciência, Paz",
                "correto": false
            }
        ],
        "autoria": ["Felipe Xavier"]
    },
    {
        "pergunta": "Onde estava escondida a bomba que o Paper tentou desarmar no episódio 4: Pacto John Lennon?",
        "alternativas": [
            {
                "texto": "No banheiro",
                "correto": false
            },
            {
                "texto": "Na mesa",
                "correto": false
            },
            {
                "texto": "Debaixo da cadeira",
                "correto": false
            },
            {
                "texto": "Num carro",
                "correto": true
            }
        ],
        "autoria": ["Felipe Xavier"]
    },
    {
        "pergunta": "Qual foi a visão da cavaleira Violeta no episódio 8 do RPGuaxa: Cavaleiros do arco-íris?",
        "alternativas": [
            {
                "texto": "O Cavaleiro Amarelo Salvando seu bebê",
                "correto": false
            },
            {
                "texto": "A Cavaleira Verde caindo no chão",
                "correto": false
            },
            {
                "texto": "O Cavaleiro Vermelho sendo morto",
                "correto": false
            },
            {
                "texto": "O Cavaleiro Anil quebrando a janela da igreja",
                "correto": true
            }
        ],
        "autoria": ["Felipe Xavier"]
    }
    ]
  },
  {
    "nivel": "Difícil",
    "questoes": [
      {
        "pergunta": "Qual o nome que os Fermats deram para sua terra no episódio Úrsula (5)?",
        "alternativas": [
            {
                "texto": "Garganir",
                "correto": false
            },
            {
                "texto": "Lora",
                "correto": false
            },
            {
                "texto": "Zarco",
                "correto": false
            },
            {
                "texto": "Itiê",
                "correto": true
            }
        ],
        "autoria": ["Felipe Xavier"]
    },
    {
        "pergunta": "O que foi roubado da loja em frente ao bar no episódio 6 do RPGuaxa: Billie Jean?",
        "alternativas": [
            {
                "texto": "Caixa de cerveja",
                "correto": false
            },
            {
                "texto": "Arma",
                "correto": false
            },
            {
                "texto": "Televisão",
                "correto": true
            },
            {
                "texto": "Gasolina",
                "correto": false
            }
        ],
        "autoria": ["Felipe Xavier"]
    },
    {
        "pergunta": "Qual o nome da cidade da universidade do episódio 7 do RPGuaxa: A Sombra de Tuluiazu?",
        "alternativas": [
            {
                "texto": "Grenville",
                "correto": false
            },
            {
                "texto": "Nova Orleans",
                "correto": true
            },
            {
                "texto": "Washington",
                "correto": false
            },
            {
                "texto": "La Paz",
                "correto": false
            }
        ],
        "autoria": ["Felipe Xavier"]
    },
    {
        "pergunta": "Quantas vezes a Armadura de Coelho dos Cavaleiros do Bicho, foi vestida por pessoas diferentes que já apareceram nos episódios do RPGuaxa?",
        "alternativas": [
            {
                "texto": "1 vez",
                "correto": false
            },
            {
                "texto": "2 vezes",
                "correto": false
            },
            {
                "texto": "3 vezes",
                "correto": true
            },
            {
                "texto": "4 vezes",
                "correto": false
            }
        ],
        "autoria": ["Jean Macedo"]
    },
    {
        "pergunta": "Quem foi a Orquiza que se tornou Rainha e selou a paz entre povos de raças diferentes, ao selar um casamento entre Orcs e Humanos?",
        "alternativas": [
            {
                "texto": "Ameaça Silenciosa",
                "correto": true
            },
            {
                "texto": "Pote de Mel",
                "correto": false
            },
            {
                "texto": "Runa, Espada Negra",
                "correto": false
            },
            {
                "texto": "Rita",
                "correto": false
            }
        ],
        "autoria": ["Jean Macedo"]
      }
    ]
  }
]; 

//pequena mostra de personagens para testes das ajudas.
const personagensConvidados = [
    {
        "personagem": "Anísia",
        "interprete": "Shelly",
        "episodio": ["Os Cavaleiros do Bicho e a Cinderela do Baile", "Cavaleiros do Bicho vs Sao Paolo", "Cavaleiros do Bicho Parte 3", "Os Cavaleiros do Bicho: A Batalha Final"],
        "pronome": "Ela"
    },
    {
        "personagem": "Gulliver",
        "interprete": "Gus",
        "episodio": ["A Voz da Garotinha"],
        "pronome": "Ele"
    },
    {
        "personagem": "Josephine Trambley",
        "interprete": "Isabela Fontanella",
        "episodio": ["O tipo certo de garota"],
        "pronome": "Ela"
    },
    {
        "personagem": "Loreanne",
        "interprete": "Jujuba",
        "episodio": ["Onde está o Natal norte coreano?", "O Natal do Cauê", "O Fim do Natal"],
        "pronome": "Ela"
    },
    {
        "personagem": "Marcelo Guaxinim",
        "interprete": "Marcelo Guaxinim",
        "episodio": ["RPG na Educação (SciCast#593)"],
        "pronome": "Ele"
    },
    {
        "personagem": "Sofia Melosa",
        "interprete": "Ágata Sofia",
        "episodio": ["O Poderoso N"],
        "pronome": "Ela"
    },
    {
        "personagem": "Xaví",
        "interprete": "Allan Penoni",
        "episodio": ["MonsterChef"],
        "pronome": "Elu"
    }
]


//Quando o código estiver pronto, esta deve ser a primeira função chamada.
async function importarPerguntas() {
  const resposta = await fetch('../data/perguntas.json')
  perguntasRPGuaxa = await resposta.json();
  iniciarJogo();
}

//Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const entradaNome = document.getElementById("input-nome");
const entradaAtributo = document.getElementById("input-atributo");
const botaoIniciar = document.getElementById("botao-iniciar");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");
const campoNomePersonagem = document.getElementById('nome-personagem'); //para o nome do personagem convidado
const campoNomeJogador = document.getElementById('nome-jogador'); //para o nome do jogador que interpretou o personagem
const campoNomeEpisodio = document.getElementById('nome-episodio'); //para o episódio em que o personagem convidado participou
const ajudas = document.getElementById('ajudas');
const sidebar = document.getElementById('sidebar');
const interacaoAjuda = document.getElementById('interacao-ajuda');
const campoFalaConvidado = document.getElementById('fala-convidado');

//Informações do jogador
let nomeJogador;
let atributoJogador;

//Variáveis para controle do jogo
const umDSeis = () => Math.floor(Math.random() * 6) + 1;
let indiceAtual = 0; // Índice da pergunta atual
//let acertos = 0; // Contador de acertos (para modo teste?)
let nivelPerguntas = 0; //para nível de dificuldade
let perguntasSorteadas = []; //para armazenar perguntas, para não repetir
let perguntaFeita; //armazena todas as informações da pergunta atual, incluindo .pergunta e .alternativa[i]
let personagensSorteados = [];

//FUNÇÕES DO FLUXO DO JOGO

//Função para iniciar o jogo
function iniciarJogo() {
  perguntaElemento.textContent = "Boas vindas, Guaxouvinte! Logo, logo começaremos o Show do Guaxão... Mas antes, me diga: qual o seu nome e seu atributo?";
}

//Validar atributo
function validarAtributo() {
  let nomeEscolhido = entradaNome.value;
  let atributoEscolhido = entradaAtributo.value;
  if (atributoEscolhido !== "2" &&
      atributoEscolhido !== "3" &&
      atributoEscolhido !== "4" &&
      atributoEscolhido !== "5"
   ) {
    alert("Digite um atributo válido!");
    return;
   }
    nomeJogador = nomeEscolhido;
    atributoJogador = atributoEscolhido;
    console.log(`${nomeJogador}, atributo: ${atributoJogador}`);

    entradaNome.classList.add("hidden");
    entradaAtributo.classList.add("hidden");
    document.getElementById("botao-enviar").classList.add("hidden");

    perguntaElemento.textContent = `Seu nome é ${nomeJogador} e seu atributo é ${atributoJogador}.`
    botaoIniciar.classList.remove("hidden");   
}

function limparTela() {
  perguntaElemento.textContent = "";
  botaoIniciar.classList.add("hidden");
  carregarPergunta();
}

//Função para carregar uma nova pergunta
function carregarPergunta() {
  verificarNivel(); //verifica nível antes de exibir pergunta

  if (nivelPerguntas === 0) {
    progressoElemento.innerHTML = `${indiceAtual+1}/Nível Fácil`;
  } else if (nivelPerguntas === 1) {
    progressoElemento.innerHTML = `${indiceAtual+1}/Nível Médio`;
  } else {
    progressoElemento.innerHTML = `${indiceAtual+1}/Nível Difícil`;
  }

  //randomiza a ordem das perguntas
  let indiceAleatorio = Math.floor(Math.random() * (perguntas[nivelPerguntas].questoes.length));

  const perguntaAtual = perguntas[nivelPerguntas].questoes[indiceAleatorio]; // Pega a pergunta atual
  
  //verificar se a pergunta escolhida já foi sorteada. Caso sim, faz novo sorteio. Caso não, inclui na lista de sorteadas e prossegue
  if (perguntasSorteadas.includes(perguntaAtual.pergunta)) {
    return carregarPergunta();
  } else {
    perguntasSorteadas.push(perguntaAtual.pergunta);
    console.log(perguntasSorteadas);
    perguntaFeita = perguntaAtual; //para permitir resgatar a pergunta fora dessa função
  }

  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.alternativas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const alternativa = perguntaAtual.alternativas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (alternativa.texto)
    botao.innerText = alternativa.texto;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (alternativa.correto === true), continua o jogo
      if (alternativa.correto) {
      // Avança para a próxima pergunta
        indiceAtual++;
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < 15) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          finalizarJogo();
        } 
      } else {
        mostrarDerrota();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

//Função que acompanha progresso do jogador e muda o nível
function verificarNivel() {
  if (indiceAtual<=4) {
    nivelPerguntas = 0;
  } else if (indiceAtual <=9) {
    nivelPerguntas = 1;
  } else {
    nivelPerguntas = 2;
  }
}

//Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Parabéns, ${nomeJogador}! Você acertou todas as perguntas sobre o RPGuaxa e ganhou UM MILHÃO DE GUAXININS! <br>
  Quer dizer, você ganhou o Show do Guaxão, este questionário feito para celebrar os 200 episódios do nosso amado podcast! <br>
  Por que não tentar novamente? São muitas perguntas diferentes!`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

//Função para mostrar a tela no caso de derrota
function mostrarDerrota() {
  textoFinal.innerHTML = `Que pena, ${nomeJogador}! Você errou a pergunta ${indiceAtual+1}! Por que não tentar de novo?`;
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

//Função para ajuda "Personagem convidado"
function convidarPersonagem() {
    if (perguntasSorteadas.length === 0) {
        alert('As ajudas só são liberadas quando o jogo começa!');
        return;
    }
//sortear personagem da lista personagensConvidados
    let personagemConvidado = personagensConvidados[(Math.floor(Math.random()*personagensConvidados.length))];
    if (personagensSorteados.includes(personagemConvidado)) {
        return convidarPersonagem();
    }
    personagensSorteados.push(personagemConvidado);

    sidebar.classList.add('hidden');
    interacaoAjuda.classList.remove('hidden');

    //apresentar informações do personagem convidado (nome, jogador, episódio(s) que participou). Usar pronomes corretos e plural ou singular para falar do episódio em que ele esteve persente.
    if (personagemConvidado.personagem === 'Marcelo Guaxinim') {
        campoFalaConvidado.innerHTML = "Olá! Eu sou o <strong>Marcelo Guaxinim</strong>, narrador, produtor e idealizador do podcast <strong>Realidades Paralelas do Guaxinim</strong> e... eu estou aqui para ajudar você! Aperte o botão Resposta e eu vou te ajudar com a pergunta!";
    } else {
        campoNomePersonagem.innerText = personagemConvidado.personagem;
        campoNomeJogador.innerText = personagemConvidado.interprete;
        campoNomeEpisodio.innerText = personagemConvidado.episodio.join(', ');
    }
}

//rolar 2d6: se crítico: 3 pts. se acerto: 1 pt. se erro: 0 pt.
//calcular pts: 

function testarConvidado() {
    let dado1 = umDSeis();
    let dado2 = umDSeis();
    let pontosDoTeste = 0;
    
    if (dado1 == atributoJogador) {
        pontosDoTeste +=3;
    } else if ( dado1 > atributoJogador) {
        pontosDoTeste += 1;
    }

    if (dado2 == atributoJogador) {
        pontosDoTeste +=3;
    } else if ( dado2 > atributoJogador) {
        pontosDoTeste += 1;
    }

    //definindo a resposta do personagem
    switch (pontosDoTeste) {
        case pontosDoTeste>=3: //o personagem tem certeza e a resposta está certa.
        break;
        case pontosDoTeste===2: //o personagem tem quase certeza e a resposta está certa.
        break;
        case pontosDoTeste===1: //um novo teste é feito, com um dado. Se é um acerto, o personagem acerta, mas sem certeza. Se é um erro, o personagem erra, mas sem certeza.
        break;
        default: //o personagem erra achando que está certo
    }
}    


//Iniciando o jogo pela primeira vez
iniciarJogo();