import styled from 'styled-components';
import { Card, CardImg } from '../styles/card';

const PokemonCard = ({ pokemon, className, buttonComponent, onClick }) => {
  return (
    <Card className={className} onClick={() => onClick && onClick(pokemon.id)}>
      <CardImg $url={pokemon.img_url} />
      <CardTitle>{pokemon.korean_name}</CardTitle>
      {pokemon.id ? <PokemonNo>No.{String(pokemon.id).padStart(3, '0')}</PokemonNo> : null}
      {pokemon.types ? <span>타입 : {pokemon.types.join(', ')}</span> : null}
      {pokemon.description ? <span>{pokemon.description}</span> : null}
      {buttonComponent}
    </Card>
  );
};

const CardTitle = styled.span`
  font-weight: bold;
`;

const PokemonNo = styled.span`
  color: #6d6d6d;
`;

export default PokemonCard;
