// *** Exercícios de interpretação de código
// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// o console vai comando todos os numeros até chegar no ultimo numero menor que 5...

// 2 - Leia o código abaixo

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) O que vai ser impresso no console?
// o console vai imprimir todos os números maiores que 18

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

// 3 - Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// Ele iria imprimir 1 asteristico na linha 1 , 2 na linha 2 , 3 na linha 3 e 4 na linha 4

// *** Exercícios de escrita de código

// 1 - 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

let nomePet = []
const pergunta = Number(prompt("Quantos bichos de estimação você tem?"))
let quantidadeDePets = 0
console.log(quantidadeDePets)
function bichos(){
    if(pergunta === 0)
    console.log("Que pena! Você pode adotar um pet")
}else {
    while(quantidadeDePets < pergunta)
    nomePet.push(prompt("Digite um nome"))
    
}
