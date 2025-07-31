function countWordFreq(sentence){
    let words = sentence.toLowerCase().split(' ');
    console.log(words)
    let freq = {};
    
    for(let i = 0; i < words.length; i++){
        freq[words[i]] = (freq[words[i]] || 0) + 1;
    }
    return freq;
}

console.log(countWordFreq('I am learning and I love  learning'))

