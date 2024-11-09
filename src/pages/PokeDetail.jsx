import { useNavigate, useParams } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';
import MOCK_DATA from '../data';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { LargeBackButton, LargeButtonStyle } from '../styles/button';
import AddPokemonButton from '../components/AddPokemonButton';
import RemovePokemonButton from '../components/RemovePokemonButton';

const PokeDetail = () => {
  const navigate = useNavigate();
  const { selectedPokemonList } = useSelector((state) => state.selectedPokemonList);
  const { id } = useParams();
  const { img_url, korean_name, types, description } = MOCK_DATA[id - 1];

  const createBackButton = () => (
    <LargeBackButton onClick={() => navigate(-1)} key={'back'}>
      뒤로 가기
    </LargeBackButton>
  );

  const createSelectToggle = (pokemon) => {
    if (selectedPokemonList.find((pokemon) => pokemon.id === +id)) {
      return <LargeRemovePokemonButton pokemonId={pokemon.id} key={'remove'} />;
    }
    return <LargeAddPokemonButton pokemon={pokemon} key={'add'} />;
  };

  return (
    <CardWrap>
      <DetailCard
        pokemon={{ img_url, korean_name, types, description }}
        buttonComponents={[createBackButton(), createSelectToggle(MOCK_DATA[id - 1])]}
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

const LargeAddPokemonButton = styled(AddPokemonButton)`
  ${LargeButtonStyle}
`;

const LargeRemovePokemonButton = styled(RemovePokemonButton)`
  ${LargeButtonStyle}
`;

export default PokeDetail;
