const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 1123.89854
console.log(otherNumber.toPrecision(3));

const hndreds = 10000000
console.log(hndreds.toLocaleString('en-IN'));

const max = Number.MAX_SAFE_INTEGER
console.log(max);


//*****************____Maths____**************

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4.6, 5));
console.log(Math.max(4.6, 5));

//dice game
console.log(Math.round((Math.random()*10 + 1)*.6));

const  min = 10
const max1 = 20
 
console.log(Math.floor(Math.random() * (max1 - min + 1)) + min);