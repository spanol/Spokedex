import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

import { getPokemons, getPokemonData } from "../redux/actions";
import { Header } from "../components/Header";
import PokemonList from "../components/PokemonList";
import { styles } from "../styles/styles";

export default function Home() {
  const [pokeSearch, setPokeSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonListURL = `https://pokeapi.co/api/v2/pokemon?limit=100`;

  useEffect(() => {
    dispatch(getPokemons(pokemonListURL));
  }, []);

  useEffect(() => {
    dispatch(getPokemonData(1));
  }, []);

  return (
    <SafeAreaView style={styles.appBackground}>
      <Header pokeSearch={pokeSearch} setPokeSearch={setPokeSearch} />
      <PokemonList pokeSearch={pokeSearch} />
    </SafeAreaView>
  );
}
