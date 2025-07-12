// Revision Day2


// 🔹 Q8. Bubble Sort – Full Function
// Task: Write a complete function that sorts the array using bubble sort.
// Test it on:

// [5, 3, 1, 4, 2] 


// function  bubbleSort(arr){
//     let n = arr.length;
    
//     for(let i=0; i<n-1; i++){
//         for(let j=0; j<n-1-i; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]; 
//                   this is updated arr value wise 
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([5,3,1,4,2]));


// 🔹 Q9. Linear Search Practice
// 🧾 Task:
// Write a function linearSearch(arr, target)
// Search target in array → return its index
// If not found → return -1


// function linearSearch(arr,target){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === target) return `Found, index number is : ${i} and value is: ${arr[i]}`
//     }
//     return -1;
// }
// console.log(linearSearch([5,3,2,4,6,1,9,7,8],6))

// 🔹 Q10. Binary Search Practice
// 🧾 Task:
// Search 60 in a sorted array using for loop instead of while loop

// let arr = [10, 20, 30, 40, 50, 60, 70];
// target = 60

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let count = 0; // 🔢 Count loop rounds

  while (low <= high) {
    count++;
    let mid = Math.floor((low + high) / 2);
    console.log(`🔁 Round ${count}: low = ${low}, high = ${high}, mid = ${mid}, arr[mid] = ${arr[mid]}`);

    if (arr[mid] === target) {
      console.log(`✅ Target found at index ${mid} in ${count} rounds`);
      return mid;
    } else if (target < arr[mid]) {
      high = mid - 1;
      console.log(`🔼 target < arr[mid] → New high = ${high}`);
    } else {
      low = mid + 1;
      console.log(`🔽 target > arr[mid] → New low = ${low}`);
    }
  }

  console.log(`❌ Target not found after ${count} rounds`);
  return -1;
}
console.log(binarySearch([10, 20, 30, 40, 50, 60, 70],10))

