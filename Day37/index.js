
function groupByFirstLetter(words){
    let grouped ={};
    
    for(let word of words){
        if(word.length === 0) continue;
        
        let firstLetter = word[0].toLowerCase();
        
        if(!grouped[firstLetter]){
            grouped[firstLetter] = [];
        }
        
        grouped[firstLetter].push(word);
    }
    return grouped;
}

console.log(groupByFirstLetter(["Apple", "Banana", "Apricot", "Blueberry", "Cherry","Pineapple","Orange"]));
