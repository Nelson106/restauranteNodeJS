const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
host: dbConfig.HOST,
dialect: dbConfig.dialect,
operatorsAliases: false,
port: dbConfig.PORT,
pool: {
max: dbConfig.pool.max,
min: dbConfig.pool.min,
acquire: dbConfig.pool.acquire,
idle: dbConfig.pool.idle
}
});
const db = {};
const d={};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Ventas = require("./venta.models.js")(sequelize,Sequelize);
db.Restaurante = require("./restaurante.models.js")(sequelize, Sequelize);
db.Mesas = require("./mesas.models.js")(sequelize, Sequelize);
db.Cliente = require("./cliente.models.js")(sequelize, Sequelize);

//Prueba reservas
db.Reservas = require("./reservas.models.js")(sequelize, Sequelize);

// un a a muchos 1 a N
//Restaurante va a tener muchas mesas
// se añade una clave RestauranteId a la tabla Mesas
db.Restaurante.hasMany(db.Mesas,{foreignkey:"restauranteId"});

// se añade una clave MesasId a la tabla Restaurante
db.Mesas.belongsTo(db.Restaurante);

//Prueba de relaciones con reserva
db.Reservas.belongsTo(db.Restaurante, {foreignkey: "restauranteId"});
db.Reservas.belongsTo(db.Mesas, {foreignkey: "mesaId"});
db.Reservas.belongsTo(db.Cliente, {foreignkey: "id"});
module.exports = db;