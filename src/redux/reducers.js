import { GET_POKEMONS } from "./actions";
import { GET_POKEMONINFO } from "./actions";
const initialState = {
  pokemonInfo: [],
  pokemon: [],
};

const pokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemon: action.payload.results.map((data, i) => ({
          id: i + 1,
          name: data.name,
        })),
      };
    case GET_POKEMONINFO:
      return {
        ...state,
        pokemonInfo: action.payload,
      };
    default:
      return state;
  }
};
export default pokeReducer;
