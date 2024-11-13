import styled from 'styled-components';
import { CardImg } from '../styles/card';

const EmptyPokemon = () => {
  const EMPTY_POKEMON_URL = '/public/pokeball.png';

  return (
    <ImageWrap>
      <CardImg $url={EMPTY_POKEMON_URL} />
    </ImageWrap>
  );
};

const ImageWrap = styled.li`
  list-style: none;
  width: 10%;
  border: 3px dotted gray;
  padding: 10px;
`;

export default EmptyPokemon;
