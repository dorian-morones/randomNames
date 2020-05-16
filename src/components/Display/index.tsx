import React, { FunctionComponent } from 'react';
import {
  Container,
  Text
} from './styles/';

interface DisplayProps {

}

const Display: FunctionComponent<DisplayProps> = (props) => {
  return (
      <Container>
        <Text>Names</Text>
      </Container>
  );
};

export default Display;
