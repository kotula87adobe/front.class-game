import React from 'react';
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


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const ReadingLinkCard = ({userId}) => {
    const classes = useStyles();

    // const preventDefault = (event) => event.preventDefault();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardHeader
                    // action={
                    //     <IconButton aria-label="settings">
                    //         <MoreVertIcon />
                    //     </IconButton>
                    // }
                    title={'Czytanie ze zrozumieniem'}
                    subheader={"Wybierz poziom trudności!"}
                />
                <Link href={`#/${userId}/polski/czytanie/proste`} color={"inherit"}>
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
                {/*<Button size="small" color="primary">*/}
                {/*    Share*/}
                {/*</Button>*/}
                {/*<Button size="small" color="primary">*/}
                {/*    Learn More*/}
                {/*</Button>*/}
            </CardActions>
        </Card>
    );
}

export default ReadingLinkCard;