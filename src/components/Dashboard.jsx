import styled from 'styled-components';
import MOCK_DATA from '../data';

const Dashboard = () => {
  const selectedList = MOCK_DATA.slice(0, 6);
  selectedList.push({});

  return (
    <BoardWrap>
      <h2>나만의 포켓몬</h2>
      <CardList>
        {selectedList.map((selected, idx) => (
          <DashboardCard key={idx}>
            <EmptyPokeImg />
          </DashboardCard>
        ))}
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
`;

const EmptyPokeImg = styled.div`
  background-image: url('/src/assets/pokeball.png');
  width: 100%;
  padding-bottom: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CardList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export default Dashboard;
