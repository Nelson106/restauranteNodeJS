const db = require("../models");
const Mesa = db.Mesa;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    validador = validarMesa(req)
    if (!validador.isValid) {
        res.status(400).send({
            message: validador.message
        });
        return;
    }
    // crea un mesa
    // si no se agrega un numero de piso por defecto es 1er piso
    const mesa = {
        nombre: req.body.nombre,
        idDeRestaurante: req.body.idDeRestaurante,
        posicionX: req.body.posicionX,
        posicionY: req.body.posicionY,
        numeroDePiso: req.body.numeroDePiso != null ? req.body.numeroDePiso : 1
    };
    // Guardamos a la base de datos
    Mesa.create(mesa)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al crear una restaurante."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Mesa.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener restaurante con id= " + id
            });
        });
};

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Mesa.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener las mesas."
            });
        });
};

exports.update = (req, res) => {
    var id = req.params.id;

    validador = validarMesa(req)
    if (!validador.isValid) {
        res.status(400).send({
            message: validador.message
        });
        return;
    }

    Mesa.findByPk(id)
        .then(mesa => {
            mesa.nombre = req.body.nombre;
            mesa.idDeRestaurante = req.body.idDeRestaurante,
            mesa.posicionX = req.body.posicionX,
            mesa.posicionY = req.body.posicionY,
            mesa.numeroDePiso = req.body.numeroDePiso,
            mesa.save();
            res.send(mesa);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener mesa con id= " + id
            });
        });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Mesa.findByPk(id)
        .then(mesa => {
            mesa.destroy();
            res.send();
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener mesa con id= " + id
            });
        });
}

function validarMesa(req) {
    if (!req.body.nombre) {
        return {
            isValid: false,
            message: "Debe enviar el nombre de la mesa."
        };
    }
    if (!req.body.idDeRestaurante) {
        return {
            isValid: false,
            message: "Debe enviar el id del restaurante."
        };
    }
    if (!req.body.posicionX) {
        return {
            isValid: false,
            message: "Debe enviar la posicion x del restaurante."
        };
    }
    if (!req.body.posicionY) {
        return {
            isValid: false,
            message: "Debe enviar la posicion y del restaurante."
        };
    }
    return {
        isValid: true,
        message: "Exito"
    };

}