import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../../redux/actions";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  
  const [name, setName] = useState("");

  function handleInput(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNamePokemons(name));
  }

  return (
    <div>
      <input
        className={styles.inputSearch}
        onChange={(e) => handleInput(e)}
        type="text"
        placeholder="Buscar..."
      />

      <button className={styles.fullrounded} onClick={(e) => handleSubmit(e)} type="submit">
      <span>Buscar</span>
      <div className="border full-rounded"></div>
      </button>
    </div>
  );
}

