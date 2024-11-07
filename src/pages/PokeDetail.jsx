import { useParams } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';
import MOCK_DATA from '../data';
import styled from 'styled-components';

const PokeDetail = () => {
  const { id } = useParams();
  const detailCardButton = <BackButton onClick={null}>뒤로 가기</BackButton>;

  return (
    <CardWrap>
      <DetailCard pokemon={MOCK_DATA[id - 1]} buttonComponent={detailCardButton} />
    </CardWrap>
  );
};

const CardWrap = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`;

const DetailCard = styled(PokemonCard)`
  width: 100%;
`;

const BackButton = styled.button`
  border: none;
  border-radius: 4px;
  color: white;
  background-color: black;
  padding: 10px 20px 10px 20px;
`;

export default PokeDetail;
