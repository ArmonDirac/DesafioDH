var router = express.Router();
let generosController = require ('../controllers/generosController');

router.get('/generos', generosController.listarGeneros);


module.exports = rutaGeneros;