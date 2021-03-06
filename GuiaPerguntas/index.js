const {
    response,
    request
} = require('express');
const express = require('express') //importanto modulo do express
const app = express(); // criando uma instancia do express
const bodyParser = require("body-parser");
const connection = require('./database/database');
const perguntaModel = require('./database/Pergunta');
const Pergunta = require('./database/Pergunta');
const Resposta = require("./database/Resposta");



connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com banco de dados")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (request, response) => {
    Pergunta.findAll({
        raw: true,
        order: [
            ['id', 'DESC']
        ]
    }).then(perguntas => {
        response.render("index", {
            perguntas
        });
    });
});


app.get("/perguntar", (request, response) => {
    response.render("perguntar");
});

app.post("/salvarpergunta", (request, response) => {
    let titulo = request.body.titulo;
    let descricao = request.body.descricao;

    Pergunta.create({
        titulo,
        descricao
    }).then(() => {
        response.redirect("/");
    });

});

app.get("/pergunta/:id", (request, response) => {
    let id = request.params.id;
    Pergunta.findOne({
        where: {
            id: id
        }
    }).then(pergunta => {
            if(pergunta != undefined){

                Resposta.findAll({
                    where: {perguntaId: pergunta.id},
                    order: [
                        ['id', 'DESC']
                    ]
                }).then((respostas) => {

                    response.render("pergunta", {
                        pergunta,
                        respostas
                    });
                });
              
            } else {
                response.redirect("/");
            }
    });
});

app.post("/responder", (request, response) => {
    let corpo = request.body.corpo;
    let perguntaId = request.body.pergunta;
    Resposta.create({
        corpo: corpo,
        perguntaId
    }).then(() => {
        response.redirect("/pergunta/"+perguntaId);
    });
});

app.listen(8080, () => {
    console.log("APP rodando")
});