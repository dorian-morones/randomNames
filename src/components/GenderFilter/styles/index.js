import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.p`
  text-align: center;
  width: 100%;
  font-weight: 600;
`;

export const Item = styled.p`
  text-align: center;
  flex: 50%;
  &:hover{
    background-color: aqua;
  }
`;