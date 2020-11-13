const {response, json, request}=require('express');
const Usuario = require('../models/Usuario');
const bcrypt=require('bcryptjs');
const {generarJWT} = require('../helpers/jwt');


const crearUsuario= async(req, res= response)=>{
    const { email,password}=req.body;
    

    try{

        //Validacion de que no exista el usuario
        let usuario= await Usuario.findOne({email});
        if(usuario){
            return res.status(400).json({
                ok:false,
                msg:'Ya existe un usuario con ese correo'
            })
        }

        //Crear una nueva instancia del usuario
        usuario = new Usuario(req.body);

        //Encriptar contraseña
        const salt=bcrypt.genSaltSync();
        usuario.password=bcrypt.hashSync(password,salt);

        //Guardamos el usuario en la BD
        await usuario.save();

        //Generar Json Web Token
        const token= await generarJWT(usuario.id, usuario.name);


        res.status(201).json({
            ok:true,
            uid:usuario.id,
            name:usuario.name,
            token:token
        });


    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Por favor hable con el administrador'
        })
    }
    
}

const loginUsuario= async(req, res=response)=>{

    const {email,password}=req.body;

    try{

        const usuario= await Usuario.findOne({email});
        if(!usuario){
            return res.status(400).json({
                ok:false,
                msg:'El usuario no existe con ese email'
            });
        }
        //Confirmar los passwords
        const validPassword=bcrypt.compareSync(password,usuario.password)

        if(!validPassword){
            return res.status(400).json({
                ok:false,
                msg:'Password incorrecto'
            });
        }
        //Si las contraseñas coinciden generar el web token
        const token= await generarJWT(usuario.id, usuario.name);


        res.json({
            ok:true,
            uid:usuario.id,
            name:usuario.name,
            token:token
        })

    }catch(error){

        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Por favor hable con el administrador'
        })
    }
}


const revalidarToken= async(req, res=response)=>{

    const {uid,name}=req

    //Generar un nuevo JWT u retornarlo en esta peticion
    const token=await generarJWT(uid,name);

    res.json({
        ok:true,
        uid,
        name,
        token
       
    })
}

//Exportamos las funciones
module.exports={
    crearUsuario,
    loginUsuario,
    revalidarToken

}