module.exports = (sequelize, dataTypes) => {
    let alias = "Generos";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        name: {
            type: dataTypes.STRING
        }
                };

    
    let config = {
                    tableName: "generos",
                    timestamps: false
                };
    const Genero = sequelize.define(alias, cols, config);    
return Genero;
}
