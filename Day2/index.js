

// const obj = {
//     car:'mercedeez',
//     brand:'gh3t',
//     model:'42g255555',
//     year:1999
// }

// for(let key in obj){
//     console.log(key)
// }



// obj.color = 'red';

// console.log(obj);

// delete obj.year

// console.log(obj);

// console.log('model' in obj)


function countCharacters(str) {
  let map = {}; // empty hashmap (object)

  for (let char of str) {
    if (map[char]) {
      map[char]++;  // if already exists, increase count
    } else {
      map[char] = 1; // if not exists, set 1
    }
  }

  return map;
}

console.log(countCharacters("apple"));
// Output: { a:1, p:2, l:1, e:1 }




















