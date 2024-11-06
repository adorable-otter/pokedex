import Dashboard from '../components/Dashboard';
import PokeList from '../components/PokeList';

const Dex = () => {
  return (
    <>
      <Dashboard />
      <PokeList />
    </>
  );
};

// const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;
// 이런 모양으로 상속 가능

export default Dex;
