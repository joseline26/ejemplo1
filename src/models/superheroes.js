const {Schema, model} = require('mongoose')
const superheroeSchema = new Schema({
    id:{type:String, required:true},
    nombre:{type:String, required:true},
    anios:{type:Number, required:true},
    anios_name:{type:String, required:true},
    identidad:{type:String, required:true},
    poderes:{type:String, required:true}

}, {
    timestamps:true, //agregar tiempo de creación y modificación
    versionKey:false
})

module.exports= model('Superheroe',superheroeSchema)