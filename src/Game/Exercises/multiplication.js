let multiplication = [

]

for (let i=4; i <=10; i++){
    for(let j=3; j <=10; j++){
        if(i*j<=50){
            multiplication.push({
                first: i,
                sign: '·',
                second: j,
                result: i*j
            })
        }
    }
}

export {multiplication}