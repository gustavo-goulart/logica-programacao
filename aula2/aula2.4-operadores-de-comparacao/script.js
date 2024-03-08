//Pedir para o usuário digitar 2 números e mostrar um boolean indicando se a média for MAIOR que 5
const num1 = parseFloat(prompt("Digite um número: "));
const num2 = parseFloat(prompt("Digite outro número: "));

const mediaNumeros = (num1 + num2) / 2;

alert(`"A média é: ${mediaNumeros > 5}"`);
