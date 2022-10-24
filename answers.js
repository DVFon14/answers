////////////////////////////////
// Easy Going
////////////////////////////////

for (let i=1; i<21; i++){
    console.log(i)
}


////////////////////////////////
// Get Even
////////////////////////////////
for (let i=0; i<201; i++){
    if(i%2==0)
    console.log(i)
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i=1; i<101; i++){
    if(i%5==0 && i% 3==0 ){
    console.log(`${i} FizzBuzz`)}
    else if(i%5==0){
    console.log(`${i} Buz`)}
    else if(i%3==0){
        console.log(`${i} Fizz`)}
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]= 5001
wolfy[3]= "Gotham City"
dart.push("Hawkins")
wolfy[0] = "Gameboy"
console.log(wolfy)

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles =["Donatello ", "Leonardo ", "Raphael ", "Michaelangelo "]

let text = [];
for (let i of ninjaTurtles) {
  text= text + i;
}

console.log(text.toUpperCase())



////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 
'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 
'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 
'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 
'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 
'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies[8]) //outputs "Titanic"
console.log(favMovies.sort()) //1. this mutates permanently
console.log(favMovies.pop()) //2. outputs "Volver ," the sorted last element
console.log(favMovies.push("Guardians of the Galaxy")) //3. outputs the total number of elements, which is 19
console.log(favMovies.reverse()) //4. outputs the entire array in reverse order (not revers alphabetical)
console.log(favMovies.shift()) //5. outputs "Guardian of the Galaxy," the first element
console.log(favMovies.unshift()) //6. outputs the total number of elements, which is 18


////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1,1);
console.log(whereIsWaldo)

/*[["Timmy", "Frank"],
["Lucinda", "Jacc", "Neff", "Snoop"],
["Petunia", ["Baked Goods", "Waldo"]]]; */

whereIsWaldo[1][2] = "No One"
console.log(whereIsWaldo)

console.log(whereIsWaldo[2][1][1])

////////////////////////////////
//  Excited Kitten
////////////////////////////////

for (let j= 1; j<21 ;j++){
    
if(j % 2 ===1){
    console.log(j)
}
else if(j % 2 ===0){
    console.log("...human...why you taking pictures of me?...")
}
}


////////////////////////////////
//  Find the Median
///////////////////////////////


const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

console.log(nums.sort())

let arrayLength =nums.length

if(arrayLength %2==1){
    let halfOfLength= arrayLength/2
    let indexOfMiddle = Math.floor(halfOfLength)
    console.log(nums[indexOfMiddle])}

else if (arrayLength %2==0){
    let rightOfMiddle = arrayLength/2
    let leftOfMiddle = arrayLength -1 
    let median = (rightOfMiddle +leftOfMiddle)/2
    console.log(median)
}

/*
function maxThree(a, b, c){
    let array1= [a, b, c]
    array1.sort((a,b) => {return a-b;}) 
   return array1[array1.length-1]; //puts index of the last element in the array
}
console.log(maxThree(21, -24, -93))


function maxThree(...arg){
    arg.sort((first, next) => {
        return first- next;        
    }) 

    return arg[arg.length-1];
}

console.log(maxThree(21, -24, -93, 234, 0, -2342345, 546))

*/

/*for (let i=1; i<10; i++){
    i%2==0 ?  console.log(`${i} is even`): console.log (`${i} is odd`)}
*/
