import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import InputDialog from "./InputDialog";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ForgetPasswordDialog from "./ForgetPasswordDialog";
import RegisterDialog from "./RegisterDialog";
import RequestService from "../../services/Request";
import {useHistory} from "react-router-dom";
import {login} from "../../redux/session/actions";
import {useDispatch} from "react-redux";
import {getUser} from "../../redux/user/actions";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    buttonGroup: {
        padding: theme.spacing(1)
    },
    input: {
        // padding: theme.spacing(1)
    }
}));

export default function LoginDialog({customOpenDialogElement}) {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    return (<InputDialog
        title={'Login'}
        actionButtonText={'Login'}
        customOpenDialogElement={customOpenDialogElement}
        maxWidth={'xs'}
        validationSchema={{
            email: Yup.string().email().required("Email is required"),
            password: Yup.string().required("Password is required"),
        }}
        initialValues={{
            email: '',
            password: '',
        }}
        onSubmit={async (values, closeDialog, formik) => {
            dispatch(login(values)).then(()=>{
                dispatch(getUser()).then(()=>{
                    closeDialog()
                    history.push('/')
                }, ({message})=>{
                    alert(message)
                })
            }, ({message})=>{
                alert(message)
            })
        }}>
        {(formik) => <>
            {console.log(formik.errors)}
            {console.log('123123213123',formik.touched.email && formik.errors.email)}
            <TextField
                id="email"
                name="email"
                type="text"
                label={'Email'}
                className={classes.input}
                fullWidth
                error={!!(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
            />
            <TextField
                id="password"
                name="password"
                type="password"
                label={'Password'}
                className={classes.input}
                fullWidth
                error={!!(formik.touched.password && formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
            />
            <Grid container direction={'row'} className={classes.buttonGroup}>
                <Grid item xs>
                    <ForgetPasswordDialog/>
                </Grid>
                <Grid item xs>
                    <RegisterDialog/>
                </Grid>
            </Grid>
        </>}
    </InputDialog>);
}

