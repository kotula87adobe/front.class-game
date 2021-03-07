import React from "react";
import {Box, Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {CheckBox} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

const SignForm = props => {

    const classes = useStyles()

    return (
        <>
            <Container id={'main'} component={'main'} maxWidth={"xs"}>
                <CssBaseline/>
                <div className={classes.paper}>
                    <Typography component={'h1'} variant={'h5'}>
                        {'Create new account'}
                    </Typography>
                    <form noValidate>
                        <TextField
                            id={'email'}
                            variant={"outlined"}
                            margin={'normal'}
                            fullWidth
                            required
                            name={'email'}
                            label={'Email Address'}
                            autoComplete={'email'}
                        />
                        <TextField
                            id={'password'}
                            variant={"outlined"}
                            margin={'normal'}
                            fullWidth
                            required
                            name={'password'}
                            label={'Password'}
                            type={'password'}
                            autoComplete={'current-password'}
                        />

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label={'Remember me'}
                        />
                        <Button
                            className={classes.submit}
                            fullWidth
                            type={'submit'}
                            variant={'contained'}
                            color={'primary'}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>

                <Box mt={8}>
                    <Typography variant={"body2"} color={"textPrimary"} align={"center"}>
                        {'Copyright @Michal'}
                    </Typography>
                </Box>
            </Container>

        </>
    )

}

export default SignForm;