const myNumbers = [1, 2, 3, 4, 5, 6, 7]

const newNums = myNumbers.map( (nums) => nums + 10) // automatic returns value
console.log(newNums);

// *************** CHAINING ***********
const  newnum = myNumbers.map((num) => num * 10)
.map( (num) => num + 1).filter( (num) => num >= 40)

console.log(newnum);

