//15. part 2

const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]
// console.log(marvel_heroes); // [ 'thor', 'ironman', 'spiderman']
// console.log(marvel_heroes.length); //3

//push()
// marvel_heroes.push(dc_heroes)//['thor','ironman','spiderman',[ 'superman', 'flash', 'batman' ]]
// console.log(marvel_heroes[3][1]); //flash

//-------concat()-------------
// marvel_heroes.concat(dc_heroes) //store in var
const allHeroes = marvel_heroes.concat(dc_heroes) //shows nested array only due to not stroing in new array
// console.log(allHeroes); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//-------------------spread : similar to conact() but can add more than one array---------------------

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) //flat(depth:1,2,3,infinity)
// console.log(real_another_array);//[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]







//data scrapting in array
console.log(Array.isArray("hitesh"))//false
console.log(Array.from("hitesh")) //[ 'h', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({ name: "hitesh" }))//interesting we have to mentioned key or value to convert else empty array

let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]

//read Array.is, Array.from, Array.of