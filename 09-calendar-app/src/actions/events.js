import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { preparteEvent } from "../helpers/prepareEvents";
import { types } from "../types/types";
//Creo que en las acciones deberia dispararse el websocket asi que pondre aqui su importacion
import { w3cwebsocket as W3CWebSocket } from "websocket";

//Creamos el cliente
const client = new  W3CWebSocket('ws://127.0.0.1:8000');




export const eventStartAddNew=(event)=>{
    return async(dispatch, getState)=>{

        const {uid, name}=getState().auth;

        try{
            const resp= await fetchConToken('events', event, 'POST');
            const body= await resp.json();

            if(body.ok){
                event.id=body.evento.id;
                event.user={
                    _id:uid,
                    name:name
                }
                //console.log(event);
                
                dispatch(eventAddNew(event));
                //Cuando agrego un evento mando el mensaje
                client.send(JSON.stringify({
                    type:'message',
                    msg: event,
                    
                }),
                    console.log('Enviamos nuevo evento')
                );
        
                //dispatch(eventStartLoading());
               
            }
        }
        catch(error){
            console.log(error);
        }
        
        
    }
}

const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
});

export const eventClearActiveEvent = () => ({ type: types.eventClearActiveEvent });

export const eventUpdated = ( event ) => ({
    type: types.eventUpdated,
    payload: event
});

export const eventStartUpdated=(event)=>{
    return async(dispatch)=>{
        try{

            // console.log(event);
            const resp= await fetchConToken(`events/${event.id}`, event, 'PUT');

            const body= await resp.json();

            if(body.ok){

                dispatch(eventUpdated(event));

                //Tambien envio el mensaje cuando actualizo un evento
                client.send(JSON.stringify({
                    type:'message',
                    msg: event,
                    
                }),
                    console.log('Enviado el evento actualizado', event)
                );

                //dispatch(eventStartLoading());
            }
            else{
                Swal.fire('Error', body.msg, 'error');
            }


        }catch(error){
            console.log(error);
        }
    }
}
export const eventStartDelete=()=>{
    return async(dispatch, getState)=>{
        const {id}=getState().calendar.activeEvent;
        
        try{

            // console.log(event);
            const resp= await fetchConToken(`events/${id}`, {}, 'DELETE');

            const body= await resp.json();

            if(body.ok){
                dispatch(eventDeleted());
                
                //Para tratar de mostrar los cambios cuando se borra algun evento
                client.send(JSON.stringify({
                    type:'message',
                    msg: id,
                    
                }),
                    console.log('El evento se ha borrado' )
                );
            }
            else{
                Swal.fire('Error', body.msg, 'error');
            }
            //dispatch(eventStartLoading());

        }catch(error){
            console.log(error);
        }
    }
}

 const eventDeleted = () => ({ type: types.eventDeleted });

export const eventStartLoading=()=>{
    
    return async(dispatch)=>{
        try{

            const resp= await fetchConToken('events');
            const body= await resp.json();
                        
            const events=preparteEvent(body.eventos);
            //console.log(events);
            dispatch(eventLoaded(events));
            //dispatch(recibirMensajes());

            //Aqui puse el abrir la conexion del cliente 
            client.onopen=()=>{
                console.log('Cliente de websocket conectado');
            };
            //Tambien el recibir mensajes
            client.onmessage=async(message)=>{
                const dataFromServer=JSON.parse(message.data);
                console.log('Recibi los cambios ', dataFromServer);
                if(dataFromServer.type==="message"){
                   
                    const resp= await fetchConToken('events');
                    const body= await resp.json();
                    //console.log('Entre al onmessage');           
                    const events=preparteEvent(body.eventos);
                    //console.log(events);
                    //console.log('Vuelvo a recibir los eventos');
                   dispatch(eventLoaded(events));
                   
                }
            }
            
        }
        catch(error){
            console.log(error);
        }
    }
}

const eventLoaded=(events)=>({
    type: types.eventLoaded,
    payload:events
})

export const eventLogout=()=>({
    type:types.eventLogout
});

// const recibirMensajes=()=>{
//     return async(dispatch)=>{
//          //Aqui puse el abrir la conexion del cliente 
//          client.onopen=()=>{
//             console.log('Cliente de websocket conectado');
//         };
//         //Tambien el recibir mensajes
//         client.onmessage=async(message)=>{
//             const dataFromServer=JSON.parse(message.data);
//             //console.log('Respuesta ', dataFromServer);
//             if(dataFromServer.type==="message"){
            
//                 const resp= await fetchConToken('events');
//                 const body= await resp.json();
//                  console.log('Entre al onmessage');           
//                 const events=preparteEvent(body.eventos);
//                 console.log(events);
//                 //console.log('Vuelvo a recibir los eventos');
//                dispatch(eventLoaded(events));
            
//             }
//         }
//     }
// }


