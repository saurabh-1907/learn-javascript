const user = {
    username : "saurabh",
    price: 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to my website`);
        console.log(this);// current context print hoga
        
    }
}

// arrow function ke andar this nahi hota hai

user.welcomeMessage()

user.username = "Pandey" // yaha pe humne context/values chnage kar diya

user.welcomeMessage()
user.welcomeMessage() 

console.log(this);//node environment ke andar his is reffering to empty object

// browser ke andar this windows ko refer karega
// browser  ke andar global object window object hai

// function chai(){
//     console.log(this);
// }

// chai()
// this only object ke andar define ho sakta hai 
// function ke andar nahi


const chai = () => {
    let username = "saurabh"
    console.log(this.username);
}
chai()

// const addTwo = (num1 , num2) => {
//     return num1+num2 // explicit return
// } 
const addTwo = (num1 , num2) => (num1 + num2)
// implicit return
//bina return kiye
//console.log(addTwo(3 , 4));
 // object return karna hai
  
 const addthree = (num1, num2) => ({username : "Saurabh"}) // isko wrap karna zarrori hai parantheses me

 console.log(addthree(1, 2));
 
 const myArray = [2,5,6,9,55,5,5]
 //myArray.forEach(() => {}) array ke lie