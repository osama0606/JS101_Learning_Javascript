

function getShortNames(arr) {
    return arr
        .filter(item => typeof item.name === "string" && item.name.length <= 4)
        .map(item => item.name.toUpperCase());
}


const input = [
  { name: "Avi" },
  { name: "Omkar" },
  { name: "Raj" },
  { name: "Sara" },
  { name: "John" },
  { name: 123 },
  { title: "NoName" }
];

console.log(getShortNames(input)); 

