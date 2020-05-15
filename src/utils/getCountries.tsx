/* eslint-disable array-callback-return */
export const getCountries = () => {
  var data = require("../data/names.json");
  const Countries:any = [];

  data.map((item: any) => {
    Countries.push(item.region);
  });
  return Countries;
};
