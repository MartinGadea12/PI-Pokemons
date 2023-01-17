import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export default function LandingPage() {
  return (
    <div className={styles.cards}>
    <div className={styles.image}>
      <div className={styles.container}>
    
          <p className={styles.name}>BIENVENIDO A TU POKEDEX</p>
          <p className ={styles.info}>Donde podrás encontrar y crear tus pokemones favoritos!</p>
        </div>
        <Link to="/home">
          <button className={styles.button}>Ingresar</button>
        </Link>
        </div>
    </div>
  );
}
