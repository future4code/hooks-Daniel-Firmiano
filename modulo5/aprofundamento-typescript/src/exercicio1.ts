// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

let minhaString: string = "daniel"; 

// Da um erro , Type 'number' is not assignable to type 'string'.

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

let meuNumero: number | string = "daniel"

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const personOne: pessoa = {
    nome: "Daniel",
    idade: 27,
    corFavorita: "Preto"
}

const personTwo: pessoa = {
    nome: "Douglas",
    idade: 28,
    corFavorita: "vermelho"
}

const personThree: pessoa = {
    nome: "Ingrid",
    idade: 28,
    corFavorita: "azul"
}

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.

enum CoresArcoIris {
    VERMELHA = "vermelha",
    LARANJA = "laranja",
    AMARELA = "amarela",
    VERDE = "verde",
    AZUL = "azul", 
    AZULESCURO ="azul escuro",
    VIOLETA = "violeta"
}

const personFour: pessoa = {
    nome: "Ingrid",
    idade: 28,
    corFavorita: CoresArcoIris.AZUL
}
