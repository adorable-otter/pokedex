import { configureStore } from '@reduxjs/toolkit';
import selectedPokemonSlice from '../slices/selectedPokemonSlice';
import { toast } from 'sonner';

const messageMiddleware = () => (next) => (action) => {
  try {
    const result = next(action);
    const successMessage = action.meta.successMessage;
    if (successMessage) toast.success(action.meta.successMessage);
    console.log(result);
    return result;
  } catch (error) {
    toast.error(error.message);
  }
};

const store = configureStore({
  reducer: {
    selectedPokemonList: selectedPokemonSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(messageMiddleware),
});

export default store;
