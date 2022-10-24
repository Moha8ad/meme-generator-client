import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import Meme from './Meme/Meme';

import useStyles from './styles';

const MemeBox = () => {

  const classes = useStyles();

  const localId = localStorage.getItem('userLocalId');

  const memes = useSelector((state) => state.memeDB.memes);
  const userMemes = memes.filter(memes => memes.userId === localId);
 
  const templateImage = useSelector((state) => state.memeDB.templateImage);

  return (
    
    <div className={classes.memeContainer}>
    { !userMemes?.length && !templateImage ? 
      <Grid className={`${classes.emptyMemeBox}`}  >
        <CircularProgress /> 
        <Typography className={classes.createMemeMessage}>
          Waiting For You to Create A Meme!
        </Typography>
      </Grid>  
      :
      <Grid>
        <Meme memes={userMemes} templateImage={templateImage} />
      </Grid>  
    }
    </div>
  );
};

export default MemeBox;