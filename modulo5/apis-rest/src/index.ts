import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

enum USER_ENUM {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
  }

type User = {
    id: number,
    name: string,
    email: string,
    type: USER_ENUM,
    age: number
  }

let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]
// Ex: 1
// a) método GET
// b) ("/users")
app.get("/users", (req: Request, res: Response) => {
    try {
        let type = req.query.type as string
        let search = req.query.search as string
    
        if (type) {
          type = type.toUpperCase()
    
          if (type in USER_ENUM) {
            const result = users.filter(user => user.type === type)
            return res.status(200).send(result)
          }
    
          throw new Error("Erro")
        }
    
        if (search) {
          search = search.toUpperCase()
    
          const result = users.filter(
            user => user.name.toUpperCase().includes(search)
          )
    
          console.log(result, search)
    
          if (result.length === 0) {
            return res.status(204).send("Usuário não encontrado")
          }
          
          return res.status(200).send(result)
        }
    
        res.status(200).send(users)
      } catch (err) {
        res.status(400).send(err.message)
      }
})