export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMONINFO = "GET_POKEMONINFO";

export const getPokemons = (url) => {
  try {
    return async (dispatch) => {
      const result = await fetch(url);
      const resp = await result.json();
      if (resp) {
        dispatch({
          type: GET_POKEMONS,
          payload: resp,
        });
      } else {
        console.log("unable to fetch");
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonData = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/`;
  try {
    return async (dispatch) => {
      const result = await fetch(url + id);
      const resp = await result.json();
      if (resp) {
        dispatch({
          type: GET_POKEMONINFO,
          payload: resp,
        });
      } else {
        console.log("Unable to get data");
      }
    };
  } catch (error) {
    console.log(error);
  }
};