// first non-repeating character

function firstNonRepeatingChar(str){
    let freq = {};
    /// frequency
    
    for(let i = 0; i < str.length; i++){
        freq[str[i]] = (freq[str[i]] || 0) + 1;
    }
    for(let i = 0; i < str.length; i++){
        if(freq[str[i]] === 1){
            console.log(`first non-repeating character is ${str[i]}`);
            return;
        }
    }
    console.log(`No non-repeating character found`);
}

firstNonRepeatingChar('aabbccddee')