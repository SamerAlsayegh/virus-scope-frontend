import React from 'react';
import {renderRoutes} from "react-router-config";
import Router from "./Router";
import Grid from "@material-ui/core/Grid";
import NavBar from "./NavBar";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 256
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: 56
        }
    },
    pageLayout: { 
        padding: theme.spacing(2)
    }
}));


export default () => {
    const classes = useStyles();


    return <Grid container direction={'row'} className={classes.container}>
        <Grid item>
            <NavBar/>
        </Grid>
        <Grid item xs className={classes.pageLayout}>
            {renderRoutes(Router.map((route) => ({
                ...route,
                component: (props) => route.component({...props}),
            })))}
        </Grid>
    </Grid>
}

