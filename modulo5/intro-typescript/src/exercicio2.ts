function imprimeTresCoresFavoritas(cor1:string, cor2: string, cor3: string ): string [] {
    // const cor1: string = prompt("Insira sua primeira cor favorita")
    // const cor2: string = prompt("Insira sua segunda cor favorita")
    // const cor3: string = prompt("Insira sua terceira cor favorita")
    const arrayDeCores = []
    arrayDeCores.push(cor1, cor2, cor3)
    return arrayDeCores
 }
 console.log(imprimeTresCoresFavoritas("vermelho", "verde", "preto"))