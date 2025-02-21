class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`new course was added by ${this.username}`);
        
    }
}

const  chai = new Teacher("chai", "chai@gmail.con", 123);
chai.addCourse();

const masalaChai = new User("MasalaChai");

masalaChai.logMe();


