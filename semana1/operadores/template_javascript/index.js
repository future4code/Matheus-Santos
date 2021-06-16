//---------------------------------Exercícios de interpretação de código----------------------------------
/*1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

    const bool1 = true
    const bool2 = false
    const bool3 = !bool2

    let resultado = bool1 && bool2
    console.log("a. ", resultado)

//o console irá imprimir a. false

    resultado = bool1 && bool2 && bool3 
    console.log("b. ", resultado) 

//o console irá imprimir b. false

    resultado = !resultado && (bool1 || bool2) 
    console.log("c. ", resultado)

//o console irá imprimir c. true 

    console.log("d. ", typeof resultado)*/ 
// o console irá imprimir d. boolean


/* 2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  
Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = primeiroNumero + segundoNumero

    console.log(soma) 

/*o problema é que o prompt é usado apenas para strings, o console irá imprimir somente a soma das 
palavras.*/ 

/*3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, 
de fato, a soma dos dois números.*/ 

/*eu sugiro que o meu colega coloque let primeiroNumero = Number(prompt("Digite um numero"!)) 
desse modo o console vai entender que será um número e não uma string.*/ 

//-----------------------Exercícios de escrita de código------------------------------------ 

/* 1. Faça um programa que:

    a) Pergunte a idade do usuário

    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido 
    pela resposta (true ou false)

    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)*/ 

const idade1Usuario = Number (prompt("Qual a sua idade?")); 
const idade2Usuario = Number (prompt("Qual a idade do seu melhor amigo ou amiga?")); 
console.log("Sua idade é maior do que a do seu melhor amigo?", idade1Usuario > idade2Usuario);

/* 2. Faça um programa que:

    a) Peça ao usuário que insira um número **par**

    b) Imprima na console **o resto da divisão** desse número por 2.

    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código*/ 

const numeroPar = Number (prompt("Insira um número par")); 
console.log("Resto da divisão", numeroPar % 2);
/* Notei que o padrão para números pares será sempre 1 e para ímpares 0. */ 
// Se o usuário inserir um número ímpar, o resultado da divisão sempre se resultará em 0 

/* 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

    a) A idade do usuário em meses

    b) A idade do usuário em dias

    c) A idade do usuário em horas */ 

const anoNascimento = Number (prompt("Qual a sua idade?")); 
const meses = Number (prompt ("e meses?")); 
const dias = Number (prompt("sabe quantos dias você tem de vida?")); 
const horas = Number (prompt("essa é difícil, mas sabe as horas de vida?")); 
const resultado = anoNascimento * 12 * 365 * 24 
console.log("você têm ", anoNascimento, "de vida e", meses, "meses,", dias, "dias e", horas, "horas."); 

/* 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console 
as seguintes mensagens:

    O primeiro numero é maior que segundo? true
    O primeiro numero é igual ao segundo? false
    O primeiro numero é divisível pelo segundo? true
    O segundo numero é divisível pelo primeiro? true */ 

    const coloqueUmNumero = Number (prompt("Coloque um número")); 
    const coloqueOutroNumero = Number (prompt("agora outro número")); 
    console.log("O primeiro número é maior que o segundo?", coloqueUmNumero > coloqueOutroNumero); 
    console.log("O primeiro número é igual ao segundo?", coloqueUmNumero === coloqueOutroNumero); 
    console.log("O primeiro número é divisível pelo segundo?", coloqueUmNumero % coloqueUmNumero === 0); 
    console.log("O segundo número é divisível pelo primeiro?", coloqueOutroNumero % coloqueUmNumero === 0);