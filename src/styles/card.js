import styled from 'styled-components';

const CardList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  padding: 20px;
`;

const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 12%;
  gap: 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 12px;
  background-color: rgb(255, 255, 255);
`;

const CardButton = styled.button`
  border: none;
  border-radius: 4px;
  width: 50px;
  height: 30px;
  color: white;
  background-color: #f14747;
`;

const CardImg = styled.div`
  background-image: url(${(props) => props.$url});
  width: 100%;
  padding-bottom: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export { CardList, Card, CardButton, CardImg };
