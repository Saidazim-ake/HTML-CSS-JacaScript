let prices = [150, 80, 200, 50, 120];
let priCes = prices.filter(son => son < 100);
console.log(priCes); 


let scorec = [70, 85, 90, 95, 80];
let qzude = scorec.filter(son => son > 90);
console.log(qzude);
  

let mevami = ["olma", "banan", "apelsin", "shaftoli"];
mevami.forEach((meva, index) => {
  mevami[index] =
    meva.charAt(0).toUpperCase() + meva.slice(1).toLowerCase();
});
console.log(mevami);


let region = ["Toshkent", "Samarqand", "Buxoro", "Xiva", "Namangan", "Andijon"];
let regioni = region.slice(-3);
console.log(regioni);



let tillar = ["Ingliz tili", "Tarix", "Matematika", "Fizika", "Kimyo"];
tillar.splice(2, 2, "Dasturlash");
console.log(tillar);