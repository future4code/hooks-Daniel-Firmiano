import express, { Request, response, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { afazeres, ToDo } from './data'

const app = express()

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log("rodando na porta 3003");
    }else{
        console.log("falha")
    }
})

app.get("/ping", (request: Request, response: Response) => {          
    response.send("Pong! 🏓")
})

 //EX-4
app.get("/afazeres/completed/:isCompleted" , (request:Request, response: Response) => {
    let verdade: any = request.params.isCompleted
        if(verdade === "true" ) {
            verdade = true
        }else if (verdade === "false") {
            verdade = false
        }else {
            response.send("Path param da tarefa deve ser 'true' ou 'false'")
        
    }
    const resultado = []

    for(let i = 0; i < afazeres.length; i++) {
        if ( afazeres[i].completed === verdade) {
            resultado.push(afazeres[i])
        }
    }

    response.send(resultado)
})


//Ex- 5

app.post("/afazeres", (req, res) => {
      const userId = req.body.userId
      const title = req.body.title
    
      const novo: ToDo = {
        userId,
        id: Date.now(),
        title,
        completed: false
      }
    
      afazeres.push(novo)
    
      res.send(afazeres)
    })

//Ex - 6
app.put("/afazeres/:id/completed", (req, res) => {

  const id = Number(req.params.id)

  for (let todo of afazeres) {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
  }

  res.send(afazeres)
})

// Ex - 7
app.delete("/afazeres/:id", (req, res) => {

  const id = Number(req.params.id)

  for (let i = 0; i < afazeres.length; i++) {
    if (afazeres[i].id === id) {
        afazeres.splice(i, 1)
    }
  }

  res.send(afazeres)
})

// Ex - 8