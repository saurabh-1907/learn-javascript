console.log("Welcome");

const students = {
    firstname : "Saurabh",
    lastname: "Pandey",
    course: "ES6",
    interest: "web",
    hobby: "football",
    social: {
        twitter: "@Saurabhdaddy",
        facebook: "Saurabh2701"
    }
};

const {firstname, lastname, course, social} = students
//const {firstname : fname = 'shaurya'(agar koi datapoint nahi aaya toh default value use karega), lastname : lname, course, social} = students object name apne according karne ke liye
console.log(firstname, lastname, course, social.twitter, social.facebook);


