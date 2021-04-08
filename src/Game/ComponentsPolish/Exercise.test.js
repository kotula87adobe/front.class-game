import React from "react";
import {cleanup, render, screen} from '@testing-library/react'

import Exercise from "./Exercise";


function returnType(val){
    return typeof val;
}


afterEach(cleanup)

describe('Component : ComponentsPolish/Exercise', () =>{

    test('form Should be render', ()=>{

        const props = {
            text: 'To jest tresc zadania',
            question: 'To jest pytanie',
            answers: ['tak','nie','moze'],
            answer: 'tak',
            correctAnswer: true
        }

        const {getByTestId} = render(<Exercise {...props} />)

        const component = getByTestId('form')

        expect(component).toBeTruthy()
    })

    test('form Should render proper texts', async ()=>{

        const props = {
            text: 'To jest tresc zadania',
            question: 'To jest pytanie',
            answers: ['tak','nie','moze'],
            answer: 'tak',
            correctAnswer: true
        }

        const {findByText} = render(<Exercise {...props} />)

        const text = await findByText(props.text)
        const question = await findByText(props.question)

        console.log({question: question.innerHTML})
        expect(text.innerHTML).toEqual('To jest tresc zadania')
        expect(question.innerHTML).toEqual('To jest pytanie')
    })

})

describe('testFunctions',()=>{

    test('should return correct value type', ()=>{
        expect(returnType('123')).toEqual('string')
        expect(returnType(123)).toEqual('number')
        expect(returnType([1,2,3])).toEqual('object')
        expect(returnType(false)).toEqual('boolean')
    })

})