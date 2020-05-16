import React, { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Display from "./components/Display";
import styled from "styled-components/macro";
import { generateName, filteredData } from "./utils/generateName";
import { Footer } from "./components/Footer";

export const Container = styled.div`
  width: 400px;
  margin: auto;
  padding: 20px;
  margin-top: 5%;
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.2);
`;

function App() {
  const [country, setCountry] = useState<string>("");
  const [gender, setGender] = useState<string>("male");
  const [disable, setDisable] = useState<boolean>(true);
  const [name, setName] = useState<string>("");

  const handleFilter = (key: string, val: string) => {
    key === "country" && setCountry(val);
    key === "gender" && setGender(val);
    country !== "" && setDisable(false);
  };

  const randomName = () => {
    let data = filteredData(country);
    let fullName = generateName(data, gender);
    setName(fullName);
  };

  return (
    <>
      <Container>
        <Header country={handleFilter} gender={handleFilter} />
        <Display showName={name} />
        <Button generate={() => randomName()} disable={disable} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
