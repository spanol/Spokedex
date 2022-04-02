import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native-web";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../styles/styles";
import { getPokemonData } from "../redux/actions";

export default function PokemonList({pokeSearch}) {
  const { pokemon } = useSelector(
    (state) => state.pokeReducer
  );
  const dispatch = useDispatch();
  const navigator = useNavigation();

  return (
    <>
      {pokemon
        .filter((val) => {
          if (pokeSearch === "") {
            return val;
          } else if (val.name.toLowerCase().includes(pokeSearch.toLowerCase())) {
            return val;
          }
        }).map(({ name, id }) => (
        <View style={styles.cardContainer} key={id}>
          <View style={styles.pokemonName}>
          <Text>{name}</Text>
          </View>
          <View>
            <TouchableOpacity
            style={styles.appImage}
            onPress={() => {
              dispatch(getPokemonData(id));
              navigator.navigate("ViewPokemon");
            }}>
          {/* <Button
            title="Dados do pokemon"
            style={styles.cardButton}
            onPress={() => {
              dispatch(getPokemonData(id));
              navigator.navigate("ViewPokemon");
            }}
            /> */}
            <Text>Dados do pokemon</Text>
          <Image source={"https://pngset.com/images/download-free-pokeball-pokeball-label-text-symbol-number-transparent-png-2555531.png"}/>
          </TouchableOpacity>
          </View>
        </View>
      ))}
    </>
  );
}
