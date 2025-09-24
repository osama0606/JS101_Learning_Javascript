function reverseStringProps(arr, prop) {
    return arr.map(obj => {
        if (typeof obj[prop] === "string") {
            return {
                ...obj,
                [prop]: obj[prop].split("").reverse().join("")
            };
        }
        return { ...obj };
    });
}


const input = [
  { name: "Raj", city: "Mumbai" },
  { name: "Sara", city: "Delhi" },
  { name: "Amit", city: "Pune" },
  { team: "Knights", city: "Surat" }
];
const prop = "name";

console.log(reverseStringProps(input, prop));

