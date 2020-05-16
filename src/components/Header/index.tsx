import React, { FunctionComponent } from "react";
import CountryFilters from "../CountriesFilter";
import GenderFilter from "../GenderFilter";
import { Container, Col } from "./styles";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = (props: any) => {
  return (
    <Container>
      <Col><CountryFilters /></Col>
      <Col><GenderFilter /></Col>
    </Container>
  );
};

export default Header;
