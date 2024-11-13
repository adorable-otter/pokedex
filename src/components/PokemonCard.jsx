import styled from 'styled-components';
import { Card, CardImg } from '../styles/card';

const PokemonCard = ({ pokemon, className, buttonComponents, onClick }) => {
  return (
    <Card className={className} onClick={() => onClick && onClick(pokemon.id)}>
      <CardImg $url={pokemon.img_url} />
      <CardTitle>{pokemon.korean_name}</CardTitle>
      {pokemon.id && <PokemonNo>No.{String(pokemon.id).padStart(3, '0')}</PokemonNo>}
      {pokemon.types && <span>타입 : {pokemon.types.join(', ')}</span>}
      {pokemon.description && <span>{pokemon.description}</span>}
      <ButtonsWrap>{buttonComponents.map((component) => component)}</ButtonsWrap>
    </Card>
  );
};

const CardTitle = styled.span`
  font-weight: bold;
`;

const PokemonNo = styled.span`
  color: #6d6d6d;
`;

const ButtonsWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export default PokemonCard;
