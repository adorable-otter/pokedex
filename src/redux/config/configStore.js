import { configureStore } from '@reduxjs/toolkit';
import selectedPokemonSlice from '../slices/selectedPokemonSlice';

const store = configureStore({
  reducer: {
    selectedPokemonList: selectedPokemonSlice,
  },
});

export default store;
