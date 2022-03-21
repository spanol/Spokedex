import React from 'react';
import { View,Text, TextInput } from 'react-native-web';

import { styles } from '../styles/styles';

export const Header = ({pokeSearch, setPokeSearch}) => {
    return(
        <View style={styles.top}>
        <Text style={styles.topTitle}>ESCOLHA SEU POKÉMON</Text>
        <TextInput
        style={styles.headerInput}
        value={pokeSearch}
        onChange={(e) => setPokeSearch(e.target.value)}
        placeholder="Procure por um pokemon..."
        />
         </View>
    )
}