import styled from 'styled-components';

const PokeCard = ({ poke }) => {
  return (
    <Card>
      <CardImg url={poke.img_url} />
      <div>{poke.korean_name}</div>
      <div>No.{poke.id}</div>
      <CardButton>추가</CardButton>
    </Card>
  );
};

const CardButton = styled.button`
  width: 50px;
  height: 30px;
  color: white;
  background-color: #f14747;
  border: none;
`;

const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 15%;
`;

const CardImg = styled.div`
  background-image: url(${(props) => props.url});
  width: 100%;
  padding-bottom: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export default PokeCard;
