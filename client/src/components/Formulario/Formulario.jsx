import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getTypes } from "../../redux/actions";

import styles from "./Formulario.module.css";

function validate(input) {
  let errors = {};
  if (!input.name) errors.name = "Nombre requerido!";
  if (!input.hp) errors.hp = "Campo requerido!";
  if (!input.attack) errors.attack = "Campo requerido!!";
  if (!input.defense) errors.defense = "Campo requerido!!";
  if (!input.speed) errors.speed = "Campo requerido!!";
  if (!input.weight) errors.weight = "Campo requerido!!";
  if (!input.height) errors.height = "Campo requerido!!";
  if (!input.image) errors.image = "Inserte una imagen!";
  return errors;
}

export default function Formulario() {

  const dispatch = useDispatch();

  const history = useHistory();

  const types = useSelector((state) => state.types);

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    type: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.value]: e.target.value,
      })
    );
    console.log(input);
  }

  function handleSelect(e) {
    setInput({
      ...input,
      type: [...input.type, e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createPokemon(input));
    console.log("HOLA")
    alert("Pokemon creado con exito!!");
    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      weight: "",
      height: "",
      type: [],
      image: "",
    });
    history.push("/home");
  }

  function handleDelete(el) {
    setInput({
      ...input,
      type: input.type.filter((ooc) => ooc !== el),
    });
  }

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className="inputgroup">
      <Link to="/home">
        <button className={styles.return}>Volver</button>
      </Link>

      <form className={styles.container} onSubmit={(e) => handleSubmit(e)}>
        <hr />

        <div>
          <label autoComplete="off" className={styles.label}>
            NOMBRE:
          </label>
          <input
            className={styles.input}
            autoComplete="off"
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="inputgroup">
          <label className={styles.label}>VIDA:</label>
          <input
            className={styles.input}
            autoComplete="off"
            type="number"
            value={input.hp}
            name="hp"
            onChange={(e) => handleChange(e)}
            min="100"
            max="2000"
          />
          {errors.name && <p className="error">{errors.hp}</p>}
        </div>

        <div>
          <label className={styles.label}>ATAQUE:</label>
          <input
            className={styles.input}
            autoComplete="off"
            type="number"
            value={input.attack}
            name="attack"
            onChange={(e) => handleChange(e)}
            min="100"
            max="5000"
          />
          {errors.name && <p className="error">{errors.attack}</p>}
        </div>

        <div>
          <label className={styles.label}>DEFENSA:</label>
          <input
            className={styles.input}
            autoComplete="off"
            type="number"
            value={input.defense}
            name="defense"
            onChange={(e) => handleChange(e)}
            min="100"
            max="5000"
          />
          {errors.name && <p className="error">{errors.defense}</p>}
        </div>

        <div>
          <label className={styles.label}>VELOCIDAD:</label>
          <input
            className={styles.input}
            autoComplete="off"
            type="number"
            value={input.speed}
            name="speed"
            onChange={(e) => handleChange(e)}
            min="100"
            max="1000"
          />
          {errors.name && <p className="error">{errors.speed}</p>}
        </div>

        <div>
          <label className={styles.label}>ALTURA:</label>
          <input
            className={styles.input}
            autoComplete="off"
            type="number"
            value={input.height}
            name="height"
            onChange={(e) => handleChange(e)}
            min="160"
            max="300"
          />
          {errors.name && <p className="error">{errors.height}</p>}
        </div>

        <div>
          <label className={styles.label}>PESO:</label>
          <input
            className={styles.input}
            autoComplete="off"
            type="number"
            value={input.weight}
            name="weight"
            onChange={(e) => handleChange(e)}
            min="80"
            max="150"
          />
          {errors.name && <p className="error">{errors.weight}</p>}
        </div>

        <div>
          <label className={styles.label}>CARGAR IMAGEN:</label>
          <input
            className={styles.input}
            autoComplete="off"
            type="text"
            value={input.image}
            name="image"
            onChange={(e) => handleChange(e)}
          />
          {errors.name && <p className="error">{errors.image}</p>}
        </div>

        <select onChange={(e) => handleSelect(e)}>
          {types?.map((types) => {
            return <option value={types.name}>{types.name}</option>;
          })}
        </select>

        <ul>
          <li>{input.type.map((el) => el + " ,")}</li>
        </ul>

        <div>
          <hr />
        </div>
      </form>

      <button type="submit" onSubmit={(e) => handleSubmit(e)}>Crea tu Pokemon!</button>

      {input.type.map((elem) => (
        <div className="divOcc">
          <p>{elem}</p>
          <button className="botonX" onClick={() => handleDelete(elem)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
}
