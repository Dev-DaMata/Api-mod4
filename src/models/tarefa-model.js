import bd from "../database/bd.js";

export default class TarefaModel{

    //metodo para inserção da tarefa no banco de dados
    insereTarefa = (tarefa)=>{
        bd.tarefa.push(tarefa)
    }

    //metodo para pegar todas tarefas do banco de dados
    pegaTarefas = ()=>{
        return bd.tarefa
    }

    //metodo para pegar uma tarefa do banco de dados
    pegaUmaTarefa = (titulo)=>{
        return bd.tarefa.filter(tarefa=>tarefa.titulo===titulo)
    }

    //metodo para deletar uma tarefa do banco de dados 
    deletaTarefa = (titulo)=>{
        const newBD = bd.tarefa.filter(tarefa=>tarefa.titulo!==tarefa)
        bd.tarefa = newBD
    }

    //metodo para atualizar um tarefa no banco de dados 
    atualizaTarefa = (titulo, novosDados)=>{
        const newBD = bd.tarefa.map(tarefa=>{
            if(tarefa.titulo === titulo){
                return{
                    "id": tarefa.id,
                    "titulo": novosDados.titulo || tarefa.titulo,
                    "descrição": novosDados.descrição || tarefa.descrição,
                    "status": novosDados.status || tarefa.status,
                    "dataDaCriacao": tarefa.dataDaCriacao
                }
            }
            return tarefa
        })
        bd.tarefa = newBD
    }



}