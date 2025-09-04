function shortWordReport(sentence) {
    
    const wordsArray = sentence.split(" ");

    
    const cleanWord = word => word.replace(/[.,!?:;]+$/, "");

 
    const shortWords = wordsArray
        .map(cleanWord)
        .filter(word => word.length > 0 && word.length <= 4);

    return {
        words: shortWords,
        count: shortWords.length
    };
}

// Example usage:
const sentence = "JavaScript is fun, and I love to code!";
console.log(shortWordReport(sentence)); 
