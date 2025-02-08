

function sayMyName(){
console.log("S");
console.log("A");
console.log("U");
console.log("R");
console.log("A");
console.log("B");
console.log("H");
}

sayMyName()

// function addTwoNumbers(number1, number2){//parameters
//    console.log(( number1 + number2));
   
// }
function addTwoNumbers(number1, number2){//parameters
   return number1+number2
    
 }
const res = addTwoNumbers(3, 4)//arguements
console.log(res);// console karne ka ye matlab nahi hai ki function wahi value return kar rha hai

function loginUserMessage(username = "sam"){
    if(username === undefined){ // if(!username)
        return "Please enter username"
    }
    return `${username} just logged IN`
}
console.log(loginUserMessage("Saurabh"));

