
module.exports = app => {
    const consumo = require("../controllers/consumodao.controller.js");
    var router = require("express").Router();
    //rutas de consumo 
    router.post("/", consumo.create);
    router.put("/:consumoId", consumo.update)
    router.get("/", consumo.findAll);
    router.delete("/:consumoId", consumo.delete);
    router.get("/:consumoId", consumo.findOne);
    
    router.get("/consumoCliente/:clienteId", consumo.getConsumoCliente);
    router.post("/consumoEstado/", consumo.getConsumoAbierto);
    router.post("/consumoEstadoCliente/", consumo.getConsumoAbiertoCliente);
    //rutas para filtros
    //router.post('/mesa', consumo.filterMesa);
    //router.post('/cliente', consumo.filterCliente);
    app.use('/api/consumo', router);
};

