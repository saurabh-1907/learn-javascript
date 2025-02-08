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
const obj4 = {6  : "A", 7 : "B"}
// const obj3 = {
//     obj1, obj2
// }
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1,...obj4}
console.log(obj3);

const users = [
    user1 = {
        id : 1,
        email : "pehla@gmail.com",


    },
    user1 = {
        id : 1,
        email : "pehla@gmail.com",
        

    }
    ,
    user3 = {
        id : 3,
        email : "teesra@gmail.com",
        

    }
    ,
    user2 = {
        id : 2,
        email : "dusra@gmail.com",
        

    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "JS IN HINDI",
    price : "Price",
    courseInstructor : "HITESH"
}

const {courseInstructor : Instructor} = course
//console.log(courseInstructor);
console.log(Instructor);

const navbar = () => {

}

navbar(company = "HITESH") // de-structure

// {
//     coursename : "JS IN HINDI",
//     price : "Price",
//     name : "HITESH"
// }

