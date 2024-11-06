import styled from 'styled-components';
import { Card, CardButton } from '../styles/card';

const PokeCard = ({ poke, handleBtnClick, btnLabel}) => {
  return (
    <Card>
      <CardImg $url={poke.img_url} />
      <div>{poke.korean_name}</div>
      <div>No.{poke.id}</div>
      <CardButton onClick={handleBtnClick}>{btnLabel}</CardButton>
    </Card>
  );
};

const CardImg = styled.div`
  background-image: url(${(props) => props.$url});
  width: 100%;
  padding-bottom: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export default PokeCard;
