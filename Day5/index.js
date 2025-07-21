// second larges number


function secondLargest(arr){
    let first = -Infinity;
    let second = -Infinity;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }else if(arr[i] > second && arr[i] !== first){
            second = arr[i];
            
        }
    }
    console.log(`second largest : ${second}`)
}

secondLargest([12, 7, 25, 3, 18])