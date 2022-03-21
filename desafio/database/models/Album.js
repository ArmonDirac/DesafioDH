module.exports = function(sequelize, dataTypes) {
    let alias = "Album";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        duracion: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: "albumes",
        timestamps:false
    };
    let Album = sequelize.define(alias,cols,config);
    return Album;

}