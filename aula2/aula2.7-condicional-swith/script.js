//Pedir para o usuário digitar um número de 1 a 6. Mostar na tela uma mensagem diferente para cada número.

const numeroDigitado = parseInt(prompt("Digite um número: "));

switch (numeroDigitado) {
  case 1:
    alert("Boa escolha");
    break;

  case 2:
    alert("Ótimo número");
    break;

  case 3:
    alert("Isso aí");
    break;

  case 4:
    alert("Belo número");
    break;

  case 5:
    alert("Não gostei");
    break;

  case 6:
    alert("Hummmm");
    break;

  default:
    alert("Escolha um número de 1 a 6");
}
