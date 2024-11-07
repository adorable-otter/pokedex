import styled from 'styled-components';
import PokemonCard from './PokemonCard';
import { isEmpty } from '../modules/util';
import { CardButton, CardList } from '../styles/card';

const Dashboard = ({ selectedPokeList, setSelectedPokeList }) => {
  const handleDeleteBtnClick = (e, id) => {
    e.stopPropagation();
    const newPokeList = selectedPokeList.filter((pokemon) => pokemon.id !== id);
    while (newPokeList.length < 6) newPokeList.push({});
    setSelectedPokeList(newPokeList);
  };

  const createCard = (pokemon, idx) => {
    const { img_url, korean_name, id } = pokemon;
    return isEmpty(pokemon) ? (
      <DashboardCard key={idx + 255}>
        <EmptyPokeImg />
      </DashboardCard>
    ) : (
      <PokemonCard
        key={pokemon.id}
        pokemon={{ img_url, korean_name, id }}
        buttonComponent={createDeleteButton(pokemon)}
      />
    );
  };

  const createDeleteButton = (pokemon) => (
    <CardButton onClick={(e) => handleDeleteBtnClick(e, pokemon.id)}>삭제</CardButton>
  );
  return (
    <BoardWrap>
      <h2>나만의 포켓몬</h2>
      <CardList>{selectedPokeList.map((pokemon, idx) => createCard(pokemon, idx))}</CardList>
    </BoardWrap>
  );
};

const BoardWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  border-radius: 4px;
  background-color: aliceblue;
  margin-bottom: 20px;
`;

const DashboardCard = styled.li`
  list-style: none;
  width: 10%;
  border: 3px dotted gray;
  padding: 10px;
`;

const EmptyPokeImg = styled.div`
  background-image: url('/src/assets/pokeball.png');
  width: 100%;
  padding-bottom: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Dashboard;
