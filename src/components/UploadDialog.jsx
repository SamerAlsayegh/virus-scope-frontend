import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import {DropzoneArea} from "material-ui-dropzone";
import {useFormik} from "formik";
import RequestService from "../services/Request";
import fs from "fs";

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

export default function UploadDialog({isCheck = false, setKeyLocations}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);


    async function readFileAsDataURL(file) {
        let result_base64 = await new Promise((resolve) => {
            let fileReader = new FileReader();
            fileReader.onload = (e) => resolve(e.target.result);
            fileReader.readAsText(file);
        });
        return result_base64;
    }


    const formik = useFormik({
        initialValues: {
            name: 'My Name',
            files: []
        },
        onSubmit: async (values) => {
            console.log(values);
            let files = await Promise.all(values.files.map(async file => {
                return await readFileAsDataURL(file);
            }));
            console.log(files);

            if (isCheck) {
                try {
                    let res = await Promise.all(files.map(file => {
                        return RequestService.post('location/check', {
                            file
                        });
                    }));
                    let fullArray = [];

                    res.forEach((res => {
                        fullArray = fullArray.concat(res.data)
                    }));

                    setKeyLocations(fullArray)
                    handleClose();
                } catch ({message}) {
                    alert(message)
                }
            } else {
                try {
                    await Promise.all(files.map(file => {
                        return RequestService.post('location/add', {
                            name: values.name,
                            file
                        });
                    }));
                    handleClose();
                } catch ({message}) {
                    alert(message)
                }
            }


        },
    });


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = async (files) => {
        console.log(files);
        formik.setFieldValue('files', files, true)
    };


    return (<div>
        <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
            {isCheck ? 'Start Compare' : 'Add Patient Data'}
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

