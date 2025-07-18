
function findMaxAndMin(arr){
    let max = arr[0];
    let min = arr[0];
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    console.log(`The Maximum value is ${max} and Minimum value is ${min}. Differences is : ${max - min}`);
}

findMaxAndMin([12, 7, 25, 3, 18]);