"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paciente1 = require("./Paciente");
var paciente = new Paciente1.Paciente('Henrique', '28/12/2020', 'Masculino', 20);
console.clear();
console.log("Nome do paciente: ".concat(paciente.getNome()));
console.log("Sexo do paciente: ".concat(paciente.getSexo()));
console.log("Data de interna\u00E7\u00E3o: ".concat(paciente.getData()));
console.log("Idade do paciente: ".concat(paciente.getIdade()));
