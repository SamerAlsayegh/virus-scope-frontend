import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Page from 'components/Page';
import SearchBar from 'components/SearchBar';
import Header from './Header';
import Results from './Results';
import PatientService from "../../../../services/Patient";
import {getPatients} from "../../../../redux/patients/actions";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

function DataList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {patients} = useSelector(state => state.patients);

  useEffect(() => {
    let mounted = true;
    dispatch(getPatients())
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Page
      className={classes.root}
      title="Data List"
    >
      <Container
        maxWidth={false}
        className={classes.container}
      >
        <Header />
        <SearchBar />
        <Results
          className={classes.results}
          patients={patients}
        />
      </Container>
    </Page>
  );
}

export default DataList;
