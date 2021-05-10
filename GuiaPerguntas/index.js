const express = require('express');
const app = express();

// instale o bodyparser
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());


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
app.get("/",(req,res) => {
res.render("index");
});

app.get("/pergunte",(req,res)=>{
  res.render("perguntar");
});

app.post("/salvequest",(req,res)=>{
const titulo = req.body.titulo;
const descricao = req.body.descricao;
res.send("O titulo passado eh " + titulo + " E a descricao eh "+descricao);
});

app.listen(8080,() => {

});

console.log("ola");