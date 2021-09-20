// Exercício 1:

const nome = "Matheus";
const idade = Number(18);
const idadeFutura = idade + 7;

console.log(
  `Olá ${nome}, você tem ${idade} anos e daqui a sete anos você terá ${idadeFutura}!`
);

// Exercício 2:

const operacao = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

switch (operacao) {
  case "soma":
    console.log(num1 + num2);
    break;
  case "sub":
    console.log(num1 - num2);
    break;
  case "mult":
    console.log(num1 * num2);
    break;
  case "div":
    console.log(num1 / num2);
    break;
}

// Exercício 3:

const tarefa = process.argv[2];
const listaDeTarefas = [];
listaDeTarefas.push(tarefa);
console.log(`A sua tarefa ${tarefa} foi adicionada com sucesso!`);
console.table(listaDeTarefas);
