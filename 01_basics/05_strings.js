const name = "Saurabh"
const repoCount = 50
//console.log(name + repoCount + "Value"); old method

// USe new method

console.log(`Hello my name is ${name} and my repo count is${repoCount}`);

const  gameName = new String("Sa-urabh")

console.log(gameName[0]);
console.log(gameName.__proto__); // to access inbuilt objects you can add proto but it is not necessary you can directly access it

console.log(gameName.length);
console.log(gameName.toUpperCase()); // Original String nahi karega

//Non Primitive

let obj = {
    email : "Person@gmail.com",
    age : 20
}

console.log(obj.email.toUpperCase());
console.log(obj.email);//why the email doesnt to uppercase even if the object was defined in a heap memory 
console.log(gameName.charAt(0));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)// negative value nahi leta hai

console.log(newString);

const anotherString = gameName.slice(-6, 4)//negative value leta hai aur piche se check karta hai
console.log(anotherString);

const newStringOne = "  Saurabh  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://saurabh.com/saurabh%20pandey"
console.log(url.replace('%20', '-'));


console.log(url.includes('saurabh'));

console.log(url.split('%'));

//always follow backtics + and commas are old now




