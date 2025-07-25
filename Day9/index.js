
function reverseString(str){
    let add = '';
    for(let i = str.length-1; i >= 0; i--){
        add = add + ' ' + str[i]
    }
    console.log(add)
}
reverseString('osama')