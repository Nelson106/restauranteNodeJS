
module.exports = app => {
    const cliente = require("../controllers/clientedao.controller.js");
    var router = require("express").Router();
    router.post("/", cliente.create);
    //router.put("/", cliente.update)
    router.get("/", cliente.findAll);
    router.get("/:id", cliente.findOne);
    app.use('/api/cliente', router);
};

