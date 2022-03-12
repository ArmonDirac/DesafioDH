var router = express.Router();
var cancionesController = require ('../controllers/cancionesController');

router.get('/canciones', cancionesController.listarCanciones);
router.post('/canciones', cancionesController.crearCanciones);
router.get('/canciones/:id?', cancionesController.mostrarCanciones);
router.put('/canciones/:id?', cancionesController.editarCanciones);
router.del('/canciones/:id?', cancionesController.eliminarCanciones);

module.exports = rutaCanciones;