

function analyzeData(arr,str){
    let evenCount = 0;
    let oddCount = 0; 
    let sum = 0; 
    
    for(let num of arr){
        if(typeof num  === 'number'){
            if(num % 2 === 0){
                evenCount++;
            }else{
                oddCount++;
            }
            sum += num;
        }
    }
    let stringCharCount = 0;
    for(let key of str){
        if(key !== ' '){
            stringCharCount++;
        }
    }
    
    return {
        evenCount,
        oddCount,
        sum,
        stringCharCount
    }
}

const result = analyzeData([1,2,3,4,5,6,7,8,9,10],'HellO World!')

console.log(result);


