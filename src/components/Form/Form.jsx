import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createMeme, deleteMeme, selectTemplateImage } from '../../redux/actions/meme.actions';

import CustomizedSlider from '../Reusable/CustomizedSlider/CustomizedSlider';
import ColorPicker from '../Reusable/ColorPicker/ColorPicker';
import CustomizedSelect from '../Reusable/CustomizedSelect/CustomizedSelect';
import DownloadButtons from '../Reusable/DownloadButtons/DownloadButtons';

import FileBase from 'react-file-base64';

import useStyles from './styles';
import { Button, Paper, TextField, Typography } from '@material-ui/core';
import MemeTemplate from '../MemeTemplate/MemeTemplate';

const Form = () => {
  
  const classes = useStyles();
  const dispatch = useDispatch();

  const localId = localStorage.getItem('userLocalId')

  const templateImage = useSelector((state) => state.memeDB.templateImage);
  const [ uploadImage, setUploadImage ] = useState(null);
  
  useEffect(() => {
    
    dispatch(selectTemplateImage(uploadImage))

    const uniqueIdGenerator = Math.floor(Math.random() * 100) * Date.now();
  
    !localId && localStorage.setItem('userLocalId', uniqueIdGenerator)
  
  }, [dispatch, localId, uploadImage]);
  
  const [ memeData, setMemeData] = useState({ userId: localId, topText: '' , bottomText: '', fontColor: '#F0FAFF', fontFamily: 'Impact', fontSize: '30px', selectedFile: '' });  
  const memes = useSelector((state) => state.memeDB.memes);
  const userMemes = memes.filter(memes => memes.userId === localId)
  const memeId = userMemes.map(i => i._id);
  const [ resetChildProps, setResetChildProps ] = useState(false);
  const fontFamilyArr = ['Verdana', 'Impact', 'Calibri', 'Fascinate', 'Quicksand', 'Lobster', 'Gill Sans'];
  const fontSizeArr = [{name:'Small', size: '16px'}, {name:'Medium', size: '24px'}, {name:'Large', size: '36px'}, {name:'Larger', size: '48px'}, {name:'Extra Large', size: '60px'}]
  const formats = ['jpg', 'png'];
  const fileToDownload = memes.length;

  const clear = () => {
    setMemeData({ userId: localId, topText: '' , bottomText: '', fontColor: '', fontFamily: '', fontSize: '', selectedFile: '' })
  };

  // at this point of app development we do not need the array of memes in MongoDB
  // so we delete the last item every time and there is just alway one item left
  const handleDelete = () =>  {
    memeId[0] && dispatch(deleteMeme(memeId[0]))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const handleData = () => {
      dispatch(createMeme({ ...memeData, selectedFile: templateImage }))
      dispatch(selectTemplateImage(null))
      setResetChildProps(!resetChildProps)
      handleDelete()
      clear();
    }
    !templateImage ? alert('Choose an image please') : handleData()

  };

  return (
      <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.textField}>
          <TextField fullWidth variant="standard" name="topText" label="Top Text"   value={memeData.topText} onChange={(e) => setMemeData({ ...memeData, topText: e.target.value })} />
          <TextField fullWidth variant="standard" name="bottomText" label="Bottom Text" value={memeData.bottomText} onChange={(e) => setMemeData({ ...memeData, bottomText: e.target.value })} />
        </div>
        <div style={{display:'flex', justifyContent:'space-around', paddingTop: '20px', width:'100%'}}>
          <CustomizedSelect sectionTitle={'Font Family'} itemsArray={fontFamilyArr} selectedItem={fontFamily => setMemeData({ ...memeData, fontFamily: fontFamily })} resetItem={resetChildProps}/>  
          <CustomizedSlider sectionTitle={'Font Size'} itemsArray={fontSizeArr} selectedItem={fontSize => setMemeData({ ...memeData, fontSize: fontSize })} resetItem={resetChildProps}/>  
          <ColorPicker sectionTitle={'Font Color'} pickedColor={fontColor => setMemeData({ ...memeData, fontColor: fontColor })} resetColor={resetChildProps} />
        </div>
        <div className={classes.selectImage}>
          <Typography style={{color:'#555', fontSize: '.8em'}} className={classes.uploadImage}>Upload an image or choose from the gallery</Typography>
          <FileBase type="image" multiple={false} onDone={({ base64 }) => setUploadImage( base64 )} />
          <MemeTemplate />
        </div>
        <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Button className={classes.buttonSubmit} variant="outlined" color="primary" size="small" type="submit" >Generate</Button>
          <DownloadButtons fileToDownload={fileToDownload} formats={formats}/>
        </div>
      </form>
  );
};

export default Form;