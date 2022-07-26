let id = 0

class ValidaTarefa{
    constructor(titulo, descricao, status){
        this.id = id++
        this.titulo = titulo
        this.descricao = descricao 
        this.status = this.validaStatus(status)
        this.dataCriacao = new Date()
    }

    validaStatus = (status)=>{
        const statusValido = ["a fazer", "fazendo", "concluido"]
        if(statusValido.indexOf(status)<0){
            throw new Error("Status invalido. Status deve ser: a fazer, fazendo, concluido")
        }else{
            return status
        }
    }
}

export default ValidaTarefa