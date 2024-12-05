import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Account from "../screens/AccountScreen";

const Stack = createStackNavigator();
export default function FavoritesNavigation() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Favorites"
          component={Account}
          options={{ title: "Cuenta" }}
        />
      </Stack.Navigator>
    </>
  );
}
