module.exports = (sequelize, Sequelize) => {
    const Consumo = sequelize.define("Consumo", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        estado: {
            type: Sequelize.STRING,
            enum:['abierto','cerrado'],
            default:'abierto',
            
        },
        total: {
            type: Sequelize.BIGINT,
            default:0
        },
        fechaCreacion: {
            type: Sequelize.DATE,
            
        },
        fechaCierre: {
            type: Sequelize.DATE,
            
        }
    });
    return Consumo;
};


