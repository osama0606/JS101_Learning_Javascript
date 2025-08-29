
function myFilter(array,callback){
    let result = [];
    for(let i = 0; i < array.length; i++){
        if(callback(array[i],i,array)){
            result.push(array[i]);
        }
    }
    return result;
}
function isEven(num){
    return num % 2 === 0;
}

console.log(myFilter([1,2,3,4,5],isEven))

console.log(myFilter(['banana','apple','pineapple','kiwi'],function(word){
    return word.length > 4;
}))


