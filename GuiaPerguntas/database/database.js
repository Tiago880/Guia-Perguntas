const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', '0463',{
    host:'localhost',
    dialect: 'mysql'
});

module.exports = connection;