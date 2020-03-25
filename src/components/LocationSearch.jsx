import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import Moment from "react-moment";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        width: "100%",
    },
    input: {
        padding: '2px 4px',
        marginLeft: theme.spacing(3),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function LocationSearch({currentLocationAddress, ExpandedPanels, setExpandedPanels}) {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            {/*<IconButton className={classes.iconButton} aria-label="menu">*/}
            {/*    <MenuIcon />*/}
            {/*</IconButton>*/}
            <InputBase
                disabled
                className={classes.input}
                placeholder="Longitude"
                value={currentLocationAddress && currentLocationAddress.longitude}
                inputProps={{ 'aria-label': 'search map' }}
            />
            <InputBase
                disabled
                className={classes.input}
                placeholder="Latitude"
                value={currentLocationAddress && currentLocationAddress.latitude}
                inputProps={{ 'aria-label': 'search map' }}
            />

            <IconButton onClick={()=> setExpandedPanels(["location"])} aria-label="add to favorites">
                <Icon>location_on</Icon>
            </IconButton>
            <IconButton onClick={()=> setExpandedPanels(["time"])} aria-label="share">
                <Icon>date_range</Icon>
            </IconButton><br/>

            {/*<IconButton type="submit" className={classes.iconButton} aria-label="search">*/}
            {/*    <SearchIcon />*/}
            {/*</IconButton>*/}
            {/*<Divider className={classes.divider} orientation="vertical" />*/}
            {/*<IconButton color="primary" className={classes.iconButton} aria-label="directions">*/}
            {/*    <DirectionsIcon />*/}
            {/*</IconButton>*/}
        </Paper>
    );
}