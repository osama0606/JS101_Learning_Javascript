// 📝 Practice Questions – Set
// Q1. Create a set of numbers: 1, 2, 3, 2, 4
// Q2. Add number 5 to the set
// Q3. Check if 3 exists in the set using .has()
// Q4. Delete 2 from the set
// Q5. Loop through the set and print all values

// let mySet = new Set();

// mySet.add(1)
// mySet.add(2)
// mySet.add(3)
// mySet.add(2)
// mySet.add(4)

// console.log(mySet)

// mySet.add(5);

// console.log(mySet)

//  console.log(mySet.has(3));
 
// mySet.delete(2);

// console.log(mySet)


// for(let key of mySet){
//     console.log(key)
// }


// Q6. Write a function countDown(n) that prints numbers from n to 1
// Input: countDown(5) → Output: 5 4 3 2 1



// function countDown(n){
//     if(n === 0) return
//     console.log(n);
//     countDown(n-1);
// }
// countDown(5)


// Q7. Write a recursive function factorial(n)
// Input: 5 → Output: 120 (5 × 4 × 3 × 2 × 1)




function factorial(n){
 if(n === 0 || n === 1) return 1;
 
 return n * factorial(n-1);
}
console.log(factorial(5))

