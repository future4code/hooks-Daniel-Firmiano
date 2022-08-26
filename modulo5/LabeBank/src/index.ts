import express,{Express} from "express";
import cors from "cors";
import {AddressInfo} from "net";

const app:Express = express();

app.use(express.json())
app.use(cors());

app.post("/usuario/novo", (req: Request, res: Response) => {
    try{
        
    }catch (error) {

    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log("Rodando no server 3003")
    }
})