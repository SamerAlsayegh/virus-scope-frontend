import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { Formik } from 'formik';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import UploadDialog from "../../../../components/Dialogs/UploadDialog";

const useStyles = makeStyles(() => ({
  root: {}
}));

function Header({ className, ...rest }) {
  const classes = useStyles();

  return (

    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="flex-end"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid item>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Management
          </Typography>
          <Typography
            component="h1"
            variant="h3"
          >
            Infection Encounters
          </Typography>
        </Grid>
        <Grid item>
          <UploadDialog/>
          {/*<Button*/}
          {/*  color="primary"*/}
          {/*  variant="contained"*/}
          {/*  onClick={handleClickOpen}*/}
          {/*>*/}
          {/*  Upload Data*/}
          {/*</Button>*/}
        </Grid>
      </Grid>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
