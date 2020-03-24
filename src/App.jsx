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

            <AppBar position="absolute">
                <Toolbar>
                    {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
                    {/*  <Icon>menu</Icon>*/}
                    {/*</IconButton>*/}
                    <Link to={'/'} style={{textDecoration: 'none', color: 'inherit'}}>
                        <IconButton aria-label="display more actions" color="inherit">
                            <Icon>home</Icon>
                        </IconButton>
                    </Link>

                    <Typography variant="h6" className={classes.title}>
                        Virus Scope
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

