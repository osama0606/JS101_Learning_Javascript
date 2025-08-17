
function findLongestString(arr){
    let longestStr = '';
    
    for(let str of arr){
        if( str.length > longestStr.length ){
            longestStr = str;
        }
    }
    
    return {
        longestStrLength:longestStr.length,
        longestStr:longestStr
    }
}
let arr = ['banana','apple','mango','pinapple','watermelon'];

let result = findLongestString(arr);

console.log(result);





