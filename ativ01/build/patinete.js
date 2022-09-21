"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patinete = void 0;
var Patinete = /** @class */ (function () {
    function Patinete(_a) {
        var qtdRodas = _a.qtdRodas, cor = _a.cor, tamanho = _a.tamanho;
        this.qtdRodas = qtdRodas;
        this.cor = cor;
        this.tamanho = tamanho;
    }
    Patinete.prototype.movimento = function () {
        console.log('O patinete está em movimento');
    };
    return Patinete;
}());
exports.Patinete = Patinete;
