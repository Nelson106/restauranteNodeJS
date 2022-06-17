module.exports = (sequelize, Sequelize) => {
    const Consumo = sequelize.define("Consumo", {
        consumoId: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        mesaId: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        clienteId: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        estado: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        total: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        fechaCreacion: {
            type: Sequelize.DATE,
            allowNull: true
        },
        fechaCierre: {
            type: Sequelize.DATE,
            allowNull: true
        }
    });
    return Consumo;
};


