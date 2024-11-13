import styled from 'styled-components';
import { CardImg } from '../styles/card';
import EMPTY_POKEMON_URL from '/public/pokeball.png';

const EmptyPokemon = () => {
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
