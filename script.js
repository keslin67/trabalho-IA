const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que voce sai do colegio descobre que  maioria das pessoas sao substituidas por maquinas, qual sua reação?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmacao"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmacao"
            }           
            
        ]
    },
    {
        enunciado: "Mas existe trabalhos que priorizam quem é formado na area de robotica. Qual atitude você toma?",
        alternativas: [
            {
                texto:"Irei me expecializar para nao ficar desempregado",
                afirmacao:"afirmacao"
            },
            {
                texto: "Nao iria fazer nada.",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Qual pensamento voce tem sobre a IA?",
        alternativas: [
            {
                texto:"Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "como voce se imagina no  futuro com a IA. E agora?",
        alternativas: [
            {
                texto:"Me formaria nas areas de trabalho que mais estao precisando.",
                afirmacao:"afirmacao"
            },
            {
                texto:"iria fazer nada.",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "  voce sabia que a IA ja esta se atualizando?",
        alternativas: [
            {
                texto: " sim.",
                afirmacao:"afirmacao"
            },
            {
                texto: "nao",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();