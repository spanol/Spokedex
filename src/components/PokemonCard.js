import React from "react";
import { useSelector } from "react-redux";
import { Text, Image, View, Button } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../styles/styles";

export default function PokemonCard() {
  const { pokemonInfo } = useSelector((state) => state.pokeReducer);

  const navigator = useNavigation();
  return (
    <>
      <View style={styles.cardContainer}>
        <Text>{pokemonInfo.species.name}</Text>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="stretch"
            source={pokemonInfo.sprites.front_default}
            style={styles.pokemonImg}
          />
        </View>
        <Text style={styles.pokemonName}>{pokemonInfo.forms.name}</Text>
        <Text>Peso: {pokemonInfo.height}</Text>
        <Text>Altura: {pokemonInfo.weight}</Text>
        <Button title="Retornar ao inicio" onPress={() => navigator.goBack()} />
      </View>
    </>
  );
}
