const initialState = {
  allPokemons: [],
  pokemons: [],
  detail: [],
  types: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case "FILTER_BY_TYPE":
      const allPokemons = state.allPokemons;
      const filterTypes =
        action.payload === "All"
          ? allPokemons
          : allPokemons.filter((elem) => elem.types.includes(action.payload));
      console.log(action.payload);

      return {
        ...state,
        pokemons: filterTypes,
      };

    case "GET_NAME_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
      };

    case "GET_TYPES":
      return {
        ...state,
        types: action.payload,
      };

    case "FILTER_BY_ATTACK":
      const filterAttack =
        action.payload === "more"
          ? state.pokemons.sort(function (a, b) {
              if (a.attack > b.attack) {
                return 1;
              }
              if (a.attack < b.attack) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort(function (a, b) {
              if (a.attack < b.attack) {
                return 1;
              }
              if (a.attack > b.attack) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: filterAttack,
      };

    case "POST_POKEMON":
      return {
        ...state,
      };

    case "FILTER_CREATED":
      const createdFilter =
        action.payload === "create"
          ? state.allPokemons.filter((el) => el.createPoke)
          : state.allPokemons.filter((el) => !el.createPoke);
      return {
        ...state,
        pokemons: action.payload === "All" ? state.pokemons : createdFilter,
      };

    case "ORDER_BY_NAME":
      const orderName =
        action.payload === "asc"
          ? state.pokemons.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort(function (a, b) {
              if (a.name < b.name) {
                return 1;
              }
              if (a.name > b.name) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: orderName,
      };
      case 'GET_DETAIL':
        return {
            ...state,
            detail: action.payload
        }
      case 'SET_DETAIL':
        return {
          ...state,
          detail: []
        }
    default:
      return state;
  }
}

export default rootReducer;
