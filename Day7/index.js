// sum of even numbers and odd sumbers  separately

function sumOfEvenAndOdd(arr){
    let sumEven = 0;
    let sumOdd = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            sumEven += arr[i];
        }else{
            sumOdd += arr[i];
        }
    }
    
    console.log(`Sum of Even Numbers : ${sumEven} and Sum of Odd Numbers : ${sumOdd}`)
}

sumOfEvenAndOdd([1,2,3,4,5,6,7,8,9])