// Create a function linearSearch(arr, target)

// If target number exists in the array, print: "Found"

// If not, print: "Not Found"

// 🔸 Example:
// linearSearch([1, 2, 3, 4, 5], 3);  // ➝ Output: Found
// linearSearch([10, 20, 30], 50);   // ➝ Output: Not Found

function linearSearch(arr,target){
    for(let i=0; i < arr.length; i++){
        if(arr[i] === target) return "Found"
    }
    return "Not Found"
}
console.log(linearSearch([1, 2, 3, 4, 5], 3))
console.log(linearSearch([10, 20, 30], 50)) 