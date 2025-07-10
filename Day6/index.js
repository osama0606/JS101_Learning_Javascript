
// 🧠 Basic Concept:
// Array must be sorted

// Start with two pointers: low (start of array) and high (end of array)

// Find mid index:
// mid = Math.floor((low + high) / 2)

// Compare arr[mid] with target

// If equal → return mid (target found)

// If target < arr[mid] → search in left half

// If target > arr[mid] → search in right half

// Repeat steps until found or range is over



function binarySearch(arr,target){
    let low = 0;
    let high = arr.length-1;
    
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid] == target){
            return mid
        }else if(target < arr[mid]){
            high = mid - 1;
        }else{
           low = mid + 1; 
        }
    }
    return -1;
}

console.log(binarySearch([10,20,30,40,50],10))
console.log(binarySearch([10,20,30,40,50,60],20))
console.log(binarySearch([10,20,30,40,50,60,70],30))
console.log(binarySearch([10,20,30,40,50,60,70,80],40))
console.log(binarySearch([10,20,30,40,50,60,70,80,90],50))





