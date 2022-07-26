import UsuarioModel from "../models/usuarios-model.js"
import ValidaUsuario from "../service/validacaoUsuario.js"

//função que vai receber a instancia do servidor como parametros
//e vai agrupar todos metodos que representam as rotas

const usuarioController = (app)=>{
    //rotas com mesmo caminho ('/usuario'), mas com verbos diferentes 
    // são rotas diferentes

    //cria uma instancia do classe model usuario que sera usada para todas rotas
    const modelUsuario = new UsuarioModel()

    app.get('/usuario', (req, res)=>{

        const todosUsuarios = modelUsuario.pegaUsuario()

        //responde a requisição usando o metodo para pegar todos ususarios
        res.status(200).json(
            {
                "usuario" : todosUsuarios,
                "erro": false
            }
        )
    })
    //Rota para pegar um dado especifico baseado n o parametro enviado
    app.get('/usuario/email/:email', (req, res)=>{
        //recebe o parametro rota
        const email = req.params.email

        /* chama o metodo que faz a busca no bd usando o parametro
        como filtro */
        const usuario = modelUsuario.pegaUmUsuario(email)

        //responde a requisição usando o metodo para pegar todos usuarios
        res.status(200).json(
            {
                "usuario": usuario,
                "erro": false
            }
        )
    })

    app.post('/usuario', (req, res)=>{
        const body = req.body
        try{
            // cria a instancia de usuario com os dados recebidos da requisição
            const novoUsuario = new ValidaUsuario(body.nome, body.email, body.senha)

            //chama o metodo para inserir o usuario no banco de dados 
            modelUsuario.insereUsuario(novoUsuario)

            //retorna um json com uma mensagem e com usuario inserido
            res.status(200).json(
                {
                    "msg": "usuario inserido com sucesso",
                    "usuario": novoUsuario,
                    "erro": false
                }
            )
        }catch (error){
            res.status(404).json({
                "msg" : error.message,
                "erro": true
            })
        }
    })
    app.delete('/usuario/email/:email', (req, res)=>{
        const email = req.params.email
        modelUsuario.deletaUsuario(email)

        res.status(200).json(       
            {
                "msg": `Usuario com o email ${email} foi removido com sucesso!`,
                "erro": false
            }
        )
    })

    app.put('/usuario/email/:email', (req, res)=>{
        const body = req.body
        const email = req.params.email
        
        try{
            const novosDados = new ValidaUsuario(body.nome, body.email, body.senha)
            modelUsuario.atualizaUsuario(email, novosDados)
            res.status(200).json(
                {
                    "msg": `Usuario com email ${email} atualizado com sucesso`,
                    "usuario": novosDados,
                    "erro": false
                }
            )
        }catch(erro){
            res.status(404).json(
                {
                    "msg": erro.message,
                    "erro": true
                }
            )
        }

    })
}

// exportando a funcão
export default usuarioController