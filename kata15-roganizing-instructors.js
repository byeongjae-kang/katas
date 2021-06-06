//In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.

const organizeInstructors = function(instructors) {
  const newObject = {};
  for (let instructor of instructors) {
    const { name, course } = instructor;
    if (!newObject[course]) {
      newObject[course] = [];
      newObject[course].push(name);
    } else {
      newObject[course].push(name);
    }
  }
  return newObject;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));