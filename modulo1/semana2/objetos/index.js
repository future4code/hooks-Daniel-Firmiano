// *** Exercícios de interpretação de código

// 1 - Leia o código abaixo

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// // a) O que vai ser impresso no console?
// // Matheus Nachtergaele
// // Virginia Cavendish
// // canal: "Globo", horario: "14h"

// // 2 - Leia o código abaixo

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) O que vai ser impresso no console?

// nome:  Juca
// idade: 3
// raca: SRD

// nome:  Juba
// idade: 3
// raca: SRD

// nome:  Jubo
// idade: 3
// raca: SRD

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// Ele pega toda a informação ja dada e muda apenas oque convêm, no caso oque for mudado mesmo

// 3 - Leia o código abaixo

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?
// false
// undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

// O console imprimiu o valor de backender e altura não foi definido

//  *** Exercícios de escrita de código

// 1 - Resolva os passos a seguir: 

// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// const pessoa = {
//     nome: "Daniel",
//     apelidos:["Dan" , "Dani" , "Drake"]
// }
    
// console.log(`Eu sou o ${pessoa.nome},mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.` )

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
// const novaPessoa = {
//     ... pessoa,
//     apelidos: [ "Dan1" , "Dani1" , "Drake1"],
    
// }
// console.log(`Eu sou o ${novaPessoa.nome},mas pode me chamar de: ${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]} ou ${novaPessoa.apelidos[2]}.` )

// 1 - Resolva os passos a seguir: 

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

// const pessoa1 = { 
//     nome: "Daniel",
//     idade: 27,
//     profissao: "Desenvolvedor"
// }
// const pessoa2 = { 
//     nome: "Ingrid",
//     idade: 28,
//     profissao: "Designer",
// }
// function imprime (pessoa1,pessoa2){
// let arr1 = [pessoa1.nome , pessoa1.nome.length , pessoa1.idade , pessoa1.profissao , pessoa1.profissao.length]
// let arr2 = [pessoa2.nome , pessoa2.nome.length , pessoa2.idade , pessoa2.profissao , pessoa2.profissao.length]
// return console.log(arr1) + console.log(arr2)
// }
// imprime(pessoa1,pessoa2)