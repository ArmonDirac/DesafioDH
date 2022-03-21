let db = require ("../database/models");


let cancionesController = {

    crear: function (req,res) {
        db.Genero.findAll()
            .then(function(generos) {
                return res.render("creacionCanciones", {generos:generos})
            })
    },
    guardar: function (req,res) {
        db.Cancion.create({
            titulo: req.body.titulo,
            duracion:req.body.duracion,
            created_at:req.body.created_at,
            updated_at:req.body.updated_at,
            genero_id:req.body.genero,
        });
        res.redirect("/canciones");

    },
    listar: function(req,res) {
        db.Cancion.findAll()
        .then(function(canciones){
            res.render("listadoCanciones", {peliculas:peliculas})

        })
    },
    detalle: function (req,res) {
        db.Cancion.findByPk(req.params.id, { include: [{association:"genero"}, {association:"Artista"}]})
            .then(function(cancion) {
                res.render("detalleCancion", {cancion:cancion})
            })
    },
    editar: function (req,res){
        let pedidoCancion = db.Cancion.findByPk(rep.params.id);

        let pedidoGeneros = db.Genero.findAll();

        Promise.all([pedidoCancion, pedidoGeneros])
            .then(function([pelicula,generos]){
                res.render("editarCancion", {cancion:cancion, generos:generos})

            })

    } ,
    actualizar: function (req,res){
        db.Cancion.update({
            titulo: req.body.titulo,
            duracion:req.body.duracion,
            created_at:req.body.created_at,
            updated_at:req.body.updated_at,
            genero_id:req.body.genero,
        },{
            where: {
                id: req.params.id
            }
        } );
        res.redirect("/canciones/"+ req.params.id);

    },
    borrar: function (req,res) {
        db.Cancion.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect("/canciones");
    }
}
module.exports = cancionesController;
