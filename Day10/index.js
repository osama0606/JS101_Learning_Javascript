function isPalindrome(str){
    let reversed = '';
    
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    if(str === reversed){
        console.log(`${str} is a palindrome`);
    }else{
        console.log(`${str} is not a palindrome`);
    }
}
isPalindrome('osama');
isPalindrome('madam');
 
 