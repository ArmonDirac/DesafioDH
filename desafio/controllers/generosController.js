let db = require ("../database/models");

let generosController = {
    list:   function (req, res, next) {
        db.Generos.findAll(). then (function (generos){res.render("listadoDeGeneros",{generos:generos}) })
    }
}
module.exports = generosController;
