module.exports=(sequelize,Sequelize) =>{
    const Reservas=sequelize.define("Reservas",{
        ReservaId: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },

        fecha: {
            type: Sequelize.DATE,
            allowNull:false
        },

        cantidad: {
            type: Sequelize.BIGINT,
            defaultValue: 1,
            allowNull: false
        },

        rangoHora: {
            type: Sequelize.STRING, //Foramto HH-HH,
            allowNull: false
        }

    });

    return Reservas;
};

