function hasUniqueChar(str){
    let seen = {};
    for(let i=0; i<str.length; i++){
        let char = str[i];
        //  console.log(seen[char])
        if(seen[char]){
            return `This string '${str}' is not an unique`;
        }else{
            seen[char] = true;
        }
    }
    return `This string '${str}' is an unique `
}

console.log(hasUniqueChar('osama'));
console.log(hasUniqueChar('khan'));