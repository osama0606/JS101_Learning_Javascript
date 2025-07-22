// find max and min number


function FindMaxMin(arr){
    let max = arr[0];
    let min = arr[0];
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }else if(arr[i] < min){
            min = arr[i];
        } 
    }
    console.log(`Max : ${max} and Min : ${min}`);
}
FindMaxMin([6,8,9,3,4,5,6,7,8,9,10])
