
function removeDuplicate(arr){
    let uniqueArr = [];
    
    for(let i = 0; i < arr.length; i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
let arr = [1,2,3,4,5,1,2,3,4,5,7,8,9,5];
console.log(removeDuplicate(arr))

