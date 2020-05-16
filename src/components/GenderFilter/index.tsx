
import React, { FunctionComponent } from "react";
import {
  Container,
  Row,
  Title,
  Item
} from "./styles";

interface GenderProps {}

const GenderFilter: FunctionComponent<GenderProps> = (props: any) => {
  return (
    <Container>
      <Row>
        <Title>Selecte Gender</Title>
      </Row>
      <Row>
        <Item>Male</Item>
        <Item>Female</Item>
      </Row>
    </Container>
  );
};

export default GenderFilter;
