import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Logo />
      <StartButton onClick={() => navigate('/dex')}>포켓몬 도감 시작하기</StartButton>
    </>
  );
};

const Logo = styled.div`
  width: 40%;
  padding-bottom: 14%;
  background-image: url('/src/assets/pokemon-logo.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 30px;
`;

const StartButton = styled.button`
  padding: 20px;
  font-size: 1.2rem;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
`;

export default Home;
