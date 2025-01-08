const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// it pushes array as a whole value at a particular index

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// Spread operator => is used to split up array elements or object properties.
//spreading
// better than concat as it spilits each element of the array and then concatinates
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// it return single array by removing all the nested arrays
console.log(real_another_array);



console.log(Array.isArray("Sparsh"))
console.log(Array.from("Sparsh"))
console.log(Array.from({name: "Sparsh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //concatinate the values and return an array