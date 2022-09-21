import { Conta } from "./conta";

const conta: Conta = new Conta({
    nome: 'Henrique',
    valor: 800,
    cpf: 12345678901
});
console.log(`Nome do usuário: ${conta.getNome()}`);
console.log(`Quantia na conta: R$ ${conta.getQuantia()}`);
console.log(`CPF do usuário: ${conta.getCpf()}`,"\n");