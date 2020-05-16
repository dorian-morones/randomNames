import React, { FunctionComponent } from "react";
import CountryFilters from "../CountriesFilter";
import GenderFilter from "../GenderFilter";
import { Container, Col } from "./styles";

interface HeaderProps {
  country: any,
  gender: any,
}

const Header: FunctionComponent<HeaderProps> = (props: any) => {
  const { country, gender } = props;

  return (
    <Container>
      <Col><CountryFilters getCountry={country}/></Col>
      <Col><GenderFilter getGender={gender}/></Col>
    </Container>
  );
};

export default Header;
