// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

const { array } = require("prop-types");

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const invertido = array.slice(0).reverse(array.length - 1);
  return invertido;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const numeros = array.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  return numeros;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const numerosPares = array.filter((x) => x % 2 === 0);
  return numerosPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const numerosParesElevados = array.filter((x) => x % 2 === 0);
  const numerosParesElevadosADois = numerosParesElevados.map((x) => x ** 2);
  return numerosParesElevadosADois;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  const numeroMaior = function (array) {
    return Math.max.apply(Math, array);
  };
  return numeroMaior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
