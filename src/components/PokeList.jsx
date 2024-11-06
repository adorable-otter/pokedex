import styled from 'styled-components';
import MOCK_DATA from '../data';
import PokeCard from './PokeCard';
import { CardList } from '../styles/card';
import { isEmpty } from '../modules/util';

const PokeList = ({ selectedPokeList, setSelectedPokeList }) => {
  const handleAddBtnClick = (newSelectedPoke) => {
    const newPokeList = [...selectedPokeList];
    const idxForNew = newPokeList.findIndex((poke) => isEmpty(poke));
    if (idxForNew === -1) return alert('최대 6마리까지 추가할 수 있습니다.');
    if (newPokeList.find((poke) => poke.id === newSelectedPoke.id) !== undefined) {
      return alert('동일한 포켓몬을 추가할 수 없습니다.');
    }
    newPokeList[idxForNew] = newSelectedPoke;
    setSelectedPokeList(newPokeList);
  };

  return (
    <ListWrap>
      <CardList>
        {MOCK_DATA.map((poke) => (
          <PokeCard
            key={poke.id}
            poke={poke}
            btnLabel="추가"
            handleBtnClick={() => handleAddBtnClick(poke)}
          />
        ))}
      </CardList>
    </ListWrap>
  );
};

const ListWrap = styled.section`
  width: 70%;
  background-color: aliceblue;
`;

export default PokeList;
