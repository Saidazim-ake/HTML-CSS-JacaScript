// 1
let talaba4 = {
    ism: "Madina",
    fakultet: "Informatika",
    shahar: "Samarqand",
    yil: 2
};

delete talaba4.shahar;
console.log(talaba4);


// 2
let person = {
    ism: "Karim",
    yoshi: 30,
    greet: function () {
        console.log(`Salom, mening ismim ${this.ism}`);
    }
};

person.greet();


// 3
let kitob = {
    nomi: "JavaScript Dasturlash",
    muallif: "Saidjon",
    yil: 2020
};

let yangiKitob = { ...kitob };
yangiKitob.nomi = "JavaScript Advanced";

console.log(kitob);
console.log(yangiKitob);

//4
let talabalar = [
  { ism: "Ali", ball: 75 },
  { ism: "Vali", ball: 85 },
  { ism: "Guli", ball: 90 },
  { ism: "Olim", ball: 60 }
];

let yuqoriBallilar = talabalar.filter(talaba => talaba.ball > 80);
console.log("80 dan yuqori ball olganlar:", yuqoriBallilar);


// 5
let mahsulotlar = [
  { id: 1, nomi: "Telefon", narxi: 3000000 },
  { id: 2, nomi: "Laptop", narxi: 8000000 },
  { id: 3, nomi: "Planshet", narxi: 2500000 }
];

let topilganMahsulot = mahsulotlar.find(m => m.id === 3);

console.log("ID=3 mahsulot narxi:", topilganMahsulot.narxi);
