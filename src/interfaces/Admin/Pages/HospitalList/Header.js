import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AddPatientDialog from "../../../../components/Dialogs/AddPatientDialog";
import AddHospitalDialog from "../../../../components/Dialogs/AddHospitalDialog";

const useStyles = makeStyles((theme) => ({
  root: {},
  addIcon: {
    marginRight: theme.spacing(1)
  }
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
            Browse hospitals
          </Typography>
          <Typography
            component="h1"
            variant="h3"
          >
            Active Hospital Listings
          </Typography>
        </Grid>
        <Grid item>
          <AddHospitalDialog customOpenDialogElement={(handleClickOpen) => <Button
              onClick={handleClickOpen}
              color="primary"
              variant="contained"
          >
            <AddIcon className={classes.addIcon} />
            Add Hospital
          </Button>}/>


        </Grid>
      </Grid>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
