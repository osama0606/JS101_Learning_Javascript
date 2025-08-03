function pattern1(){
    for(let i=1; i<=3; i++){
        let row = '';
        for(let j = 1; j <= 3; j++){
            row += i + ' ';
        }
        console.log(row);
    }
}
pattern1()