//------------------------------Exercícios de interpretação de código-------------------------------------

/* 1.  Leia o código abaixo

    const filme = {
    	nome: "Auto da Compadecida", 
    	ano: 2000, 
    	elenco: [
    		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    		"Virginia Cavendish"
    		], 
    	transmissoesHoje: [
    		{canal: "Telecine", horario: "21h"}, 
    		{canal: "Canal Brasil", horario: "19h"}, 
    		{canal: "Globo", horario: "14h"}
    		]
    }

    console.log(filme.elenco[0])
    console.log(filme.elenco[filme.elenco.length - 1])
    console.log(filme.transmissoesHoje[2])

    a) O que vai ser impresso no console?*/ 

    //  console.log(filme.elenco[0]) = vai imprimir "Matheus Nachtergaele". 
    // console.log(filme.elenco[filme.elenco.length - 1]) = vai imprimir "Virginia Cavendish". 
    //   console.log(filme.transmissoesHoje[2]) = vai imprimir canal: "Globo", horario: "14h". 

    /* 2. Leia o código abaixo

    const cachorro = {
    	nome: "Juca", 
    	idade: 3, 
    	raca: "SRD"
    }

    const gato = {...cachorro, nome: "Juba"}

    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)

    a) O que vai ser impresso no console?

    // {nome: "Juca", idade: 3, raca: "SRD"} 
    // {nome: "Juba", idade: 3, raca: "SRD"} 
    // {nome: "Jubo", idade: 3, raca: "SRD"}


    b) O que faz a sintaxe dos três pontos antes do nome de um objeto? */ 

    // faz a cópia exata do objeto, arrays, função e etc.


/* 3. Leia o código abaixo

    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
    }

    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }

    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))

    a) O que vai ser impresso no console?
    
    
    // false e undefined. 


    b) Explique o valor impresso no console. Você sabe por que isso aconteceu? */ 

    // o valor falso é porque backender recebeu false e undefined porque "altura" não foi um parâmetro definido. 


//---------------------------Exercícios de escrita de código-------------------------------------- 

/* 1. Resolva os passos a seguir: 

    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos 
    (um array que sempre terá exatamente **três apelidos**). 
    Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: */

    
    const pessoa = { 
        nome: "Nelson", 
        apelidos: ["Nelsin", "Nelsola", "Nelsão"],
        todosOsApelidos: (apelidos) =>  {
            console.log(`Me chamo Nelson, mas pode me chamar também de ${apelidos[0]}, ${apelidos[1]} ou ${apelidos[2]}.`)
        }
    }
    pessoa.todosOsApelidos(pessoa.apelidos) 

  /* b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, 
    mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando 
    como argumento o novo objeto */

    const novosApelidos = {... pessoa, apelidos: ["N", "Nelnel", "Néné"]}
    console.log(novosApelidos) 
    console.log(pessoa) 

/* 2. Resolva os passos a seguir: 

    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
   
    b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

    1. O valor de nome
    2. O numero de caracteres do valor nome
    3. O valor de idade
    4. O valor de profissão
    5. O numero de caracteres do valor profissão */
 

// Item A: 

        const pessoa1 = { 
            nome: "Pedrinho", 
            idade: 22, 
            profissao: "Vendedor"
        } 
        const pessoa2 = {
            nome: "Joãozinho", 
            idade: 29, 
            profissao: "Lojista"
        } 

// Item B: 

        function todasPessoas(pessoa2) {
            return [pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length]
        } 
        console.log(todasPessoas(pessoa2)) 

        


/* 3. Resolva os passos a seguir: 

    a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

    b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

    c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 

    d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. */ 

// Item A: 

        const carrinho = [] 
        const frutasSacolao = { 
            nome: "Pêra", 
            disponibilidade: true
        }
        const frutasSacolao2 = {
            nome: "Melancia", 
            disponibilidade: true
        } 
        const frutrasSacolao3 = { 
            nome: "Laranja", 
            disponibilidade: true
        } 
        
        function fruta(frutasSacolao, frutasSacolao2, frutrasSacolao3) {
            carrinho.push(frutasSacolao, frutasSacolao2, frutrasSacolao3) 
            console.log(carrinho)
        } 
        fruta(frutasSacolao, frutasSacolao2, frutrasSacolao3)