import { Button } from '../styles/button';
import { removePokemon } from '../redux/slices/selectedPokemonSlice';
import { useDispatch } from 'react-redux';

const RemovePokemonButton = ({ pokemonId, className }) => {
  const dispatch = useDispatch();

  const handleDeleteBtnClick = (e, id) => {
    e.stopPropagation();
    dispatch(removePokemon(id));
  };

  return (
    <Button className={className} onClick={(e) => handleDeleteBtnClick(e, pokemonId)}>
      삭제
    </Button>
  );
};

export default RemovePokemonButton;
