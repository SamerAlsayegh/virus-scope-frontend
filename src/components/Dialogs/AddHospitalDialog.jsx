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
import {addPatient} from "../../redux/patients/actions";
import {addHospital} from "../../redux/hospitals/actions";


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

export default function AddHospitalDialog({customOpenDialogElement}) {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    return (<InputDialog
        title={'Add Hospital'}
        actionButtonText={'Add'}
        customOpenDialogElement={customOpenDialogElement}
        maxWidth={'xs'}
        validationSchema={{
            name: Yup.string().required("Name is required"),
            address: Yup.string().required("Address is required"),
            phoneNumber: Yup.string().required("Phone number is required"),
            manager: Yup.string().required("Manager is required"),
            emailAddress: Yup.string().email().required("Email is required"),
            centerType: Yup.string().required("Center Type is required"),
            description: Yup.string(),
        }}
        initialValues={{

        }}
        onSubmit={async (values, closeDialog, formik) => {
            try {
                await dispatch(addHospital(values));
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
                id="manager"
                name="manager"
                type="text"
                label={'Assigned Manager'}
                className={classes.input}
                fullWidth
                error={!!(formik.touched.manager && formik.errors.manager)}
                helperText={formik.touched.manager && formik.errors.manager}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
            />
            <TextField
                id="emailAddress"
                name="emailAddress"
                type="text"
                label={'Email'}
                className={classes.input}
                fullWidth
                error={!!(formik.touched.emailAddress && formik.errors.emailAddress)}
                helperText={formik.touched.emailAddress && formik.errors.emailAddress}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
            />
            <RadioGroup aria-label="centerType" name="centerType" value={formik.values.centerType} onChange={(e)=>formik.setFieldValue('centerType', e.target.value)}>
                <FormControlLabel value="HOSPITAL" control={<Radio />} label="Hospital" />
                <FormControlLabel value="TESTING-CENTER" control={<Radio />} label="Testing Center" />
            </RadioGroup>

            <TextField
                id="description"
                name="description"
                type="text"
                multiline
                rows={4}
                label={'Description'}
                className={classes.input}
                fullWidth
                error={!!(formik.touched.description && formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
            />
        </>}
    </InputDialog>);
}

