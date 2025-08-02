function printPattern(rows,colm){
    for(let i = 0; i < rows; i++){
        let line = '';
        for(let j = 0; j < colm; j++){
            line += '* '
        }
        console.log(line);
    }
}

printPattern(3,4)


