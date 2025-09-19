function truncateStrings(arr, maxLen) {
    return arr.map(obj => {
        if (typeof obj.text === "string" && obj.text.length > maxLen) {
            return { ...obj, text: obj.text.slice(0, maxLen) + "..." };
        }
        return { ...obj };
    });
}


const input = [
  { text: "Hello World!", author: "Raj" },
  { text: "Nice", author: "Sara" },
  { text: "JavaScript is awesome", topic: "Programming" }
];
const maxLen = 8;

console.log(truncateStrings(input, maxLen));

