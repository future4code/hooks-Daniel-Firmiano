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
    // const numPares = array.filter(par => par % 2 === 0)
    // const elevado = numPares.map(function(item, indice){
    //     return Math.pow(item, 2);
    // })
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
   
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
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