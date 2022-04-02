import React from "react";
import { View, Text, TextInput, Button } from "react-native-web";
import { useRoute } from "@react-navigation/native";

import { styles } from "../styles/styles";

export const Header = ({ pokeSearch, setPokeSearch }) => {
  const route = useRoute();
  function HomeHeader() {
    return (
      <>
        <Text style={styles.topTitle}>ESCOLHA SEU POKÉMON</Text>
        <TextInput
          style={styles.headerInput}
          value={pokeSearch}
          onChange={(e) => setPokeSearch(e.target.value)}
          placeholder="Procure por um pokemon..."
        />
      </>
    );
  }

  function ViewPokemonHeader() {
    return <Text style={styles.topTitle}>DADOS DO POKEMON ESCOLHIDO:</Text>;
  }

  return (
    <View style={styles.top}>
      {route.name === "Home" ? HomeHeader() : ViewPokemonHeader()}
    </View>
  );
};
