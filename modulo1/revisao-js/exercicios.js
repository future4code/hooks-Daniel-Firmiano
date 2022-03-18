// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length
}
// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function compararNumero(a, b){
        return a - b;
    }
    return array.sort(compararNumero)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 === 0) {
            arrayPares.push(array[index]);
        }
    }
    return arrayPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   let numero = []
   for (let i = 0; i < array.length; i++ ){
       if(array[i] % 2 === 0)
       numero.push(array[i]**2)
   }
   return numero
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = -Infinity
    for(let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let maiorNumero
let menorNumero
if (num1 > num2){
    maiorNumero = num1
    menorNumero = num2
}else{
    maiorNumero = num2
    menorNumero = num1
}

const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
const diferenca = maiorNumero - menorNumero

return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let num8 = []
   for(let i = 0; num8.length < n; i ++ ){
   if(i % 2 === 0){
       num8.push(i)
   }
}
   return num8
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    const esc = "Escaleno"
    const iso = "Isósceles"
    const equi = "Equilátero"
    if(ladoA === ladoB && ladoA ===  ladoC) {
        return equi
    } else if (ladoA !== ladoB && ladoA !==  ladoC && ladoB !== ladoC) {
        return esc
    } else {
        return iso
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
//     const arrayOrdenada = array.sort()
//     let segundoMaiorNum = arrayOrdenada.length -1
//     let penultimoMaiorNum = arrayOrdenada[1]
//     let meuArray = [segundoMaiorNum, penultimoMaiorNum]
//    return meuArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoasAnonimas = {...pessoa, nome: "ANÔNIMO"}
   return pessoasAnonimas
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const alturaCert = 1.5
   const idadeMin = 14
   const idadeMax = 60
   let autorizado = pessoas.filter((item) =>{
       return !(item.altura < alturaCert || item.idade <=
        idadeMin || item.idade > idadeMax)
   })
   return autorizado
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}