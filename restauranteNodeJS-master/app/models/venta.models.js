module.exports = (sequelize, Sequelize) => {
    const Venta = sequelize.define("Venta", {
    cliente: {
    type: Sequelize.STRING
    },
    total: {
    type: Sequelize.BIGINT
    },
    factura: {
    type: Sequelize.STRING
    },
    idVenta: {
    type: Sequelize.BIGINT,  
    primaryKey: true,
    autoIncrement: true
    }
  });
    return Venta;  
};