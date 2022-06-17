const db = require("../models");
const Categoria = db.Categoria;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    validador = validarCategoria(req);
    if (!validador.isValid) {
        res.status(400).send({
            message: validador.message
        });
        return;
    }
    // crea una categoria
    const categoria = {
        categoriaId: req.body.categoriaId,
        nombre: req.body.nombre
    };
    // Guardamos a la base de datos
    Categoria.create(categoria)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al crear un cliente."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.categoriaId;
    Categoria.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener cliente con id= " + id
            });
        });
};

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Categoria.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener las clientes."
            });
        });
};


exports.update = (req, res) => {
    var id = req.params.categoriaId;

    validador = validarCategoria(req);
    if (!validador.isValid) {
        res.status(400).send({
            message: validador.message
        });
        return;
    }

    Categoria.findByPk(id)
        .then(categoria => {
            categoria.nombre = req.body.nombre;
            categoria.save();
            res.send(categoria);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener cliente con id= " + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.categoriaId;

    Categoria.findByPk(id)
        .then(categoria => {
            categoria.destroy();
            res.send();
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener cliente con id= " + id
            });
        });
};

function validarCategoria(req) {
    if (!req.body.nombre) {
        return {
            isValid: false,
            message: "Debe enviar el nombre de la categoria."
        };
    }
    return {
        isValid: true,
        message: "Exito"
    };

}