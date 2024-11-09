import styled, { css } from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  width: 50px;
  height: 30px;
  color: white;
  background-color: #f14747;
`;

export const LargeButtonStyle = css`
  padding: 10px 20px 10px 20px;
  width: auto;
  height: auto;
`;

const AddButtonStyle = css`
  background-color: cornflowerblue;
`;

export const BackButtonStyle = css`
  background-color: black;
`;

export const AddButton = styled(Button)`
  ${AddButtonStyle}
`;

export const LargeButton = styled(Button)`
  ${LargeButtonStyle}
`;

export const LargeBackButton = styled(LargeButton)`
  ${BackButtonStyle}
`;
