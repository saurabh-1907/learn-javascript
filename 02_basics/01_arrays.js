//array
const myArray1 = [0, 1, 2, 3]
console.log(myArray1[0]);

// Shallow copy of an object is a copy whose propertiese share the same references(point to the same underlying value)
// Deep copy do not share same reference point

const myHeroes = ["Perpendicular", "Tangent", "Definite"]
//Arrays ke andar prtotype milta hai 

// Array methods
const myArray = new Array(0, 1, 2, 3)
console.log(myArray.pop());
myArray.push(9)
console.log(myArray);


myArray.unshift(9)

console.log(myArray.includes(9));

console.log(myArray.indexOf(9));

const newArr = myArray.join()
console.log(myArray);
console.log(newArr); // biinds and converts into string

// slice and splice

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3)

console.log(myn1);

console.log("B ", myArray);
const myn2 = myArray.splice(1, 3)
console.log(myn2);

console.log("C ", myArray); // splice changes the original array


