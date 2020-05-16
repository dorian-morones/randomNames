import React, { FunctionComponent, useState } from "react";
import { Container, Row, Title, Item } from "./styles";

interface GenderProps {}

const GenderFilter: FunctionComponent<GenderProps> = (props: any) => {
  const [selected, setSelected] = useState<string>("");

  return (
    <Container>
      <Row>
        <Title>Selecte Gender</Title>
      </Row>
      <Row>
        <Item
          theme={{ color: selected === "Male" ? "gainsboro" : "#fff" }}
          onClick={() => setSelected("Male")}
        >
          Male
        </Item>
        <Item
          theme={{ color: selected === "Female" ? "gainsboro" : "#fff" }}
          onClick={() => setSelected("Female")}
        >
          Female
        </Item>
      </Row>
    </Container>
  );
};

export default GenderFilter;
