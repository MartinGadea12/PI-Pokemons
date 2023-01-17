const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getPokeApi = async (req, res) => {
  try {
    const apiUrl = await axios.get(
      " https://pokeapi.co/api/v2/pokemon?limit=100"
    );
    const apiInfo = await apiUrl.data.results;
    const pokemons = await Promise.all(
      apiInfo.map(async (elem) => {
        const dataApi = (await axios.get(elem.url)).data;
        return {
          name: dataApi.name,
          id: dataApi.id,
          image: dataApi.sprites.other["official-artwork"].front_default,
          hp: dataApi.stats[0].base_stat ? dataApi.stats[0].base_stat : "",
          attack: dataApi.stats[1].base_stat ? dataApi.stats[1].base_stat : "",
          defense: dataApi.stats[2].base_stat ? dataApi.stats[2].base_stat : "",
          speed: dataApi.stats[5].base_stat ? dataApi.stats[5].base_stat : "",
          weight: dataApi.weight ? dataApi.weight : "",
          height: dataApi.height ? dataApi.height : "",
          types: dataApi.types.map((elm) => elm["type"].name),
        };
      })
    );
    return pokemons;
  } catch (error) {
   console.log(error);
  }
};

const getPokeDb = async (req, res) => {
  try {
    const searchDb = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return searchDb;
  } catch (error) {
    console.log(error);
  }
};

// GUARDO TODOS LOS DATOS JUNTOS.
const getAllPokemons = async () => {
  const api = await getPokeApi();
  const dataBase = await getPokeDb();
  const SearchTotal = api.concat(dataBase);
  return SearchTotal;
};


module.exports = {
  getAllPokemons
};
