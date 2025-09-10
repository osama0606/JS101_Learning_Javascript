function findLongestString(arr) {
 
    const words = arr
        .filter(item => typeof item.word === "string")
        .map(item => item.word);

   
    let longest = "";
    words.forEach(word => {
        if (word.length > longest.length) {
            longest = word;
        }
    });

    return longest;
}


const input = [
  { word: "cat" },
  { word: "dinosaur" },
  { animal: "elephant" },
  { word: "hippopotamus" },
  { word: 123 },
  { word: "giraffe" }
];

console.log(findLongestString(input)); 

