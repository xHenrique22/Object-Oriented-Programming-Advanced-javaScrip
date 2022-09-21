import { Paciente } from "./Paciente";
const paciente: Paciente = new Paciente('Henrique', '28/12/2020', 'Masculino', 20);

console.clear();
console.log(`Nome do paciente: ${paciente.getNome()}`);
console.log(`Sexo do paciente: ${paciente.getSexo()}`);
console.log(`Data de internação: ${paciente.getData()}`);
console.log(`Idade do paciente: ${paciente.getIdade()}`);