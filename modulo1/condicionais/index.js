// *** Exercícios de interpretação de código

// 1 - Leia o código abaixo:

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// a) Explique o que o código faz. Qual o teste que ele realiza? 
// Ele vai pegar o número que o usuario digitou e dividir por 2, caso o resto da divisão seja igual a 0 passou no teste, caso contrario não passou e o console imprime "Não passou no teste"

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
//Para números pares

// c) Para que tipos de números a mensagem é "Não passou no teste"?
//Para numeros impares

//2 - O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
//Serve para informar o preço de acordo com a fruta que o usuario informar. ,sendo ela laranja, maçã, uva, ou pêra.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//O preço da fruta  Maçã  é  R$  2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//O preço da fruta  Pêra  é  R$  5

// 3 - Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"

// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
//Solicitando ao usuario um numero qualquer.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//Se fosse o numero 10 iria imprimir : "Esse número passou no teste"
//Se fosse -10 o numero seria menor que 0 , então ele não imprimiria nada pq não foi dito o caso contrario

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//Sim , haverá um erro , pois o console.log esta depois do fechamento das chaves , entao ele fica fora do bloco e como ele não pertence a esse bloco não terá ligação com ele.

//*** Exercícios de escrita de código

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// let idade = Number(prompt("Qual é a sua idade?"))
// if (idade >= 18 ){
//     console.log("Você pode dirigir.")
// }
//     else {
//      console.log("Você não pode dirigir")
// }

// 2 - Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// let turno = prompt("Qual turno você estuda? Manha M ? Tarde T? ou Noite N?")
// if (turno === "M") {
//     console.log("Bom dia")
// }
// else if (turno === "T") {
//     console.log("Boa tarde")
// }
// else if (turno === "N") {
//     console.log("Boa noite")
// }

// 3 - Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// let turno = prompt("Qual turno você estuda? Manha M ? Tarde T? ou Noite N?")
// switch (turno) {
//     case "M":
//     console.log("Bom dia")
//     break

//     case "T":
//     console.log("Boa tarde")
//     break

//     case "N":
//     console.log("Boa noite")
//     break
// }

// 4 - Considere a situação: você vai ao cinema com um amigo ou amiga,porém ele/ela só assistirá a um filme com você se ele 
// for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de 
// filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir 
// o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// let filme = prompt("Qual gênero do filme?")
// let valor = Number(prompt("Qual valor do ingresso?"))
// let genFilme = filme.toLowerCase()

// if(genFilme === "fantasia" && valor < 15){
//     console.log("Bom filme")
// }
// else {
//     console.log("Escolha outro filme.")
// }
