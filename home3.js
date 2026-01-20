//asos
let mevalar = ["Olma", "Banan", "Uzum"];

// 1 misol
mevalar.push("Anor", "Nok");
console.log(mevalar); 

// 2 misol
let sonlar = [10, 20, 30, 40, 50];
let oxirgiIkki = [sonlar.pop(), sonlar.pop()];
console.log(oxirgiIkki); 

//3 miosl
let numbers = [5, 12, 8, 17, 4, 21, 16, 9];
const juft = numbers.filter(n => n % 2 === 0);
console.log(juft);    

//4 misol
let arr1 = [3, -5, 8, -2, 0, -9, 4, -1];

let manfiylar = arr1.filter(son => son < 0);
console.log(manfiylar);
