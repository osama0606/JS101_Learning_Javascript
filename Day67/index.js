function findShortestProp(arr, prop) {
    const strings = arr
        .filter(obj => typeof obj[prop] === "string")
        .map(obj => obj[prop]);
    if (strings.length === 0) return "";
    return strings.reduce((shortest, curr) =>
        curr.length < shortest.length ? curr : shortest
    );
}


const input = [
  { name: "Raj", city: "Mumbai" },
  { name: "Sara", city: "Delhi" },
  { name: "A", city: "Pune" },
  { team: "Knights", city: "Surat" }
];
const prop = "name";

console.log(findShortestProp(input, prop));

