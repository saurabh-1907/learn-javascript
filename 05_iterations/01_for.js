for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 20; j++) {
        const element = "*";
        console.log(element);
        
    }
    
}
let array = ["Hari Shankar Tiwari", "Brijesh Singh", "Shiva parakash Shukla", "Surajbhan Singh" , "Dawood"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}
//null pointer ki jagah undefined aayega'

// for (let index = 0; index < 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break;
//      }
//      console.log(`Value of i is ${index}`);
// }

for (let index = 0; index < 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue;
     }
     console.log(`Value of i is ${index}`);
}

