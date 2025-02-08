

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

function calculateCartPrice(val1, val2, ...num1){ // rest operator will get array
    return num1
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username : "Saurabh",
    price : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user) // type safety check karni hai

// direct object bhi pass kar sakte the

handleObject({
    username: "tasbeeha",
    price: 399
})

myNewArray = [ 200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
