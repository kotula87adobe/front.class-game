import React, {useState} from 'react';
// import {
//     Link
// } from "react-router-dom";

import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from "@material-ui/lab/Skeleton";
// import TextField from "@material-ui/core/TextField";
import {FormControl} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const MultiplicationLinkCard = ({userId}) => {
    const classes = useStyles();

    const [i,setI] = useState(1)
    const [j,setJ] = useState(1)
    const [max,setMax] = useState(100)

    // const preventDefault = (event) => event.preventDefault();

    let maxValues = []
    let ijValues = []
    for (let ii = 1; ii<=100; ii++){
        maxValues.push(ii)
        if(ii<=10){
            ijValues.push(ii)
        }
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardHeader
                    // action={
                    //     <IconButton aria-label="settings">
                    //         <MoreVertIcon />
                    //     </IconButton>
                    // }
                    title={'Mnożenie'}
                    subheader={"Ustaw zakres działań!"}
                />
                <Link href={`#/${userId}/matematyka/mnozenie/${max}/${i}/${j}`} color={"inherit"}>
                    {/*<CardMedia*/}
                    {/*    className={classes.media}*/}
                    {/*    image="https://picsum.photos/200/300"*/}
                    {/*/>*/}
                    <CardMedia
                        className={classes.media}
                    >
                        <Skeleton variant="text" width={'100%'} height={118} />
                    </CardMedia>
                    <CardContent>
                        {/*<Typography gutterBottom variant="h5" component="h2">*/}
                        {/*    Lizard*/}
                        {/*</Typography>*/}
                        {/*<Typography variant="body2" color="textSecondary" component="p">*/}
                        {/*    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging*/}
                        {/*    across all continents except Antarctica*/}
                        {/*</Typography>*/}
                    </CardContent>
                </Link>
            </CardActionArea>
            <CardActions>
                <FormControl fullWidth>
                    <InputLabel id={'max-label'}>Wartość maksymalna</InputLabel>
                    <Select
                        role={'listbox'}
                        name={'max'}
                        labelId={'max-label'}
                        id={'select-max'}
                        onChange={(e)=>{setMax(e.target.value)}}
                        value={max}
                    >
                        {
                            maxValues.map(val=>(
                                <MenuItem value={val}>{val}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id={'i-label'}></InputLabel>
                    <Select
                        role={'listbox'}
                        name={'i'}
                        labelId={'i-label'}
                        id={'select-i'}
                        onChange={(e)=>{setI(e.target.value)}}
                        value={i}
                    >
                        {
                            ijValues.map(val=>(
                                <MenuItem value={val}>{val}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id={'j-label'}></InputLabel>
                    <Select
                        role={'listbox'}
                        name={'j'}
                        labelId={'j-label'}
                        id={'select-j'}
                        onChange={(e)=>{setJ(e.target.value)}}
                        value={j}
                    >
                        {
                            ijValues.map(val=>(
                                <MenuItem value={val}>{val}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>

            </CardActions>
        </Card>
    );
}

export default MultiplicationLinkCard;