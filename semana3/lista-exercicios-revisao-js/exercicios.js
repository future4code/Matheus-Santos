// EXERCÍCIO 01
function inverteArray(array) {
  let novoArray = [ ] 
  const tamanho = array.length 

  for(let i = tamanho -1; i >= 0; i--){
    novoArray.push(array[i]) 
  } 
  console.log(novoArray) 
  return novoArray
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const arrayNumerosElevadosPor2 = array.filter(item => {
    if(item % 2 === 0) 
    return item 
  }).map(item => item * item)  
  return arrayNumerosElevadosPor2 
} 

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const arrayDeNumerosPares = array.filter(item => {
    if(item % 2 === 0) 
    return item
  }) 
  return arrayDeNumerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  
  const numeros = array

  let i = 0 
  let maior = -Infinity 
  while(i < numeros.length) {
    if(numeros[i] > maior){
      maior = numeros[i]
    } 
    i++
  } return maior 
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  const quantidadeElementos = array 
  return quantidadeElementos.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 

  const letraA = booleano1 && booleano2 && !booleano4 
  const letraB = (booleano1 && booleano2) || !booleano3
  const letraC = (booleano2 || booleano3) && (booleano4 || booleano1) 
  const letraD = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3) 
  const letraE = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  const respostas = [letraA, letraB, letraC, letraD,] 
  return respostas 
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
