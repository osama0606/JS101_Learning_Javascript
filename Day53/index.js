function greaterThanAverage(arr) {
  const avg = arr.reduce((sum, num) => sum + num, 0) / arr.length;
  return arr.filter(num => num > avg);
}

// Example usage:
console.log(greaterThanAverage([2, 4, 6, 8, 10])); // Output: [6, 8, 10]
