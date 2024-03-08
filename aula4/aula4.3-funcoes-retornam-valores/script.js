/*
Pedir para o usuário digitar 2 números que representam os lados de um retângulo.Mostrar na tela a área total de 2 formas distintas: Num ALERT ou na div#output(dependendo do botão clicado). O código  não precisa ser executado quando a página é aberta
*/

function mostrarAreaAlert() {
  var larguraTriangulo = parseFloat(prompt("Digite a largura: "));
  var alturaTriangulo = parseFloat(prompt("Digite a altura: "));
  var area = calcularArea(larguraTriangulo, alturaTriangulo);

  alert("A área total calculada foi de: " + area + "m²");
}

function mostrarAreaOutput() {
  var larguraTriangulo = parseFloat(prompt("Digite a largura: "));
  var alturaTriangulo = parseFloat(prompt("Digite a altura: "));
  var area = calcularArea(larguraTriangulo, alturaTriangulo);

  document.querySelector("#output").innerHTML =
    "A área total calculada foi de: " + area + "m²";
}

function calcularArea(larguraTriangulo, alturaTriangulo) {
  return larguraTriangulo * alturaTriangulo;
}
