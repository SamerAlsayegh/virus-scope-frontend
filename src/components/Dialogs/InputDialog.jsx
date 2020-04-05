import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {useFormik} from "formik";
import * as Yup from "yup";

const useStyles = makeStyles(theme => ({
    /*
    Styles go gere...
     */


}));

export default function InputDialog({customOpenDialogElement, maxWidth = 'md', title = 'Dialog Title', actionButtonText = 'Submit', initialValues, validationSchema = {}, onSubmit, open, children}) {
    const classes = useStyles();
    const [_open, setOpen] = React.useState(open);


    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object().shape(validationSchema),
        onSubmit: values => {
            function closeDialog() {
                setOpen(false)
            }

            return onSubmit && onSubmit(values, closeDialog, formik)
        },
    });



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (<>
        {(customOpenDialogElement && customOpenDialogElement(handleClickOpen)) ||
        <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
            Open Dialog
        </Button>}
        <Dialog fullWidth maxWidth={maxWidth} open={open || _open} onClose={handleClose}
                aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <form onSubmit={formik.handleSubmit}>
                <DialogContent>
                    {children(formik)}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button fullWidth type={'submit'} variant="contained" color="primary" disableElevation
                            disabled={!formik.isValid || !(formik.dirty) || formik.isSubmitting}>
                        {actionButtonText}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    </>);
}

