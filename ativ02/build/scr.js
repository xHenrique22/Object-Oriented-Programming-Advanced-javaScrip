"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var conta_1 = require("./conta");
var conta = new conta_1.Conta({
    nome: 'Henrique',
    valor: 800,
    cpf: 12345678901
});
console.clear();
console.log("Nome do usu\u00E1rio: ".concat(conta.getNome()));
console.log("Quantia na conta: R$ ".concat(conta.getQuantia()));
console.log("CPF do usu\u00E1rio: ".concat(conta.getCpf()),"\n");
