// *Criar uma const com nome http
// *Carregar o modulo http do nodejs na constante http
// Chamar a variavel http, criando um servidor
// Colocar a porta com listen , onde o servidor vai funcionar
// Para ver a resposta do servidor, crie uma funcao com request e Response
// Dê a resposta para o usuario resposta.end

const http = require("http");

http.createServer(function(resquisicao,resposta){
  resposta.end("<h1>Bem vindo ao site</h1><br/><h4>guia do programador</h4>");
}).listen(8181);

console.log("Server on");

