// *** Exercícios de interpretação de código

//** 1 - Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// const bool1 = true 
// const bool2 = false
// const bool3 = !bool2 //Constante bool3 é true

// let resultado = bool1 && bool2
// console.log("a. ", resultado)
// a.  false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 
// b.  false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)
// //c.  true

// console.log("d. ", typeof resultado)
// d. boolean


//** 2 - Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 


// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = (primeiroNumero+segundoNumero)

// console.log(soma)

// Ele tem que indicar para o prompt que oq serpá digitado na barra será um número , no caso ficaria assim:

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))
// const soma = (primeiroNumero+segundoNumero)
//console.log(soma)

//** 3 - Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.


// O exercicio 3 foi respondido anteriormente

// *** Exercícios de escrita de código

//** 1. Faça um programa que:
    
//     a) Pergunte a idade do usuário
    
//     b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
//     c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
//     d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

// let suaIdade = Number(prompt("Qual sua idade?"))
// let idadeDoSeuMelhorAmigo = Number(prompt("Qualk idade do seu melhor amigo?"))

// const diferença = (suaIdade > idadeDoSeuMelhorAmigo)
// console.log("Sua idade é maior do que a do seu melhor amigo?" + "  " + diferença)

// const diferença2 = (suaIdade - idadeDoSeuMelhorAmigo)
// console.log("A diferença de idade é de : " + " " + diferença2)

//** 2 - Faça um programa que:
    
    // a) Peça ao usuário que insira um número **par**
    
    // b) Imprima na console **o resto da divisão** desse número por 2.
    
    // c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
    // d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

// Antes mesmo de iniciarmos o exercicio saberemos que qualquer número par que ele colocar o resultado sempre será 0 , pois o resto de qualquer número par dividido por 2 é 0.

// let numero = Number(prompt("Insira um número par."))
// console.log (numero % 2)

// Se o usuário escrever um numero impar o resultado vai ser sempre 1.

//** 3 - Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    // a) A idade do usuário em meses
    
    // b) A idade do usuário em dias
    
    // c) A idade do usuário em horas

    //???????????????????????????????????????????????????????Juro que não entendi a pergunta???????????????????????????????

//** 4 - Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// obs: O true ou false vai depender dos números inseridos e do resultado das operações.

let numero1 = Number(prompt("Insira um número qualquer."))
let numero2 = Number(prompt("Insira outro número qualquer."))
console.log (numero1 > numero2)
console.log (numero1 === numero2)
let divisivel1 = numero1 % numero2
let resto1 = divisivel1 === 0
console.log (resto1)
let divisivel2 = numero2 % numero1
let resto2 = divisivel2 === 0
console.log (resto2)
