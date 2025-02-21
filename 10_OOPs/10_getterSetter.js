// class User{
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }
//     get password(){
//         return this.password.toUpperCase();
//     }
//     set password(value){
//         this.password = value;
//     }
// }
// aise error aayega kyuki constructor aur setter me race lag jaayegi value set karne ke liye aur memory stack fill ho jaayega

class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value.toUpperCase();
    }
}

const hitesh = new User("hiSaurabh@gmail.com", "123")
console.log(hitesh.password);
console.log(hitesh.email);
