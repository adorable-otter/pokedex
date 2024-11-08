import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Dex from '../pages/Dex';
import styled from 'styled-components';
import PokeDetail from '../pages/PokeDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/detail/:id" element={<PokeDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ebcb91;
  min-height: 100vh;
  padding: 30px;
  margin: 0;
`;

export default Router;
