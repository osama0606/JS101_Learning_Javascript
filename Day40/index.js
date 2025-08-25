function capitalizeWords(str) {
    let result = "";
    let wordStarted = false;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result += ' ';
            wordStarted = false;
        } else {
            if (!wordStarted) {
                result += str[i].toUpperCase();
                wordStarted = true;
            } else {
                result += str[i].toLowerCase();
            }
        }
    }
    return result;
}


console.log(capitalizeWords("welcome to javascript basics"));

