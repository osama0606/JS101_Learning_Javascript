function processData(users){
    let resultArr = new Set();
    
    users.forEach((user) => {
        if(user.skills.includes("JavaScript")){
            resultArr.add(user.name.toUpperCase());
        }
    });
    
    return Array.from(resultArr);
}


const users = [
  { name: "Alice", skills: ["JavaScript", "React"] },
  { name: "Bob", skills: ["Python", "Django"] },
  { name: "Charlie", skills: ["JavaScript", "Node.js"] },
  { name: "alice", skills: ["JavaScript"] }
];

console.log(processData(users)); 