import React, {Suspense, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import UploadDialog from "./components/Dialogs/UploadDialog";
import Routes from "./Routes/Router";
import {BrowserRouter, Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import {renderRoutes} from "react-router-config";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import LoginDialog from "./components/Dialogs/LoginDialog";
import {ThemeProvider} from "@material-ui/styles";
import {Chart} from 'react-chartjs-2';
import validators from './common/validators';
import validate from 'validate.js';
import {Provider as StoreProvider, useSelector} from 'react-redux';

import {chartjs} from './helpers';
import {theme} from 'theme';
// import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import {configureStore} from "./store";
import Grid from "@material-ui/core/Grid";
import {LinearProgress} from "@material-ui/core";
import TopBar from "./TopBar";


const useStyles = makeStyles(theme => ({
    root: {
        // flexGrow: 1,
    },
    layout: {
        // padding: theme.spacing(2)
    },
    container: {
        // padding: 20,
        display: 'flex',
        // height: '100vh',
        '@media all and (-ms-high-contrast:none)': {
            height: 0 // IE11 fix
        }
    },
    content: {
        height: '100vh',
        paddingTop: 64,
        flexGrow: 1,
        maxWidth: '100%',

    }
}));


Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
    draw: chartjs.draw
});

validate.validators = {
    ...validate.validators,
    ...validators
};


export default function App() {
    const classes = useStyles();
    const store = configureStore();

    return (<div className={classes.root}>
        <BrowserRouter>
            <StoreProvider store={store}>
                <ThemeProvider theme={theme}>
                    <TopBar/>

                    <div className={classes.container}>
                        <div className={classes.content}>
                            <Suspense fallback={<LinearProgress />}>
                                {renderRoutes(Routes.map((route) => ({
                                    ...route,
                                    component: (props) => route.component(props),
                                })))}
                            </Suspense>
                        </div>
                    </div>
                    {/*<div style={{marginTop: 65}} className={classes.layout}>*/}

                    {/*</div>*/}
                </ThemeProvider>
            </StoreProvider>
        </BrowserRouter>
    </div>);
}

