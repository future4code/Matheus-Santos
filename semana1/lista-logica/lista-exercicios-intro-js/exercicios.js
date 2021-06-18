// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number (prompt("Qual o tamanho da altura?")) 
  const largura = Number (prompt("e o tamanho da largura?")) 
  const area = altura * largura 
  console.log(area)
  return area
} 

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Qual o ano atual?")) 
  const anoDeNascimento = Number(prompt("e o seu ano de nascimento?")) 
  const idadeDoUsuario = anoAtual - anoDeNascimento 
  console.log(idadeDoUsuario) 
  return idadeDoUsuario
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura) 
} 


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
const nomeDoUsuario = prompt("Qual o seu nome?") 
const idadeDoUsuario = Number(prompt("e a sua idade?")) 
const emailDoUsuario = prompt("e o seu email?") 
console.log(`Meu nome é ${nomeDoUsuario}, tenho ${idadeDoUsuario} anos, e o meu email é ${emailDoUsuario}.`)
}



// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Qual a sua cor primária favorita?") 
  const cor2 = prompt("e a sua cor secundária favorita?") 
  const cor3 = prompt("e por fim, a sua cor terciária favorita?") 
  const cores =  [cor1, cor2, cor3] 
  console.log(cores) 
}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) { 
  string = string.toUpperCase() 
  return string
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const precisaSerVendido = custo / valorIngresso 
  return precisaSerVendido
}
calculaIngressosEspetaculo(5000, 300) 

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const verificaOTamanho = string1.length >= string2.length 
  return verificaOTamanho
} 


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const elemento = array[0] 
  const ultimoElemento = array[array.length -1] 
  array [0] = ultimoElemento 
  array[array.length -1] = elemento 
  return array  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase().includes(string2.toLowerCase())
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const qualOAnoAtual = Number(prompt("Qual o ano atual?")) 
  const anoDeNascimentoDoUsuario = Number(prompt("em que ano você nasceu?")) 
  const carteiraDeIdentidade = Number(prompt("a sua carteira foi emitida em qual ano?")) 
  const idade01 = qualOAnoAtual - anoDeNascimentoDoUsuario 
  const anoDaCarteira = qualOAnoAtual - carteiraDeIdentidade 
  const menosDeVinteAnos = idade01 <= 20 && anoDaCarteira >= 5 
  const vinteOuCinquentaAnos = idade01 > 20 && idade01 <= 50 && anoDaCarteira >= 10 
  const maisDeCinquentaAnos = idade01 > 50 &&  anoDaCarteira >= 15 
  
  console.log(menosDeVinteAnos || vinteOuCinquentaAnos || maisDeCinquentaAnos)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}