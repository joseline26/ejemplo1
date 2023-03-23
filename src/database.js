const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/basedatos',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(db => console.log('ya esta conectado'))
.catch((err)=>console.error(err));