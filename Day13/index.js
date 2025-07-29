function countCharFrequency(str){
    let freq = {};
    
    for(let char of str){
        if(char === ' ') continue;
        if(freq[char]){
            freq[char]++;
        }else{
            freq[char] = 1; // like obj['firstName'] = 'Osama Khan'
        }
    }
    return freq;
}
console.log(countCharFrequency('osama'))