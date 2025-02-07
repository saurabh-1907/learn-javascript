const marvelHeroes = ["Perpendicular", "Tangent", "Definite"]
const desi_heroes = ["guddu bhaiya", "bablu bhaiya", "kaleen bhaiya", "dadda tyagi"]

marvelHeroes.push(desi_heroes)// not a good way

console.log(marvelHeroes);// Arrays koi bhi data le leta hai

console.log(marvelHeroes[3][3]);

const newhero = marvelHeroes.concat(desi_heroes)
console.log(newhero);

const all_new_heroes = [ ...marvelHeroes, ...desi_heroes ] 
//spread it is a good way to join two arrays
console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6,7,[13,9,5,5,55]]]
const real_another_array = another_array.flat(Infinity)
//return new array flat all array and also asks for depth to how many depts you want arrays to dissolve
console.log(real_another_array);

console.log(Array.isArray("Saurabh"));// asks if it is array

console.log(Array.from("Saurabh"));

console.log(Array.from({name : "Saurabh"}));// nahi bana paayega toh empty array dega
// upar wale case me specify karna padega ki keys ki array banani hai ya phi values ki


let score1 = 100
let score2 = 200
console.log(Array.of(score1,score2));

