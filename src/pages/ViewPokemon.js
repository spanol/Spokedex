import React from "react";
import { View, Text, SafeAreaView } from "react-native-web";

import { styles } from "../styles/styles";
import PokemonList from "../components/PokemonList";

export const ViewPokemon = () => {

  return (
    <SafeAreaView>
      <View style={styles.top}>
        <Text style={styles.topTitle}>DADOS DO POKEMON ESCOLHIDO:</Text>
      </View>
      <PokemonList />
    </SafeAreaView>
  );
};
