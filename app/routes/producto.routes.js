
module.exports = app => {
    const producto = require("../controllers/productodao.controller.js");
    var router = require("express").Router();
    router.post("/", producto.create);
    router.put("/:id", producto.update)
    router.get("/", producto.findAll);
    router.delete("/:productoId", producto.delete);
    router.get("/:productoId", producto.findOne);
    app.use('/api/producto', router);
};

