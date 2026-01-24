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