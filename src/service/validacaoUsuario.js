let id = 0

class ValidaUsuario {
    constructor(nome, email, senha){
        this.id = id++
        this.nome = nome,
        this.email = this.validaEmail(email)
        this.senha = this.validaSenha(senha)
    }
    // metodo de validação de senha
    validaSenha = (senha)=>{
        // if(senha){
        //     if(senha.length >= 6){
        //         return senha
        //     }else{
        //         throw new Error("A senha precisa ter 6 ou mais caracteres")
        //     }
        // }else{
        //     throw new Error("Insira uma senha com 6 ou mais caracteres")
        // }
        if(senha.length >= 6){
            return senha
        }else if(senha !== senha || senha.length >=6){
            throw new Error("A senha precisa ter 6 ou mais caracteres")
        }else{
            throw new Error("Insira uma senha com 6 ou mais caracteres")
        }
    }

    //metodo de validação de email 
    validaEmail = (email)=>{
        if(email){
            if(email.indexOf("@") > 0 && email.indexOf("gmail.com") > 0){
                return email
            }else{
                throw new Error("Email inválido ")
            }
        }else{
            throw new Error("Insira um email ")
        }
    }
}

export default ValidaUsuario