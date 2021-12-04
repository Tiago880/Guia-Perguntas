
module.exports = function(application){

    application.get('/formulario', (request, response) => {
    response.render("admin/form");
});

application.post('/noticias/salvar', (request, response) => {
    
    const noticia = request.body;

    console.log(noticia);

        request.assert('titulo','Titulo é obrigatório').notEmpty();
        request.assert('resumo','Resumo é obrigatório').notEmpty();
        request.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
        request.assert('autor','Autor é obrigatório').notEmpty();
        request.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
        request.assert('noticia','Noticia é obrigatório').notEmpty();


      var erros = request.validationErrors();

        if(erros){
            response.render("admin/formulario");
            return;
        }
        const connection = application.config.dbConnection();
        const noticiasModel = new application.app.models.NoticiasDAO(connection);
        

        noticiasModel.salvarNoticia(noticia, function(erro, result){
           
            response.redirect('/noticias');
        });
});
};
