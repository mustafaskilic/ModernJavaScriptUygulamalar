// function Person(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;

//   this.calculateAge = function () {
//     return 2021 - this.yearOfBirth;
//   };
// }

let Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function () {
    return 2021 - this.yearOfBirth;
  };
};

let yigit = new Person("Mustafa", 1997, "student");
let emel = new Person("Emel", 1989, "teacher");

console.log(yigit.name);
console.log(yigit.yearOfBirth);
console.log(yigit.job);
console.log("**********");
console.log(emel.name);
console.log(emel.yearOfBirth);
console.log(yigit.calculateAge());
