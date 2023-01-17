//IMPORTO DEPENDENCIAS
import { React } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../Card/Card.module.css";

//IMPORTO LAS ACCIONES!
import {
  getPokemons,
  filterByType,
  filterByAttack,
  filterCreated,
  orderByName,
} from "../../redux/actions";

//IMPORTO LOS COMPONENTES!
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";

const Home =()  => {
  const dispatch = useDispatch();

  const allPokemons = useSelector((state) => state.pokemons); //Tengo todos los personajes que me traje del estado.

  const [currentPage, setCurrentPage] = useState(1); // Mi pagina arranca en 1,
  const [pokemonsPage] = useState(12); // Cuantos personajes por pagina quiero que se muestre.
  const lastPokemon = currentPage * pokemonsPage; // 12;
  const firstPokemon = lastPokemon - pokemonsPage; // 0;
  const currentPokemons = allPokemons.slice(firstPokemon, lastPokemon);

  const [orden ,setOrden] = useState("");

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
    setCurrentPage(1);
  }

  function handleFilterType(e) {
    e.preventDefault();
    dispatch(filterByType(e.target.value));
    setCurrentPage(1);
  }

  function handleFilterAttack(e) {
    e.preventDefault();
    dispatch(filterByAttack(e.target.value));
    setOrden(`orden ${e.target.value}`);
    setCurrentPage(1);
  }

  function handleFilterCreated(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`orden ${e.target.value}`);
  }

  return (
    <div>
      <Link className={styles.createPoke} to="/create">
        Crear Pokemon
      </Link>
      <nav className={styles.nav}>
        <br />
        <br />
        <h1 className={styles.titulo}>POKEDEX</h1>

        <SearchBar />

        <button
          className={styles.volverCargar}
          onClick={(event) => {
            handleClick(event);
          }}
        >
          Volver a cargar todos los pokemones
        </button>

        <ul className={styles.filtros}>
          <select onChange={(e) => handleSort(e)}>
            <option>
              A-Z
            </option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>

          <select onChange={(e) => handleFilterAttack(e)}>
            <option>Orden por ataque:</option>
            <option value="less">Más fuertes</option>
            <option value="more">Menos fuertes</option>
          </select>

          <select onChange={(e) => handleFilterType(e)}>
            <option value="All">Todos los tipos</option>
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
            <option value="ice">Ice</option>
            <option value="fairy">Fairy</option>
          </select>

          <select onChange={(e) => handleFilterCreated(e)}>
            <option value="All">Todos</option>
            <option value="create">Creados</option>
            <option value="api">Existentes</option>
          </select>
        </ul>
      </nav>
      <hr />
      <hr />

      <div className={styles.cards}>
        {currentPokemons?.map((e) => {
          return (
            <Link key={e.id} to={`/pokemons/${e.id}`}>
             <Card image={e.image} name={e.name} types={e.types} /> 
            </Link>
          );
        })}
      </div>

      <Pagination
        pokemonsPage={pokemonsPage}
        allPokemons={allPokemons.length}
        pagination={pagination}
      />
    </div>
  );
}

export default Home;