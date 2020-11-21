///Esto es como hacer un import
const express=require('express');
const cors= require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();

//Agregamos dependencias  para el web socket
const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');

//Hacemos el servidor y lo ponemos a escuchar peticiones
const server= new http.createServer();
server.listen(webSocketsServerPort);
console.log('Web socket en puerto 8000');

//Creamos el websocketserver
const wsServer = new webSocketServer({
    httpServer:server
});

//Guardamos los clientes conectados en el ws
const clients={};

const getUniqueID = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4();
  };

//funcion para escuchar las peticiones
wsServer.on('request', (request)=>{

    var userID = getUniqueID();
    console.log((new Date())+' se recibio una conexion del origen' + request.origin +'.');

    const connection = request.accept(null, request.origin);
    clients[userID] = connection;
    console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients));

    connection.on('message',(message)=>{
        
        if (message.type === 'utf8') {
            // console.log('Hey');
            console.log('Received Message: ', message.utf8Data);
      
            // broadcasting message to all connected clients
            for(key in clients) {
              clients[key].sendUTF(message.utf8Data);
              console.log('sent Message to: ', clients[key]);
              
            }
        }
    })
});

//Aqui termina lo que se agrego para el web socket
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