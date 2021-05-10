// importando o arquivo calculadora
// e armazenando em uma constante 
const calculadora= require("./calculadora");

console.log(calculadora.sub(10,80));
calculadora.nome = "sua calculadora";
console.log(calculadora.nome);
