import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Card from "@material-ui/core/Card";
import LocationSearch from "./LocationSearch";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker, DatePicker,
} from '@material-ui/pickers';
import Paper from "@material-ui/core/Paper";
import Moment from "react-moment";
import {Tooltip} from "@material-ui/core";
import * as moment from "moment";


const useStyles = makeStyles(theme => ({
    mapSearchField: {
        position: `fixed`,
        top: '80px',
        zIndex: 10,
        left: '10px',
        [theme.breakpoints.up('sm')]: {
            width: 400,
        },
        [theme.breakpoints.down('sm')]: {
            right: '10px',

        },
    },
    warn: {
        color: 'red'
    },
    card: {
        padding: 10
    },
    dateInput: {
        paddingRight: 10
    }
}));

export default function LocationOverlay({PreExpandedPanels = [], currentLocationAddress, setDataFilter, DataFilter = {}}) {
    const classes = useStyles();
    const [ExpandedPanels, setExpandedPanels] = useState(PreExpandedPanels);
    const [TimeRange, setTimeRange] = useState({
        start: new Date(new Date().getTime() - (1000 * 60 * 60 * 24 * 14)),
        end: new Date()
    });


    useEffect(() => {
        setDataFilter({
            ...DataFilter,
            ...TimeRange
        })
    }, [TimeRange])

    return (
        <Card className={classes.mapSearchField}>
            <LocationSearch currentLocationAddress={currentLocationAddress} ExpandedPanels={ExpandedPanels}
                            setExpandedPanels={setExpandedPanels}/>
            <Divider/>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>

                {ExpandedPanels.indexOf("time") > -1 && <Card className={classes.card}>
                    {/*<Grid container justify="space-around">*/}
                    {/*    <Grid item>*/}

                    {/*    </Grid>*/}

                    {/*</Grid>*/}
                    <Grid container direction={'row'} justify="space-around">
                        <Grid item xs>
                            <DatePicker
                                disableToolbar
                                variant="inline"
                                disableFuture
                                value={TimeRange.start}
                                onChange={(date) => setTimeRange({...TimeRange, start: date})}
                                label="Start time range"
                            />

                        </Grid>
                        <Grid item xs style={{paddingLeft: 10}}>
                            <DatePicker
                                disableToolbar
                                variant="inline"
                                disableFuture
                                value={TimeRange.end}
                                onChange={(date) => setTimeRange({...TimeRange, end: date})}
                                label="End time range"
                            />
                        </Grid>
                        <Grid item>
                            <IconButton onClick={() => setExpandedPanels([])} aria-label="share">
                                <Icon>close</Icon>
                            </IconButton>
                        </Grid>
                    </Grid>
                    {/*<CardActions disableSpacing>*/}
                    {/*    <Button fullWidth variant="contained" color="primary" onClick={()=>}>*/}
                    {/*        Apply filter*/}
                    {/*    </Button>*/}
                    {/*</CardActions>*/}
                </Card>}
            </MuiPickersUtilsProvider>

            {currentLocationAddress && <Card>
                <CardMedia
                    style={{height: "30vh", minHeight: "250px"}}
                    image="https://images.unsplash.com/photo-1584522793746-754deea2858f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
                    title="Paella dish"
                />
                <CardHeader
                    avatar={
                        <Icon color={"error"}>notification_important</Icon>
                    }
                    title="Nearest landmark name"
                    subheader={<Moment
                        format={"hh:mm a [on] YYYY/MM/DD"}>{currentLocationAddress && new Date(currentLocationAddress.start).getTime()}</Moment>}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Interacted with: <b>{currentLocationAddress.interactWith}</b> <br/>
                        Interacted for: <b>{moment.utc(currentLocationAddress.duration).format(currentLocationAddress.duration < (1000 * 60 * 60) ? "mm [minutes] [and] ss [seconds]" : "hh [hours], mm [minutes] [and] ss [seconds]")}</b>
                    </Typography>

                </CardContent>
                <CardActions disableSpacing>


                    <Tooltip title={'Share...'}>
                        <IconButton aria-label="share">
                            <Icon>share</Icon>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={'Export data'}>
                        <IconButton aria-label="add to favorites">
                            <Icon>save</Icon>
                        </IconButton>
                    </Tooltip>

                    <Grid container justify="flex-end">
                        <Grid item>

                            <Tooltip title={'Open in Google Maps'}>
                                <IconButton target={"_blank"}
                                            href={`https://www.google.com/maps/@${currentLocationAddress.longitude},${currentLocationAddress.latitude}`}
                                            aria-label="info">
                                    <Icon>info</Icon>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={'Report problem'}>
                                <IconButton aria-label="share">
                                    <Icon>report_problem</Icon>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>

                </CardActions>
            </Card>}
        </Card>

    );
}