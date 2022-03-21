var express = require ('express');
var router = express.Router();
var cancionesController = require ("../controllers/cancionesController");

//Creacion de canciones de Gerar

router.get("/crear", cancionesController.crear);

router.post("/crear", cancionesController.guardar);

//Lectura de canciones de Gerar

router.get("/",cancionesController.listar);

//Detalle de canciones de Gerar

router.get("/:id",cancionesController.detalle);

//Actualizacion

router.get("/editar/:id", cancionesController.editar);

router.put("/editar/:id", cancionesController.actualizar);

//Borrado

router.delete("borrar/:id", cancionesController.borrar);


module.exports = router;