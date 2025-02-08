const userEmail = "Saurabh@gmail.com"
if(userEmail){ //compare nahi kiya maann liya jo aayega true hai if "" will return false
    console.log("Got user email");
}
else{
    console.log("Dont have user email");
    
}
//falsy values => false, 0, -0, BigInt(0n), "", null, undefined, NaN


//truthy => "0", 'false'," ", [], {}, function(){}


if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

if(false == 0){
    //return true
}

// || && logical operators

//Nullish Coalesing Operator (??) : null

let val1;

val1 = 5 ?? 10
console.log(val1);
// study further

// sirf null aur undefined ke liye bana hai usually first value leta hai wrna.
// null aur undefined ke alwa jo aata hai vo leta hai

//condition?true:false
