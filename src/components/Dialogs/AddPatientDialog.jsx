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
import {RadioGroup} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import {Formik} from "formik";
import PatientService from "../../services/Patient";
import {addPatient} from "../../redux/patients/actions";


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

export default function AddPatientDialog({customOpenDialogElement}) {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    return (<InputDialog
        title={'Add Patient'}
        actionButtonText={'Add'}
        customOpenDialogElement={customOpenDialogElement}
        maxWidth={'xs'}
        validationSchema={{
            name: Yup.string().required("Name is required"),
            gender: Yup.string().required("Gender is required"),
            dateOfBirth: Yup.date().required("Date of Birth is required"),
            address: Yup.string().required("Address is required"),
            city: Yup.string().required("City is required"),
            country: Yup.string().required("Country is required"),
            email: Yup.string().email().required("Email is required"),
            phoneNumber: Yup.string().required("Phone number is required"),
            password: Yup.string().required("Password is required"),
            notes: Yup.string(),
        }}
        initialValues={{
            email: '',
            password: '',
        }}
        onSubmit={async (values, closeDialog, formik) => {
            try {
                await dispatch(addPatient(values));
                closeDialog()
            } catch ({message}) {
                alert(message)
            }
        }}>
        {(formik) => <>
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
            <RadioGroup aria-label="gender" name="gender1" value={formik.values.gender} onChange={(e)=>formik.setFieldValue('gender', e.target.value)}>
                <FormControlLabel value="FEMALE" control={<Radio />} label="Female" />
                <FormControlLabel value="MALE" control={<Radio />} label="Male" />
            </RadioGroup>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    variant="inline"
                    disableFuture
                    value={formik.values.dateOfBirth}
                    onChange={(date) => formik.setFieldValue('dateOfBirth', date)}
                    label="Date of Birth"
                />
            </MuiPickersUtilsProvider>
            <TextField
                id="address"
                name="address"
                type="text"
                label={'Address'}
                className={classes.input}
                fullWidth
                error={!!(formik.touched.address && formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
            />
            <TextField
                id="city"
                name="city"
                type="text"
                label={'City'}
                className={classes.input}
                fullWidth
                error={!!(formik.touched.city && formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
            />
            <TextField
                id="country"
                name="country"
                type="text"
                label={'Country'}
                className={classes.input}
                fullWidth
                error={!!(formik.touched.country && formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
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
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                label={'Phone Number'}
                className={classes.input}
                fullWidth
                error={!!(formik.touched.phoneNumber && formik.errors.phoneNumber)}
                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
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
                id="notes"
                name="notes"
                type="text"
                multiline
                rows={4}
                label={'Notes'}
                className={classes.input}
                fullWidth
                error={!!(formik.touched.notes && formik.errors.notes)}
                helperText={formik.touched.notes && formik.errors.notes}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
            />
        </>}
    </InputDialog>);
}

