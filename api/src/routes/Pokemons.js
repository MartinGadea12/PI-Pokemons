const express = require("express");
const { Pokemon, Type } = require("../db");
const { v4: uuidv4 } = require('uuid');

const { getAllPokemons } = require("../controllers/getAllPokemons");
const { getPokemonsName } = require("../controllers/getByName");
const { getByIdApi, getByIdDB } = require("../controllers/getById");

const router = express.Router();

router.get("/pokemons", async (req, res) => {
  const name = req.query.name;

  if (name) {
    const pokemonName = await getPokemonsName(name.toLowerCase());

    if (pokemonName) {
      return res.status(200).send([pokemonName]);
    } else {
      const pokemonsDB = await getAllPokemons();
      const pokemonNAM = pokemonsDB.filter(
        (el) => el.name.toLowerCase() == name.toLowerCase()
      );

      return pokemonNAM.length
        ? res.status(200).send(pokemonNAM)
        : res.status(404).send("Pokemon por nombre no encontrado");
    }
  } else {
    const pokemonsTotal = await getAllPokemons();

    return res.status(200).send(pokemonsTotal);
  }
});

router.get("/pokemons/:id", async (req, res) => {
  const { id } = req.params;
  const pokemonDb = await getByIdDB(id);
  const pokemonApi = await getByIdApi(id);
  if (pokemonApi) {
    return res.status(200).send([pokemonApi]);
  } else {

    res.status(200).send([pokemonDb])

  }
});

router.post('/create', async(req, res, next) => {
  const {name, hp, attack, defense, speed, weight, height, type, image} = req.body;
  try {
      const newPokemon = await Pokemon.create({
          id: uuidv4(),
          name: name.toLowerCase(),
          hp,
          attack,
          defense,
          speed,
          weight,
          height,
          image
      })
       let typesDB = await Type.findAll({
           where: {name: type}
       })
       newPokemon.addType(typesDB)
       res.send(newPokemon)
  } catch (error) {
      next(error)
  }
});

module.exports = router;
