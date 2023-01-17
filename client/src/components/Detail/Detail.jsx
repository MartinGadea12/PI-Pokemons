import React from "react";
import { Link, useParams } from "react-router-dom";
import { getDetail, setDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Detail = ()  => {
  const { id } = useParams();

  const myPokemon = useSelector((state) => state.detail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
    dispatch(setDetail());
  }, [dispatch, id]);

  return (
    <div>
      {myPokemon[0] ? (
        <div>
          <img src={myPokemon[0].image} alt="Pokemon"></img>
          <h1>Nombre: {myPokemon[0].name}</h1>
          <h2>Tipo: {myPokemon[0].type + "  "}</h2>

          <p>Ataque: {myPokemon[0].attack}</p>
          <p>Vida: {myPokemon[0].hp}</p>
          <p>Defensa: {myPokemon[0].defense}</p>
          <p>Velocidad: {myPokemon[0].speed}</p>
          <p>Peso: {myPokemon[0].weight}</p>
          <p>Altura: {myPokemon[0].height}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
      <Link to="/home">
        <button>Volver</button>
      </Link>
    </div>
  );
}

export default Detail;