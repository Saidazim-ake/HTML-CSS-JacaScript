//1//
 a = [1, 2, 3];
 b = [4, 5, 6];
 c = [7, 8, 9];

 const aralash = [0,...a, ...b, ...c,100]; 
 console.log(aralash);

//2//
const mahsulot = {
    nomi: "Laptop",
    narxi: 5000000,
    rangi:"Kumush" 
};

const yangilangan = { ...mahsulot, narxi: 6000000}; 
const toliq = { ...yangilangan, chegirma: true }; 
console.log(yangilangan);
console.log(toliq);

//3//
function kopaytma(...sonlar) {
    let natija = 1;

    for (let son of sonlar) 
        { natija *= son;
}
return natija; }


console.log(kopaytma(2, 3, 4));
console.log(kopaytma(5, 5));
console.log(kopaytma(1, 2, 3, 4));

