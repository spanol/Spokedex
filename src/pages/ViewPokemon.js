import React from "react";
import { View, Text, SafeAreaView } from "react-native-web";

import { styles } from "../styles/styles";
import PokemonCard from "../components/PokemonCard";
import { Header } from "../components/Header";

export const ViewPokemon = () => {
  return (
    <SafeAreaView>
      <Header />
      <PokemonCard />
    </SafeAreaView>
  );
};
