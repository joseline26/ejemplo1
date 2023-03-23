const { Router } = require ('express');
const router = Router();
//const express = require(express);
//const router = express.Router();

const superheroes = require ('./data.json');
console.log(superheroes);

const superheroesCtrl = require('../controllers/superheroes.controller')

router.get('/', superheroesCtrl.getSuperheroes);

router.get('/:id', superheroesCtrl.getSuperheroes);

router.post('/', superheroesCtrl.createSuperheroe);

module.exports = router;