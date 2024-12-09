import { StyleSheet, Text, FlatList } from "react-native";
import React from "react";
import PokemonCard from "./PokemnCard";

export default function PokemonList(props) {
  //console.log(props);
  const { pokemons } = props;
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListConatiner}
    />
  );
}

const styles = StyleSheet.create({
  flatListConatiner: {
    paddingHorizontal: 8,
  },
});
