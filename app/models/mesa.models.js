
module.exports = (sequelize, Sequelize) => {
    const Mesa = sequelize.define("Mesa", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        idDeRestaurante: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        posicionX: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        posicionY: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        numeroDePiso: {
            type: Sequelize.BIGINT,
            allowNull: false
        }
    });
    return Mesa;
};

