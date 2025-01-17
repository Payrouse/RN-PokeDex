import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Favorites from "../screens/FavoritesScreen";

const Stack = createStackNavigator();
export default function FavoritesNavigation() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="FavoritesScreen"
          component={Favorites}
          options={{ title: "Favoritos" }}
        />
      </Stack.Navigator>
    </>
  );
}
