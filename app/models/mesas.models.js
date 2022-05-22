

module.exports=(sequelize,Sequelize) =>{
    const Mesas=sequelize.define("Mesas",{
        mesaId: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombreMesa:{
            type: Sequelize.STRING
        },
        posicion:{
            type:Sequelize.STRING
        },
        piso:{
            type:Sequelize.INTEGER,
            defaultValue:1,

        },
        capacidad:{
            type:Sequelize.INTEGER,
            defaultValue:1
        }

    });

    return Mesas;
};

