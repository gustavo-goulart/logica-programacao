//Pedir para o usuário digitar um número. Mostra a tabuada desse número 10x
const numeroDigitado = parseInt(prompt("Digite um número: "));

/*
while (indice <= 10) {
  console.log(`${numeroDigitado} x ${indice} = ${numeroDigitado * indice}`);
  indice++;
}
*/
/*
do {
  console.log(`${numeroDigitado} x ${indice} = ${numeroDigitado * indice}`);
  indice++;
} while (indice <= 10);
*/

for (let i = 0; i <= 100; i++) {
  document.write(`${numeroDigitado} x ${i} = ${numeroDigitado * i} <br>`);

  if (i % 10 === 0 && i > 0) {
    document.write("<hr>");
  }
}
