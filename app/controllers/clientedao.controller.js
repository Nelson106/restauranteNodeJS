const db = require("../models");
const Cliente = db.Cliente;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    validador = validarCliente(req);
    if (!validador.isValid) {
        res.status(400).send({
            message: validador.message
        });
        return;
    }
    // crea un cliente
    const cliente = {
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cedula: req.body.cedula
    };
    // Guardamos a la base de datos
    Cliente.create(cliente)
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
    const id = req.params.id;
    Cliente.findByPk(id)
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

    Cliente.findAll({ where: condition })
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

exports.findAllCedula = (req, res) => {
    const cedula = req.body.cedula;
    var condition = cedula ? {cedula: { [Op.eq]: cedula } } : null;

    Cliente.findAll({ where: condition })
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

    validador = validarCliente(req);
    if (!validador.isValid) {
        res.status(400).send({
            message: validador.message
        });
        return;
    }

    Cliente.findByPk(id)
        .then(cliente => {
            cliente.nombre = req.body.nombre;
            cliente.apellido = req.body.apellido,
            cliente.cedula = req.body.cedula;
            cliente.save();
            res.send(cliente);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener cliente con id= " + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Cliente.findByPk(id)
        .then(cliente => {
            cliente.destroy();
            res.send();
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener cliente con id= " + id
            });
        });
};

function validarCliente(req) {
    if (!req.body.nombre) {
        return {
            isValid: false,
            message: "Debe enviar el nombre de la cliente."
        };
    }
    if (!req.body.apellido) {
        return {
            isValid: false,
            message: "Debe enviar el nombre."
        };
    }
    if (!req.body.cedula) {
        return {
            isValid: false,
            message: "Debe enviar la cedula."
        };
    }
    return {
        isValid: true,
        message: "Exito"
    };

}