// selection sort method


function selectionSort(arr){
    let n = arr.length;
    
    for(let i = 0; i < n-1; i++){
        let midIndex = i;
        for(let j = i + 1; j < n; j++){
            if(arr[j] < arr[midIndex]){
                midIndex = j;
            }
        }
        // swap
        [arr[i], arr[midIndex]] = [arr[midIndex],arr[i]]
    }
    return arr;
}

console.log(selectionSort([4, 2, 7, 1, 3]));