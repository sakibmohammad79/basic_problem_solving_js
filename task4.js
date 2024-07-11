//4.Task: Sorting Objects

//Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To
//Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2011 },
  { make: "Honda", model: "Civic", year: 2013 },
  { make: "Ford", model: "Mustang", year: 2009 },
  { make: "Chevrolet", model: "Camaro", year: 2016 },
  { make: "Nissan", model: "Altima", year: 2011 },
];

const sortCarByYear = (cars) => {
  const sortedCar = cars.sort((a, b) => a.year - b.year);
  return sortedCar;
};

const sortedCarsResult = sortCarByYear(cars);
//console.log(sortedCarsResult);
