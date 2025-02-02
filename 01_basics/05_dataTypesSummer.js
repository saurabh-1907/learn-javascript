// Primitive 
// 7  types : String Number Bollean null undefined  Sysmbol BigInt

// Non Primitive Reference
// Arrays, Objects, Functions

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null // Empty

let userEmail;
let userEmail1 = undefined
 // Both ways to give value undefined
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const binNumber = 5848843155316341434n
console.log(binNumber);

 // Non Primitive

 const heroes = ["Shaktiman", "nagraj", "doga"]
 let myObj=  {
    name: " Saurabh",
    age : 22
 }

 const myFunction = function(){
    console.log("Hello World");
    
 }
 const nulla = null
 console.log(typeof heroes);
 console.log(typeof nulla)

 console.log(typeof myFunction);// Object function

 console.log(typeof id);