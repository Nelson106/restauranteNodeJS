module.exports = app => {
    const reserva = require("../controllers/reservadao.controller.js");
    var router = require("express").Router();
    router.post("/", reserva.create);
    router.get("/", reserva.findAll);
    router.get("/filter/:restauranteId/:fecha/:clienteId", reserva.filter);
    router.get("/:id", reserva.findOne);
    router.get('/restaurante/:id',reserva.filterRestaurante);
    router.get('/cliente/:id',reserva.filterCliente);
    router.put("/:id", reserva.update);
    router.delete("/:id", reserva.delete);
    app.use('/api/reservas', router);
};
