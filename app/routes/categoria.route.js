
module.exports = app => {
    const categoria = require("../controllers/categoriadao.controller.js");
    var router = require("express").Router();
    router.post("/", categoria.create);
    router.put("/", categoria.update)
    router.get("/", categoria.findAll);
    router.get("/:id", categoria.findOne);
    app.use('/api/categoria', router);
};

