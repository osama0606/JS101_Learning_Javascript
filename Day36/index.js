
function countWords(sentence){
    let cleaned = sentence.replace(/[!@#$%^&*(){}<>|\/~\[\],."]/g,"").toLowerCase();
    let words = cleaned.split(/\s+/);
    let wordCount = {};
    
    for(let word of words){
        if(word === '') continue;
        if(wordCount[word]){
            wordCount[word]++;
        }else{
            wordCount[word] = 1;
        }
    }
    return wordCount;
}
let sentence = 'hello from my side, hello and welcome to the AIASL'
let result = countWords(sentence)
console.log(result);














