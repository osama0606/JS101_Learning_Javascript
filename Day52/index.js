function uniqueInitials(users) {
    const initialsSet = new Set();

    users.forEach(user => {
        if (typeof user.name === "string" && user.name.length > 0) {
            const initial = user.name.charAt(0).toUpperCase();
            if (/[A-Z]/.test(initial)) {
                initialsSet.add(initial);
            }
        }
    });

    return Array.from(initialsSet);
}


const users = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "ananya" },
  { name: "3lizabeth" },
  { name: 42 },
  { notName: "Charlie" },
  { name: "Brandon" }
];

console.log(uniqueInitials(users)); 

