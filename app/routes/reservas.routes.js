module.exports = app => {
    const reserva = require("../controllers/reservadao.controller.js");
    var router = require("express").Router();
    router.post("/", reserva.create);
    router.get("/", reserva.findAll);
    router.get("/filter/:restauranteId/:fecha/:clienteId", reserva.filter);
    router.get("/:id", reserva.findOne);

    router.post('/fecha',reserva.filterFecha);
    router.post('/restaurante',reserva.filterRestaurante);
    router.post('/cliente',reserva.filterCliente);

    router.put("/:id", reserva.update);
    router.delete("/:id", reserva.delete);
    app.use('/api/reservas', router);
};
