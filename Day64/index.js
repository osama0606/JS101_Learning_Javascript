function findNumberStrings(arr) {
    const result = [];
    arr.forEach(obj => {
        for (let key in obj) {
            if (typeof obj[key] === "string" && !isNaN(Number(obj[key])) && obj[key].trim() !== "") {
                result.push(Number(obj[key]));
            }
        }
    });
    return result;
}

const input = [
  { a: "5", b: 12, c: "hello" },
  { d: "10", e: "15.7", f: null },
  { g: "foo", h: "42" }
];

console.log(findNumberStrings(input));

