

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
        posicionX:{
            type:Sequelize.INTEGER
        },
        posicionY:{
            type:Sequelize.INTEGER
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

