import styled from 'styled-components';
import MOCK_DATA from '../data';
import PokemonCard from './PokemonCard';
import { CardButton, CardList } from '../styles/card';
import { useNavigate } from 'react-router-dom';
import { addPokemon } from '../redux/slices/selectedPokemonSlice';
import { useDispatch } from 'react-redux';

const PokemonList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddBtnClick = (e, newSelectedPokemon) => {
    e.stopPropagation();
    dispatch(addPokemon(newSelectedPokemon));
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

export default PokemonList;
