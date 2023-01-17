import axios from "axios";

export function getPokemons() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/pokemons");
      return dispatch({
        type: "GET_POKEMONS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getNamePokemons(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/pokemons?name=" + name);
      return dispatch({
        type: "GET_NAME_POKEMONS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTypes() {
  return async function (dispatch) {
    const info = await axios.get("http://localhost:3001/types");
    return dispatch({ type: "GET_TYPES", payload: info.data });
  };
}

export function createPokemon(payload) {
  return async function (dispatch) {
    const info = await axios.post("http://localhost:3001/create", payload);
    return dispatch({ type: "POST_POKEMON", payload: info.data });
  };
}

export function changePage(payload) {
  return function (dispatch) {
    dispatch({
      type: "CHANGE_PAGE",
      payload: payload,
    });
  };
}

export function filterByType(payload) {
  return {
    type: "FILTER_BY_TYPE",
    payload,
  };
}

export function filterByAttack(payload) {
  return {
    type: "FILTER_BY_ATTACK",
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      const info = await axios.get("http://localhost:3001/pokemons/" + id);
      return dispatch({
        type: "GET_DETAIL",
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function setDetail() {
  return async function (dispatch) {
    return dispatch({
      type: "SET_DETAIL"
    })
  }
}