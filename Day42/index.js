function joinWithDash(...args) {
    let result = "";
    for (let i = 0; i < args.length; i++) {
        result += `${i === 0 ? "" : "-"}${args[i]}`;
    }
    return result;
}


console.log(joinWithDash("apple", "banana", "cherry")); 
console.log(joinWithDash("hello")); 
