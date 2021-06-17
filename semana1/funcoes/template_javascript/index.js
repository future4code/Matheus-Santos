/* -------------------------Exercícios de interpretação de código--------------------------------------
1. Leia o código abaixo

function minhaFuncao(variavel) {
    return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?

// O console vai imprimir o valor 10 e o valor 50.

b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e 
minhaFuncao(10)? O que apareceria no console?

// Aconteceria um erro e o console irá mostrar que (minhaFuncao(2) ou (minhaFuncao(10) não é uma function

2. Leia o código abaixo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Explique o que essa função faz e qual é sua utilidade

// Essa função vai retornar em caixa baixa e ver se contém "cenoura" no texto do usuário, caso não contenha 
retornará com false, sua utilidade é procurar "cenoura" no texto e deixar totalmente em caixa baixa, de fato 
para um nicho de pessoas essa função...

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   Eu gosto de cenoura
     ii.  CENOURA é bom pra vista
     iii. Cenouras crescem na terra */ 

/* i = eu gosto de cenoura --true (contém "cenoura" no texto) 
   ii = cenoura é bom pra vista --true (também contém "cenoura" no texto) 
   iii = cenouras cescem na terra --false (o console indica false porque contém "cenouras" e não 
   "cenoura") */ 


 //--------------------------------Exercícios de escrita de código-------------------------------------- 
 
 /* 1. Escreva as funções explicadas abaixo:

    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações 
    sobre você, como: 

    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
    Lembrando que a função não possui entradas, apenas imprime essa mensagem.

    b)  Agora escreva uma função que receba 4 parâmetros que correspondem às 
    informações de uma pessoa: o nome (string), a idade (number), a cidade (string)
    e uma profissão (string). Ela deve retornar uma string que unifique todas as 
    informações da pessoa em uma só mensagem com o template:

    Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO]. */ 

    /*function informacoesSobreMim() { 
    console.log("Me chamo Matheus, tenho 18 anos, moro em São Paulo e sou estudante")
    } 
    informacoesSobreMim() */ 

                
/*   function informacoesDoUsuario(nomeDoUsuario, idadeDoUsuario, enderecoDoUsuario, profissaoDoUsuario) {
     return (`Eu sou ${nomeDoUsuario}, tenho ${idadeDoUsuario} anos, moro em ${enderecoDoUsuario} e sou ${profissaoDoUsuario}`)
    }
    let nomeDoUsuario = prompt("Qual o seu nome?") 
    let idadeDoUsuario = Number (prompt("e sua idade?")) 
    let enderecoDoUsuario = prompt("e o seu endereço?") 
    let profissaoDoUsuario = prompt("e sua profissão?") 
    console.log(informacoesDoUsuario(nomeDoUsuario, idadeDoUsuario, enderecoDoUsuario, profissaoDoUsuario)) */ 

/*  2. Escreva as funções explicadas abaixo:

    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
    faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o 
    primeiro número é maior ou igual ao segundo.

    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

    d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa 
    mensagem, juntamente com uma versão dela em letras maiúsculas. */ 

/* function somaDeDoisNum(num1, num2){ 
    const soma = num1 + num2 
    return soma 
} 
const resultado = somaDeDoisNum(8, 182) 
console.log("resultado da soma", resultado) */ 

/*   function numerosMaiorOuIgual(numeros1, numeros2){ 
   const maiorOuIgual = numeros1 >= numeros2 
   return maiorOuIgual
  } 
  const imprimeSeEhMaiorOuIgual = numerosMaiorOuIgual(15342, 702) 
  console.log("resultado da soma", imprimeSeEhMaiorOuIgual) */  


  /* function verificaSeEhParOuNao(numero1) { 
  const numeroPar = numero1 % 2 
  return numeroPar
  } 
  const resultadoDoParOuImpar = verificaSeEhParOuNao(3) 
  console.log("resultado do número", resultadoDoParOuImpar) */ 

 /* function mensagem(texto) { 
      return texto.length && texto.toUpperCase()
  } 
  const resultadoDaMensagem = mensagem("hoje o dia tá punk bixo") 
  console.log(resultadoDaMensagem) */ 

 /* 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
  Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados 
  pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

    Números inseridos: 30 e 3
    Soma: 33
    Diferença: 27
    Multiplicação: 90
    Divisão: 10 */ 

    function soma01(numero01, numero02) { 
        const adicao = numero01 + numero02 
        return adicao
    } 
    function soma02(numero01, numero02) { 
        const subtracao = numero01 - numero02 
        return subtracao
    }  
    function soma03(numero01, numero02) { 
        const multiplicacao = numero01 * numero02 
        return multiplicacao
    } 
    function soma04(numero01, numero02) { 
        const divisao = numero01 / numero02 
        return divisao
    } 
    const numerosDoUsuario = Number (prompt("digite um número")) 
    const numerosDoUsuario2 = Number (prompt("agora outro número")) 
    