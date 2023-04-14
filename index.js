const botao1 = document.getElementById("btn1");
const botao2 = document.getElementById("btn2");
const reiniciar = document.getElementById("reiniciar");
const resultado = document.getElementById("resultado");
const pontosjogador1 = document.getElementById("ponto-jg1");
const pontosjogador2 = document.getElementById("ponto-jg2");
let pontosjg1 = 0;
let pontosjg2 = 0;
let rodadas = 0;
let vezjogador = 1;

const jogadajg1 = () =>{
    const valoraleatoriojg1 = Math.floor(Math.random() * 6) + 1;
    resultado.innerHTML = valoraleatorio;
}
const jogadajg2 = () =>{
    const valoraleatoriojg2 = Math.floor(Math.random() * 6) + 1;
    resultado.innerHTML = valoraleatorio;
}
const calcular = () => {
  const valorj1 = jogadajg1;
  const valorj2= jogadajg2;
  if (vezjogador === 1) {
    if(valorj1>valorj2){
        
        pontosjg1 += 1;
        vezjogador = 2;
    }
    alert(`Jogador 1 jogou ${valoraleatorio}.`);
  } else {
    pontosjg2 += valoraleatorio;
    vezjogador = 1;
    alert(`Jogador 2 jogou ${valoraleatorio}.`);
    rodadas++;
    if (rodadas === 10) {
      if (pontosjg1 > pontosjg2) {
        alert(`Jogador 1 ganhou! JG1: ${pontosjg1} - JG2: ${pontosjg2}`);
      } else if (pontosjg2 > pontosjg1) {
        alert(`Jogador 2 ganhou! JG2: ${pontosjg2} - JG1: ${pontosjg1}`);
      } else {
        alert(`A partida terminou empatada! JG1: ${pontosjg1} - JG2: ${pontosjg2}`);
      }
      pontosjg1 = 0;
      pontosjg2 = 0;
      rodadas = 0;
      vezjogador = 1;
      pontosjogador1.innerHTML = `Jogador 1: ${pontosjg1}`;
      pontosjogador2.innerHTML = `Jogador 2: ${pontosjg2}`;
    }
  }
  pontosjogador1.innerHTML = `Jogador 1: ${pontosjg1}`;
  pontosjogador2.innerHTML = `Jogador 2: ${pontosjg2}`;
};

botao1.onclick = calcular;
botao2.onclick = calcular;