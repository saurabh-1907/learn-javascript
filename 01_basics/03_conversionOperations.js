let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let scor = null

console.log(typeof scor);
console.log(typeof(scor));

let valueInNumbe = Number(scor)
console.log(typeof valueInNumbe);
console.log(valueInNumbe);

let scor1 = undefined

console.log(typeof scor1);
console.log(typeof(scor1));

let valueInNumbe1 = Number(scor1)
console.log(typeof valueInNumbe1);
console.log(valueInNumbe1);

let scor2 = true

console.log(typeof scor2);
console.log(typeof(scor2));

let valueInNumbe2 = Number(scor2)
console.log(typeof valueInNumbe2);
console.log(valueInNumbe2);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


let isLoggedIn1 = 1

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1);

let isLoggedIn2 = 3

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2);

let isLoggedIn3 = "Saurabh"

let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3);

let isLoggedIn4 = ""

let booleanIsLoggedIn4 = Boolean(isLoggedIn4)
console.log(booleanIsLoggedIn4);

// 0 => f

// ******** OPERATIONS ************

let value = 3
let negValue = - value
// console.log(negValue);

let str1 = "hello"
let str2 = " saurabh"
let str3 = str1 + str2
 console.log(str3);
 

 console.log(typeof("1" + 2)+"1" + 2);
 console.log(typeof(1 + "2"),1 + "2");
 console.log(typeof(1+2+"3")+(1+2+"3"));
 
console.log(+true);

console.log(true);
console.log(+"");
 
 let num1, num2, num3
 num1 = num3 = num2 = 2 + 2

 let gameCounter = 100
 gameCounter++;
 console.log(gameCounter++ + " "+ ++gameCounter);
 