import React, { FunctionComponent, useState } from "react";
import { Container, Row, Title, Item } from "./styles";

interface GenderProps {
  getGender: any,
}

const GenderFilter: FunctionComponent<GenderProps> = (props: any) => {

  const { getGender } = props;
  const [selected, setSelected] = useState<string>("male");

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
          theme={{ color: selected === "male" ? "gainsboro" : "#fff" }}
          onClick={() => handleSelectCountry("male")}
        >
          Male
        </Item>
        <Item
          theme={{ color: selected === "female" ? "gainsboro" : "#fff" }}
          onClick={() => handleSelectCountry("female")}
        >
          Female
        </Item>
      </Row>
    </Container>
  );
};

export default GenderFilter;
