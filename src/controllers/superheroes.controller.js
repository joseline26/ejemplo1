const superheroesCtrl = {}

const superheroe = require('../models/superheroes.js')
//const superheroes = require ('../routes/data.json');
superheroesCtrl.getSuperheroes= async (req, res) =>{
    
   const superheroes = await superheroe.find();
   res.json(superheroes)
}

superheroesCtrl.createSuperheroe = async (req, res) => {
    const newSuperheroe = new superheroe(req.body);
    await newSuperheroe.save();
    //console.log(newSuperheroe);
    res.send({message:'superheroe creado'})
}

superheroesCtrl.getSuperheroes = (req, res) =>{
    console.log(req.params)

}

module.exports= superheroesCtrl;