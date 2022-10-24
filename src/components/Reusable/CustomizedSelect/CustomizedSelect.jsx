import React, { useEffect } from 'react'
import { Fade, FormControl, IconButton, InputLabel, Menu, MenuItem, Select, Tooltip } from '@material-ui/core'
import { useState } from 'react'
import { FontDownloadRounded } from '@material-ui/icons';

const CustomizedSelect = ({ sectionTitle, itemsArray, selectedItem }) => {
    
    const handleFontFamily = item => {
        selectedItem(item)
        handleClose()
    }

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
            <Tooltip title={sectionTitle} placement="top">
                <IconButton size='small' onClick={handleClick} >
                    <FontDownloadRounded 
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    />
                </IconButton>
            </Tooltip>
            <Menu
                id="fade-menu"
                MenuListProps={{'aria-labelledby': 'fade-button',}}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                onChange={handleFontFamily}
            >
                {itemsArray.map((item, key) => 
                    <MenuItem key={key} value={item} onClick={() => handleFontFamily(item)}>{item}</MenuItem>
                )}
            </Menu>
        </>
    )
}

export default CustomizedSelect