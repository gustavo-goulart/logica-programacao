/*Pedir para o usuário digitar 2 notas e informar se foi aprovado ou não. A nota de corte é 5. Contudo, se qualquer uma das notas for 0, reprova automaticamente*/
const nomeAluno = prompt("Digite o nome de Aluno: ").toUpperCase();
const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));

mediaNotas = (nota1 + nota2) / 2;

/*
if (mediaNotas >= 5 && nota1 > 0 && nota2 > 0) {
  alert(
    `"O Aluno: ${nomeAluno}, obteve uma média das notas de ${mediaNotas} e foi APROVADO!!!"`
  );
} else {
  alert(
    `"O Aluno(a): ${nomeAluno}, obteve uma média das notas de ${mediaNotas} e foi Reprovado!!!"`
  );
}
*/

if (nota1 === 0 || nota2 === 0 || mediaNotas < 5) {
  alert(
    `"O Aluno(a): ${nomeAluno}, obteve uma média das notas de ${mediaNotas} e foi Reprovado!!!"`
  );
} else {
  alert(
    `"O Aluno: ${nomeAluno}, obteve uma média das notas de ${mediaNotas} e foi APROVADO!!!"`
  );
}
