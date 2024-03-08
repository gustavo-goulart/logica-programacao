//Pedir para o usuário digitar 2 números que representam os lados de um retângulo assim que a página é carregada. Mostrar na tela a área total ao clicar no botão

var larguraTriangulo = parseFloat(prompt("Digite a largura: "));
var alturaTriangulo = parseFloat(prompt("Digite a altura: "));

function mostrarArea(largura, altura) {
  alert("Área Total é de: " + larguraTriangulo * alturaTriangulo);
}
