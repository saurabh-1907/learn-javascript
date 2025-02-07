const name = "Saurabh"
const repoCount = 50
//console.log(name + repoCount + "Value"); old method

// USe new method

console.log(`Hello my name is ${name} and my repo count is${repoCount}`);

const  gameName = new String("Saurabh")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); // Original String nahi karega

//Non Primitive

let obj = {
    email : "Person@gmail.com",
    age : 20
}

console.log(obj.email.toUpperCase());
console.log(obj.email);





