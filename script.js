// var customerName = "Mustafa";
// var customerSurName = "Kılıç";
// var tcKimlik = "51115181306";
// var orderTotal = 50;
// var gender = true;
// var customerAddress = {
//   city: "Istanbul",
//   district: "Bayrampaşa",
// };
// var hobbies = ["At", "Avrat", "Pusat"];

// var order1 = Number("100");
// var order2 = Number("150");

// var totalOrder1 = order1 + order2;
// //console.log(totalOrder1);

// var order3 = parseFloat("100.2");
// var order4 = parseFloat("150.5");

// var totalOrder2 = order3 + order4;
// // console.log(totalOrder2);

// var order5 = parseInt("100.2");
// var order6 = parseInt("150.5");

// var orderTotal3 = order5 + order6;
// // console.log(orderTotal3);

// const yearOfBirth = 1986;

// var age = new Date().getFullYear() - yearOfBirth;
// // console.log(age);

// var course = "Modern Javascript Kursu";

// // console.log(course.length);

// const Can = {
//   weight: 75,
//   length: 1.7,
// };

// const Ada = {
//   weight: 55,
//   length: 1.6,
// };

// const canIndex = Can.weight / (Can.length * Can.length);

// const adaIndex = Ada.weight / (Ada.length * Ada.length);

// let adaHigherIndex = adaIndex > canIndex;

// console.log(adaHigherIndex);

// let d = new Date();

// console.log(d.getHours().toFixed(2));
var dt = new Date();

console.log(dt.getDate(), dt.getMonth() + 1, dt.getFullYear());
var dtA = new Date("8/24/2010 14:50:10");
var dtB = new Date(2010, 7, 24, 14, 50, 10);
console.log(dtA);
console.log(dtB);

var dtC = new Date("1/1/1990");
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth - 1);

console.log(dtC);

var start = new Date("1/10/1990");
var end = new Date("1/1/1991");

var milisecond = end - start;

var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gun = saat / 24;

console.log("milisecond " + milisecond);
console.log("saniye " + saniye);
console.log("dakika " + dakika);
console.log("saat " + saat);
console.log("gun " + gun);

var birthDay = new Date("5/6/1997");
var ageDiffMs = Date.now() - birthDay.getTime();
var ageDate = new Date(ageDiffMs);

console.log(ageDate.getFullYear() - 1970);

// console.log(birthDay.getTime());
// console.log(Date.now());

var annelerGunu = new Date();
annelerGunu.setHours(0, 0, 0, 0);
annelerGunu.setFullYear(2022);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while (annelerGunu.getDay() != 0) {
  annelerGunu.setDate(annelerGunu.getDate() + 1);
}
annelerGunu.setDate(annelerGunu.getDate() + 7);
console.log(annelerGunu);
console.log(annelerGunu.getDay());
