class Paciente{
    private nome: string;
    private data: string;
    private sexo: string;
    private idade: number;

    constructor(nome: string, data: string, sexo: string, idade: number){
        this.nome = nome;
        this.data = data;
        this.sexo = sexo;
        this.idade = idade;
    }
    public getNome(): string{
        return this.nome;
    }
    public getData(): string{
        return this.data;
    }
    public getSexo(): string{
        return this.sexo;
    }
    public getIdade(): number{
        return this.idade;
    }
}
export{Paciente};