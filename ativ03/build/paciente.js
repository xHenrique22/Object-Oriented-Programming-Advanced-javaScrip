"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(nome, dataInternacao, sexo, idade) {
        this.nome = nome;
        this.dataInternacao = dataInternacao;
        this.sexo = sexo;
        this.idade = idade;
    }
    Paciente.prototype.getNome = function () {
        return this.nome;
    };
    Paciente.prototype.getData = function () {
        return this.dataInternacao;
    };
    Paciente.prototype.getSexo = function () {
        return this.sexo;
    };
    Paciente.prototype.getIdade = function () {
        return this.idade;
    };
    return Paciente;
}());
exports.Paciente = Paciente;
