import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import {pokemonReducer} from '../reducers/exampleReducer';
import pokeReducer from "./reducers";
const rootReducer = combineReducers({ pokeReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
