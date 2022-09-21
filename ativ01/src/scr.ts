import { Patinete } from "./Patinete";
import Prompt = require('prompt-sync');

const prompt = Prompt();

const qtdRodas = Number(prompt('Digite a quantidade de rodas do patinete: '));
const cor = prompt('Digite a cor do patinete: ');
const tamanho = Number(prompt('Digite o tamanho do patinete: '));

const patinete: Patinete = new Patinete({qtdRodas,cor,tamanho});

console.log(`\nO patinete tem ${patinete.qtdRodas} rodas`);
console.log(`O patinete tem a cor ${patinete.cor}`);
console.log(`O patinete tem ${patinete.tamanho} de tamanho`);
