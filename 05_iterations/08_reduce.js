const myNums = [ 1, 2, 5]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName : "Java course",
        price : 1000000
    },
    {
        itemName : "c++ course",
        price : 1000000
    }
    ,
    {
        itemName : "JavaScript course",
        price : 1000
    },
    {
        itemName : "Python course",
        price : 10
    }
]

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(total);
