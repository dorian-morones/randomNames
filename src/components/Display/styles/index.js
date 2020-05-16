import styled from 'styled-components/macro';

export const Container = styled.div`
  border: solid 2px #000;
  background-color: #eee;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  width: 100%;
  text-align: center;
  align-self: center;
  font-size: 18px;
`;

export const Button = styled.button`
  border: 0px;
  padding: 5px 10px;
  background-color: ${(props) => props.theme.color};
`;
