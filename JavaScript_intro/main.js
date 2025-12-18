/*
0. In your HTML, import this JavaScript file. Bonus points: try to do it from the <head> without blocking the <body> rendering.
*/
//TODO:
for (let i = 0; i < 10000000000; i++) 
  continue;

/*
1. Variable scopes: based on MDN, make an example how function scope, block scope, and global scope:
* https://developer.mozilla.org/en-US/docs/Glossary/Scope
*/
console.log("EX: 1:");
console.log("------------------------------");

const globalVar = 'I am a global variable';
function scopeExercise() {
  const functionVar = 'I am a function variable';
  if (true) {
    const blockVar = 'I am a block variable';
    console.log(blockVar); // Should work
    console.log(functionVar); // Should work
    console.log(globalVar); // Should work
  }

  //console.log(blockVar); // Shouldn't work
  console.log(functionVar); // Should work
  console.log(globalVar); // Should work
}
console.log('Scope exercise:', scopeExercise()); //prints undefined because function has no return value
//console.log(blockVar); // Shouldn't work
//console.log(functionVar); // Shouldn't work
console.log(globalVar); // Should work

/*
2. Strings: Display the bio of Ada Lovelace in the form of "Hello, my name is Ada Lovelace, I was born 36 years ago."

Observations: the '${}' syntax only works with backticks ``, not with single '' or double "" quotes.
*/

console.log("EX 2:");
console.log("------------------------------");

const firstName = 'Ada';
const lastName = 'Lovelace';
const age = 36;

console.log(`Bio: Hello, my name is ${firstName} ${lastName}, I was born ${age} years ago` );


/*
3. Objects: Declare an object, access/update properties, add a new property, delete a property, and iterate keys.
*/

console.log("EX 3:");
console.log("------------------------------");

const person = {
  name: 'Ada',
  age: 36,
  skills: ['math', 'programming'],
  address: { city: 'London', country: 'UK' }
};

console.log(`Log the person's name and city: ${person.name} from ${person.address.city} `);
console.log(`Update age: ${person.age = 37}`, /* update age to 37 and log the object */);
console.log(`Add role: ${person.role = "teacher"}`, /* add a "role" property, set a string value and log */);

delete person.address.country;
console.log(`Delete country: ${JSON.stringify(person, null, 2)}`, /* delete country and log the object */);
console.log(`Person info without country:`, person)


console.log('Iterate keys:', /* iterate over the object's keys and values and log them */);
//Object.entries(person) allows access to keys and values
//Object.keys(person) allows access to keys only
//Object.values(person) allows access to values only

console.log("------------------------------");
console.log("METHOD 1");
//this fails for nested objects like person and addresses
for (const key in person){
  console.log(`${key}: ${person[key]}`);
}

console.log("------------------------------");
console.log("METHOD 2");
//this works for nested objects like person and addresses
for (const key in person){
  console.log(key + ":", person[key]); 
}

console.log("------------------------------");
console.log("METHOD 3");
//this fails for nested objects like person and addresses
for (const [key, value] of Object.entries(person)) 
  console.log(`${key}: ${value}`);

console.log("------------------------------");
console.log("METHOD 4");
//good
for(const [key, value] of Object.entries(person)){
  console.log(key + ":", value)
}


//Counclusion: ${} syntax forces JS to call method toString() on the object, which for nested objects returns [object Object]
//           : key, value synatx passes 2 objects witch doesn t force toString() method, so nested objects are printed interactively




/*
4. Write a function that makes a string sentence cased - starts with capital letter and ends with "."
* Don't focus on edge cases for now (like multiple spaces, punctuation, etc), it needs only to handle this string.
*/

console.log("EX 4:");
console.log("------------------------------");

const sentence = '   hello there GENERAL KENOBI   ';

function toSentenceCase(str) {
  let copy_sentance = str;
  for (const index in str){
    const i = parseInt(index);  //tho index refers to the position, it apperat to be of type string

    //find first non-space character, make it uppercase, create a copy made from the initiol string
    if (str[i] !== ' '){
      copy_sentance = copy_sentance.slice(0, i ) + copy_sentance[i].toUpperCase() + copy_sentance.slice(i + 1);
      break;
    }
  }
  //find last non-space character, add a dot after it
  for (let j = copy_sentance.length - 1; j >=0 ; j--){
    if(copy_sentance[j] !== ' '){
      copy_sentance = copy_sentance.slice(0, j + 1) + "." + copy_sentance.slice(j + 1);
      break;
    }
  }

  return copy_sentance;
}
console.log('Sentence-cased sentence:', toSentenceCase(sentence) );



const greeting = 'Ho Ho Ho! Merry Christmas!';
/*
5. Iterate the greeting, log the current character, index and 🎅.
*/

console.log("EX 5:");
console.log("------------------------------");

//for in parses the indexs, parseInt converts them to integers and then i print the character at that index, the index and the emoji
function iterateString(str){
  let result = "\n";
  for (const index in str){
    const i = parseInt(index);
    result += `${str[i]}${i}🎅\n`;
  }
  return result;
}
console.log('Indexed iteration:', iterateString(greeting));





/** Array Methods **/
/*
6. Write a function that receives the array below as parameters and returns a new array which has all the elements added with 2
*/

console.log("EX 6:");
console.log("------------------------------");

var strArr = ['13', '2', '34', '14', '5', '86', '3.46'];
//use a lambda function inside map to convert each element to number, add 2, convert back to string and return the new array
function addInNewArray(arr) {
  const newArr = arr.map((element) => {element = Number(element) + 2; element = element.toString(); return element} );
  return newArr;
}
console.log('Add in new array: ', addInNewArray(strArr));

/* 
7. Implement a function that receives an array of objects and a key name and returns an array with all the values corresponding to the key of the objects in the array.
*/

console.log("EX 7:");
console.log("------------------------------");

const mappings = [
  {id: 1, color: 'magenta', height: 15, width: 20, distance: 10},
  {id: 2, color: 'red', height: 5, width: 30, distance: 15},
  {id: 3, color: 'magenta', height: 7, width: 9, distance: 8},
  {id: 4, color: 'gray', height: 2, width: 3, distance: 3},
  {id: 5, color: 'blue', height: 10, width: 10, distance: 2},
  {id: 6, color: 'crimson', height: 7, width: 8, distance: 16},
];

//mapped each element to the value of the specified key and returned the new array
function pluck(arr, key) {
  const arr_values = arr.map((element) => element[key]);
  return arr_values;
}

console.log(pluck(mappings, 'color'));  // => ['magenta', 'red', 'green' .......];

/*
9. Implement a function that returns the area of all elements in the above array, area = height * width.
*/

console.log("EX 9:");
console.log("------------------------------");

function calculateArea(arr) {
  const areas = arr.map((element) => element.height * element.width);
  return areas;
}
console.log(calculateArea(mappings));

/*
10. Write a function that returns a subset of the above array where the elements have an area smaller or equal to 100
*/

console.log("EX 10:");
console.log("------------------------------");

function filterArr(arr) {
  const filtered = calculateArea(arr).filter((area) => area <=100);
  return filtered; 
}
console.log(filterArr(mappings));

/*
11. Implement a function called reject, which receives an array and an iterator function.
The iterator function receives each element in the array as a parameter and must return true or false. 
If it returns true, the element will not be included by the parent function in the resulting array.
If returns false it will be included.
*/

console.log("EX 11:");
console.log("------------------------------");

//returns true is teh element height is >= 10
function iterator(element){
  return element.height >= 10;
}

//filter based on the iterator function, negating its result
function reject(arr, iterator){
  const rejected = arr.filter((element) => !iterator(element))
  return rejected;
}
console.log(reject(mappings, iterator)); // return an array of objects with height < 10

/*
12. Write a function that return the element with the color 'magenta', null otherwise.
*/

console.log("EX 12:");
console.log("------------------------------");

//tries to find the element with the specified color, returns it or null if not found
function findColor(str, color){
  const found = str.find((element) => element.color === color);
  return found || null;

}
 
console.log(findColor(mappings, 'magenta'));

/*
13. Write a function that returns true if all elements in the array have the area > = 10, false otherwise.
*/

console.log("EX 13:");
console.log("------------------------------");


// function getAreasAreBigger(arr, minArea){
//   const areas = calculateArea(arr).filter((area) => area >= minArea);
//   return areas.length === arr.length;
// }

//.every tests if all elements match the condition
function getAreasAreBigger(arr, minArea){
  const areas = calculateArea(arr).every((area) => area >=minArea);
  return areas;
}

console.log(getAreasAreBigger(mappings, 10))

/*
14. Write a function that returns true if at least one of the array elements has the color 'green'; false otherwise.
*/

console.log("EX 14:");
console.log("------------------------------");

// .some for at least one lement matching the condition
function returnAtLeastOneIsOfColor(arr, color){
  const colors = arr.some((element) => element.color === color);
  return colors;
}
console.log(returnAtLeastOneIsOfColor(mappings, 'magenta'));

/*
15. Write a function that returns the total distance (the sum of the element distances).
*/

console.log("EX 15:");
console.log("------------------------------");

function getTotalDistance(arr){
  const distances = arr.reduce((total, element) => total + element.distance, 0);
  return distances;
}

console.log('Sum of distances: ', getTotalDistance(mappings));

/*
16. Write a function that returns an object that counts how many times each color appears in the object array. {red: 2, blue: 1, etc ...}
*/

console.log("EX 16:");
console.log("------------------------------");

//.reduce uses a return value as accumulator, so for each element of the array the initial value is updated from the 
//previous iteration. for each element we consider a map where the key is the color. if the color is already in the map we increment its value, 
// otherwise we add it with value 1
function getNumberOfColors(arr){
  const counts = arr.reduce((arr, element) => {
    if(arr[element.color]){
      arr[element.color] += 1;
    } else {
      arr[element.color] = 1;
    }
    return arr;
  },{});
  return counts;
}

console.log('Number of colors: ', getNumberOfColors(mappings));

/*
17. Write a function that returns an array with all elements having a unique color. Any element after the first one that has a color that would repeat is not included in the array.
*/

console.log("EX 17:");
console.log("------------------------------");

function getUniqueColors(arr){
  const uniqueColors = arr.reduce((acc, element) => {
    if(!acc.some((e) => e.color === element.color))
      acc.push(element);
    return acc;
  }, []);
  return uniqueColors;
}

console.log('Unique Colors: ', getUniqueColors(mappings));

/*
18. Write a function which inverts two numbers.
*/

console.log("EX 18:");
console.log("------------------------------");

let a = 5, b = 8;


//primitives are passed by value, not by reference as objects, so we can t use parameters to swap their values
// function invertNumbers(){
//   [a, b] = [b, a];
// }
// invertNumbers();

//here i returned an array with the inverted values and used destructuring to assign them to a and b
function invertNumbers(x, y){
  return [y, x];
}
[a, b] = invertNumbers(a, b);



console.log('A:', a, 'B:', b);

/*
19. Using the array below, get a variable that contains an array of objects structured like this:
[
  {subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick'},
  ...
]
*/

console.log("EX 19:");
console.log("------------------------------");

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const objClasses = [];

function loadClasses(arr){
  for (const element of arr){
    const obj = {
      subject: element[0],
      time: element[1],
      teacher: element[2]
    };
    objClasses.push(obj);
  }
}

loadClasses(classes);
console.log(objClasses);