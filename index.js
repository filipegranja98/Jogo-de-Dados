const botao1 = document.getElementById("btn1");
const botao2 = document.getElementById("btn2");
const reiniciar = document.getElementById("reiniciar");
const resultado = document.getElementById("resultado");
const pontosjogador1 = document.getElementById("ponto-jg1");
const pontosjogador2 = document.getElementById("ponto-jg2");
let pontosjg1 = 0;
let pontosjg2 = 0;
let rodadas = 0;
let vezjogador = 0;

const calcular = () =>{
    let valoraleatoriojg1 = Math.floor(Math.random() * 6 ) + 1;
    resultado.innerHTML = valoraleatoriojg1;
    let valoraleatoriojg2 = Math.floor(Math.random() * 6 ) + 1;
    resultado.innerHTML = valoraleatoriojg2;
    if(rodadas < 10){
        if(vezjogador === 0){
            vezjogador = 1;
            if(valoraleatoriojg1 > valoraleatoriojg2){
                alert(`O jogador 1 ganhou a rodada!`);
                pontosjg1 = pontosjg1 + 1;
                pontosjogador1.innerHTML =`Jogador 1: ${pontosjg1}`;
                rodadas = rodadas +1;
                valoraleatoriojg1 = 0;

            }else if(valoraleatoriojg1 === valoraleatoriojg2){
                    alert("Empate nenhum jogador ganha ponto");       
                }
            
        }else{
            alert("Agora é a vez do jogador 2")
        }
        if(vezjogador === 1){
                vezjogador = 0;
            if(valoraleatoriojg2 > valoraleatoriojg1){
                alert(`O jogador 2 ganhou!`);
                pontosjg2 = pontosjg2 + 1;
                pontosjogador2.innerHTML =`Jogador 2: ${pontosjg2}`;
                
                rodadas = rodadas +1;
                valoraleatoriojg2 = 0;
            }else if(valoraleatoriojg2 === valoraleatoriojg1){
                    alert("Empate nenhum jogador ganha ponto");
                }
        }else {
            alert("Agora é a vez do jogador 1");
            }
    }else if(rodadas === 10){
        if(pontosjg1 > pontojg2){
            alert(`O jogador 1 ganhou! JG1: ${pontonsjg1} - JG2: ${pontosjg2}`);
        }else if(pontosjg2 > pontosjg1){
            alert(`O jogador 2 ganhou! JG2: ${pontosjg2} - JG1: ${pontosjg1}`);
        }else{
            alert(`A partida terminou empate! JG1 ${pontosjg1} - ${pontosjg2}`);
        }
    }
}

botao1.onclick = calcular;
botao2.onclick = calcular;