
function groceriesSummary(groceries){
    let summary = {};
    
    groceries.forEach(item => {
      if(typeof item.name === 'string' && typeof item.quantity === 'number' && item.quantity > 0){
          if(summary[item.name]){
              summary[item.name] += item.quantity;
          }else{
              summary[item.name] = item.quantity;
          }
      }
    })
    
    return summary
}


const groceries = [
  { name: "apple", quantity: 5 },
  { name: "banana", quantity: 3 },
  { name: "apple", quantity: 2 },
  { name: "orange", quantity: 0 },
  { name: 123, quantity: 10 }
];

console.log(groceriesSummary(groceries));










