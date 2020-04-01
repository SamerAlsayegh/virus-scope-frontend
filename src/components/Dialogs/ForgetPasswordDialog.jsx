import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import InputDialog from "./InputDialog";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import RequestService from "../../services/Request";
import {useHistory} from "react-router-dom";


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

export default function ForgetPasswordDialog() {
    const classes = useStyles();
    const history = useHistory();


    return (<InputDialog
        title={'Forget Password'}
        actionButtonText={'Request Password'}
        maxWidth={'xs'}
        customOpenDialogElement={(click) => <Button fullWidth color="inherit" onClick={click}>Forget password?</Button>}
        validationSchema={{
            email: Yup.string().email("Valid email is required").required("Email is required"),
        }}
        initialValues={{
            email: '',
        }}
        onSubmit={async (values, closeDialog, formik) => {
            try {
                await RequestService.post('auth/forgotten_password', values)
                history.push('/home')
                closeDialog();
            } catch ({message}) {
                alert(message);
            }
            return null;
        }}>
        {(formik) => <>
            <TextField
                id="email"
                name="email"
                type="email"
                label={'Email'}
                className={classes.input}
                fullWidth
                error={!!(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
        </>}
    </InputDialog>);
}

