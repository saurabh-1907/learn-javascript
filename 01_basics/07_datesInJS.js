let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleString('en-IN'));

// Date is a object

let myCreatedDate1 = new Date(2004,  6, 7) // Month zero se start hai javascript ke andar
let myCreatedDate = new Date("01-14-2023") // String me one se start hota hai
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // Aise hum dates ko compare karte hai

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday: "long"
})


