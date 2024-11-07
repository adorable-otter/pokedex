import styled from 'styled-components';

const CardList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 15%;
`;

const CardButton = styled.button`
  border: none;
  border-radius: 4px;
  width: 50px;
  height: 30px;
  color: white;
  background-color: #f14747;
`;

export { CardList, Card, CardButton };
