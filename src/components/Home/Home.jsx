import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getMemes } from '../../redux/actions/meme.actions';

import MemeBox from '../MemeBox/MemeBox';
import Form from '../Form/Form';
import MemeTemplate from '../MemeTemplate/MemeTemplate';

import useStyles from './styles';
import { Container, Grid, Grow } from '@material-ui/core';

const Home = () => {
  
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMemes())
  }, [dispatch]);

  return (
      <div className={classes.gridContainer}  >
          <MemeBox />
          <Form />
      </div>
  )
}

export default Home;