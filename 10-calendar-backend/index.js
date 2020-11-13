///Esto es como hacer un import
const express=require('express');
const cors= require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();

//Crear el servidor de express

const app=express();

//base de datos
dbConnection();

//CORS
app.use(cors());

//Directorio publico
//Es como implementar un middlewear
app.use(express.static('public'));


//Lectura y parseo del body
app.use(express.json());

//Rutas
//Todo lo que el archivo exporte lo regresa en esta ruta
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


//Path de rutas
//Rutas de autenticacion //Crear, login, renew
//Crud de los eventos del calendario



//Escuchar peticiones
//Primer parametro es el puerto
//El segundo esun callback para ejecutarse cuando el servidor este arrba
app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo  en puerto ${process.env.PORT}`)
});