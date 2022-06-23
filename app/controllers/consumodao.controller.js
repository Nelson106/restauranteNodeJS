const db = require("../models");
const Consumo = db.Consumo;
const Op = db.Sequelize.Op;
const modelCliente=db.Cliente;
exports.getConsumoAbierto=(req,res)=>{
    const estado=req.body.estado
    //const mesaId=req.body.mesaId

    //var condition ={estado:estado,MesaMesaId:mesaId}
    var condition ={estado:estado}
    Consumo.findAll({where: condition,include :[{model:modelCliente}]})
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener los consumos."
            });
        });
}
exports.getConsumoCliente=(req,res)=>{
    const clienteId = req.params.clienteId;
    var condition =  { ClienteId: clienteId } 

    Consumo.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        
}
exports.create = (req, res) => {
    // Validate request
  /*  validador = validarConsumo(req);
    if (!validador.isValid || req.consumo == 'cerrado')  {
        res.status(400).send({
            message: validador.message
        });
        return;
    }*/
    // estructura de consumo
    const consumo = {
        MesaMesaId: req.body.mesaId,
        ClienteId: req.body.clienteId,
        estado: req.body.estado,
        total: req.body.total,
        fechaCreacion: req.body.fechaCreacion
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
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

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


exports.update = (req, res) => {
    var consumoId = req.params.consumoId;

  /*  validador = validarConsumo(req);
    if (!validador.isValid) {
        res.status(400).send({
            message: validador.message
        });
        return;
    }*/

    Consumo.findByPk(consumoId)
        .then(consumo => {
            consumo.ClienteId=req.body.clienteId
            consumo.total=req.body.total
            consumo.estado = req.body.estado;
            consumo.fechaCierre=req.body.fechaCierre
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
    if (!req.body.estado) {
        return {
            isValid: false,
            message: "Debe enviar estado cerrado o abierto."
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