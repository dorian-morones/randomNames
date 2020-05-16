import React, { FunctionComponent } from 'react';
import {
  Btn
} from './styles';

interface ButtonProps {
  generate: any;
  disable: boolean;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { generate, disable } = props;
  let bk = disable === true ? 'grey' : 'gold';

  return (
      <Btn theme={{color: bk}} onClick={() => generate()} disabled={disable}>
        Random
      </Btn>
  );
};

export default Button;
