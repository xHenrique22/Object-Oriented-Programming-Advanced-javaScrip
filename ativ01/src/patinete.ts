interface NewPatinete{
    qtdRodas: number;
    cor: string;
    tamanho: number;
}

class Patinete{
    public qtdRodas: number;
    public cor: string;
    public tamanho: number;

    constructor({qtdRodas, cor, tamanho}: NewPatinete){
        this.qtdRodas = qtdRodas;
        this.cor = cor;
        this.tamanho = tamanho;
    }
}
export{Patinete};