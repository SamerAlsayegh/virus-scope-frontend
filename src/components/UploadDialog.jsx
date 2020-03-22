import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import {useFormik} from "formik";
import {DropzoneArea} from "material-ui-dropzone";

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
    dropzone: {
        background: 'white'
    }
}));

export default function App() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const formik = useFormik({
        initialValues: {
            name: 'My Name',
            files: []
        },
        onSubmit: values => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
        },
    });


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (files) => {
        console.log(files);
        formik.setFieldValue('files', files, true)
    };


    return (<div>
        <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
            Start Compare
        </Button>
        <Dialog fullWidth maxWidth={'md'} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Data Upload</DialogTitle>
            <form onSubmit={formik.handleSubmit}>

                <DialogContent>
                    <DialogContentText>
                        Upload your data
                    </DialogContentText>
                    <TextField
                        id="name"
                        name="name"
                        type="text"
                        label={'Name'}
                        style={{
                            paddingBottom: 10
                        }}
                        fullWidth
                        error={formik.touched.name && formik.errors.name}
                        onChange={formik.handleChange}
                    />
                    <DropzoneArea

                        acceptedFiles={["application/json"]}
                        filesLiimit={3}
                        dropzoneText={'Drag and drop your historical files'}
                        showFileNames={true}
                        // useChipsForPreview={true}

                        dropzoneClass={classes.dropzone}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button type={'submit'} variant="contained" color="primary" disableElevation>
                        Upload
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    </div>);
}

