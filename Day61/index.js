function concatStringValues(arr) {
    let result = "";
    arr.forEach(obj => {
        for (let key in obj) {
            if (typeof obj[key] === "string") {
                result += obj[key];
            }
        }
    });
    return result;
}


const input = [
  { name: "Raj", age: 22 },
  { place: "Mumbai", code: 10 },
  { role: "Intern", project: "WebApp", completed: false }
];

console.log(concatStringValues(input));

