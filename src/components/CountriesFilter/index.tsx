/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { FunctionComponent } from "react";
import { getCountries } from "../../utils/getCountries";
import { Container, Row, Title, Selecter } from "./styles";

interface FiltersProps {
  getCountry: any,
}

const CountryFilters: FunctionComponent<FiltersProps> = (props: any) => {
  const {getCountry} = props;
  const Countries = getCountries();

  const handleSelect = (event:any) => {
    getCountry('country', event.target.value);
  };

  return (
    <Container>
      <Row>
        <Title>Country</Title>
      </Row>
      <Row>
        <Selecter onChange={(event:any) => handleSelect(event)}>
          {Countries.map((item: any, index: number) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </Selecter>
      </Row>
    </Container>
  );
};

export default CountryFilters;
