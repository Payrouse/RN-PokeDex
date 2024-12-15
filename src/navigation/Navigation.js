import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { Image } from "react-native";

import FavoritesNavigation from "./FavoritesNavigation.js";
import AccountNavigation from "./AccountNavigation.js";
import PokedexNavigation from "./PokedexNavigation.js";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-outline" color={color} size={size} />
          ),
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        }}
      />

      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => renderPokeball(focused),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="star-outline" color={color} size={size} />
          ),
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball(focused) {
  return (
    <Image
      source={require("../../assets/menu/pokeball.png")}
      style={{
        width: 75,
        height: 75,
        top: -15,
        transform: [{ scale: focused ? 1.1 : 1 }], // Aumenta el tamaño cuando está activo
        opacity: focused ? 1 : 0.7, // Disminuye la opacidad cuando está inactivo
      }}
    />
  );
}
