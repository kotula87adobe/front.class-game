/*
* TODO:
*  napisac jakas automatyczna walidacje
* */

import React, {useState} from "react";

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import {FormControl, FormLabel, Grid, Radio, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {MenuOpen} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const GreenSwitch = withStyles({
    switchBase: {
        color: green[300],
        '&$checked': {
            color: green[500],
        },
        '&$checked + $track': {
            backgroundColor: green[500],
        },
    },
    checked: {},
    track: {},
})(Switch)

const BigForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        remember: true,
        day: '',
        hour: [],
        reason: [],
        gender: '',
        color: '',
        button: '',
    })

    const handleData = ({target}) => {

        console.log(target)

        if (target.type === 'checkbox' && target.name !== 'color') {
            setFormData(prevState => ({
                ...prevState,
                [target.name]: !prevState[target.name]
            }))
        } else {
            setFormData(prevState => ({
                ...prevState,
                [target.name]: target.value
            }))
        }
    }

    return (
        <>
            <Typography
                component={"h1"}
                variant={"h4"}
                align={"center"}
            >
                Big Form
            </Typography>
            <form data-testid="form">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={4}>
                        <TextField
                            fullWidth
                            name={'name'}
                            label={'name'}
                            onInput={handleData}
                            value={formData.name}
                        />

                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <TextField
                            fullWidth
                            name={'surname'}
                            label={'surname'}
                            onInput={handleData}
                            value={formData.surname}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <TextField
                            fullWidth
                            name={'email'}
                            label={'email'}
                            onInput={handleData}
                            value={formData.email}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Typography id={'name-text'} component={'p'} variant={"h6"}>
                            {formData.name}
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Typography component={'p'} variant={"h6"}>
                            {formData.surname}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Typography component={'p'} variant={"h6"}>
                            {formData.email}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formData.remember}
                                color={"primary"}
                                value={'remember'}
                                name={'remember'}
                                onClick={handleData}
                            />
                        }
                        label="Remember me!"
                    />
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <FormControl
                            fullWidth
                        >
                            {/*TODO zwykły select*/}
                            <InputLabel id={'day-label'}>Day</InputLabel>
                            <Select
                                role={'listbox'}
                                name={'day'}
                                labelId={'day-label'}
                                id={'select-day'}
                                onChange={handleData}
                                value={formData.day}
                            >
                                <MenuItem value={1}>Monday</MenuItem>
                                <MenuItem value={2}>Tuesday</MenuItem>
                                <MenuItem value={3}>Wednesday</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <FormControl fullWidth>
                            <InputLabel id={'hour-label'}>Hour</InputLabel>
                            <Select
                                multiple
                                role={'listbox'}
                                name={'hour'}
                                labelId={'hour-label'}
                                id={'select-hour'}
                                onChange={handleData}
                                value={formData.hour}
                            >
                                <MenuItem value={12}>12</MenuItem>
                                <MenuItem value={13}>13</MenuItem>
                                <MenuItem value={14}>14</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <FormControl fullWidth>
                            <InputLabel id={'reason-label'}>Reason</InputLabel>
                            <Select
                                multiple
                                role={'listbox'}
                                name={'reason'}
                                labelId={'reason-label'}
                                id={'select-reason'}
                                onChange={handleData}
                                value={formData.reason}
                                renderValue={(selected) => selected.join(', ')}
                            >
                                <MenuItem value={'appointment'}>
                                    <Checkbox checked={formData.reason.indexOf('appointment') > -1}/>
                                    <ListItemText primary={'appointment'}/>
                                </MenuItem>
                                <MenuItem value={'special offer'}>
                                    <Checkbox checked={formData.reason.indexOf('special offer') > -1}/>
                                    <ListItemText primary={'special offer'}/>
                                </MenuItem>
                                <MenuItem value={'test'}>
                                    <Checkbox checked={formData.reason.indexOf('test') > -1}/>
                                    <ListItemText primary={'test'}/>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Typography id={'name-text'} component={'p'} variant={"h6"}>
                            {formData.day}
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Typography component={'p'} variant={"h6"}>
                            {
                                formData.hour.map(val => val + ', ')
                            }
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Typography component={'p'} variant={"h6"}>
                            {
                                formData.reason.map(val => val + ', ')
                            }
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={4}>
                        <FormControl fullWidth component={'fieldset'}>
                            <FormLabel component={'legend'}>Gender</FormLabel>
                            <RadioGroup
                                aria-label={'gender'}
                                name={'gender'}
                                value={formData.gender}
                                onChange={handleData}
                            >
                                <FormControlLabel value={'female'} control={<Radio/>} label={'Female'}/>
                                <FormControlLabel value={'male'} control={<Radio/>} label={'Male'}/>
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <FormGroup>
                            <FormControlLabel control={
                                <Switch
                                    name={'color'}
                                    color={''}
                                    value={'red'}
                                    onChange={handleData}
                                    checked={formData.color === 'red'}
                                />}
                                              label={'Red'}
                            />
                            <FormControlLabel control={
                                <Switch
                                    name={'color'}
                                    color={''}
                                    value={'blue'}
                                    onChange={handleData}
                                    checked={formData.color === 'blue'}
                                />}
                                              label={'Blue'}
                            />
                            <FormControlLabel control={
                                <GreenSwitch
                                    name={'color'}
                                    color={''}
                                    value={'green'}
                                    onChange={handleData}
                                    checked={formData.color === 'green'}
                                />}
                                              label={'Green'}
                            />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Button variant="outlined" color={"inherit"} onClick={()=>{handleData({name:'button',target:{value: 'button1'}})}}>Default</Button>

                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <Button onClick={()=>{handleData({target:{name:'button',value: 'button2'}})}}>One</Button>
                            <Button onClick={()=>{handleData({target:{name:'button',value: 'button3'}})}}>Two</Button>
                            <Button onClick={()=>{handleData({target:{name:'button',value: 'button4'}})}}>Three</Button>
                        </ButtonGroup>
                        {formData.button}
                    </Grid>
                </Grid>
            </form>


            {/*TODO:  SELECT
                - Dodać style dla wybranych/zaznaczonych opcji
                - ----- zwykły
                - multi
                - z inputem do wybierania
            */}

            {/*TODO: Dodać radioButtony */}


            {/*TODO: Walidacja*/}

            {/*TODO: Dodać header, footer, menu, sidebar !!!!!!!!!!!!!!  */}

            {/*TODO: TESTY
                 - czy istnieja inputy/chechboxy z odpowiednim namem
                 - Czy istnieja komponenty np sa 3 <Textfieldy
                 - Czy np formData.name === text w #name-text
            */}

        </>
    )

}

export default BigForm;