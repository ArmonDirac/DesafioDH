let db = require ("../database/models");
let Canciones = require ("../database/models/Cancion.js");

let cancionesController = {
    list:   function(req, res, next) {
        db.Canciones.findAll().then (function(canciones){res.render("listadoDeCanciones",{canciones:canciones}) })
    },
    detail:   function(req, res, next) {
        db.Canciones.findByPk(req.params.id).then (function(canciones){res.render("detalleDeCanciones",{canciones:canciones}) })
    },
    add:   function(req, res, next) {
        res.render("crearCanciones");
    },
    create:   function(req, res, next) {
        db.Canciones.create(
            {
            titulo:req.body.titulo,
            duracion:req.body.duracion,
            genero:req.body.genero,
            album:req.body.album,
            artista:req.body.artista
            }
            );
    res.redirect("/canciones")},

    edit:   function(req, res, next) {
        db.Canciones.findByPk(req.params.id).then (function(canciones){res.render("editarCancion",{canciones:canciones}) })
    },
    update:   function(req, res, next) {
        db.Canciones.update(
            {
            titulo:req.body.titulo,
            duracion:req.body.duracion,
            genero:req.body.genero,
            album:req.body.album,
            artista:req.body.artista
            },{
                where: {
                    id: req.params.id
                }
            })
            res.redirect("/canciones/update/" + req.params.id)
    }}


module.exports = cancionesController;
