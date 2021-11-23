

module.exports = function (application) {

    application.get('/noticias', (request, response) => {


        const connection = application.config.dbConnection();
        const noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function(erro, result){
            response.render("noticias/noticias", {noticias : result });
        });

        
    });

};