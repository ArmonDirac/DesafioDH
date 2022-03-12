let cancionesController = {
    listarCanciones: function (req,res) {
        res.send("Bienvenido a listar producto");
    },
    crearCanciones: function (req,res) {
        res.send("Bienvenido a crear producto");
    },
    mostrarCanciones: function (req,res) {
        res.send("Bienvenido a mostrar producto");
    },
    editarCanciones: function (req,res) {
        res.send("Bienvenido a editar producto");
    },
    eliminarCanciones: function (req,res) {
        res.send("Bienvenido a mostrar producto");
    }
};
module.exports = cancionesController;
