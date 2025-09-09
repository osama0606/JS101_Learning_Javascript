function countVowelNames(arr) {
    const vowels = ["A", "E", "I", "O", "U"];
    const count = { A: 0, E: 0, I: 0, O: 0, U: 0 };

    arr.forEach(item => {
        if (typeof item.name === "string" && item.name.length > 0) {
            const firstChar = item.name.charAt(0).toUpperCase();
            if (vowels.includes(firstChar)) {
                count[firstChar]++;
            }
        }
    });

  
    for (const key in count) {
        if (count[key] === 0) {
            delete count[key];
        }
    }

    return count;
}

const input = [
  { name: "Anil" },
  { name: "Om" },
  { name: "Esha" },
  { name: "Uma" },
  { name: "Ian" },
  { name: "Sam" },
  { name: "amit" },
  { name: 123 },
  { other: "Olive" }
];

console.log(countVowelNames(input));

