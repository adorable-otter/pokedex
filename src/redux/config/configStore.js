import { configureStore } from '@reduxjs/toolkit';
import selectedPokemonSlice from '../slices/selectedPokemonSlice';
import { toast } from 'sonner';

const errorMiddleware = () => (next) => (action) => {
  try {
    return next(action);
  } catch (error) {
    toast.error(error.message);
  }
};

const store = configureStore({
  reducer: {
    selectedPokemonList: selectedPokemonSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(errorMiddleware),
});

export default store;
