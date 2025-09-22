function countUppercaseStrings(arr, prop) {
    return arr.filter(obj =>
        typeof obj[prop] === "string" && obj[prop] === obj[prop].toUpperCase()
    ).length;
}


const input = [
  { code: "JS", name: "Raj" },
  { code: "HTML", name: "Sara" },
  { code: "css", name: "Amit" },
  { code: "PYTHON", name: "Amar" }
];
const prop = "code";

console.log(countUppercaseStrings(input, prop));

