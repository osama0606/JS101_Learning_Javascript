function countMatchingProps(arr, prop) {
    return arr.filter(obj =>
        typeof obj[prop] === "string" && obj[prop].startsWith("A")
    ).length;
}


const input = [
  { name: "Amit", city: "Mumbai" },
  { name: "Anuj", city: "Delhi" },
  { name: "Sara", city: "Pune" },
  { name: "Arjun", city: "Surat" },
  { name: "raj", city: "Goa" }
];
const prop = "name";

console.log(countMatchingProps(input, prop));

