import React from 'react';

import { Fade, IconButton, Menu, MenuItem, Tooltip } from '@material-ui/core'
import { FontDownloadRounded, FormatSizeRounded } from '@material-ui/icons';

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
                    <FormatSizeRounded 
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
                    <MenuItem key={key} value={item} onClick={() => handleFontFamily(item.size)}>{item.name}</MenuItem>
                )}
            </Menu>
        </>
    )
}

export default CustomizedSelect