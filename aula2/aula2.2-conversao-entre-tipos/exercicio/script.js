//pedir para o usuario digitar um numero e converter em número inteiro
const primeiroNumero = parseInt(prompt("Digite um número: "));
//pedir para o usuario digitar outro numero
const segundoNumero = parseInt(prompt("Digite outro número: "));
//mostrar a subtração concatenando com o texto "a subtração é: ..."
alert(
  `A SUBTRAÇÃO entre os 2 números digitados é: ${
    primeiroNumero - segundoNumero
  }`
);
//mostrar a multiplicação concatenando com o texto "a multiplicação é: ..."
alert(
  `A MULTIPLICAÇÃO entre os 2 números digitados é: ${
    primeiroNumero * segundoNumero
  }`
);
//mostrar a divisão concatenando com o texto "a divisão é: ..."
alert(
  `A DIVISÃO entre os 2 números digitados é: ${primeiroNumero / segundoNumero}`
);
//mostrar a soma concatenando com o texto "a soma é: ..."
alert(
  `A SOMA entre os 2 números digitados é: ${primeiroNumero + segundoNumero}`
);
