const axios = require("axios");
const { Pokemon, Type } = require("../db");



const getByIdApi = async (id) => {
  try {
    const apiInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let resultApi = {
      name: apiInfo.data.name,
      id: apiInfo.data.id,
      life: apiInfo.data.stats[0].base_stat,
      attack: apiInfo.data.stats[1].base_stat,
      defense: apiInfo.data.stats[2].base_stat,
      speed: apiInfo.data.stats[5].base_stat,
      height: apiInfo.data.height,
      weight: apiInfo.data.weight,
      image: apiInfo.data.sprites.other.dream_world.front_default,
      type: apiInfo.data.types.map((e) => e.type.name),
    };
    return resultApi;
  } catch (error) {
    console.log(error);
  }
};

const getByIdDB = async (id) => {
  try {
    const pokemonDB = await Pokemon.findOne({ where: { id }, include: { model: Type } });
    console.log(pokemonDB)
    let response = {
      id: pokemonDB.id,
      name: pokemonDB.name,
      hp: pokemonDB.hp,
      attack: pokemonDB.attack,
      defense: pokemonDB.defense,
      speed: pokemonDB.speed,
      weight: pokemonDB.weight,
      height: pokemonDB.height,
      image: pokemonDB.image,
      type: pokemonDB.types?.map((el) => el.name)
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  getByIdDB,
  getByIdApi,
};
