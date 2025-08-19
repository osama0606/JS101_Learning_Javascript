

function removeDuplicates(arr){
    let array = [];
    let seen = new Set();
    
    for(let item of arr){
        if(!seen.has(item)){
            seen.add(item)
            array.push(item);
        }
    }
    return array;
}

let arr = ["apple", "banana", "apple", "orange", "banana", "grape"];

let result = removeDuplicates(arr);

console.log(result);