//Pedir ao usuário digitar um número e tranformar em inteiro
const num1 = parseInt(prompt("Digite um número: "));
//Pedir ao usuário digitar outro número e tranformar em inteiro
const num2 = parseInt(prompt("Digite outro número: "));

resultado = num1 % num2;

/* Mostar em um alert o seguinte texto:
O resto da divisão de (n1) por (n2) é: (resultado)
*/
alert(`"O resto da divisão de ${num1} por ${num2} é: ${resultado}"`);

resultadoExponenciacao = num1 ** num2;

/* Mostar em um alert o seguinte texto:
O número (n1) elevado (n2) é: (resultado)
*/
alert(`"O número ${num1} elevado a ${num2} é: ${resultadoExponenciacao}"`);
