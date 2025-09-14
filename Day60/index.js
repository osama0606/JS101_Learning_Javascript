function getPropertyValues(arr, key) {
    return arr
        .filter(obj => typeof obj[key] === "string")
        .map(obj => obj[key]);
}


const input = [
  { name: "Amit", age: 21 },
  { name: "Sara", place: "Delhi" },
  { city: "Mumbai", code: 10 },
  { name: "John", country: "India" },
];
const key = "name";

console.log(getPropertyValues(input, key));

