var numeroUsuario = parseFloat(prompt("Digite um número"));

escreve();

function escreve() {
  var output = document.querySelector("#output");
  output.innerHTML = numeroUsuario;
}

function somar() {
  var numeroUsuario2 = parseFloat(prompt("Digite outro número"));

  numeroUsuario += numeroUsuario2;
  escreve();
}

function subtrair() {
  var numeroUsuario2 = parseFloat(prompt("Digite outro número"));

  numeroUsuario -= numeroUsuario2;
  escreve();
}

function multiplicar() {
  var numeroUsuario2 = parseFloat(prompt("Digite outro número"));

  numeroUsuario *= numeroUsuario2;
  escreve();
}

function dividir() {
  var numeroUsuario2 = parseFloat(prompt("Digite outro número"));

  numeroUsuario /= numeroUsuario2;
  escreve();
}

function limparCalculo() {
  var mensagem = "";
  output.innerHTML = mensagem;
}

limparCalculo();
