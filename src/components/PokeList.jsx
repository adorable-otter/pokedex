import styled from 'styled-components';
import MOCK_DATA from '../data';
import PokemonCard from './PokemonCard';
import { CardButton, CardList } from '../styles/card';
import { isEmpty } from '../modules/util';

const PokeList = ({ selectedPokeList, setSelectedPokeList }) => {
  const handleAddBtnClick = (e, newSelectedPoke) => {
    e.stopPropagation();
    const newPokeList = [...selectedPokeList];
    const idxForNew = newPokeList.findIndex((pokemon) => isEmpty(pokemon));
    if (idxForNew === -1) return alert('최대 6마리까지 추가할 수 있습니다.');
    if (newPokeList.find((pokemon) => pokemon.id === newSelectedPoke.id) !== undefined) {
      return alert('동일한 포켓몬을 추가할 수 없습니다.');
    }
    newPokeList[idxForNew] = newSelectedPoke;
    setSelectedPokeList(newPokeList);
  };

  const createAddButton = (pokemon) => (
    <CardButton onClick={(e) => handleAddBtnClick(e, pokemon)}>추가</CardButton>
  );

  return (
    <ListWrap>
      <CardList>
        {MOCK_DATA.map((pokemon) => {
          const { id, korean_name, img_url } = pokemon;
          return (
            <PokemonCard
              key={pokemon.id}
              pokemon={{ id, korean_name, img_url }}
              buttonComponent={createAddButton(pokemon)}
            />
          );
        })}
      </CardList>
    </ListWrap>
  );
};

const ListWrap = styled.section`
  width: 70%;
  background-color: aliceblue;
`;

export default PokeList;
