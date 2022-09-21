"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Patinete_1 = require("./Patinete");
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var qtdRodas = Number(prompt('Digite a quantidade de rodas do patinete: '));
var cor = prompt('Digite a cor do patinete: ');
var tamanho = Number(prompt('Digite o tamanho do patinete: '));
var patinete = new Patinete_1.Patinete({
    qtdRodas: qtdRodas,
    cor: cor,
    tamanho: tamanho
});
console.log("\nO patinete tem ".concat(patinete.qtdRodas, " rodas"));
console.log("O patinete tem a cor ".concat(patinete.cor));
console.log("O patinete tem ".concat(patinete.tamanho, " de tamanho"));
patinete.movimento;
