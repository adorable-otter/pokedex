import styled from 'styled-components';
import { Card, CardImg } from '../styles/card';

const PokemonCard = ({ pokemon, className, buttonComponent, onClick }) => {

  return (
    <Card className={className} onClick={() => onClick && onClick(pokemon.id)}>
      <CardImg $url={pokemon.img_url} />
      <CardTitle>{pokemon.korean_name}</CardTitle>
      {pokemon.id ? <span>No.{String(pokemon.id).padStart(3, '0')}</span> : null}
      {pokemon.types ? <span>타입 : {pokemon.types.join(', ')}</span> : null}
      {pokemon.description ? <span>{pokemon.description}</span> : null}
      {buttonComponent}
    </Card>
  );
};

const CardTitle = styled.span`
  font-weight: bold;
`;

export default PokemonCard;
