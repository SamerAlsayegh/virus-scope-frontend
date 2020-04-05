import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Link,
  Tooltip,
  Typography,
  colors
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import getInitials from 'utils/getInitials';
import Label from 'components/Label';

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    paddingBottom: 0
  },
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  description: {
    padding: theme.spacing(2, 3, 1, 3)
  },
  tags: {
    padding: theme.spacing(0, 3, 2, 3),
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  learnMoreButton: {
    marginLeft: theme.spacing(2)
  },
  likedButton: {
    color: colors.red[600]
  },
  shareButton: {
    marginLeft: theme.spacing(1)
  },
  details: {
    padding: theme.spacing(2, 3)
  }
}));

function HospitalCard({ hospital, className, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        avatar={(
          <Avatar
            alt="Author"
            src={hospital.avatar}
          >
            {getInitials(hospital.name)}
          </Avatar>
        )}
        className={classes.header}
        disableTypography
        subheader={(
          <Typography variant="body2">
            <Link
              color="textPrimary"
              component={RouterLink}
              to="/profile/1/timeline"
              variant="h6"
            >
              {hospital.address}
            </Link>
            {' '}
            |
            {' '}
            {hospital.centerType}
          </Typography>
        )}
        title={(
          <Link
            color="textPrimary"
            component={RouterLink}
            to="/hospitals/1/overview"
            variant="h5"
          >
            {hospital.name}
          </Link>
        )}
      />
      <CardContent className={classes.content}>
        <div className={classes.description}>
          <Typography
            color="textSecondary"
            variant="subtitle2"
          >
            {hospital.description}
          </Typography>
        </div>
        <div className={classes.tags}>
          {hospital.services.map((tag) => (
            <Label
              key={tag}
            >
              {tag}
            </Label>
          ))}
        </div>
        <Divider />
        <div className={classes.details}>
          <Grid
            alignItems="center"
            alignContent={'center'}
            container
            // justify="center"
            spacing={3}
          >
            <Grid item xs={6}>
              <Typography variant="h5">
                {hospital.phoneNumber}
              </Typography>
              <Typography variant="body2">Contact #</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">{hospital.manager}</Typography>
              <Typography variant="body2">Manager</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">{hospital.emailAddress}</Typography>
              <Typography variant="body2">Email</Typography>
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
}

HospitalCard.propTypes = {
  className: PropTypes.string,
  hospital: PropTypes.object.isRequired
};

export default HospitalCard;
