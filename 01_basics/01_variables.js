const accountId = 144553
let accountEmail = "saurabh@google.com"
var accountPassword = "12345" // don't use 
accountCity = "Greater Noida" //don't use
let accountState;

/*
Prefer not to use var because of issue in block scope and functional scope
*/

// accountId = 2 // not allowed

accountEmail = "sp@sp.com"
accountPassword = "215535566"
accountCity = "Azamgarh"

console.log(accountId);
console.table([accountEmail, accountId, accountPassword, accountCity]);
console.log(accountState); //undefined
