import { useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import { PokemonContext } from '../context/pokemonContext';

const Dex = () => {
  const [selectedPokemonList, setSelectedPokemonList] = useState(new Array(6).fill({}));

  return (
    <>
      <PokemonContext.Provider
        value={{
          selectedPokemonList,
          setSelectedPokemonList,
        }}
      >
        <Dashboard />
        <PokemonList />
      </PokemonContext.Provider>
    </>
  );
};

export default Dex;
