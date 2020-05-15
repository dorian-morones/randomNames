import React, { FunctionComponent } from 'react';
import {
  Btn
} from './styles';

interface ButtonProps {

}

const Button: FunctionComponent<ButtonProps> = (props) => {
  return (
      <Btn>
        Random
      </Btn>
  );
};

export default Button;
