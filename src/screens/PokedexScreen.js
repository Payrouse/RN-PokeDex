import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/Pokemon";
import PokemonList from "../components/PokemonList";

export default function PokedexScreen() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Estado para rastrear la carga

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    if (isLoading) return; // Evita múltiples llamadas simultáneas
    setIsLoading(true); // Establece el estado de carga

    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);

      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]); // Agrega los nuevos Pokémon al estado
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Libera el estado de carga
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}
