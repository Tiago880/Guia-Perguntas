

module.exports = function (app) {

    app.get('/noticia', (request, response) => {


        const connection = app.config.dbConnection();
        const noticiasModel = new app.app.models.NoticiasDAO(connection);
        
               noticiasModel.getNoticia(function(erro, result){
                response.render("noticias/noticia", {noticia : result });
            });

    
        
    });

};