import { useDispatch } from 'react-redux';
import { AddButton } from '../styles/button';
import { addPokemon } from '../redux/slices/selectedPokemonSlice';

const AddPokemonButton = ({ pokemon, className }) => {
  const dispatch = useDispatch();

  const handleAddBtnClick = (e, newSelectedPokemon) => {
    e.stopPropagation();
    dispatch(addPokemon(newSelectedPokemon));
  };

  return (
    <AddButton className={className} onClick={(e) => handleAddBtnClick(e, pokemon)}>
      추가
    </AddButton>
  );
};

export default AddPokemonButton;
