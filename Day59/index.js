function countStringProperties(arr) {
    let count = 0;
    arr.forEach(obj => {
        for (let key in obj) {
            if (typeof obj[key] === "string") {
                count++;
            }
        }
    });
    return count;
}

const input = [
  { name: "Raj", age: 22 },
  { place: "Mumbai", code: 10 },
  { role: "Intern", project: "WebApp", completed: false }
];

console.log(countStringProperties(input)); 

