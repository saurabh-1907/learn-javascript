const person = {
    name: "Saurabh Pandey",
    company: "NIET",
    course: "Python",
    website: "www.daddy.com"
}

var r = 10;
const pi = 3.145;
let mesg = "My name is";

let tmsg = `My name is ${person.name}. 
I study at ${person.company}. 
The area of circle is ${r*r*pi}`;
// while using backtick the javascript remembers spacing and new line
console.log(tmsg);
console.log(mesg);

