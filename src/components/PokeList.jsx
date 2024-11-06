import styled from 'styled-components';
import MOCK_DATA from '../data';
import PokeCard from './PokeCard';

const PokeList = () => {
  return (
    <ListWrap>
      <CardList>
        {MOCK_DATA.map((poke) => (
          <PokeCard key={poke.id} poke={poke} />
        ))}
      </CardList>
    </ListWrap>
  );
};

const ListWrap = styled.section`
  width: 70%;
  background-color: aliceblue;
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

export default PokeList;
