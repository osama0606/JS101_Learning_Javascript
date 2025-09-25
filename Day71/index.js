function getNumericStringProps(arr, prop) {
    return arr
        .filter(obj =>
            typeof obj[prop] === "string" &&
            !isNaN(Number(obj[prop])) &&
            obj[prop].trim() !== ""
        )
        .map(obj => obj[prop]);
}


const input = [
  { age: "23", name: "Raj" },
  { age: "twenty", name: "Sara" },
  { age: "41.5", name: "Amit" },
  { age: "-5", name: "Joy" },
  { age: 22, name: "Paul" }
];
const prop = "age";

console.log(getNumericStringProps(input, prop));

