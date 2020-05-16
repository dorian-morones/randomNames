import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Display from './components/Display';
import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 400px;
  margin: auto;
  padding: 20px;
  margin-top: 5%;
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.2);
  box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.2);
`;

function App() {
  return (
    <Container>
      <Header />
      <Display />
      <Button />
    </Container>
  );
}

export default App;
