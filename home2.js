function engKatta(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    }
    if (b >= a && b >= c) {
        return b;
    }
    return c;
}

console.log(engKatta(22, 12, 122));  
console.log(engKatta(-45, -3, -1));  
console.log(engKatta(-7, 11, 21));    