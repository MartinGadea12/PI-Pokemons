import React from "react";
import styles from "./Card.module.css";

const Card = ({ name, image, types })  => {

  return (
    <div className={styles.card}>
      <div className={styles.card2}>
        <h2 className={styles.name}>{name}</h2>
        
        <img
          className={styles.img}
          src={image}
          alt="Image not found"
          width="200px"
          height="250px"
        />
        {/* <h1 className={styles.types}>{types}</h1> */}
      </div>
    </div>
  );
}

export default Card;
