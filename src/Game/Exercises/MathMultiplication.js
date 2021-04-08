const mathMultiplicationGenerateExercises = (max, firstColumn, secondColumn)=>{

    let data = [];

    for (let i=firstColumn; i <=10; i++){
        for(let j=secondColumn; j <=10; j++){
            if(i*j<=max){
                data.push({
                    first: i,
                    sign: '·',
                    second: j,
                    result: i*j
                })
            }
        }
    }

    return data;

}

export {mathMultiplicationGenerateExercises}