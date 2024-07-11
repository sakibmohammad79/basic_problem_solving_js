//5.Task: Find And Modify

//Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age
//Property. Print The Updated Array.

const people = [
  { name: "sakib", age: 20, gender: "male" },
  { name: "sami", age: 18, gender: "male" },
  { name: "tahsin", age: 12, gender: "female" },
  { name: "tanha", age: 20, gender: "female" },
  { name: "taskiya", age: 8, gender: "female" },
  { name: "tamim", age: 15, gender: "male" },
];

const updatePersonAgeByName = (people, name, newAge) => {
  const person = people.find((person) => person.name === name);
  if (person) {
    person.age = newAge;
  } else {
    console.log(`Person with name ${name} not found, please try again!`);
  }
  return person;
};

const updatedPerson = updatePersonAgeByName(people, "tanha", 20);
//console.log(updatedPerson);
