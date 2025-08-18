
function countVowelsAndConsonants(arr){
    let vowels = 0;
    let consonents = 0;
    let vowelSet = new Set(['a','e','i','o','u']);
     
     for(let str of arr){
         let lowerStr = str.toLowerCase()
         for(let char of lowerStr){
             if(char >= 'a' && char <= 'z'){
                 if(vowelSet.has(char)){
                     vowels++;
                  }else{
                     consonents++
                  }
             }
         }
     }
    
    return {
        Vowels:vowels,
        Consonents:consonents
    }
}

let arr = ['Banana', 'Mango', 'Apple','Orange', 'Strawberry'];

console.log(countVowelsAndConsonants(arr))

