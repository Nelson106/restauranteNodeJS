module.exports=(sequelize,Sequelize) =>{
    const Reservas=sequelize.define("Reservas",{
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },

        fecha: {
            type: Sequelize.DATE,
           //allowNull:false
        },

        cantidad: {
            type: Sequelize.BIGINT,
            defaultValue: 1,
            //allowNull: false
        },

        horario: {
            type: Sequelize.STRING, 
            //allowNull: false
        }

    });

    return Reservas;
};

