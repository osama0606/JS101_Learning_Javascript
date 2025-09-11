
function sumAllValues(arr) {
    let sum = 0;
    arr.forEach(obj => {
        for (let key in obj) {
            if (typeof obj[key] === "number") {
                sum += obj[key];
            }
        }
    });
    return sum;
}


const input = [
  { a: 2, b: "hello" },
  { c: 5 },
  { d: 1, e: "world", f: 3 },
  { g: "10", h: 2 }
];

console.log(sumAllValues(input)); 
