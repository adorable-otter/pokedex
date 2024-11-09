import styled from 'styled-components';
import PokemonCard from './PokemonCard';
import { isEmpty } from '../modules/util';
import { CardButton, CardList } from '../styles/card';
import EmptyPokemon from './EmptyPokemon';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removePokemon } from '../redux/slices/selectedPokemonSlice';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedPokemonList } = useSelector((state) => state.selectedPokemonList);

  const handleDeleteBtnClick = (e, id) => {
    e.stopPropagation();
    dispatch(removePokemon(id))
  };

  const handleCardClick = (id) => navigate(`/detail/${id}`);

  const createCard = (pokemon) => {
    const { img_url, korean_name, id } = pokemon;
    return isEmpty(pokemon) ? (
      <EmptyPokemon key={uuid()} />
    ) : (
      <SmallPokemonCard
        key={pokemon.id}
        pokemon={{ img_url, korean_name, id }}
        buttonComponent={createDeleteButton(id)}
        onClick={handleCardClick}
      />
    );
  };

  const createDeleteButton = (id) => (
    <CardButton onClick={(e) => handleDeleteBtnClick(e, id)}>삭제</CardButton>
  );

  return (
    <BoardWrap>
      <BoardTitle>나만의 포켓몬</BoardTitle>
      <CardList>{selectedPokemonList.map((pokemon, idx) => createCard(pokemon, idx))}</CardList>
    </BoardWrap>
  );
};

const BoardWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  border-radius: 8px;
  background-color: rgb(248, 248, 248);
  margin-bottom: 20px;
  padding: 20px;
`;

const BoardTitle = styled.h1`
  color: #e74767;
  font-size: 2.2rem;
  margin: 30px 0 30px;
`;

const SmallPokemonCard = styled(PokemonCard)`
  width: 10%;
`;

export default Dashboard;
