const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const { request } = require("express");


app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

var DB = {
    games: [
        {
            id: 23,
            title: "Call of duty",
            year: 2019,
            price: 60
        },

        {
            id: 32,
            title: "Sea of thieves",
            year: 2018,
            price: 40
        },

        {
            id: 2,
            title: "Minecraft",
            year: 2012,
            price: 20
        },


    ]
}

app.get("/games", (request, response) => {
    response.statusCode = 200;
    response.json(DB.games)
});

app.get("/game/:id", (request, response) => {
    if(isNaN(request.params.id)){
        response.sendStatus(400);
    }else {
        
        let id = parseInt(request.params.id);
        let game = DB.games.find(g => g.id == id);
        
        if(game != undefined){
            
            response.statusCode =200;
            response.json(game);
                 
        } else {
            response.sendStatus(404);
        }
    }
});


app.post("/game", (request, response) => {
    var {title, price, year} = request.body;
    DB.games.push({
        id: 2343,
        title,
        price,
        year,
    });
    response.sendStatus(200);
})


app.delete("/game/:id",(req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id == id);

        if(index == -1){
            res.sendStatus(404);
        }else{
            DB.games.splice(index,1);
            res.sendStatus(200);
        }
    }
});

app.put("/game/:id",(req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){

            var {title, price, year} = req.body;

            
            if(title != undefined){
                game.title = title;
            }

            if(price != undefined){
                game.price = price;
            }

            if(year != undefined){
                game.year = year;
            }
            
            res.sendStatus(200);

        }else{
            res.sendStatus(404);
        }
    }

});




app.listen(45678, () => {
    console.log("Api rodando");
});