var n2 = prompt("digite um numero");
n2 = parseFloat(n2);

escreve(n2);

function iniciarCalculo(simbolo) {
  var n1 = document.querySelector("#output").textContent;
  n1 = parseFloat(n1);

  var n2 = prompt("digite outro número");
  n2 = parseFloat(n2);

  var msg = calcular(simbolo, n1, n2);

  escreve(msg);
}

function escreve(mensagem) {
  var output = document.querySelector("#output");
  output.innerHTML = mensagem;
}

function calcular(simbolo, n1, n2) {
  var numeroCalculado = null;

  switch (simbolo) {
    case "+":
      numeroCalculado = n1 + n2;
      break;
    case "-":
      numeroCalculado = n1 - n2;
      break;
    case "*":
      numeroCalculado = n1 * n2;
      break;
    case "/":
      numeroCalculado = n1 / n2;
  }

  return numeroCalculado;
}

function limparCalculo() {
  var mensagem = "";
  output.innerHTML = mensagem;
}
