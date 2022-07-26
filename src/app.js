import  express  from "express";//forma atula dpara usar o express 
import tarefaController from "./controllers/tarefas-controller.js";
import usuariosController from "./controllers/usuarios-controller.js";



const app = express() // app vai ser o meu servidor, instanciando servidor 
const port = 3001 // escolha de prota, nos podemos escolher a que quisermos, muita gente usa a 3000

app.get('/hello', (req, res) =>{ // verbo http que vai usar para a rota (caminho, endpoint)
    res.send('Hello Word Joca')
    //res.json() envia um objeto json ao invés de uma string
})


tarefaController(app)
usuariosController(app)

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})

