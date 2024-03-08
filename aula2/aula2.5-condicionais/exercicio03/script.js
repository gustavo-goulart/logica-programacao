// //Fazer jogador 1 digitar um número
const nomeJogador1 = prompt("Nome do  Jogador1: ");
const num1 = parseInt(prompt("Jogador1 - Escolha o numero 0 ou 1:"));
// //Fazer jogador 2 digitar outro número
const nomeJogador2 = prompt("Nome do  Jogador2: ");
const num2 = parseInt(prompt("Jogador2 - Escolha o numero 0 ou 1::"));
// //Se forem iguais, mostrar mensagem EMPATE
if (num1 === num2) {
  alert("Vocês EMPATARAM, tentem novamente!!!");
} else {
  //Sortear um número entre 0 e 1
  const sortearNumero = parseInt(Math.random() * 2);
  alert("Sorteando número......");
  alert(`O número sorteado foi: ${sortearNumero}`);
  //Se o número sortedo for 0, ganha quem escolher o número MENOR
  if (
    (sortearNumero === 0 && num1 < num2) ||
    (sortearNumero === 1 && num1 > num2)
  ) {
    alert(`"Parabéns ${nomeJogador1} você GANHOU!!"`);
  } else {
    alert(`"Parabéns ${nomeJogador2} você GANHOU!!"`);
  }
}
