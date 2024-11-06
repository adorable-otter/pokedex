import styled from 'styled-components';
import PokeCard from './PokeCard';
import { isEmpty } from '../modules/util';
import { CardList } from '../styles/card';

const Dashboard = ({ selectedPokeList, setSelectedPokeList }) => {
  const handleDeleteBtnClick = (id) => {
    const newPokeList = selectedPokeList.filter((poke) => poke.id !== id);
    while (newPokeList.length < 6) {newPokeList.push({})};
    setSelectedPokeList(newPokeList);
  };

  return (
    <BoardWrap>
      <h2>나만의 포켓몬</h2>
      <CardList>
        {selectedPokeList.map((poke, idx) =>
          isEmpty(poke) ? (
            <DashboardCard key={idx + 255}>
              <EmptyPokeImg />
            </DashboardCard>
          ) : (
            <PokeCard
              key={poke.id}
              poke={poke}
              btnLabel="삭제"
              handleBtnClick={() => handleDeleteBtnClick(poke.id)}
            />
          )
        )}
      </CardList>
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
  width: 10%;
  border: 3px dotted gray;
  padding: 10px;
  list-style: none;
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
