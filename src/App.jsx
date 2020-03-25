import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import UploadDialog from "./components/UploadDialog";
import Routes from "./Routes/Router";
import {BrowserRouter, Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import {renderRoutes} from "react-router-config";
import Button from "@material-ui/core/Button";
import DateFnsUtils from "@date-io/date-fns";
import MuiPickersUtilsProvider from "@material-ui/pickers/MuiPickersUtilsProvider";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function App() {
    const classes = useStyles();
    const [KeyLocations, setKeyLocations] = useState([]);


    return (<div className={classes.root}>
        <BrowserRouter>

            <AppBar position="absolute" variant={'elevation'} square>
                <Toolbar>
                    <Link to={'/'} style={{textDecoration: 'none', color: 'inherit'}}>
                        <IconButton aria-label="display more actions" color="inherit">
                            <Icon>home</Icon>
                        </IconButton>
                    </Link>

                    <Typography variant="h6" className={classes.title}>
                        <Hidden xsDown>
                            Virus Scope
                        </Hidden>
                    </Typography>
                    {/*<Button color="inherit">Login</Button>*/}
                    <UploadDialog isCheck setKeyLocations={(data) => {
                        setKeyLocations(data)
                    }}/>

                    <div>
                        <Link
                            to={'/about-us'}
                            style={{textDecoration: 'none', color: 'inherit'}}>
                            <IconButton aria-label="display more actions" edge="end" color="inherit">
                                <Icon>help</Icon>
                            </IconButton>
                        </Link>
                        <Link
                            to={'/map-view'}
                            style={{textDecoration: 'none', color: 'inherit'}}>
                            <IconButton aria-label="display more actions" edge="end" color="inherit">
                                <Icon>explore</Icon>
                            </IconButton>
                        </Link>
                        <Hidden mdUp style={{marginLeft: 0}}>
                            <IconButton aria-label="display more actions" edge="end" color="inherit">
                                <Icon>lock</Icon>
                            </IconButton>
                        </Hidden>
                        <Hidden smDown  style={{marginLeft: 20}}>
                            <Button color="inherit">
                                Login/Register
                                <Icon style={{marginLeft: 10}}>lock</Icon>
                            </Button>
                        </Hidden>


                    </div>

                </Toolbar>
            </AppBar>
            <div style={{marginTop: 70, height: "calc(100vh - 70px)", overflowY: 'auto'}}>

                {renderRoutes(Routes.map((route) => ({
                    ...route,
                    component: (props) => route.component({...props, KeyLocations}),
                })))}

            </div>
        </BrowserRouter>

    </div>);
}

