import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getPokemonsApi, getPokemonDetailsApi } from "../api/pokemon";

export default function Pokedex() {
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const pokemonsResponse = await getPokemonsApi();
      const pokemonsArray = [];
      for await (const pokemon of pokemonsResponse.results) {
        const pokemonDetails = await getPokemonDetailsApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
        console.log("hola");
      }
      setAllPokemons([...allPokemons, ...pokemonsArray]);
      console.log(allPokemons);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Pokedex</Text>
    </View>
  );
}
