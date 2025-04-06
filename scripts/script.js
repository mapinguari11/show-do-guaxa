//###VARIÁVEIS GERAIS###
//Lista de perguntas e respostas
let perguntasRPGuaxa; // Variável global para armazenar o JSON
// pequena mostra para testes
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

//Informações do jogador
let nomeJogador;
let atributoJogador;

//Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
//let acertos = 0; // Contador de acertos (para modo teste?)
let indiceNivel = 0;
let nivelPerguntas = 0; //para nível de dificuldade

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
  console.log("Tudo limpo!");
  carregarPergunta();
}

//Função para carregar uma nova pergunta
function carregarPergunta() {
  verificarNivel(); //verifica nível antes de exibir pergunta

  //Exibir número da pergunta e nível da pergunta atual
  console.log(`Indice atual ${indiceAtual}, nivel de perguntas ${nivelPerguntas}`)
  if (nivelPerguntas === 0) {
    progressoElemento.innerHTML = `${indiceAtual+1}/Nível Fácil`;
  } else if (nivelPerguntas === 1) {
    progressoElemento.innerHTML = `${indiceAtual+1}/Nível Médio`;
  } else {
    progressoElemento.innerHTML = `${indiceAtual+1}/Nível Difícil`;
  }

  if (indiceNivel > 4) {
    indiceNivel = 0;
  }

  const perguntaAtual = perguntas[nivelPerguntas].questoes[indiceNivel]; // Pega a pergunta atual
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
        indiceNivel++;
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < 15) {
          carregarPergunta(); // Carrega a próxima pergunta
        }  
      } else {
        // Se não houver mais perguntas ou se a pessoa errar, finaliza o jogo
        //organizar diferentes fins de jogo
        finalizarJogo();
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
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

//Iniciando o jogo pela primeira vez
iniciarJogo();