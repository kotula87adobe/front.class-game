const mathMultiplicationSpecificNumberGenerateExercises = (max, firstColumn, secondColumn)=>{

    let data = [];

        for(let j=secondColumn; j <=10; j++){
            if(firstColumn*j<=max){
                data.push({
                    first: firstColumn,
                    sign: '·',
                    second: j,
                    result: firstColumn*j
                })
            }
        }

    return data;

}

export {mathMultiplicationSpecificNumberGenerateExercises}