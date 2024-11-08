import { useNavigate, useParams } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';
import MOCK_DATA from '../data';
import styled from 'styled-components';

const PokeDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { img_url, korean_name, types, description } = MOCK_DATA[id - 1];

  const handleBackButtonClick = (e) => {
    e.stopPropagation();
    navigate(-1);
  };

  const createBackButton = () => <BackButton onClick={(e) => handleBackButtonClick(e)}>뒤로 가기</BackButton>;

  return (
    <CardWrap>
      <DetailCard
        pokemon={{ img_url, korean_name, types, description }}
        buttonComponent={createBackButton()}
      />
    </CardWrap>
  );
};

const CardWrap = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`;

const DetailCard = styled(PokemonCard)`
  width: auto;
  background-color: inherit;
  border: none;
  box-shadow: none;
`;

const BackButton = styled.button`
  border: none;
  border-radius: 4px;
  color: white;
  background-color: black;
  padding: 10px 20px 10px 20px;
`;

export default PokeDetail;
