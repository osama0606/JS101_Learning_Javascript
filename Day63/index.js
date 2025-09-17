function getUniqueStrings(arr) {
    const uniqueSet = new Set();
    arr.forEach(obj => {
        for (let key in obj) {
            if (typeof obj[key] === "string") {
                uniqueSet.add(obj[key]);
            }
        }
    });
    return Array.from(uniqueSet);
}


const input = [
  { name: "Raj", city: "Mumbai" },
  { name: "Sara", city: "Delhi" },
  { friend: "Raj", city: "Delhi" },
  { country: "India", project: "WebApp" }
];

console.log(getUniqueStrings(input));

