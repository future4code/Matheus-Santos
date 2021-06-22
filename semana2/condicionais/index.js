//-------------------------Exercícios de interpretação de código----------------------------------- 

/* 1. Leia o código abaixo:

    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)

    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }

    a) Explique o que o código faz. Qual o teste que ele realiza? 

    // o código faz o teste para ver se o número do usuário é divisivel por 2, sendo assim igual a 0.

    b) Para que tipos de números ele imprime no console "Passou no teste"? 

    // ele imprime o número 0 para números pares.

    c) Para que tipos de números a mensagem é "Não passou no teste"? */ 
    
    // para número ímpares. 

/* 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

    a) Para que serve o código acima?

    // O código serve para verificar se tem a fruta do usuário e indicar o preço dela.

    b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?

    // O preço da fruta Maçã é R$ 2.25

    c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")? */ 

    // O preço da fruta  Pêra  é  R$  5.5 

/* 3. Leia o código abaixo:

    const numero = Number(prompt("Digite o primeiro número."))

    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }

    console.log(mensagem)

    a) O que a primeira linha está fazendo?

    // ela está pegando o número que o usuário vai responder no prompt

    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

    /* se o usuário digitar o número 10, o console vai imprimir "Esse número passou no teste", 
    caso ele tenha digitado -10, o console iria imprimir um erro

    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. */ 

    /* Haverá um erro sim! Se o usuário digitar um número negativo, o console imprimiria um erro 
    por conta de não ter nenhuma ação nos códigos para dizer ao usuário que não tem como digitar 
    um número menor que 0 */ 



//-------------------------Exercícios de escrita de código-------------------------------- 

/* 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

    a) Faça um prompt para receber a idade do usuário e guarde em uma variável.

    b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.

    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir." */ 

    const idadeDoUsuario = Number(prompt("Qual a sua idade?")) 
    const verificacao = idadeDoUsuario >= 18 

    const podeOuNaoDirigir = (verificacao) => {
        if(verificacao) {
            console.log("Você pode dirigir")
        } else {
            console.log("Você não tem a idade miníma, então não pode dirigir, volte quando tiver forasteiro")
        } 
    } 
        console.log(podeOuNaoDirigir(verificacao)) 


/* 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else */ 

    const periodoDeEstudo = prompt("Se você estuda no perído matutino, por gentileza coloque a letra M, se for no período vespertino a letra V e no período noturno a letra N").toUpperCase() 

    const mensagemDoPeriodo = (periodoDeEstudo) => {
        if(periodoDeEstudo === "M") {
            console.log("Bom dia!")
        } else if (periodoDeEstudo === "V") {
            console.log("Boa tarde!")
        } else if (periodoDeEstudo === "N") {
            console.log("Boa noite!")
        } else {
            console.log("desculpa, não conheço essa opção fella :/")
        }
    }
mensagemDoPeriodo(periodoDeEstudo)  


// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora. 

    const turnoAluno = prompt("Se você estuda no perído matutino, por gentileza coloque a letra M, se for no período vespertino a letra V e no período noturno a letra N")
    switch(turnoAluno.toUpperCase()) {
        case "M": 
        console.log("Bom dia!") 
        break 
        case "V": 
        console.log("Boa tarde!") 
        break 
        case "N": 
        console.log("Boa noite!") 
        break 
        default: 
        console.log("Digite uma letra das 3 opções ditas!") 
    }


/* 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :(" */ 

    const generoDoFilme = prompt("Qual genêro vamos assistir fellas?").toLowerCase() 
    const precoDoIngresso = Number (prompt("qual o valor do ingresso?")) 
    
    const amigoTopa = (generoDoFilme, precoDoIngresso) => {
        if (generoDoFilme === "fantasia" && precoDoIngresso <= 15) {
            console.log("Bom filme!")
        } else {
            console.log("Escolha outro filme :(")
        }
    } 
    amigoTopa(generoDoFilme, precoDoIngresso)