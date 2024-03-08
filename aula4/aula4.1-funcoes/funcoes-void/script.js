function mostrarTabuada() {
  var mensagem = "";
  //Perguntar e converter o número para o usuário
  var numeroUsuario = parseInt(
    prompt("Digite um número para saber sua tabuada: ")
  );

  limparTabuada();

  //Criar uma variável que servirá de índice
  var indice = 1;
  //Enquanto indice <= 10
  while (indice <= 10) {
    //concatena na variavel mensagem
    mensagem +=
      numeroUsuario + "x" + indice + "=" + numeroUsuario * indice + "<br>";
    indice++;
  }
  //Mostrar mensagem no  output

  output.innerHTML = mensagem;
}

function limparTabuada() {
  var mensagem = "";
  output.innerHTML = mensagem;
}
