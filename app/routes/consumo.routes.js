
module.exports = app => {
    const consumo = require("../controllers/consumodao.controller.js");
    var router = require("express").Router();
    //rutas de consumo 
    router.post("/", consumo.create);
    router.put("/:consumoId", consumo.update)
    router.get("/", consumo.findAll);
    router.delete("/:consumoId", consumo.delete);
    router.get("/:consumoId", consumo.findOne);
    //rutas para filtros
    router.get("/mesa/:mesaId", consumo.findAllByMesas);
    router.get('/cliente/:clienteId', consumo.findAllByCliente);
    app.use('/api/consumo', router);
};

