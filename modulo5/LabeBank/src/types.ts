 
 export type Conta = {
    name: string,
    CPF: string,
    dateOfBirth: Date,
    balance: number,
    statement: Transação[]
 }
export type Transação = {
    value: number,
    date: Date,
    description: string
 }

 