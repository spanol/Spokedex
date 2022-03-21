import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import { store } from "./src/redux/store";
import Home from "./src/pages/Home";
import { ViewPokemon } from "./src/pages/ViewPokemon";

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ViewPokemon" component={ViewPokemon} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
