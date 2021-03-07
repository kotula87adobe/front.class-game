/*  TODO:
*   Kontener w ktorym mozna umieszczac kontent : Formularz | Tabela | ??
*   Użyć Paper | Grid  | Typography
*
*   TODO: Zrobić tabele z paginacja (dane tylko z frontu moze)
* */

import React from "react";

import BigForm from "./BigForm";

import {Container, Grid, makeStyles} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";


const useStyle = makeStyles(theme => (
    {
        paper: {
            padding: theme.spacing(2)
        }
    }
))

const CustomContainer = () => {

    const {paper} = useStyle()

    return (
        <>
            <CssBaseline />
            <Container component={'main'} fixed>
                <Paper
                    className={paper}
                    variant={"elevation"}
                    elevation={3}
                >
                    <BigForm/>
                </Paper>


            </Container>
        </>
    )

}

export default CustomContainer;