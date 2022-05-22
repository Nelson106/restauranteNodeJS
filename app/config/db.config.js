<<<<<<< HEAD
db.config 

=======
>>>>>>> ce37ef5b63df3f716167836d99f90c0b6e0d4c5a
module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "postgres",
    PORT: 5432,
    DB: "restaurante",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};