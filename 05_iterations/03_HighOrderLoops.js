// for of
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) { 
    console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', 'INDIA')
map.set('USA', 'United States Of Bihar')
map.set('Fr', 'France')
console.log(map);

for (const [key, value] of map) {
    console.log(key, ': - ', value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of map) {
//     console.log(key, ': - ', value);
// }  not iteratable objects but for of dont work

const mycoding = [
    {
        languageName : "JavaScript",
        languageFileName : "Js"
    }
    ,
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

mycoding.forEach((item) => {
    console.log(item.languageFileName);
})