export class Cliente{
    id: string;
    cep: string;
    cpf : string;
    nome: string;
    endereco: string;
    grupo: string;
    username: string;
    deficiencia: string;
    telefone: string;

    setData(objFirebase : any){
        this.cep = objFirebase.cep;
        this.cpf = objFirebase.cpf;
        this.nome = objFirebase.nome;
        this.endereco = objFirebase.endereco;
        this.grupo = objFirebase.grupo;
        this.username = objFirebase.username;
        this.deficiencia = objFirebase.deficiência;
        this.telefone = objFirebase.telefone;
    }

}


