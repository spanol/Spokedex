import React from "react";
import { View, Text, SafeAreaView } from "react-native-web";

import { styles } from "../styles/styles";
import PokemonCard from "../components/PokemonCard";

export const ViewPokemon = () => {

  return (
    <SafeAreaView>
      <View style={styles.top}>
        <Text style={styles.topTitle}>DADOS DO POKEMON ESCOLHIDO:</Text>
      </View>
      <PokemonCard />
    </SafeAreaView>
  );
};
