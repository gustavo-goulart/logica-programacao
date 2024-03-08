/*
Para ser bissexto, o ano deve ser:

Divisível por 4. Sendo assim, a divisão é exata com o resto igual a zero;

Não pode ser divisível por 100. Com isso, a divisão não é exata, ou seja, deixa resto diferente de zero;

Pode ser que seja divisível por 400. Caso seja divisível por 400, a divisão deve ser exata, deixando o resto igual a zero.
*/

var ano = 1004;

while (ano <= 2024) {
  if (!(ano % 100 === 0) || ano % 400 === 0) {
    document.write(ano + " Bissesto" + "<br>");
  } else {
    document.write(ano + " Não é Bissesto" + "<br>");
  }
  ano += 4;
}
