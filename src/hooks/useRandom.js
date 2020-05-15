import { useState } from "react";
var info = require('../data/names.json')

function useRandom(country, gender) {
  const [data, setData] = useState([]);
  setData(info)
  return [data];
}

export { useRandom };