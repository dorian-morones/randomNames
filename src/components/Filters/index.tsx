/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { FunctionComponent } from "react";
import { getCountries } from "../../utils/getCountries";

interface FiltersProps {}

const Filters: FunctionComponent<FiltersProps> = (props: any) => {
  const Countries = getCountries();

  return (
    <>
      <select>
        {Countries.map((item: any, index:number) => {
          return <option key={index} value={item}>{item}</option>
        })}
      </select>
    </>
  );
};

export default Filters;
