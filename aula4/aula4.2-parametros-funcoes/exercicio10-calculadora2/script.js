var numeroUsuario = parseFloat(prompt("Digite um número"));

escreve();

function escreve() {
  var output = document.querySelector("#output");
  output.innerHTML = numeroUsuario;
}

function calcular(simbolo) {
  var numero2Usuario = parseFloat(prompt("Digite um número"));
  switch (simbolo) {
    case "+":
      numeroUsuario += numero2Usuario;
      break;
    case "-":
      numeroUsuario -= numero2Usuario;
      break;
    case "*":
      numeroUsuario *= numero2Usuario;
      break;
    case "/":
      numeroUsuario /= numero2Usuario;
  }
  escreve();
}

function limparCalculo() {
  var mensagem = "";
  output.innerHTML = mensagem;
}

limparCalculo();
