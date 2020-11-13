//Event Routes /api/events

const { Router } = require("express");
const { check } = require("express-validator");
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");
const {isDate} = require("../helpers/isDate");
const {validarCampos} = require("../middlewares/validar-campos");

const router=Router();

//Todas deben de pasar por la validacion de JWT

const {validarJWT}=require('../middlewares/validar-jwt');

//Validamos el JWT y todas las lineas debajo de esta pasan por aqui
router.use(validarJWT);

//Obtener eventos
router.get('/', getEventos);

//Crear un evento
router.post(
    '/', 
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom(isDate),
        check('end','Fecha de finalizacion es obligatoria').custom(isDate),


        validarCampos
    ],
    crearEvento
);

//Actualizar evento
router.put(
    '/:id',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom(isDate),
        check('end','Fecha de finalizacion es obligatoria').custom(isDate),


        validarCampos
    ],
    actualizarEvento
);


//Borrar evento
router.delete('/:id', eliminarEvento);

module.exports=router;