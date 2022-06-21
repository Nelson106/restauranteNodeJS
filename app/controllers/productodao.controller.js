const db = require("../models");
const Producto = db.Producto;
const Op = db.Sequelize.Op;
const modeloCategoria = db.Categoria;

exports.create = (req, res) => {
    // Validate request
    validador = validarProducto(req);
    if (!validador.isValid) {
        res.status(400).send({
            message: validador.message
        });
        return;
    }
    // crea un producto
    const producto = {
        productoId: req.body.productoId,
        nombre: req.body.nombre,
        precioVenta: req.body.precioVenta,
        CategoriumCategoriaId: req.body.CategoriumCategoriaId
    };
    // Guardamos a la base de datos
    Producto.create(producto)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al crear un producto."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.productoId;
    Producto.findByPk(id,{include :[{model:modeloCategoria}]})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener producto con id= " + id
            });
        });
};

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Producto.findAll({ where: condition, include:{model:modeloCategoria} })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener los productos."
            });
        });
};


exports.update = (req, res) => {
    const id = req.params.id;
    
    validador = validarProducto(req)
    if (!validador.isValid) {
        res.status(400).send({
            message: validador.message
        });
        return;
    }
    
    Producto.findByPk(id)
        .then(producto => {
            producto.nombre= req.body.nombre;
            producto.precioVenta= req.body.precioVenta;
            producto.save();
            res.send(producto);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener producto CD con id=" + id
            });
        });
}

exports.delete = (req, res) => {
    const id = req.params.productoId;

    Producto.findByPk(id)
        .then(producto => {
            producto.destroy();
            res.send();
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener producto con id= " + id
            });
        });
};

function validarProducto(req) {
    if (!req.body.nombre) {
        return {
            isValid: false,
            message: "Debe enviar el nombre del producto."
        };
    }
    return {
        isValid: true,
        message: "Exito"
    };

}