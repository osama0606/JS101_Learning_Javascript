function objectToArray(obj) {
    let arr = [];
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            arr.push(`${key} : ${obj[key]}`);
        }
    }
    return arr;
}

const sampleObj = { name: 'Osama Khan', age: 26 };
console.log(objectToArray(sampleObj)); 
// Output: ["name : Osama Khan", "age : 26"]
