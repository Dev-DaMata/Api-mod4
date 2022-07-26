const usuariosController = (app)=>{
    app.get('/usuarios', (req, res) =>{
        res.send('o usuario entrou bonito!')
    })
    app.post('/usuarios', (req, res)=>{
        res.send('Rota POST de tarefa ativada: tarefa adicionada ao banco de dados')
    })
}

export default usuariosController
