import React from 'react';

import defaultImg from '../../../assets/img.jpg';

import useStyles from './styles';

const Meme = ({ memes, templateImage }) => {
  
  const classes = useStyles();

  const meme = memes.map(meme => meme)[0]
  
  return (
    <div className={classes.meme} id='memeToDownload' 
      style={{
        backgroundImage: templateImage ? `url(${templateImage})` : meme.selectedFile ? `url(${meme.selectedFile})` : `url(${defaultImg})`,
        fontSize: meme?.fontSize ? `${meme.fontSize}` : '30px',
        fontFamily: meme?.fontFamily ? `${meme.fontFamily}` : 'impact',
        color: meme?.fontColor ? `${meme.fontColor}` : 'white',
      }}
    >
      <div>{templateImage ? '' : meme?.topText}</div>
      <div>{templateImage ? '' : meme?.bottomText}</div>
    </div>
  );
};

export default Meme;