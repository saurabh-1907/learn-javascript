"use strict"; // treat all JS code as newer version


// alert("hello") we are using node js not browser
// code readability should be high
let name = "saurabh"
let age = 22
let isLoggedIn1 = false

// number 2 to the power of 53
// bigint
// string => ""
// boolean => true/false
// null is a standalone value empty value let state = null temp zero nahi hoga null hoga if not available
// undefined => let state abhi value assign nahi hui hai
// symbol => unique


// object

console.log(typeof age);
console.log(typeof null); // null is a object
console.log(typeof undefined);



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

 //************* Memory **************
 // Stack(Primitive)(Copy milta hai)(Copy chnage hogi), Heap(Non Primitive)(Reference milta hai)Original value change hogi

 let myYouTubeName = "Saurabh Pandey"

 let anothername = myYouTubeName

 anothername = "Ritika Sharma"

 console.log(myYouTubeName);//Saurabh Pandey
 console.log(anothername);//Ritika Sharma

 let user1 = { // heap se copy me original value ka referance milega
    email : "user@google.com",
    upi : "UB@bl"
 }

let user2 = user1

user2.email = "saurabh@gmail.com"
console.log(user1.email);
console.log(user2.email);// Dono change hoga kyuki refernce mila hai


 