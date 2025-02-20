const user = {
    username : "Saurabh",
    loginCount:0,
    signedIn:true,
    getUserDetails:function(){
        // console.log("Got user details");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(this);//{}

// console.log(user.getUserDetails());


// const promiseOne = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

// const userOne = User("saurabh", 12, true)
// const userTwo = User("Pandey", 60 + 9, true)//this will overwrite the value of userone
//when you will print userone user two details will be printed
// console.log(userOne);

const userOne = new User("saurabh", 12, true)
const userTwo = new User("Pandey", 60 + 9, true)
console.log(userOne);
console.log(userTwo);
//new keyword 

console.log(userOne.constructor);