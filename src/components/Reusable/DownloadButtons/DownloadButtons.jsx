import React from 'react';

import * as htmlToImage from 'html-to-image';

import { Button, Fade, FormControl, FormHelperText, IconButton, InputLabel, Menu, MenuItem, Tooltip } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { ArrowDownwardRounded, FontDownloadRounded } from '@material-ui/icons';

const DownloadButtons = ({ fileToDownload, formats }) => {

  const templateImage = useSelector((state) => state.memeDB.templateImage);

  //downloads meme based on the selected format
  const downloadImage = async ( format ) => {
         
    //if a new format is added: 
    // 1- create a dataUrl for it
    // 2- change the link.href condition relatively
    const pngDataUrl = await htmlToImage.toPng(document.getElementById('memeToDownload'));
    const jpgDataUrl = await htmlToImage.toJpeg(document.getElementById('memeToDownload'));

    const link = document.createElement('a');

    // default download file name
    link.download = `memeLand.${format}`;
    
    // conditional download based on the chosen format
    // if a new format is added, change the condition relatively
    link.href = format === 'jpg' ? jpgDataUrl : format === 'png' && pngDataUrl;
    link.click();

  };

  // material ui config
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };

  return (
    <>
    {/* 
      if no meme is submitted or if the user begins to create a new meme, 
      instead of download function, the user will be shown an alert
    */}
    {!fileToDownload || templateImage ?
      <Button variant="outlined" color="secondary" size="large" onClick={()=> alert('Please Generate a Meme!')} fullWidth>Download</Button>
        :
        <>
      <Tooltip title='download' placement="top">
          <Button
              onClick={handleClick}
              variant='outlined'
              color='secondary'
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
          >Download
          </Button>
      </Tooltip>
      <Menu
        id="fade-menu"
        MenuListProps={{'aria-labelledby': 'fade-button',}}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {formats.map((item, key) => 
            <MenuItem key={key} value={item} onClick={() => downloadImage(item)}>{item}</MenuItem>
        )}
      </Menu>
      </>
      }
    </>
  )
}

export default DownloadButtons