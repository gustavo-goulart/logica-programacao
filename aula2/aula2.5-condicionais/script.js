/*Pedir para o usuário digitar 2 notas, e mostrar uma mensagem informando se foi aprovado  ou não. A nota de corte é 5.*/
const nomeDoAluno = prompt("Digite o nome do Aluno: ");
const primeiraNotaAluno = parseFloat(prompt("Digite a primeira nota: "));
const segundaNotaAluno = parseFloat(prompt("Digite a segunda nota: "));

mediaAluno = (primeiraNotaAluno + segundaNotaAluno) / 2;

if (mediaAluno > 5) {
  alert(
    `O Aluno(a) ${nomeDoAluno} tirou as notas: ${primeiraNotaAluno} e ${segundaNotaAluno} obtendo uma média de: ${mediaAluno}, portanto o ${nomeDoAluno} foi APROVADO`
  );
} else {
  alert(
    `O Aluno(a) ${nomeDoAluno} tirou as notas: ${primeiraNotaAluno} e ${segundaNotaAluno} obtendo uma média de: ${mediaAluno}, portanto o ${nomeDoAluno} foi REPROVADO`
  );
}
