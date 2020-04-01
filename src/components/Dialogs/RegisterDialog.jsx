import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import InputDialog from "./InputDialog";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import RequestService from "../../services/Request";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    buttonGroup:{
        padding: theme.spacing(1)
    },
    input: {
        // padding: theme.spacing(1)
    }
}));

export default function LoginDialog() {
    const classes = useStyles();
    const history = useHistory();

    return (<InputDialog
        title={'Register new account'}
        actionButtonText={'Register'}
        maxWidth={'xs'}
        customOpenDialogElement={(click)=><Button fullWidth color="primary" onClick={click}>Register</Button>}
        validationSchema={{
            name: Yup.string().required("A name is required"),
            email: Yup.string().email("Valid email is required").required("Password is required"),
            password: Yup.string().min(6, 'Minimum 6 characters').required("Password is required"),
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null]).required("Confirm Password is required"),
        }}
        initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }}
        onSubmit={async (values, closeDialog, formik) => {
            try {
                delete values.confirmPassword;
                await RequestService.post('auth/register', values)
                closeDialog();
            } catch ({message}) {
                alert(message);
            }
            return null;
        }}>
        {(formik) => <>
            {console.log(formik.errors)}
            <TextField
                id="name"
                name="name"
                type="text"
                label={'Name'}
                className={classes.input}
                fullWidth
                error={!!(formik.touched.name && formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
            />
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
            <TextField
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                label={'Confirm Password'}
                className={classes.input}
                fullWidth
                error={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
            />
        </>}
    </InputDialog>);
}

