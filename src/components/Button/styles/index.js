import styled from 'styled-components/macro';

export const Btn = styled.button`
  width: 100%;
  border: 0px;
  padding: 10px;
  font-weight: 600;
  background-color: ${(props) => props.theme.color};
`;