import styled from 'styled-components';
import MOCK_DATA from '../data';
import PokemonCard from './PokemonCard';
import { CardButton, CardList } from '../styles/card';
import { isEmpty } from '../modules/util';
import { useNavigate } from 'react-router-dom';

const PokeList = ({ selectedPokeList, setSelectedPokeList }) => {
  const navigate = useNavigate();

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

  const handleCardClick = (id) => navigate(`/detail/${id}`);

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
              onClick={handleCardClick}
            />
          );
        })}
      </CardList>
    </ListWrap>
  );
};

const ListWrap = styled.section`
  width: 70%;
  background-color: rgb(248, 248, 248);
  padding: 20px;
  border-radius: 8px;
`;

export default PokeList;
