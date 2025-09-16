function findFirstLongStringIndex(arr) {
    return arr.findIndex(
        obj => typeof obj.word === "string" && obj.word.length > 5
    );
}


const input = [
  { word: "cat" },
  { word: "doggo" },
  { word: "elephant" },
  { animal: "fox" },
  { word: "tree" }
];

console.log(findFirstLongStringIndex(input));
