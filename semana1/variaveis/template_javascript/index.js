// --------------------Exercícios de interpretação de código-------------------------------- 
/* 1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
let a = 10
let b = 10

console.log(b)
o console irá imprimir o número 10 (porque foi atribuído a letra b o valor de 10, 
sendo assim o console imprimindo 10)
b = 5
console.log(a, b)*/ 
/*o console irá imprimir o valor de 10 (que foi atribuído a let a) e o valor de 5 (que foi alterado da letra b,
antes sendo 10 e agora 5)*/ 


/* 2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa. 

let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c)*/ 
/* o console irá imprimir o valor 10, 10 e 10 (todos receberam o valor de 10, porque 
a = 10, a let c recebeu o valor de a, let b que tinha o valor de 20 recebeu o valor de c sendo assim 10, 
e let a recebeu o valor de b sendo assim 10 também)*/ 

/* 3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. 
Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. 
Alem disso, os nomes não podem começar com números ou caracteres especiais.

    let p = prompt("Quantas horas você trabalha por dia?")
    let t = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${t/p} por hora`)
    
minha sugestão para melhorar os nomes das variávies seria assim: 

   let horasDeTrabalhoPorDia = prompt("Quantas horas você trabalha por dia?") 
   let tempoQueReceboPorDia = prompt("Quanto você recebe por dia?") 
   alert("Voce recebe ${tempoQueReceboPorDia/horasDeTrabalhoPorDia} por hora")*/ 

//--------------------------Exercícios de escrita de código--------------------------------------- 

/* 1. Construa um programa, seguindo os seguintes passos:

    a) Declare uma variável para armazenar um nome, sem atribuir um valor.

    b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

    c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.

    d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

    e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

    f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

    g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` 
    são os valores que o usuário inseriu*/ 

    let nome; 
    let idade; 
    console.log(typeof nome); 
    console.log(typeof idade); 
    // nome e idade receberam null porque o usuário que vai declarar o valor deles 
    const oNome = prompt("Qual o seu nome?"); 
    console.log(oNome);
    const aIdade = prompt("e a sua idade?");   
    console.log(aIdade);
    //notei que o console está voltando o número da idade como string 
    console.log("Olá", oNome,"você tem", aIdade, "anos"); 

    /* 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: 
    "Você está usando uma roupa azul hoje?". Depois, siga os passos:

    a) Crie três novas variáveis, contendo as respostas

    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

    Você está usando uma roupa azul hoje? - SIM*/ 
    
    let pergunta1 = ("Você tem roupas azuis?"); 
    let pergunta2 = ("Você é uma pessoa alta?"); 
    let pergunta3 = ("Gosta de viajar?"); 
    let resp1 = prompt(pergunta1); 
    let resp2 = prompt(pergunta2); 
    let resp3 = prompt(pergunta3); 
    console.log(pergunta1, resp1); 
    console.log(pergunta2, resp2); 
    console.log(pergunta3, resp3); 

/* 3. Suponha que temos duas variáveis `a` e `b`, cada uma com um valor inicial

    let a = 10
    let b = 25

    Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter 
     o valor de `a`. 

    Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.

    let a = 10
    let b = 25

    // Aqui faremos uma lógica para trocar os valores

    // Depois de trocados, teremos o seguinte resultado:
    console.log("O novo valor de a é", a) // O novo valor de a é 25
    console.log("O novo valor de b é", b) // O novo valor de b é 10

    Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de 
    qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que `a = 25` e `b = 10` porque 
    se os valores iniciais mudarem, a lógica do seu programa teria que mudar também).*/ 
    
    let a = 10; 
    let b = 25; 
    let c; 
    c = a; 
    a = b; 
    b = c; 
    console.log(a, b);