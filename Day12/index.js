// merge sorted 
function mergeSorted(arr){
    if(arr.length <=1) return;
    
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);
    
    const sortedLeft = merge(left);
    const sortedRight = merge(right);
    
    return merge(sortedLeft, sortedRight);
}
// Tommorrow I write remaining code 