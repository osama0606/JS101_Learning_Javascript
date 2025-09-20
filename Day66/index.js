function capitalizeProps(arr, prop) {
    return arr.map(obj => {
        if (typeof obj[prop] === "string" && obj[prop].length > 0) {
            return {
                ...obj,
                [prop]: obj[prop][0].toUpperCase() + obj[prop].slice(1)
            };
        }
        return { ...obj };
    });
}


const input = [
  { name: "raj", city: "mumbai" },
  { name: "sara", city: "delhi" },
  { team: "knights", city: "pune" }
];
const prop = "name";

console.log(capitalizeProps(input, prop));

