/* eslint-disable array-callback-return */
var info = require('../data/names.json');

export const generateName = (data:any, gender:string) => {
  console.log(data, gender)
  let val = gender;
  let names = data[0][val];
  let surName = data[0].surnames

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomSurName = surName[Math.floor(Math.random() * surName.length)];

  return randomName + " " + randomSurName;
};

export const filteredData = (country:string) => {

  let data:any=[];
  info.map((item: { region: string; }) => {
    item.region === country && data.push(item);
  })
  return data;
}