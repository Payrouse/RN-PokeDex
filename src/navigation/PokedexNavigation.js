import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Pokedex from "../screens/PokedexScreen";
import Pokemon from "../screens/PokemonScreen";

const Stack = createStackNavigator();
export default function FavoritesNavigation() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Pokedex"
          component={Pokedex}
          options={{ title: "Pokedex" }}
        />
      </Stack.Navigator>
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{ title: "Pokemon" }}
      />
    </>
  );
}
