const express = require('express');
const app = express();

// estou dizendo para o Express usar 
// o EJS como View engine
app.set('view engine', 'ejs');
// Todos os arquivos HTML são salvos e lidos 
// pelo express na pasta views


//Utilizar arquivos estáticos no express
app.use(express.static('public'));
// public é a pasta onde ficam os arquivos estáticos




//Quando coloca uma /: na rota, você
//está criando um parametro na rota
// req.params. atribui a uma constante
// o parametro digitado pelo usuario na rota
app.get("/:nome/:lang",(req,res) => {
const nome = req.params.nome;
const lang = req.params.lang;
const exibirMsg = false;

const produtos = [
  {nome: "Doritos", preco : 3.14},
  {nome : "Coca-cola", preco : 5},
  {nome: "Leite", preco : 1.45},
  {nome: "Carne", preco : 16},
  {nome: "RedBull", preco: 20}
]


res.render("index", {
  nome : nome ,
  lang : lang,
  empresa : "Guia do programador",
  inscritos: 8000,
  msg: exibirMsg,
  produtos: produtos

});
});

app.listen(8080,() => {
console.log("App rodando");
});