import styled from 'styled-components';
import { Card } from '../styles/card';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ pokemon, className, buttonComponent }) => {
  const navigate = useNavigate();
  const handleCardClick = (id) => navigate(`/detail/${id}`);

  return (
    <Card className={className} onClick={() => handleCardClick(pokemon.id)}>
      <CardImg $url={pokemon.img_url} />
      <div>{pokemon.korean_name}</div>
      <span>No.{pokemon.id}</span>
      {pokemon.types ? <span>타입 : {pokemon.types}</span> : null}
      {pokemon.description ? <span>{pokemon.description}</span> : null}
      {buttonComponent}
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

export default PokemonCard;
