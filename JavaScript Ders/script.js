// var num = 15.12345678;

// console.log(
//   "Toplamda 3 basamaklı sayı kullan: " + num + " - " + num.toPrecision(3)
// );
// console.log(
//   "Ondalık kısmı 3 basamakta sınırla: " + num + " - " + num.toFixed(3)
// );
// console.log("En Yakın Sayıya yuvarla : " + num + " - " + Math.round(num));

// console.log("Aşağıya yuvarla: " + num + " - " + Math.floor(num));

// console.log("Yukarı yuvarla: " + num + " - " + Math.ceil(num));

// var numbers = [1, 2, 10, 56, 20];

// console.log(
//   "En Büyük: " + Math.max(...numbers) + "--- En Küçük: " + Math.min(...numbers)
// );

// var min = 50;
// var max = 100;

// console.log(Math.floor(min + Math.random() * (max - min)));

// var brutMaas = 3700;
// var saatlik = 10.3;
// var mesaiTopla = 42;

// var ToplamBrut = brutMaas + saatlik * mesaiTopla;

// var netMaas = ToplamBrut - ToplamBrut * 0.25;

// console.log(ToplamBrut);
// console.log(netMaas.toFixed(2));

// var sentence =
//   "  Template Literals or template strings is the ability Have multi-line strings without any funny business. ";

// var url = "http://sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye";

// console.log(sentence.length); //108
// // sentence = sentence.trim();
// console.log(sentence.trim().split(" ").length); //15

// console.log(sentence.toLowerCase());

// console.log(sentence.trim());

// console.log(sentence.replace("-", " "));

// var str = "http://";
// console.log(url.slice(str.length));

// console.log(url.indexOf(".com") > -1 ? true : false);
// console.log(url.includes(".com"));

// console.log(url);
// console.log(url.replace(/ /g, "-")
//                .toLowerCase()
//                .replace(/ı/g, "i")
//                .replace(/ü/g,'u')
//                );

// var cars = ["Bmw", "Mercedes", "Opel", "Mazda"];

// cars.forEach((i) => console.log(i));

// console.log("Eleman Sayısı: " + cars.length);

// console.log("İlk Eleman: " + cars[0] + " Son Eleman: " + cars[cars.length - 1]);
// cars.push("Renault");
// console.log(cars);
// cars.unshift("Toyota");
// console.log(cars);
// cars.pop();
// console.log(cars);
// cars.shift();
// console.log(cars);

// cars.reverse();
// console.log(cars);

// cars.sort();
// console.log(cars);

// var numbers = [1, , 15, 5, 2, 80];

// function compare(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }

// console.log(numbers.sort(compare));

// console.log(cars.includes("Opel"));

// var str = "Chevrolet,Dacia";
// str = str.split(",");
// console.log(str);
// cars = cars.concat(str);
// console.log(cars);

// console.log(cars.splice(cars.length - 2) + " " + cars);

// var trafigeCikis = new Date("04/20/2019");
// trafigeCikis.setHours(0, 0, 0, 0);
// var trafiktekiMs = Date.now() - trafigeCikis.getTime();
// var trafiktekiGun = Math.floor(trafiktekiMs / (1000 * 60 * 60 * 24));

// if (trafiktekiGun <= 365) console.log("1.servis bakım süreniz geldi");
// else if (trafiktekiGun > 365 && trafiktekiGun <= 365 * 2)
//   console.log("2.servis bakım süreniz geldi");
// else if (trafiktekiGun > 365 * 2 && trafiktekiGun <= 365 * 3)
//   console.log("3.servis bakım süreniz geldi");
// else console.log("bilinmeyen süre");

// var result = prompt("Who's there ?");

// if (result.toLowerCase() == "cancel") console.log("Cancelled");
// else if (result != "Admin") console.log("I don't know you!");
// else {
//   var pass = prompt("Password Please");
//   if (pass.toLowerCase() == "cancel") console.log("Cancelled");
//   else if (pass != "TheMaster") console.log("Wrong password");
//   else console.log("Welcome");
// }

// var hak, can;
// var tahmin,
//   sayac = 0;
// var sayi = Math.floor(Math.random() * 10 + 1);
// can = Number(prompt("Kaç kerede bileceksiniz?"));
// hak = can;
// console.log(sayi);
// while (hak > 0) {
//   hak--;
//   sayac++;
//   tahmin = Number(prompt("Bir sayı giriniz?"));
//   if (sayi == tahmin) {
//     console.log(`Tebrikler ${sayac} defada bildiniz!`);
//     console.log(`puan : ${100 - (100 / can) * (sayac - 1)}`);
//     break;
//   } else if (sayi > tahmin) console.log("Yukarı");
//   else console.log("Aşağı");

//   if (hak == 0) {
//     console.log("Hakkınız bitti");
//   }
// }

var tarih1 = new Date("10/10/2016").getTime();
var tarih2 = new Date("10/11/2018").getTime();

var fark = tarih2 - tarih1;

console.log(fark / (1000 * 60 * 60));
