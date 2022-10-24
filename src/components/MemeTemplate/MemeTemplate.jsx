import React, { useState } from 'react';

import { selectTemplateImage } from '../../redux/actions/meme.actions';

import defaultMeme from '../../assets/img.jpg';
import simpsons1 from '../../assets/simpsons1.jpg';
import simpsons2 from '../../assets/simpsons2.jpg';
import cat1 from '../../assets/cat1.png';
import cat2 from '../../assets/cat2.png';
import dog1 from '../../assets/dog1.jpg'
import bear1 from '../../assets/bear1.jpg';
import squirrel1 from '../../assets/squirrel1.jpg';

import { useDispatch } from 'react-redux';

import useStyles from './styles';

const defaultMemes = [simpsons1, bear1, squirrel1, dog1, simpsons2, cat1, cat2, defaultMeme]

const MemeTemplate = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const [ selected, setSelected ] = useState()

    const handleSelect = ( selectedImage ) => {
      setSelected(selectedImage)
      dispatch(selectTemplateImage(selectedImage))
    }

  return (
    <div>
      <div className={classes.memeTemplate}>
          {defaultMemes.map((i, idx) => 
          <div key={idx} onClick={()=> handleSelect(i)} className={classes.imgBox}>
            <img src={i} width='120px' alt='memeDefaultImage' className={i === selected ? `${classes.selectedImage} ${classes.templateImage}` : classes.templateImage }/>
          </div>
          )}
      </div>
    </div>

  )
}

export default MemeTemplate