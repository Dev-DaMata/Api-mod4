import bd from "../database/bd.js"

export default class UsuarioModel{

    //metodo para inserção do usuario no banco de dados 
    insereUsuario = (usuario)=>{
        bd.usuario.push(usuario)
    }

    //metodo para pegar todos os usuarios do banco de dados 
    pegaUsuario = ()=>{
        return bd.usuario
    }

    //metodo para pegar um usuario do banco de dados 
    pegaUmUsuario = (email)=>{
        return bd.usuario.filter(usuario=>usuario.email===email)
    }

    //metodo para deletar um usuario
    deletaUsuario = (email)=>{
        console.log(bd.usuario);
        bd.usuario = bd.usuario.filter(usuario=>usuario.email!==email).splice(email)
    }

    //metodo para atualizar o usuario
    atualizaUsuario = (email, novosDados)=>{
        const newBD = bd.usuario.filter(usuario=>usuario.email!=email).splice(email)
        newBD.push(novosDados)
        bd.usuario = newBD
    }
}