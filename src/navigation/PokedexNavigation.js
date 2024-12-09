import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Pokedex from "../screens/PokedexScreen";
import Pokemon from "../screens/PokemonScreen";

const Stack = createStackNavigator();
export default function PokedexNavigation() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="PokedexScreen"
          component={Pokedex}
          options={{ title: "  ", headerTransparent: true }}
        />
      </Stack.Navigator>
      <Stack.Screen
        name="PokemonScreen"
        component={Pokemon}
        options={{ title: "Pokemon" }}
      />
    </>
  );
}
