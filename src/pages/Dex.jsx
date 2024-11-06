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

// const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;
// 이런 모양으로 상속 가능

export default Dex;
