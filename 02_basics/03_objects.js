// singleton -> koi bhi constructor 
// lietral and consturcuture are two ways to define objects
//object literals
const mySym = Symbol("key1")

const jsuser = {
    name : "Saurabh",
    age : 1,
    [mySym] : "key1",
    location : "Jaipur",
    email : "saurabhpandey@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],
    "haveGirlfriend" : "Ritz" // cant be accessed thru dot property
}

console.log(jsuser.email);
console.log(jsuser["email"])//other way
//Object.create singleton
console.log(jsuser.haveGirlfriend);

console.log(jsuser["haveGirlfriend"])

console.log(jsuser[mySym]);

jsuser.email = "saurabh@openai.com"
//Object.freeze(jsuser)
jsuser.email = "saurabh@navidia.com"
console.log(jsuser);

jsuser.greeting = function(){
    console.log(`Hello js user`);
    
}

jsuser.greetingtwo = function(){
    console.log(`Hello js user, ${this.name}`);
    
}

console.log(jsuser.greetingtwo);
