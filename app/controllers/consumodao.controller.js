const db = require("../models");
const Consumo = db.Consumo;
const Op = db.Sequelize.Op;
const modeloMesas = require("../models").Mesas
const modeloCliente = require("../models").Cliente



exports.create = (req, res) => {
    // Validate request
    validador = validarConsumo(req);
    if (!validador.isValid || req.consumo == 'cerrado') {
        res.status(400).send({
            message: validador.message
        });
        return;
    }
    // estructura de consumo
    const consumo = {
        mesaId: req.body.mesaId,
        clienteId: req.body.clienteId,
        estado: "abierto",
        total: req.body.total,
        fechaCreacion: req.body.fechaCreacion,
        fechaCierre: req.body.fechaCierre
    };
    // Guardamos a la base de datos
    Consumo.create(consumo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al crear un consumo."
            });
        });
};

exports.findOne = (req, res) => {
    const consumoId = req.params.consumoId;
    Consumo.findByPk(consumoId)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener consumo con consumoId= " + consumoId
            });
        });
};

exports.findAll = (req, res) => {
    const estado = req.query.estado;
    var condition = estado ? { nombre: { [Op.iLike]: `%${estado}%` } } : null;

    Consumo.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener los consumos."
            });
        });
};

exports.findAllByMesas = (req, res) => {
    const mesaId = req.params.mesaId;
    var condition = mesaId ? { mesaId: { [Op.eq]: mesaId } } : null;

    Consumo.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener las consumos por idMesa."
            });
        });
};

exports.findAllByCliente = (req, res) => {
    const clienteId = req.params.clienteId;
    var condition = clienteId ? { clienteId: { [Op.eq]: clienteId } } : null;
    
    Consumo.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener los consumo del cliente."
            });
        });
};

exports.update = (req, res) => {
    var consumoId = req.params.consumoId;

    validador = validarConsumo(req);
    if (!validador.isValid) {
        res.status(400).send({
            message: validador.message
        });
        return;
    }

    Consumo.findByPk(consumoId)
        .then(consumo => {
            consumo.clienteId = req.body.clienteId;
            consumo.estado = req.body.estado;
            consumo.fechaCierre = req.body.fechaCierre;
            consumo.save();
            res.send(consumo);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener consumo con consumoId = " + consumoId
            });
        });
};

exports.delete = (req, res) => {
    const consumoId = req.params.consumoId;

    Consumo.findByPk(consumoId)
        .then(consumo => {
            consumo.destroy();
            res.send();
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener consumo para eliminar con consumoId = " + consumoId
            });
        });
};

exports.filterCliente = (req, res) => {

    const id = req.body.ClienteId
    let c = parseInt(id)
    Reserva.findAll({ where: { ClienteId: c }, include: [{ model: modeloRestaurante }, { model: modeloMesa }, { model: modeloCliente }] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener las reservas."
            });
        });
};

function validarConsumo(req) {
    if (!req.body.mesaId) {
        return {
            isValid: false,
            message: "Debe enviar mesaId."
        };
    }
    if (!req.body.clienteId) {
        return {
            isValid: false,
            message: "Debe enviar clienteId."
        };
    }
    if (!req.body.total) {
        return {
            isValid: false,
            message: "Debe enviar clienteId."
        };
    }
    return {
        isValid: true,
        message: "Exito"
    };

}