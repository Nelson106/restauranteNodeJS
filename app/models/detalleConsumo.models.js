module.exports = (sequelize, Sequelize) => {
    const DetalleConsumo = sequelize.define("DetalleConsumo", {
        detalleConsumoId: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        productoId: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        cantidad: {
            type: Sequelize.BIGINT,
            allowNull: false
        }
    });
    return DetalleConsumo;
};


