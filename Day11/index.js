
function isAnagram(str1,str2){
    let s1 = str1.replace(/\s/g,'').toLowerCase();
    let s2 = str2.replace(/\s/g,'').toLowerCase();
    
    if(s1.length !== s2.length){
        return false;
    }
    
    let sort1 = s1.split('').sort().join('');
    let sort2 = s2.split('').sort().join('');
    
    return sort1 === sort2;
}

console.log(isAnagram('listen','silent'));
console.log(isAnagram('hello','world'));

