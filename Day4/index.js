

function sum(arr){
    let total = 0;
    let n = arr.length;
    
    for(let i = 0; i < n; i++){
        total += arr[i];
    }
    console.log(`The total Sum is : ${total}`);
    let average = total/n; 
    console.log(`Average : ${average}`)
    
}

sum([1,2,3,4,5,6,7,8,9,10])