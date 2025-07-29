function countCharFrequency(str){
    let freq = {};
    
    for(let char of str){
        if(char === ' ') continue;
        if(freq[char]){
            freq[char]++;
        }else{
            freq[char] = 1;
        }
    }
    return freq;
}
console.log(countCharFrequency('osama'))