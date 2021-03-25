var Person = function (name) {
  this.name = name;
};

Person.prototype.Introduce = function () {
  console.log(`Hello my name is ${this.name}`);
};

function Teacher(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function () {
  console.log("I teach", this.branch);
};

function Student(name, number) {
  Person.call(this, name);
  this.number = number;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function () {
  console.log(
    `My student number is ${this.number} \n` + "I've already studied hard"
  );
};

function HeadMaster(name, branch) {
  Teacher.call(this, name, branch);
}
HeadMaster.prototype = Object.create(Teacher.prototype);
HeadMaster.prototype.constructor = HeadMaster;
HeadMaster.prototype.shareTask = function () {
  console.log("I've already shared all the work");
};

let p1 = new Person("Mustafa");
p1.Introduce();

let t1 = new Teacher("Mustafa", "science");
t1.teach();

let s1 = new Student("Ahmet", "2513");
s1.Introduce();
s1.study();

let h1 = new HeadMaster("Ahmet", "physics");
h1.Introduce();
h1.teach();
h1.shareTask();
