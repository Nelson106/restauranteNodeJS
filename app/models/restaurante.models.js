

  
module.exports = (sequelize, Sequelize) => {
    const Restaurante = sequelize.define("Restaurante", {
        direccion: {
            type: Sequelize.STRING
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        restauranteId: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        }
    });
    return Restaurante;
};


