module.exports = app => {
    const detalleConsumo = require("../controllers/detalleConsumodao.Controller.js");
    var router = require("express").Router();
    //rutas de detalleConsumo 
    router.post("/", detalleConsumo.create);
    router.put("/:detalleConsumoId", detalleConsumo.update)
    router.get("/", detalleConsumo.findAll);
    router.delete("/:detalleConsumoId", detalleConsumo.delete);
    router.get("/:detalleConsumoId", detalleConsumo.findOne);
    app.use('/api/detalleConsumo', router);

    //rutas para filtros
    //router.post('/consumo', reserva.filterConsumo);
};

