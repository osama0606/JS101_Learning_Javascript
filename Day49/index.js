function getAffordableProducts(products){
    return products.filter(product =>
        typeof product.name === 'string' &&
        typeof product.category === 'string' && 
        product.price <= 100
        ).map(product => `${product.name.toUpperCase()} - ${product .category.toUpperCase()}`)
}



const products = [
  { name: "Laptop", category: "Electronics", price: 999 },
  { name: "Pen", category: "Stationery", price: 10 },
  { name: "Notebook", category: "Stationery", price: 50 },
  { name: 123, category: "Misc", price: 20 },
  { name: "Charger", category: null, price: 25 }
];

console.log(getAffordableProducts(products));
















