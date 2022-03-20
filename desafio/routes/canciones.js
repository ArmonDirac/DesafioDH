var express = require ('express');
var router = express.Router();
var cancionesController = require ("../controllers/cancionesController.js");

router.get('/', cancionesController.list);

router.get('/:id', cancionesController.detail);

router.get('/add', cancionesController.add);

router.post('/add', cancionesController.create);

router.get('/edit/:id', cancionesController.edit);

router.post('/edit/:id', cancionesController.edit);

router.put('/update/:id', cancionesController.update);

module.exports = router;