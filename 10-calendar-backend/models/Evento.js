const {Schema, model}=require('mongoose');

//Como quiero que luzca el schema
//Esto crea el modelo en la BD

const EventoSchema=Schema({
    title:{
        type:String,
        required:true
    },
    notes:{
        type:String,
    },
    start:{
        type:Date,
        required:true
    },
    end:{
        type:Date,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'Usuario',
        required:true
    }
});

EventoSchema.method('toJSON', function(){
    const {__v, _id, ...object}= this.toObject();
    object.id = _id;
    return object;
});

module.exports=model('Evento', EventoSchema);