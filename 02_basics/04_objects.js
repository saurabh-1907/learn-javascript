const tinderUser = new Object()//singleton object
//const tinderUser = {} non single ton object no much difference
tinderUser.id = "123"
tinderUser.name = "Saurabh"
tinderUser.isLoggedIn = true

//console.log(tinderUser);

const regularuser = {
    email : "somu@gmail",
    fullname:{
        userfullname:{
            name : "Saurabh",
            lastname : "Pandey"
        }
    }
}

console.log(regularuser.fullname?.userfullname.lastname);
//? is used to check if exist then give otherwise leave

const obj1 = {1  : "A", 2 : "B"}
const obj2 = {2  : "A", 4 : "B"}

const obj3 = {
    
}