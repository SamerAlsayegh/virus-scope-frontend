import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  colors
} from '@material-ui/core';
import Label from 'components/Label';
import GenericMoreButton from 'components/GenericMoreButton';
import TableEditBar from 'components/TableEditBar';

const useStyles = makeStyles((theme) => ({
  root: {},
  filterButton: {
    marginRight: theme.spacing(2)
  },
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1150
  },
  actions: {
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end'
  }
}));

const paymentStatusColors = {
  canceled: colors.grey[600],
  pending: colors.orange[600],
  completed: colors.green[600],
  rejected: colors.red[600]
};

function Results({ className, patients, ...rest }) {
  const classes = useStyles();
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSelectAll = (event) => {
    const newSelectedOrders = event.target.checked
      ? patients.map((order) => order.id)
      : [];

    setSelectedOrders(newSelectedOrders);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedOrders.indexOf(id);
    let newSelectedOrders = [];

    if (selectedIndex === -1) {
      newSelectedOrders = newSelectedOrders.concat(selectedOrders, id);
    } else if (selectedIndex === 0) {
      newSelectedOrders = newSelectedOrders.concat(selectedOrders.slice(1));
    } else if (selectedIndex === selectedOrders.length - 1) {
      newSelectedOrders = newSelectedOrders.concat(selectedOrders.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedOrders = newSelectedOrders.concat(
        selectedOrders.slice(0, selectedIndex),
        selectedOrders.slice(selectedIndex + 1)
      );
    }

    setSelectedOrders(newSelectedOrders);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography
        color="textSecondary"
        gutterBottom
        variant="body2"
      >
        {patients.length}
        {' '}
        Records found. Page
        {' '}
        {page + 1}
        {' '}
        of
        {' '}
        {Math.ceil(patients.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="Data"
        />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedOrders.length === patients.length}
                        color="primary"
                        indeterminate={
                          selectedOrders.length > 0
                          && selectedOrders.length < patients.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell>Admission Date</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>DOB</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Contact (Email/Phone #)</TableCell>
                    {/*<TableCell align="right">Actions</TableCell>*/}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {patients.slice(0, rowsPerPage).map((patient) => (
                    <TableRow
                      key={patient.id}
                      selected={selectedOrders.indexOf(patient.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedOrders.indexOf(patient.id) !== -1}
                          color="primary"
                          onChange={(event) => handleSelectOne(event, patient.id)}
                          value={selectedOrders.indexOf(patient.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        {patient.ref}
                        <Typography variant="body2">
                          {moment(patient.created_at).format(
                            'DD MMM YYYY | hh:mm'
                          )}
                        </Typography>
                      </TableCell>

                      <TableCell>{patient.patient.name}</TableCell>
                      <TableCell>{patient.patient.gender}</TableCell>
                      <TableCell>{patient.patient.dateOfBirth}</TableCell>
                      <TableCell>{patient.patient.city},{patient.patient.country}</TableCell>
                      <TableCell>
                        {patient.patient.email}<br/>
                        {patient.patient.phoneNumber}
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to="/management/patients/1"
                          variant="outlined"
                        >
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={patients.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBar selected={selectedOrders} />
    </div>
  );
}

Results.propTypes = {
  className: PropTypes.string,
  orders: PropTypes.array
};

Results.defaultProps = {
  patients: []
};

export default Results;
