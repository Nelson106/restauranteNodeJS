const db = require("../models");
const DetalleConsumo = db.DetalleConsumo;
const Op = db.Sequelize.Op;
const modeloConsumo = db.Consumo;
const modeloProducto=db.Producto
exports.getDetalleConsumo = (req,res)=>{
    const id=req.body.consumoId
    console.log("aaaaaaaaaaaaaaaaa",id)
    var condition ={ConsumoId:id}
    DetalleConsumo.findAll({where: condition, include :[{model:modeloProducto}]})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Ocurrio un error al obtener los detalles de consumo."
        });
    });
}
exports.create = (req, res) => {
    // Validate request
   /* validador = validarDetalle(req);
    if (!validador.isValid) {
        res.status(400).send({
            message: validador.message
        });
        return;
    }*/
    // crea un detalle de consumo
    const detalleConsumo = {
        ProductoProductoId: req.body.productoId,
        cantidad: req.body.cantidad,
        ConsumoId: req.body.consumoId
    };
    // Guardamos a la base de datos
    DetalleConsumo.create(detalleConsumo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al crear un detalle de consumo."
            });
        });
};

exports.findOne = (req, res) => {
    const detalleConsumoId = req.params.detalleConsumoId;
    DetalleConsumo.findByPk(detalleConsumoId, { include: [{ model: modeloConsumo }] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener Detalle de consumo con detalleConsumoId = " + detalleConsumoId
            });
        });
};

exports.findAll = (req, res) => {

    DetalleConsumo.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener los detalles de consumo."
            });
        });
};


exports.update = (req, res) => {
    var detalleConsumoId = req.params.detalleConsumoId;

    validador = validarDetalle(req);
    if (!validador.isValid) {
        res.status(400).send({
            message: validador.message
        });
        return;
    }

    DetalleConsumo.findByPk(detalleConsumoId)
        .then(detalleConsumo => {
            detalleConsumo.cantidad = req.body.cantidad;
            consumo.save();
            res.send(detalleConsumo);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al editar detalle de consumo con detalleConsumoId= " + detalleConsumoId
            });
        });
};

exports.delete = (req, res) => {
    const detalleConsumoId = req.params.detalleConsumoId;

    DetalleConsumo.findByPk(detalleConsumoId)
        .then(detalleConsumo => {
            detalleConsumo.destroy();
            res.send();
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener el detalle de consumo con detalleConsumoId = " + detalleConsumoId
            });
        });
};

function validarDetalle(req) {
    if (!req.body.productoId) {
        return {
            isValid: false,
            message: "Debe enviar el id del producto."
        };
    }
    if (!req.body.cantidad) {
        return {
            isValid: false,
            message: "Debe enviar la cantidad."
        };
    }
    if (!req.body.consumoConsumoId) {
        return {
            isValid: false,
            message: "Debe enviar id del consumo."
        };
    }
    return {
        isValid: true,
        message: "Exito"
    };

}