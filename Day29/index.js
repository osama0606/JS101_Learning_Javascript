
function numberPyramid(n){
    for(let i = 1; i <= n; i++){
        let row = '';
        for(let j = 1; j <= n-i; j++){
            row += ' ';z
        }
        for(let k = 1; k <= i; k++){
            row += k + ' ';
        }
        console.log(row)
    }
}
 numberPyramid(5)
