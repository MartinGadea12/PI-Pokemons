import React from "react";
import styles from './Pagination.module.css';

const Pagination = ({ pokemonsPage, allPokemons , pagination }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <span className={styles.pagination}>
        {pageNumbers?.map((number) => (
          <li className={styles.number} key={number}>
          <span onClick={() => { pagination(number)}} > {` ${number}`} </span>
          </li>
        ))}
      </span>
    </nav>
  );
};

export default Pagination;