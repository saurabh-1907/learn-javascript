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

console.log(firstname, lastname, course, social.twitter, social.facebook);
