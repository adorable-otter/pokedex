import { useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokeList from '../components/PokeList';

const Dex = () => {
  const [selectedPokeList, setSelectedPokeList] = useState(new Array(6).fill({}));

  return (
    <>
      <Dashboard selectedPokeList={selectedPokeList} setSelectedPokeList={setSelectedPokeList}  />
      <PokeList selectedPokeList={selectedPokeList} setSelectedPokeList={setSelectedPokeList}/>
    </>
  );
};

export default Dex;
