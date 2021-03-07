// TODO https://testing-library.com/docs/queries/byrole
// TODO https://testing-library.com/docs/react-testing-library/example-intro

import React from "react";
import {cleanup, render, screen} from '@testing-library/react'

import BigForm from "./BigForm";

afterEach(cleanup)

it('form Should be render', ()=>{

    const {getByTestId} = render(<BigForm/>)

    const form = getByTestId('form')

    expect(form).toBeTruthy()

})

it('should be 3 inputs rendered', ()=>{

    render(<BigForm/>)
    const inputs = screen.getAllByRole('textbox')

    expect(inputs).toHaveLength(3)

})

it('should be 1 checkbox rendered', ()=>{

    render(<BigForm/>)
    const inputs = screen.getAllByRole('checkbox')

    expect(inputs).toHaveLength(1)

})

it('should be at last 1 select rendered', ()=>{

    render(<BigForm/>)
    const inputs = screen.getAllByRole('listbox') //musialem dodad role={'listbox'} do selecta

    expect(inputs).toHaveLength(1)

})


// TODO test dla podanego state, np day: 1 - sprawdzić aktywny option w select, text pod formem czy tez jest 1, czy aktywny jest monday
// TODO test po zdarzeniu np wybieram day 1 - ________________________||_______________________________________

