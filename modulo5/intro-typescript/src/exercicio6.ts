function doisNumeros(num1: number, num2: number): any {
    let soma: number = num1 + num2;
    let sub: number = num1 - num2;
    let mult: number = num1 * num2;
    let div: number = num1 / num2;
    let maiorNumero: number

    if ( num1 > num2 ) {
        maiorNumero = num1
    } else {
        maiorNumero = num2
    }

    return `A soma é: ${soma},a subtração é: ${sub}, a multiplicação é: ${mult}, a divisão é: ${div}, e o maior número é: ${maiorNumero}`
}
console.log(doisNumeros(5, 10))
