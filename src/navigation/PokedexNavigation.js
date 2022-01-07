import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitleAlign: "center", headerShadowVisible: false }}
    >
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        // options={{ title: "Pokedex" }}
        options={{ title: "", headerTransparent: true }}
        // options={{
        //   title: "hola",
        //   headerStyle: {
        //     backgroundColor: "#f4511e",
        //   },

        //   headerTitleStyle: {
        //     fontWeight: "bold",
        //     color: "#fff",
        //   },
        // }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
