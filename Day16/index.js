// 

function mostFrequentWord(sentence){
    let words = sentence.toLowerCase().split(' ');
    let freq = {};
    
    for(let word of words){
        freq[word] = (freq[word] || 0) + 1;
    }
    let maxCount = 0;
    let mostFrequent = '';
    
    for(let word in freq){
        if(freq[word] > maxCount){
            maxCount = freq[word];
            mostFrequent = word;
        }
    }
    console.log(`The most frequent word is : ${mostFrequent} and count is ${maxCount}`);
}

mostFrequentWord("The sun shines over the lake and the sun rises again")