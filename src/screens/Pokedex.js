import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
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
      console.log("uno");
      console.log([...pokemons]);
      console.log("dos");

      console.log([...pokemonsArray]);
      console.log("resultado");

      setPokemons([...pokemons, ...pokemonsArray]);
      console.log(pokemons);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // <SafeAreaView>  // se coloco esto cuando es vista, pero con la lista no funcionaba , y al hacer scroll, la lista estaba en las notificacion
    // Asi que el SafeArea lo coloque en la lista, y ahi si funcion
    <PokemonList
      pokemons={pokemons}
      loadPokemons={loadPokemons}
      isNext={nextUrl}
    />
    // </SafeAreaView>
  );
}
