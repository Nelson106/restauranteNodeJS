
module.exports = app => {
    const categoria = require("../controllers/categoriadao.controller.js");
    var router = require("express").Router();
    router.post("/", categoria.create);
    router.put("/:categoriaId", categoria.update);
    router.delete("/:categoriaId", categoria.delete);
    router.get("/", categoria.findAll);
    router.get("/:categoriaId", categoria.findOne);
    app.use('/api/categoria', router);
};

