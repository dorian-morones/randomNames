import React, { FunctionComponent, useState, useEffect } from "react";
import { Container, Text, Button } from "./styles/";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface DisplayProps {
  showName: string;
}

const Display: FunctionComponent<DisplayProps> = (props) => {
  const { showName } = props;
  const [copy, setCopy] = useState<boolean>(false);
  let bk = copy === true ? '#abff30' : '#d2d2d2';

  useEffect(() => {
    setTimeout(() => {
      copy === true && setCopy(false);
    }, 1500)
  });

  return (
    <Container>
      <Text>
        {showName !== "" ? showName : "Set filters and click the button"}
      </Text>
      {showName !== "" ? (
        <CopyToClipboard onCopy={() => setCopy(true)} text={showName}>
          <Button theme={{color: bk}}>
            {copy === false ? "Copy to clipboard" : "Name copied"}
          </Button>
        </CopyToClipboard>
      ) : null}
    </Container>
  );
};

export default Display;
