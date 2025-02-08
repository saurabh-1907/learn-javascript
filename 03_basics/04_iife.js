// Immediately Invoked Function Expressions(IIFE)

// Jaise hi function likha waise hi execute karana ho
// jaise ki ek file jisme bas database connection hai toh hum chahenge ki immidiately execute ho jaaye
// function ke andar globe scope se pollute na ho


(function chai(){
    console.log("DB connected"); // named iife
})();// paranthese laga do toh block ban jata hai aur uske andar kaam kiya jaa sakta hai
// semi colon laga dena chhaiye end karne ke liye
//(1st) function ki defenition (2nd) for execution
(() => {
    console.log(`DB connected`);
    
});

((name) => {
    console.log(`DB connected ${name}`);
    // simple iife
})("saurabh");
