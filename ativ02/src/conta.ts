interface NewConta{
    nome: string;
    valor: number;
    cpf: number;
}

class Conta{
    private nome: string;
    private valor: number;
    private cpf: number;

    constructor({nome, valor, cpf}: NewConta){
        this.nome = nome;
        this.valor = valor;
        this.cpf = cpf;
    }

    public getNome(): string{
        return this.nome;
    }
    public getQuantia(): number{
        return this.valor;
    }
    public getCpf(): number{
        return this.cpf;
    }
}
export{Conta};