import express,{Request,Response}from "express"

import cors from "cors"
import { todosUsuarios } from "./data"
import { todosPosts } from "./data"
const app = express()

app.use(express.json())
app.use(cors())


// Exercicio 1 

app.get("/criando", (req:Request ,res:Response) => {          
    res.status(200.).send("Exercicio intro-express")
})

// Exercicio 4

 app.get("/usuarios",(req:Request, res:Response)=>{
    const listaDosUsuarios = todosUsuarios.filter((user)=>{
        return user.id
    })
    res.status(200).send(listaDosUsuarios)
})
 
// Exercicio 6 
  // R: Criamos dentro da mesma pasta dos usuarios
  // para não deixar com muitos arquivos e facilitar o acessos as informações.
  // mas o ideal caso o projeto seja maior e fazer a separação.

// Exercicio 7 

app.get("/posts",(req:Request , res:Response) =>{
    const listaDosPosts = todosPosts.filter((post)=>{
        return post.userId
    })
    res.status(200).send(listaDosPosts)
})

// Exercicio 8 


app.get('/post/:userId', (req:Request, res:Response) =>{

    const idPostagens = req.params.userId 

     const postsFiltrado = todosPosts.filter((post)=>{
        return Number(idPostagens) === post.userId
     })
     
res.status(200).send(postsFiltrado)
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
    
});