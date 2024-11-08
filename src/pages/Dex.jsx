import { useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';

const Dex = () => {
  const [selectedPokemonList, setSelectedPokemonList] = useState(new Array(6).fill({}));

  return (
    <>
      <Dashboard
        selectedPokemonList={selectedPokemonList}
        setSelectedPokemonList={setSelectedPokemonList}
      />
      <PokemonList
        selectedPokemonList={selectedPokemonList}
        setSelectedPokemonList={setSelectedPokemonList}
      />
    </>
  );
};

export default Dex;
