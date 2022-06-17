module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define("Producto", {
        productoId: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        precioVenta: {
            type: Sequelize.BIGINT,
            allowNull: true
        }
    });
    return Producto;
};


