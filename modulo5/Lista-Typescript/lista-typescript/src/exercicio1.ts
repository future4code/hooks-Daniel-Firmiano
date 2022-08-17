// const nascimento = "19/12/1994"
// const separar = nascimento.split("/")
// console.log(separar)

function Separador (nome:string, dataDeNascimento:string):string {
    const nascimento = dataDeNascimento
    const separar = nascimento.split("/")
    return `Olá, me chamo ${nome}, nasci no dia ${separar[0]}, do mês ${separar[1]} do ano de ${separar[2]}`
}

console.log(Separador("Daniel", "19/12/1994"))