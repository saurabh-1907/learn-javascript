function bio(arr, arg1, arg2){ //function bio(arr, ...arg){ rest parameter saare agruments leta aur array ki tarah behave karega
    //return arg kar denge rest parameer me
    console.log(arr); 
    console.log(arg1);
    console.log(arg2);
    return [arg1, arg2];
}
function dio(arr, ...arg){
    console.log(arr);

    arg.map(function(text){
        console.log(text);
        
    });
    
}

const person = {
    name: "Saurabh Pandey",
    company: "NIET",
    course: "Python",
    website: "www.daddy.com"
}

var r = 10;
const pi = 3.145;
let mesg = "My name is";

const greeting = bio`My name is ${person.name}. 
I study at ${person.company}. 
The area of circle is ${r*r*pi}`;

const greeting1 = dio`My name is ${person.name}. 
I study at ${person.company}. 
The area of circle is ${r*r*pi}`;