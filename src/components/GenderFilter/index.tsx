import React, { FunctionComponent, useState } from "react";
import { Container, Row, Title, Item } from "./styles";

interface GenderProps {
  getGender: any,
}

const GenderFilter: FunctionComponent<GenderProps> = (props: any) => {

  const { getGender } = props;
  const [selected, setSelected] = useState<string>("Male");

  const handleSelectCountry = (val:string) =>{
    setSelected(val);
    getGender('gender', val);
  }

  return (
    <Container>
      <Row>
        <Title>Selecte Gender</Title>
      </Row>
      <Row>
        <Item
          theme={{ color: selected === "Male" ? "gainsboro" : "#fff" }}
          onClick={() => handleSelectCountry("Male")}
        >
          Male
        </Item>
        <Item
          theme={{ color: selected === "Female" ? "gainsboro" : "#fff" }}
          onClick={() => handleSelectCountry("Female")}
        >
          Female
        </Item>
      </Row>
    </Container>
  );
};

export default GenderFilter;
