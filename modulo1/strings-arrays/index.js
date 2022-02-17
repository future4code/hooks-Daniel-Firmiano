// *** Exercícios de interpretação de código
//  1 -  Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// let array
// console.log('a. ', array)

// Resposta : (a. Undefinid ) Constante não foi definida

// array = null
// console.log('b. ', array)

// Resposta : b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// Resposta : c . 11 (length é o tamanho da array)

// let i = 0
// console.log('d. ', array[i])

// array[i+1] = 19
// console.log('e. ', array)

// const valor = array[i+6]
// console.log('f. ', valor)

// 2 - Leia o código abaixo com atenção
 
// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

// SUBI NUM ÔNIBUS EM MIRROCOS 27

//  *** Exercícios de escrita de código

//  1 -  Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
//  O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

// const nomeDoUsuario = prompt("Qual seu nome?")
// const emailDoUsuario = prompt("Qual seu email?")

// console.log( `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeDoUsuario}` )

//  2 - Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
//  a) Imprima no console o array completo
 
//  b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
 
//  c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

const arrayCompleto = ["frango" , "batata" , "nugguets" , "pizza" , "doritos" ]
console.log(arrayCompleto)
console.log(`Essas são minhas comidas preferidas :` + arrayCompleto)
