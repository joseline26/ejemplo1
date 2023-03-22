const { Router } = require ('express');
const router = Router();
//const express = require(express);
//const router = express.Router();

const superheroes = require ('./data.json');
console.log(superheroes);

router.get('/', (req,res) =>{
    res.json(superheroes);
});

router.get('/:id', (req,res) =>{
       const {id} = req.params;

       superheroes.forEach(superheroe => {
            if(superheroe.id == id){
                res.json(superheroe);
            }
        });

    console.log(id);
});

router.post('/', (req,res) => {
const {nombre, años, identidad, poderes} = req.body;
    if(nombre && años && identidad && poderes){
        const id = superheroes.length +1;
        const nuevoSuperheroe = {...req.body, id};
        superheroes.push(nuevoSuperheroe);
        //console.log(nuevoSuperheroe);
        res.status(200).json(superheroes);
}else{
    res.status(500).json({error:'No data'});
}
});

module.exports = router;