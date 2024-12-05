import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Navigation />
    </NavigationContainer>
  );
}
