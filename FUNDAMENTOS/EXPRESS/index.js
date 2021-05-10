
const express = require("express"); // Importando o express
const app = express();              //Iniciando o express

// Criando uma rota
// Para qual URL essa rota aponta? "/"
// E oque a rota faz?
app.get("/",function(req,res){
  res.send("<h1>ROTA NUMERO 1 , BEM VINDO!</h1>")
// Em toda rota que se criar, tem
// que devolver uma resposta
// Para devolver uma resposta use
// res.send()
});

//Criando outra rota
//Parametros não obrigatório
//  Só colocar /:nomedoparametro?
//Depois disso você poderá acessar a rota sem passar 
// algum parametro
app.get("/blog/:artigo?",function(req,res){
let artigo = req.params.artigo;
if(artigo){
res.send("<h2>Artigo: " + artigo + "</h2> ");
}
else{
  res.send("<h2> BEm vindo ao meu blog </h2>");
}

});

//Criando outra rota
//query params -> localhost:4000/canal/youtube?canal=algumacoisa
// Quando o usuario enviar um query params,
// para podermos acessá-lo
app.get("/canal/youtube",function(req,res){
  const canal = req.query["canal"];
  if(canal){
    res.send("<h1>ROTA NUMERO 2 , BEM VINDO!</h1>" + canal)
  }else {
    res.send("Error")
  }
  
});

//Quando coloca uma /: na rota, você
//está criando um parametro na rota
// colocar -> localhost:4000/ola/algumacoisa
app.get("/ola/:nome/:empresa",function(req,res){
  let nome = req.params.nome;
  let empresa = req.params.empresa;
  res.send("<h1>Ola " + nome + " </h1> " + empresa);
});
/*
REQ -> DADOS ENVIADOS PELO USUARIO
RES -> RESPOSTA QUE VAI SER ENVIADA PARA O USUARIO
*/

app.listen(4000, function(erro){
  if(erro){
    console.log("ERROR");
  }
  else{

    console.log("SERVIDOR INICIADO");

  }
})