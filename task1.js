//1.Task: Array Filtering And Mapping

//Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A
//Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const person = [
  { name: "sakib", age: 22, gender: "male" },
  { name: "sami", age: 18, gender: "male" },
  { name: "sabiha", age: 9, gender: "female" },
  { name: "tamim", age: 16, gender: "male" },
  { name: "taskiya", age: 7, gender: "female" },
  { name: "tanha", age: 9, gender: "famale" },
];

const findFemale = (person) => {
  const male = person.filter((person) => person.gender != "female");
  const allMaleName = male.map((male) => male.name);
  return allMaleName;
};

const male = findFemale(person);
console.log(male);
