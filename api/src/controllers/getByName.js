const { Pokemon, Type } = require("../db");

const getPokemonsName = async (name) => {
  try {
    const apiPokeUrl = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + name
    );
    const results = apiPokeUrl.data;

    const pokemonInfo = {
      id: results.id,
      name: results.name,
      types: results.types.map((t) => t.type.name),
      img: results.sprites.other["official-artwork"].front_default,
      weight: results.weight,
      height: results.height,
    };
    console.log(pokemonInfo);

    return pokemonInfo;
  } catch (error) {
   console.log("Pokemon no encontrado")
  }
};


  
module.exports = {
  getPokemonsName,
};
