module.exports = app => {
    const mesa = require("../controllers/mesadao.controller.js");
    var router = require("express").Router();
    router.post("/", mesa.create);
    router.put("/", mesa.update)
    router.get("/", mesa.findAll);
    router.get("/:id", mesa.findOne);
    app.use('/api/mesa', router);
};