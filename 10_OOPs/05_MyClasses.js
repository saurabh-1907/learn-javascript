// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUSername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("Chai", "Chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUSername());

// behind scene

function User(username, email, password) {
    this.username = username;
    this.password = password;
    this.email = email;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUSername = function(){
    return `${this.password.toUpperCase()}`
}
const tea = new User("tea", "tea@gmail.com", "skjd")
console.log(tea.encryptPassword());
console.log(tea.changeUSername());