import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Button,
  Divider,
  TextField,
  colors
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  saveButton: {
    color: theme.palette.common.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

function Security({ className, ...rest }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: '',
    newPassword: '',
    newPasswordConfirm: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const valid = values.newPassword && values.newPassword === values.newPasswordConfirm;

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Change password" />
      <Divider />
      <CardContent>
        <form>
          <Grid
            container
            spacing={3}
          >
            <Grid
                item
                md={4}
                sm={6}
                xs={12}
            >
              <TextField
                  fullWidth
                  label="Current Password"
                  name="currentPassword"
                  onChange={handleChange}
                  type="password"
                  value={values.currentPassword}
                  variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="New Password"
                name="newPassword"
                onChange={handleChange}
                type="password"
                value={values.newPassword}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Confirm password"
                name="newPasswordConfirm"
                onChange={handleChange}
                type="password"
                value={values.newPasswordConfirm}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          className={classes.saveButton}
          disabled={!valid}
          variant="contained"
        >
          Save changes
        </Button>
      </CardActions>
    </Card>
  );
}

Security.propTypes = {
  className: PropTypes.string
};

export default Security;
