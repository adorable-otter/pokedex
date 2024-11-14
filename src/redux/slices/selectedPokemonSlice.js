import { createSlice } from '@reduxjs/toolkit';
import { isEmpty } from '../../modules/util';

const initialState = { selectedPokemonList: new Array(6).fill({}) };

const selectedPokemonSlice = createSlice({
  name: 'selectedPokemonList',
  initialState: initialState,
  reducers: {
    addPokemon: {
      reducer: (state, action) => {
        const selectedPokemonList = state.selectedPokemonList;
        const newPokemon = action.payload;
        const idxForNew = selectedPokemonList.findIndex((pokemon) => isEmpty(pokemon));
        if (idxForNew === -1) throw new Error('최대 6마리까지 추가할 수 있습니다.');
        if (selectedPokemonList.find((pokemon) => pokemon.id === newPokemon.id) !== undefined) {
          throw new Error('동일한 포켓몬을 추가할 수 없습니다.');
        }
        selectedPokemonList[idxForNew] = newPokemon;
      },
      prepare: (payload) => ({
        payload: payload,
        meta: { successMessage: '포켓몬이 추가되었습니다.' },
      }),
    },
    removePokemon: {
      reducer: (state, action) => {
        const pokemonIdToRemove = action.payload;
        const newPokemonList = state.selectedPokemonList.filter(
          (pokemon) => pokemon.id !== pokemonIdToRemove
        );
        while (newPokemonList.length < 6) newPokemonList.push({});
        state.selectedPokemonList = newPokemonList;
      },
      prepare: (payload) => ({
        payload: payload,
        meta: { successMessage: '포켓몬이 제외되었습니다.' },
      }),
    },
  },
});

export const { addPokemon, removePokemon } = selectedPokemonSlice.actions;
export default selectedPokemonSlice.reducer;
