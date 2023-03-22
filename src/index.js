const express = require('express');
const app = express();
const morgan = require('morgan');

//configuraciones
app.set('port',3000);
app.set('json spaces',2);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use('/api/superheroes',require('./routes/rutas'));


//ejemplo rutas
//app.get('/',(req,res)=> {
//    res.json({"name":"John Doe"});
//}); 



//Empezando el servidor
app.listen(app.get('port'));
console.log("mi primer servidor");