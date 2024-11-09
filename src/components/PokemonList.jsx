import styled from 'styled-components';
import MOCK_DATA from '../data';
import PokemonCard from './PokemonCard';
import { CardList } from '../styles/card';
import { useNavigate } from 'react-router-dom';
import AddPokemonButton from './AddPokemonButton';

const PokemonList = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => navigate(`/detail/${id}`);

  return (
    <ListWrap>
      <CardList>
        {MOCK_DATA.map((pokemon) => {
          const { id, korean_name, img_url } = pokemon;
          return (
            <PokemonCard
              key={pokemon.id}
              pokemon={{ id, korean_name, img_url }}
              buttonComponents={[<AddPokemonButton key={'add'} pokemon={pokemon} />]}
              onClick={handleCardClick}
            />
          );
        })}
      </CardList>
    </ListWrap>
  );
};

const ListWrap = styled.section`
  width: 70%;
  background-color: rgb(248, 248, 248);
  padding: 20px;
  border-radius: 8px;
`;

export default PokemonList;
