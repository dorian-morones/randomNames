import React, { FunctionComponent } from 'react';
import {
  Container,
  Text
} from './styles/';

interface DisplayProps {
  showName:string,
}

const Display: FunctionComponent<DisplayProps> = (props) => {
  const {showName} = props;

  return (
      <Container>
        <Text>{showName !== '' ? showName : 'Set filters and click the button'}</Text>
      </Container>
  );
};

export default Display;
