
module.exports = function(application){

    application.get('/formulario', (request, response) => {
    response.render("admin/form");
});

application.post('/noticias/salvar', (request, response) => {
    
    const noticia = request.body;


        const connection = application.config.dbConnection();
        const noticiasModel = new application.app.models.NoticiasDAO(connection);
        

        noticiasModel.salvarNoticia(noticia, function(erro, result){
           
            response.redirect('/noticias');
        });
});
};
