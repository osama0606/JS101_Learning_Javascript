
function hollowInvertedRightTriangle(n){
    for(let i = n; i >= 1; i--){
        let row = '';
        for(let j = 1; j <= i; j++){
            if(i === n || j === 1 || i === j){
                row += '*'
            }else{
                row += ' ';
            }
        }
        console.log(row);
    }
}
hollowInvertedRightTriangle(5)