import React from "react";
import { useSelector } from "react-redux";
import { Text, Image, View, Button, TouchableOpacity } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../styles/styles";
import getTypeImage from "../utils/getTypeImage";
export default function PokemonCard() {
  const { pokemonInfo } = useSelector((state) => state.pokeReducer);

  const navigator = useNavigation();
  return (
    <>
      <View style={styles.cardContainer}>
        <View style={styles.test}>
          <Text>{pokemonInfo.name}</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            resizeMode="stretch"
            source={pokemonInfo.sprites.front_default}
            style={styles.pokemonImg}
          />
        </View>

        <View style={styles.infosContainer}>
          <View style={styles.infos}>
            <Text>Peso: {pokemonInfo.height}</Text>
          </View>

          <View style={styles.infos}>
            <Text>Altura: {pokemonInfo.weight}</Text>
          </View>
        </View>

        <View >
          <Text>Habilidades</Text>
          <View>
            {pokemonInfo.abilities.map((val) => (
              <Text key={val.ability.name}>{val.ability.name}</Text>
            ))}
          </View>
        </View>

        <View style={styles.typeContainer}>
          <Text>Tipos</Text>
          <View styles={styles.typeContainer}>
          {pokemonInfo.types.map((val) => (
            <Image style={styles.typeImage} key={val.type.name} source={getTypeImage(val.type.name)}/>
            ))}
            </View>
        </View>

        <TouchableOpacity
            style={styles.appImage}
            onPress={() => {
              navigator.goBack();
            }}>
          <Text> Retornar ao inicio </Text>
          </TouchableOpacity>
      </View>
    </>
  );
}
