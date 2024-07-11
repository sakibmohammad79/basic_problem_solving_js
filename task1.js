//1.Task: Array Filtering And Mapping

//Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A
//Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const person = [
  { name: "sakib", age: 22, gender: "male" },
  { name: "sami", age: 18, gender: "male" },
  { name: "tahsin", age: 12, gender: "female" },
  { name: "tanha", age: 10, gender: "female" },
  { name: "taskiya", age: 8, gender: "female" },
  { name: "tamim", age: 15, gender: "male" },
];

const findFemale = (person) => {
  const male = person.filter((male) => male.gender === "male");
  const remainingPerson = male.map((person) => person.name);
  return remainingPerson;
};

const male = findFemale(person);
//console.log(male);
