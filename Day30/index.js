function hollowRectangel(rows,cols){
    for(let i = 1; i <= rows; i++){
        let row = '';
        for(let j = 1; j <= cols; j++){
            if(i === 1 || i === rows || j ===1 || j === cols){
                row += '*';
            }else{
                row += ' ' ;
            }
        }
        console.log(row)
    }
}
hollowRectangel(4,5)
