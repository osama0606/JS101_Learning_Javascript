function reverseShortWords(arr) {
    return arr
        .filter(item => typeof item.word === "string" && item.word.length <= 4)
        .map(item => item.word.split("").reverse().join(""));
}


const input = [
  { word: "cat" },
  { word: "lion" },
  { word: "tiger" },
  { word: "dog" },
  { animal: "fox" },
  { word: 123 }
];

console.log(reverseShortWords(input));

