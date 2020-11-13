const {response}=require('express');
const {validationResult}=require('express-validator');

//Un middleware es casi igual a un controlador

const validarCampos=(req, res=response, next)=>{

        //Manejo de errores
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors:errors.mapped()
        });
    }
    next();
}

module.exports={
    validarCampos
}