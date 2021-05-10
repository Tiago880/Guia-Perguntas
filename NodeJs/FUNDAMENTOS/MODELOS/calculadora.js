
let nome = "Minha Calculadora";
function div (a,b){
  return a/b;
}

function soma(a,b){
  return a+b;
}

function mult(a,b){
  return a*b;
}

function sub(a,b){
  return a-b;
}

// exportando arquivos,
// no caso, uma lista de objetos
module.exports = {
  soma,
  sub,
  div,
  mult,
  nome,
};