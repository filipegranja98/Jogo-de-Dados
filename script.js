const botao1 = document.getElementById("btn1");
const botao2 = document.getElementById("btn2");
const reiniciar = document.getElementById("reiniciar");
const resultado1 = document.getElementById("resultado1");
const resultado2 = document.getElementById("resultado2");
const pontosjogador1 = document.getElementById("ponto-jg1");
const pontosjogador2 = document.getElementById("ponto-jg2");
const nrodadas = document.getElementById("numeroderodadas")
let pontosjg1 = 0;
let pontosjg2 = 0;
let rodadas = 0;
let vezjogador = 0;

const calcularjg1 = () =>{
    let valordadojg1  = Math.floor(Math.random() * 6) +1;
    resultado1.innerHTML = valordadojg1;
    botao1.disabled = true;
    botao2.disabled = false;
    return valordadojg1;
}

const calcularjg2 = () =>{
    let valordadojg2  = Math.floor(Math.random() * 6) +1;
    resultado2.innerHTML = valordadojg2;
    botao2.disabled = true;
    botao1.disabled = false;
    return valordadojg2;
}


const calcular = (valorjg1, valorjg2) => {
    
    if (valorjg1 > valorjg2) {
        setTimeout(function() {
            alert("O jogador 1 ganhou a rodada!!!"); }, 1000);
      pontosjg1 += 1;
      pontosjogador1.innerHTML = `Jogador 1: ${pontosjg1}`;
      setTimeout(function() {
        resultado1.innerHTML = "0"; }, 3000);
      setTimeout(function() {
          resultado2.innerHTML = "0"; }, 3000);
    } else if (valorjg2 > valorjg1) {
     setTimeout(function() {
        alert("O jogador 2 ganhou a rodada!!!");}, 1000);
        setTimeout(function() {
            resultado1.innerHTML = "0"; }, 3000);
            setTimeout(function() {
                resultado2.innerHTML = "0"; }, 3000);
      pontosjg2 += 1;
      pontosjogador2.innerHTML = `Jogador 2: ${pontosjg2}`;
    } else {
        setTimeout(function() {
            alert(`[EMPATE!!!] jogador 1 obteve: ${valorjg1} e jogador 2 obteve: ${valorjg2}`);}, 1000);
            setTimeout(function() {
                resultado1.innerHTML = "0"; }, 3000);
                setTimeout(function() {
                    resultado2.innerHTML = "0"; }, 3000);
      
    }
    rodadas += 1;
    nrodadas.innerHTML = `Rodada de número: ${rodadas}`;
    if (rodadas >= 10) {
      botao1.disabled = true;
      botao2.disabled = true;
      alert("Fim do jogo!");
      if(pontosjg1 > pontosjg2){
        setTimeout(function() {
          alert("O jogador 1: Ganhou o jogo");}, 1000);
       
      }else if(pontosjg1 < pontosjg2){
        setTimeout(function() {
          alert("O jogador 2: Ganhou o jogo");}, 1000);
      }else{
        setTimeout(function() {
          alert("[PARTIDA EMPATADA!!!]");}, 1000);
      }
    }
  };
  botao2.disabled = true;

  botao1.onclick = () => {
    calcularjg1();
    vezjogador = 1;
    if (vezjogador === 1) {
      botao2.disabled = false;
    }
  };
  botao2.onclick = () => {
    let valorjg1 = parseInt(resultado1.innerHTML); // pega o valor gerado para o jogador 1
    let valorjg2 = calcularjg2(); // gera um novo valor para o jogador 2
    vezjogador = 0;
    botao2.disabled = true;
    botao1.disabled = false;
    calcular(valorjg1, valorjg2); // passa os valores gerados como parâmetros para a função calcular()
};

  reiniciar.onclick = () => {
    pontosjg1 = 0;
    pontosjg2 = 0;
    rodadas = 0;
    nrodadas.innerHTML = " " ;
    vezjogador = 0;
    pontosjogador1.innerHTML = `Jogador 1: ${pontosjg1}`;
    pontosjogador2.innerHTML = `Jogador 2: ${pontosjg2}`;
    resultado1.innerHTML = "";
    resultado2.innerHTML = "";
    botao1.disabled = false;
    botao2.disabled = true;
  };
  