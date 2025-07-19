function reverse(arr){
    let reverse = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reverse.push(arr[i]);
    }
    return reverse;
}

console.log(reverse([1,2,3,4,5,6,7,8,9,10]));