import React from "react";
import { View, Text, Button } from "react-native-web";
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
          <Text styles={styles.cardTitle}>{name}</Text>
          <Button
            title="Dados do pokemon"
            style={styles.cardButton}
            onPress={() => {
              dispatch(getPokemonData(id));
              navigator.navigate("ViewPokemon");
            }}
          />
        </View>
      ))}
    </>
  );
}
