// Q1. Create an array of your 5 favorite movies.

// Add one more movie at the end.

// Remove the first movie.

// Check if one specific movie exists using .includes()

// Print all movies using .forEach()


// const arr = ['3idiots','superman','batman','spiderman','ironman'];

// arr.push('aquaman');
// console.log(arr)

// console.log(arr.includes('batman'));

// arr.forEach((ele)=> console.log(ele))

// Q2. From the string "Masai School",

// Convert it to lowercase

// Split it by space

// Slice out only "Masai"


// const str = 'Masai School';

// console.log(str.toLowerCase());

// console.log(str.split(' '));

// console.log(str.slice(0,5));

// Q3. Create an object car with brand, model, and year.

// Add a new key color

// Delete year

// Check if model key exists

// Loop and print all keys

// const obj = {
//     car:'indica',
//     brand:'maruti suzuki',
//     model:'hgo35hf',
//     year:1947
// }

// obj.color = 'red'
// console.log(obj)

// delete obj.year

// console.log(obj)

// for(let key in obj){
//     console.log(key)
// }

// Q3. Create an object car with brand, model, and year.

// Add a new key color

// Delete year

// Check if model key exists

// Loop and print all keys

// const mySet = new Set([1,2,3,2,4,5]);

// console.log(mySet)

// 🔹 Q5. Create a Map for Student Marks
// 🧾 Task:

// Create a Map with student names and their marks

// Get Zara’s marks

// Check if "Ahmed" exists

// Loop through and print all name → marks

// let marks = new Map();

// marks.set('Zara', 85);

// console.log(`Zara marks: ${marks.get('Zara')}`);

// console.log(`Zara exists: ${marks.has('Zara')}`);

// for(let [name,mark] of marks){
//     console.log(`name: ${name} and mark:${mark}`)
// }

// Q6. Write a function that prints "Hello" n times using recursion.

// function prints(n){
//     if(n === 0) return;
//     console.log('Hello');
//     prints(n-1)
// }
// prints(5);

// Q7. Write a recursive function to calculate factorial of n.
// E.g. factorial(5) → 120


function factorial(n){
    if(n === 0) return 1
    return n * factorial(n-1);
}
console.log(factorial(5));

