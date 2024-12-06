import { StyleSheet, Text, FlatList } from "react-native";
import React from "react";

export default function PokemonList(props) {
  //console.log(props);
  const { pokemons } = props;
  return (
    <FlatList
      data={pokemons}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      contentContainerStyle={styles.flatListConatiner}
    />
  );
}

const styles = StyleSheet.create({
  flatListConatiner: {
    paddingHorizontal: 8,
  },
});
