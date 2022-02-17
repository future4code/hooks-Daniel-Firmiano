// // *** Exercícios de interpretação de código
// 1 - Leia o código abaixo
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// // a) O que vai ser impresso no console?
// 10
// 50

// // b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
// Ele não iria imprimir no console

// 2 - Leia o código abaixo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
} 


const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

