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
  border-radius: 4px;
  padding: 12px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 4px 8px lightgrey;
`;

const CardImg = styled.div`
  background-image: url(${(props) => props.$url});
  width: 100%;
  padding-bottom: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export { CardList, Card, CardImg };
