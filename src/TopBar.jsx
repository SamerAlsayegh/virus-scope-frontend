import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import UploadDialog from "./components/Dialogs/UploadDialog";
import {Link, useHistory} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import LoginDialog from "./components/Dialogs/LoginDialog";
import {Chart} from 'react-chartjs-2';
import validators from './common/validators';
import validate from 'validate.js';
import {useDispatch, useSelector} from 'react-redux';

import {chartjs} from './helpers';
// import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {logout} from "./redux/session/actions";


const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: 'white'
    },
}));


Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
    draw: chartjs.draw
});

validate.validators = {
    ...validate.validators,
    ...validators
};


export default function TopBar() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const {user, fetchingUser, fetchingUserError} = useSelector(state => state.user);
    const [KeyLocations, setKeyLocations] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutUser = () => {
        dispatch(logout())
        setAnchorEl(null);
        history.push('/')
    }


    return <AppBar position="fixed" variant={'elevation'} square style={{height: 65}}>
        <Toolbar>
            <Link to={'/'} style={{textDecoration: 'none', color: 'inherit'}}>
                <IconButton aria-label="display more actions" color="inherit">
                    <Icon>home</Icon>
                </IconButton>
            </Link>

            <Typography variant="h4" className={classes.title}>
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
                {!user && <>
                    <Hidden mdUp style={{marginLeft: 0}}>

                        <LoginDialog
                            customOpenDialogElement={(click) => <IconButton onClick={click}
                                                                            aria-label="display more actions"
                                                                            edge="end" color="inherit">
                                <Icon>lock</Icon>
                            </IconButton>}
                        />
                    </Hidden>
                    <Hidden smDown style={{marginLeft: 20}}>
                        <LoginDialog
                            customOpenDialogElement={(click) => <Button color="inherit" onClick={click}>
                                Login
                                <Icon style={{marginLeft: 10}}>lock</Icon>
                            </Button>}
                        />

                    </Hidden>
                </>}
                {user && <>

                    <Button

                        style={{marginLeft: 10}}
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={handleMenu}
                        startIcon={<Icon>account_circle</Icon>}
                    >
                        {user.name}
                    </Button>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <Link to="/settings" style={{ textDecoration: 'none', display: 'block' }}>
                            <MenuItem>
                                My account
                            </MenuItem>
                        </Link>
                        <MenuItem onClick={logoutUser}>Logout</MenuItem>
                    </Menu>
                </>}
            </div>
        </Toolbar>
    </AppBar>;
}

