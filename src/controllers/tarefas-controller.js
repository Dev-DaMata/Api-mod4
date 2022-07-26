
const tarefaController = (app)=>{
    app.get('/afazer', (req, res) =>{
        res.send('a fazer:')
    })
    
    app.get('/fazendo', (req, res)=>{
        res.send('fazendo:')
    })
    
    app.get('/feito', (req, res)=>{
        res.send("feito:")
    })
    
}

export default tarefaController