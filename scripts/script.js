//###VARIÁVEIS GERAIS###
//Lista de perguntas e respostas
//let perguntasRPGuaxa; // Variável global para armazenar o JSON (descomentar depois)

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
                "correto": false,
                "erro_num": "erro1"
            },
            {
                "texto": "Tormenta 20",
                "correto": false,
                "erro_num": "erro2"
            },
            {
                "texto": "Táquions",
                "correto": false,
                "erro_num": "erro3"
            }
        ],
        "autoria": []
    },
    {
        "pergunta": "Como se chama a parte final do episódio, em que o Guaxa comenta um pouco sobre a aventura e dá alguns avisos?",
        "alternativas": [
            {
                "texto": "Guaxaverso",
                "correto": false,
                "erro_num":  "erro1"
            },
            {
                "texto": "Escudo do Mestre",
                "correto": true
            },
            {
                "texto":"Fala, Guaxa!",
                "correto": false,
                "erro_num": "erro2"
            },
            {
                "texto": "Epílogo",
                "correto": false,
                "erro_num": "erro3"
            }
        ],
        "autoria": []
    },
    {
        "pergunta": "Qual a verdadeira identidade da Morte?",
        "alternativas": [
            {
                "texto": "Ewa",
                "correto": false,
                "erro_num": "erro1"
            },
            {
                "texto": "Sílvio",
                "correto": false,
                "erro_num": "erro2"
            },
            {
                "texto": "Lillith",
                "correto": true
            },
            {
                "texto":"Lúcifer",
                "correto": false,
                "erro_num": "erro3"
            }
            
        ],
        "autoria": ["Fabíola Belo"]
    },
    {
        "pergunta": "A qual vilão pertence a icônica frase: \"Te achei, Coelhinha...!\"",
        "alternativas": [
            {
                "texto": "Rasturak",
                "correto": false,
                "erro_num": "erro1"
            },
            {
                "texto": "A Boba",
                "correto": false,
                "erro_num": "erro2"
            },
            {
                "texto": "O Pintor",
                "correto": false,
                "erro_num": "erro3"
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
                "correto": false,
                "erro_num": "erro1"
            },
            {
                "texto": "Capitão",
                "correto": false,
                "erro_num": "erro2"
            },
            {
                "texto": "Grande Vermelho",
                "correto": false,
                "erro_num": "erro3"
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
                "correto": false,
                "erro_num": "erro1"
            },
            {
                "texto": "Azul",
                "correto": false,
                "erro_num": "erro2"
            },
            {
                "texto": "Vermelha",
                "correto": false,
                "erro_num": "erro3"
            }
        ],
        "autoria": ["Felipe Xavier"]
    },
    {
        "pergunta": "Qual brinquedo que Eliot levou consigo durante a aventura do episódio 2 do RPGuaxa: O Corvo?",
        "alternativas": [
            {
                "texto": "Um timão",
                "correto": false,
                "erro_num": "erro1"
            },
            {
                "texto": "Um urso de pelúcia",
                "correto": true
            },
            {
                "texto": "Um carrinho de controle remoto",
                "correto": false,
                "erro_num": "erro2"
            },
            {
                "texto": "Um ioiô",
                "correto": false,
                "erro_num": "erro3"
            }
        ],
        "autoria": ["Felipe Xavier"]
    },
    {
        "pergunta": "Quais os nomes dos 3 martelos que o Murin utilizou no episódio 3 do RPGuaxa: A Herança?",
        "alternativas": [
            {
                "texto": "Fúria, Fulgor, Ferrão",
                "correto": false,
                "erro_num": "erro1"
            },
            {
                "texto": "Drama, Diálogo, Dueto",
                "correto": false,
                "erro_num": "erro2"
            },
            {
                "texto": "Marmelo, Marchello, Martelin",
                "correto": true
            },
            {
                "texto": "Perdão, Paciência, Paz",
                "correto": false,
                "erro_num": "erro3"
            }
        ],
        "autoria": ["Felipe Xavier"]
    },
    {
        "pergunta": "Onde estava escondida a bomba que o Paper tentou desarmar no episódio 4: Pacto John Lennon?",
        "alternativas": [
            {
                "texto": "No banheiro",
                "correto": false,
                "erro_num": "erro1"
            },
            {
                "texto": "Na mesa",
                "correto": false,
                "erro_num": "erro2"
            },
            {
                "texto": "Debaixo da cadeira",
                "correto": false,
                "erro_num": "erro3"
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
                "correto": false,
                "erro_num": "erro1"
            },
            {
                "texto": "A Cavaleira Verde caindo no chão",
                "correto": false,
                "erro_num": "erro2"
            },
            {
                "texto": "O Cavaleiro Vermelho sendo morto",
                "correto": false,
                "erro_num": "erro3"
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
                "correto": false,
                "erro_num": "erro1"
            },
            {
                "texto": "Lora",
                "correto": false,
                "erro_num": "erro2"
            },
            {
                "texto": "Zarco",
                "correto": false,
                "erro_num": "erro3"
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
                "correto": false,
                "erro_num": "erro1"
            },
            {
                "texto": "Arma",
                "correto": false,
                "erro_num": "erro2"
            },
            {
                "texto": "Televisão",
                "correto": true
            },
            {
                "texto": "Gasolina",
                "correto": false,
                "erro_num": "erro3"
            }
        ],
        "autoria": ["Felipe Xavier"]
    },
    {
        "pergunta": "Qual o nome da cidade da universidade do episódio 7 do RPGuaxa: A Sombra de Tuluiazu?",
        "alternativas": [
            {
                "texto": "Grenville",
                "correto": false,
                "erro_num": "erro1"
            },
            {
                "texto": "Nova Orleans",
                "correto": true
            },
            {
                "texto": "Washington",
                "correto": false,
                "erro_num": "erro2"
            },
            {
                "texto": "La Paz",
                "correto": false,
                "erro_num": "erro3"
            }
        ],
        "autoria": ["Felipe Xavier"]
    },
    {
        "pergunta": "Quantas vezes a Armadura de Coelho dos Cavaleiros do Bicho, foi vestida por pessoas diferentes que já apareceram nos episódios do RPGuaxa?",
        "alternativas": [
            {
                "texto": "1 vez",
                "correto": false,
                "erro_num": "erro1"
            },
            {
                "texto": "2 vezes",
                "correto": false,
                "erro_num": "erro2"
            },
            {
                "texto": "3 vezes",
                "correto": true
            },
            {
                "texto": "4 vezes",
                "correto": false,
                "erro_num": "erro3"
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
                "correto": false,
                "erro_num": "erro1"
            },
            {
                "texto": "Runa, Espada Negra",
                "correto": false,
                "erro_num": "erro2"
            },
            {
                "texto": "Rita",
                "correto": false,
                "erro_num": "erro3"
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

//Informações do jogador
let nomeJogador;
let atributoJogador;

//Variáveis para controle do jogo
const umDSeis = () => Math.floor(Math.random() * 6) + 1;

//Variáveis de pergunta
let perguntasSorteadas = []; //para armazenar perguntas, para não repetir
let perguntaFeita; //armazena todas as informações da pergunta atual, incluindo .pergunta e .alternativa[i]
let indiceAtual = 0; // Índice da pergunta atual
//let acertos = 0; // Contador de acertos (para modo teste?)
let nivelPerguntas = 0; //para nível de dificuldade
let errada1;
let errada2;
let errada3;

//Variáveis de ajuda
let personagemConvidado; //usado em Personagem Convidado
let convidado1, convidado2, convidado3; //usados em Corrida contra Personagens
const personagensSorteados = [];
const ajudasUsadas = [];

//PEGANDO ELEMENTOS HTML
//Estrutura do jogo
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");
//Jogador
const entradaNome = document.getElementById("input-nome");
const entradaAtributo = document.getElementById("input-atributo");
//Pergunta e resposta
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
//Progresso do jogo
const botaoIniciar = document.getElementById("botao-iniciar");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
//Ajudas
const ajudas = document.getElementById('ajudas');
const sidebar = document.getElementById('sidebar');
const interacaoAjuda = document.getElementById('interacao-ajuda');
const campoFalaConvidado = document.getElementById('fala-convidado');
const botaoResposta = document.getElementById('botao-resposta'); //botão para convidado dar a resposta
const campoNomePersonagem = document.getElementById('nome-personagem'); //para o nome do personagem convidado
const campoNomeJogador = document.getElementById('nome-jogador'); //para o nome do jogador que interpretou o personagem
const campoNomeEpisodio = document.getElementById('nome-episodio'); //para o episódio em que o personagem convidado participou

//Quando o código estiver pronto, esta deve ser a primeira função chamada. (descomentar)
// async function importarPerguntas() {
//   const resposta = await fetch('../data/perguntas.json')
//   perguntasRPGuaxa = await resposta.json();
//   iniciarJogo();
// }

//FUNÇÕES DO FLUXO DO JOGO

//Função para iniciar o jogo
function iniciarJogo() {
  perguntaElemento.textContent = "Boas vindas, Guaxouvinte! Logo, logo começaremos o Show do Guaxão... Mas antes, me diga: qual o seu nome e seu atributo?";
}

//Validar atributo
function validarAtributo() {
  let nomeEscolhido = entradaNome.value;
  let atributoEscolhido = parseInt(entradaAtributo.value);
  if (atributoEscolhido !== 2 &&
      atributoEscolhido !== 3 &&
      atributoEscolhido !== 4 &&
      atributoEscolhido !== 5
   ) {
    alert("Digite um atributo válido!");
    return;
   }
    nomeJogador = nomeEscolhido;
    atributoJogador = atributoEscolhido;

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
    if (ajudasUsadas.includes('Personagem Convidado')) {
        alert('Recurso já usado, tente outra ajuda');
        return;
    }
    //sortear personagem da lista personagensConvidados
    personagemConvidado = sortearConvidado();

    limparSidebar();
    mostrarBotaoResposta();

    //apresentar informações do personagem convidado (nome, jogador, episódio(s) que participou).
    if (personagemConvidado.personagem === 'Marcelo Guaxinim') {
        campoFalaConvidado.innerHTML = "Olá! Eu sou o <strong>Marcelo Guaxinim</strong>, narrador, produtor e idealizador do podcast <strong>Realidades Paralelas do Guaxinim</strong> e aqui... aqui eu ajudo você! Aperte o botão Resposta e eu vou te dou a resposta da pergunta!";
    } else {
        campoNomePersonagem.innerText = personagemConvidado.personagem;
        campoNomeJogador.innerText = personagemConvidado.interprete;
        campoNomeEpisodio.innerText = personagemConvidado.episodio.join(', ');
    }
    botaoResposta.removeEventListener('click', disputarCorrida);
    botaoResposta.removeEventListener('click', pegarPorcentagens);
    botaoResposta.addEventListener('click', testarConvidado);
} 

function testarConvidado() {
    //rolar 2d6: se crítico: 3 pts. se acerto: 1 pt. se erro: 0 pt.
    let dado1 = umDSeis();
    let dado2 = umDSeis();
    //calcular pts:
    let pontosDoTeste = 0;
    
    if (dado1 === atributoJogador) {
        pontosDoTeste +=3;
    } else if ( dado1 > atributoJogador) {
        pontosDoTeste += 1;
    }

    if (dado2 === atributoJogador) {
        pontosDoTeste +=3;
    } else if ( dado2 > atributoJogador) {
        pontosDoTeste += 1;
    }

    console.log("pontos do teste: " + pontosDoTeste);
    if (personagemConvidado.personagem === 'Marcelo Guaxinim') {
        pontosDoTeste = 6;
    }
    console.log("pontos do teste: " + pontosDoTeste);

    const alternativaCorreta = perguntaFeita.alternativas.find(alternativa => alternativa.correto === true);

    errada1 = perguntaFeita.alternativas.find(alternativas => alternativas.erro_num === 'erro1');
    errada2 = perguntaFeita.alternativas.find(alternativas => alternativas.erro_num === 'erro2');
    errada3 = perguntaFeita.alternativas.find(alternativas => alternativas.erro_num === 'erro3');

    const erradas = [errada1, errada2, errada3];
    const ordemErradas = [...erradas];
    console.log(`array das respostas erradas: ${ordemErradas.map(obj => obj.texto)}`);

    //definindo a resposta do personagem
    if (pontosDoTeste >= 3) {
        //100% de chance de acertar
        // Personagem tem certeza e a resposta está certa.
        campoFalaConvidado.innerHTML = `<strong>${personagemConvidado.personagem}</strong>: Com certeza é ${alternativaCorreta.texto}.`;
    } else if (pontosDoTeste === 2) {
        //1/2 de chance de acertar
        // Personagem tem quase certeza.
        const pool50PorCento = [alternativaCorreta, ordemErradas[0]];
        console.log(`array 50%: ${pool50PorCento.map(obj => obj.texto)}`);
        const resposta50PorCento = Math.floor(Math.random()*2);
        campoFalaConvidado.innerHTML = `<strong>${personagemConvidado.personagem}</strong>: Estou entre duas... Mas creio que a resposta seja ${pool50PorCento[resposta50PorCento].texto}.`;
    } else if (pontosDoTeste === 1) {
        //1/3 de chance de acertar
        // Personagem não tem certeza e escolhe aleatoriamente.
        const poolUmTerco = [ordemErradas[0], alternativaCorreta, ordemErradas[1]];
        console.log(`array 1/3: ${poolUmTerco.map(obj => obj.texto)}`);
        const respostaUmTerco = Math.floor(Math.random() * 3);
        campoFalaConvidado.innerHTML = `<strong>${personagemConvidado.personagem}</strong>: Nossa, eu não sei não... Acho que é... ${poolUmTerco[respostaUmTerco].texto}`;
    } else {
        //1/4 de chance de acertar.
        let indiceChute = Math.floor(Math.random() * 4);
        const chute = perguntaFeita.alternativas[indiceChute];

        campoFalaConvidado.innerHTML = `<strong>${personagemConvidado.personagem}</strong>: Vish, não sei... Vou chutar ${chute.texto}.`;
    }

    ajudasUsadas.push('Personagem Convidado'); //sinaliza que esta ajuda foi usada, para futuramente previnir que ela seja usada novamente.

    
    botaoResposta.classList.add('hidden');
    criarBotaoDispensar(); 
}  

function correrContraPersonagens() {
    if (perguntasSorteadas.length === 0) {
        alert('As ajudas só são liberadas quando o jogo começa!');
        return;
    }
    if (ajudasUsadas.includes('Corrida contra Personagens')) {
        alert('Recurso já usado, tente outra ajuda');
        return;
    } 

    //sortear personagens da lista personagensConvidados
    do {
        convidado1 = sortearConvidado();
    } while (convidado1.personagem === 'Marcelo Guaxinim');

    do {
        convidado2 = sortearConvidado();
    } while (convidado2.personagem === 'Marcelo Guaxinim');

    do {
        convidado3 = sortearConvidado();
    } while (convidado3.personagem === 'Marcelo Guaxinim');
    console.log(`convidado 1: ${convidado1.personagem}, convidado 2: ${convidado2.personagem}, convidado 3: ${convidado3.personagem}`)

    limparSidebar();
    mostrarBotaoResposta();

    campoFalaConvidado.innerHTML = `Na Raia 1 temos ${nomeJogador}, que correrá contra... <br> 
    <li><strong>${convidado1.personagem}</strong> (por ${convidado1.interprete}) em <strong>${convidado1.episodio.join(', ')}</strong>,</li> <li><strong>${convidado2.personagem}</strong> (por ${convidado2.interprete}) em <strong>${convidado2.episodio.join(', ')}</strong> e</li> <li><strong>${convidado3.personagem}</strong> (por ${convidado3.interprete}) em <strong>${convidado3.episodio.join(', ')}</strong></li>`;

    botaoResposta.innerText = 'Correr!';
    botaoResposta.removeEventListener('click', testarConvidado);
    botaoResposta.removeEventListener('click', pegarPorcentagens);
    botaoResposta.addEventListener('click', function () {
        botaoResposta.classList.add('hidden');
    });
    botaoResposta.addEventListener('click', disputarCorrida);
}

function disputarCorrida() {
    //rolar 2d6: se crítico: 3 pts. se acerto: 1 pt. se erro: 0 pt.
    let dado1 = umDSeis();
    let dado2 = umDSeis();
    //calcular pts:
    let pontosDoTeste = 0;
    
    if (dado1 === atributoJogador) {
        pontosDoTeste +=3;
    } else if ( dado1 < atributoJogador) {
        pontosDoTeste += 1;
    }

    if (dado2 === atributoJogador) {
        pontosDoTeste +=3;
    } else if ( dado2 < atributoJogador) {
        pontosDoTeste += 1;
    }

    console.log(dado1, dado2);
    console.log(pontosDoTeste);

    const corredores = [convidado1.personagem, convidado2.personagem, convidado3.personagem];
    const ordemChegada = [...corredores];

    //sortear ordem de chegada dos corredores (Fisher-Yates)
    for (let i = ordemChegada.length -1; i > 0; i--) {
        const j = Math.floor(Math.random()* (i +1));
        [ordemChegada[i], ordemChegada[j]] = [ordemChegada[j], ordemChegada[i]];
    }
    
    errada1 = perguntaFeita.alternativas.find(alternativas => alternativas.erro_num === 'erro1');
    errada2 = perguntaFeita.alternativas.find(alternativas => alternativas.erro_num === 'erro2');
    errada3 = perguntaFeita.alternativas.find(alternativas => alternativas.erro_num === 'erro3');

    const erradas = [errada1, errada2, errada3];
    const ordemErradas = [...erradas]

    //sortear ordem das erradas (Fisher-Yates)
    for (let i = ordemErradas.length -1; i > 0; i--) {
        const j = Math.floor(Math.random()* (i +1));
        [ordemErradas[i], ordemErradas[j]] = [ordemErradas[j], ordemErradas[i]];
    }

    if (pontosDoTeste >=3) {
        //o jogador teve ao menos 1 acerto crítico. Ele chegou em primeiro e consegue eliminar 3 respostas erradas.
        campoFalaConvidado.innerHTML = `Você venceu a corrida. Os personagens vão dizer quais são as alternativas <u>erradas</u>!<li> <strong>${ordemChegada[0]}</strong>, 2º lugar: \"${ordemErradas[0].texto}\" está errado<li> <strong>${ordemChegada[1]}</strong>, 3º lugar: \"${ordemErradas[1].texto}\" está errado<li> <strong>${ordemChegada[2]}</strong>, 4º lugar: \"${ordemErradas[2].texto}\" está errado `
    } else if (pontosDoTeste === 2) {
        //o jogador teve 2 acertos simples. Ele chegou em segundo e consegue eliminar 2 respostas erradas
        campoFalaConvidado.innerHTML = `Você ficou em segundo lugar. Quem venceu foi <strong>${ordemChegada[0]}</strong>. Os outros personagens vão dizer duas alternativas <u>erradas</u>!<li> <strong>${ordemChegada[1]}</strong>, 3º lugar: \"${ordemErradas[1].texto}\" está errado<li> <strong>${ordemChegada[2]}</strong>, 4º lugar: \"${ordemErradas[2].texto}\" está errado `
    } else if (pontosDoTeste === 1) {
        //o jogador teve 1 acerto simples. Ele chegou em terceiro e consegue eliminar 1 resposta errada
        campoFalaConvidado.innerHTML = `Você ficou em terceiro lugar. Quem venceu foi <strong>${ordemChegada[0]}</strong> e o segundo lugar foi <strong>${ordemChegada[1]}</strong>. O quarto lugar vai revelar <u>uma alternativa errada</u>!<li> <strong>${ordemChegada[2]}</strong>: \"${ordemErradas[2].texto}\" está errado `
    } else {
        //o jogador teve 2 erros. Ele chega em último e não elimina nenhuma resposta errada.
        campoFalaConvidado.innerHTML = `Que pena! Você chegou em último! Os personagens não te ajudam desta vez! O pódio ficou assim: <li> 1º lugar: <strong>${ordemChegada[0]}</strong>, <li> 2º lugar: <strong>${ordemChegada[1]}</strong>, <li> 3º lugar: <strong>${ordemChegada[2]}</strong>`
    }

    ajudasUsadas.push('Corrida contra Personagens'); //sinaliza que esta ajuda foi usada, para futuramente previnir que ela seja usada novamente.

    criarBotaoDispensar();
}

function ouvirPadrinhos() {
    if (perguntasSorteadas.length === 0) {
        alert('As ajudas só são liberadas quando o jogo começa!');
        return;
    }
    if (ajudasUsadas.includes('Ouvir Padrinhos')) {
        alert('Recurso já usado, tente outra ajuda');
        return;
    }
    
    limparSidebar();
    mostrarBotaoResposta();

    campoFalaConvidado.innerHTML = `Meu nome é Allan Penoni e eu sou padrinho do RPGuaxa porque eu amo as histórias contadas pelo Guaxa e pelos jogadores, e também encontrei na Guaxomunidade pessoas incríveis com ideias geniais. <br> Além disso, essa é uma quebra da 4ª parede, porque eu sou o responsável pelo quiz. Espero que você esteja curtindo! Se encontrar algum bug, me avisa. <br> Enfim... me dá um segundo que eu vou ali no grupo de padrinhos e já volto com as porcentagens das respostas pra esta pergunta!`;

    botaoResposta.innerText = 'Porcentagens';
    botaoResposta.removeEventListener('click', testarConvidado);
    botaoResposta.removeEventListener('click', disputarCorrida);
    botaoResposta.addEventListener('click', function () {
        botaoResposta.classList.add('hidden');
    });
    botaoResposta.addEventListener('click', pegarPorcentagens);
}

function pegarPorcentagens() {
    const alternativaCorreta = perguntaFeita.alternativas.find(alternativa => alternativa.correto === true);
    errada1 = perguntaFeita.alternativas.find(alternativas => alternativas.erro_num === 'erro1');
    errada2 = perguntaFeita.alternativas.find(alternativas => alternativas.erro_num === 'erro2');
    errada3 = perguntaFeita.alternativas.find(alternativas => alternativas.erro_num === 'erro3');

    const erradas = [errada1, errada2, errada3];
    const ordemErradas = [...erradas]

    //sortear ordem das erradas (Fisher-Yates)
    for (let i = ordemErradas.length -1; i > 0; i--) {
        const j = Math.floor(Math.random()* (i +1));
        [ordemErradas[i], ordemErradas[j]] = [ordemErradas[j], ordemErradas[i]];
    }

    //Se o atributo for 2 ou 3, é feito um teste físico. Se o atributo é 4 ou 5, é feito um teste mental. O teste é fácil.
    let dado1 = umDSeis();
    let dado2 = umDSeis();
    let dado3 = umDSeis();

    let pontosDoTeste = 0;

    if (atributoJogador <=3) {
        if (dado1 === atributoJogador) {
            pontosDoTeste +=3;
        } else if ( dado1 < atributoJogador) {
            pontosDoTeste += 1;
        }
    
        if (dado2 === atributoJogador) {
            pontosDoTeste +=3;
        } else if ( dado2 < atributoJogador) {
            pontosDoTeste += 1;
        }

        if (dado3 === atributoJogador) {
            pontosDoTeste +=3;
        } else if ( dado3 < atributoJogador) {
            pontosDoTeste += 1;
        }
    }

    if (atributoJogador >=4) {
        if (dado1 === atributoJogador) {
            pontosDoTeste +=3;
        } else if ( dado1 > atributoJogador) {
            pontosDoTeste += 1;
        }
    
        if (dado2 === atributoJogador) {
            pontosDoTeste +=3;
        } else if ( dado2 > atributoJogador) {
            pontosDoTeste += 1;
        }

        if (dado3 === atributoJogador) {
            pontosDoTeste +=3;
        } else if ( dado3 > atributoJogador) {
            pontosDoTeste += 1;
        }
    }
    console.log(`dado 1: ${dado1}, dado 2: ${dado2}, dado 3: ${dado3}`)
    console.log(`pontos do teste ${pontosDoTeste}`);

    if (pontosDoTeste === 9) {
        campoFalaConvidado.innerHTML = `<strong>Allan Penoni</strong>: Aqui estão as respostas dos padrinhos... <li> ${alternativaCorreta.texto}: 90%; </li> <li> ${ordemErradas[0].texto}: 5%;</li> <li> ${ordemErradas[1].texto}: 3%</li> <li> ${ordemErradas[2].texto}: 2%</li>`
    } else if (pontosDoTeste >= 6) {
        campoFalaConvidado.innerHTML = `<strong>Allan Penoni</strong>: Aqui estão as respostas dos padrinhos... <li> ${alternativaCorreta.texto}: 70%; </li> <li> ${ordemErradas[0].texto}: 15%;</li> <li> ${ordemErradas[1].texto}: 10%</li> <li> ${ordemErradas[2].texto}: 5%</li>`
    } else if (pontosDoTeste >= 3) {
        campoFalaConvidado.innerHTML = `<strong>Allan Penoni</strong>: Aqui estão as respostas dos padrinhos... <li> ${alternativaCorreta.texto}: 55%; </li> <li> ${ordemErradas[0].texto}: 25%;</li> <li> ${ordemErradas[1].texto}: 10%</li> <li> ${ordemErradas[2].texto}: 10%</li>`
    } else if (pontosDoTeste >= 1) {
        campoFalaConvidado.innerHTML = `<strong>Allan Penoni</strong>: Aqui estão as respostas dos padrinhos... <li> ${alternativaCorreta.texto}: 35%; </li> <li> ${ordemErradas[0].texto}: 30%;</li> <li> ${ordemErradas[1].texto}: 20%</li> <li> ${ordemErradas[2].texto}: 15%</li>`
    } else {
        const respostas = [errada1, errada2, errada3, alternativaCorreta]
        const ordemRespostas = [...respostas]

        //sortear ordem das erradas (Fisher-Yates)
        for (let i = ordemRespostas.length -1; i > 0; i--) {
            const j = Math.floor(Math.random()* (i +1));
            [ordemRespostas[i], ordemRespostas[j]] = [ordemRespostas[j], ordemRespostas[i]];
        }

        campoFalaConvidado.innerHTML = `<strong>Allan Penoni</strong>: Aqui estão as respostas dos padrinhos... <li> ${ordemRespostas[0].texto}: 30%; </li> <li> ${ordemRespostas[3].texto}: 20%;</li> <li> ${ordemRespostas[1].texto}: 25%</li> <li> ${ordemRespostas[2].texto}: 25%</li>`

    }

    ajudasUsadas.push('Ouvir Padrinhos'); //sinaliza que esta ajuda foi usada, para futuramente previnir que ela seja usada novamente.

    criarBotaoDispensar();
}

//FUNÇÕES USADAS PELAS AJUDAS
function sortearConvidado() {
    let novoConvidado = personagensConvidados[(Math.floor(Math.random()*personagensConvidados.length))];
    if (personagensSorteados.includes(novoConvidado)) {
        return sortearConvidado();
    }
    personagensSorteados.push(novoConvidado);
    return novoConvidado;
}

function mostrarBotaoResposta() {
    if (botaoResposta.classList.contains('hidden')) {
        botaoResposta.classList.remove('hidden');
    }
}

function limparSidebar() {
    interacaoAjuda.classList.toggle('hidden');
    sidebar.classList.toggle('hidden');
}

function criarBotaoDispensar() {
    const botaoDispensar = document.createElement('button');

    botaoDispensar.textContent = 'Dispensar';
    botaoDispensar.id = 'botao-dispensar';
    botaoDispensar.className = 'botao-enviar';
    botaoDispensar.addEventListener('click', function () {
        botaoDispensar.classList.add('hidden');
    });
    botaoDispensar.addEventListener('click', limparSidebar); //sem parênteses no nome da função, para não chamá-la imediatamente
    interacaoAjuda.appendChild(botaoDispensar);
}


//Iniciando o jogo pela primeira vez
iniciarJogo();