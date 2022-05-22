const db = require("../models");
const Mesa = db.Mesas;
const Op = db.Sequelize.Op;
const modeloRestaurante=require("../models").Restaurante
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombreMesa) {
        res.status(400).send({
            message: "Debe enviar el nombre de la mesa."
        });
        return;
    }
    // crea una mesa
    const mesa = {
        nombreMesa: req.body.nombreMesa,
        posicionX: req.body.posicionX,
        posicionY: req.body.posicionY,
        piso:req.body.piso,
        capacidad:req.body.capacidad,
        RestauranteRestauranteId:req.body.restauranteId
    };
    // Guardamos a la base de datos
    Mesa.create(mesa)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al crear una mesa."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Mesa.findByPk(id, {include :[{model:modeloRestaurante}]})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener restaurante con id=" + id
            });
        });
};

exports.findAll = (req, res) => {
    const nombre = req.query.nombreMesa;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Mesa.findAll({ where: condition, include :[{model:modeloRestaurante}] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener los restaurantes."
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    
    validador = validarMesa(req)
    if (!validador.isValid) {
        res.status(400).send({
            message: validador.message
        });
        return;
    }
    
    Mesa.findByPk(id)
        .then(mesas => {
            mesas.nombreMesa= req.body.nombreMesa;
            mesas.posicionX= req.body.posicionX;
            mesas.posicionY= req.body.posicionY;
            mesas.piso=req.body.piso;
            mesas.capacidad=req.body.capacidad;
            mesas.RestauranteRestauranteId=req.body.restauranteId;
            mesas.save();
            res.send(mesas);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener restaurante con id=" + id
            });
        });
}

exports.delete = (req, res) => {
    const id = req.params.id;
    
    Mesa.findByPk(id)
        .then(mesas => {
            mesas.destroy();
            res.send();
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener restaurante con id=" + id
            });
        });
}

function validarRestaurante(req){
    if (!req.body.nombreMesa) {
        return {
            isValid : false,
            message : "Debe enviar el nombre de la mesa."
        };
    }
   /* if (!req.body.direccion) {
        return {
            isValid : false,
            message : "Debe enviar la direccion del restaurante."
        };
    }*/
    return {
        isValid : true,
        message : ""
    };

}