const arr123 = [5, 10, 30];

const multiple2 = (x) => {
    return x * 2;
};

const arr123modified = arr123.map(multiple2);

console.log(arr123modified);
const arrOfPeople = [
    { name: 'John', age: 12 },
    { name: 'Bred', age: 5 },
    { name: 'Patrick', age: 20 },
    { name: 'Cris', age: 40 },
  ];
  
  const addAnniversary = (human) => {
      const resultObj = {};
      resultObj.name = human.name;
      resultObj['age'] = human['age'];
      //let isAdult;
      // if(resultObj.age >= 18) {
      //     isAdult = true
      // } else {
      //     isAdult = false
      // }
      const isAdult = resultObj.age >= 18 ? true : false;
      resultObj.anniversary = isAdult;
      return resultObj;
  }
  
  const arrOfPeopleModified = arrOfPeople.map(addAnniversary);
  console.log(arrOfPeopleModified);
const addAgeFunc =(human) => {
    const resultObj = {};
    resultObj.name = human.name;
    resultObj['age'] = human['age'] + 1;
    return resultObj;
}

const addAge = arrOfPeople.map(addAgeFunc);
console.log(addAge)