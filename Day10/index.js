// insertionSort Algoritham
 
function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let current = arr[i];
        let j = i -1; 
        while(j>=0 && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}
 
 console.log(insertionSort([6,63,59,9,8,3,7,1]))
 
 
 
 