module.exports = function (sequelize, dataTypes) {
    let alias = "Cancion";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING
        },
        duracion: {
            type: dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        genero_id: {
            type: dataTypes.INTEGER
        },
        album_id: {
            type: dataTypes.INTEGER
        },        
        artista_id: {
            type: dataTypes.INTEGER
        }
        };

    let config = {
        tableName: "canciones",
        timestamps: false
    };
    
    let Cancion = sequelize.define(alias, cols, config);

    Cancion.associate = function(models) {
        Cancion.belongsTo(models.Genero, {
            as: "generos",
            foreignKey: "genero_id",
        });
        Cancion.belongsTo(models.Artista, {
        as: "artista",
        foreignKey: "artista_id",

        });
}
    return Cancion;

}
