
//{ } scope
let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30 
    console.log(a);
}

console.log(a);
// console.log(b);

a = 300
console.log(c);


//browser console aur node me scope dusri cheez hai

function one(){
    const username = "Saurabh"
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
   // console.log(website); scope khatam ho gaya hai
    two()
}
one()

// jitni baar call karte hai utni baar call stack  banta hai

if(true){
    const username = "Saurabh"
    if(username == "Saurabh"){
        const website = " Youtube"
        console.log(username + website);
        
    }
    //console.log(website);

    
}
//console.log(username);

//++++++++++++++ interesting++++++++++
console.log(addOne(5));

function addOne(value){
    return value + 1
}

// addTwo(5) yaha error aayega hoisting

const addTwo = function(num){ // this can be also called as expression
    return num + 2
}

addTwo(5)
// Javascript e function variable kuch bhi hold kar sakte hai



