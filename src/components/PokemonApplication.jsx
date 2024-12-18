import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

const PokemonApplication = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const json = await response.json();
      setPokemons(json.results);
    };
    getPokemons();
  }, []);

  const getDetails = async () => {
    const response = await fetch(selectedPokemon);
    const json = await response.json();
    setPokemonDetails(json);
  };

  return (
    <>
      <div className="selector-container">
        <select onChange={(e) => setSelectedPokemon(e.target.value)}>
          <option>Select a Pokemon</option>
          {pokemons.map((pokemon, i) => {
            return (
              <option key={i} value={pokemon.url}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        <button
          onClick={() => {
            getDetails();
          }}
        >
          Get Pokemon Details
        </button>
      </div>
      {pokemonDetails && <Pokemon details={pokemonDetails} />}
    </>
  );
};

export default PokemonApplication;
