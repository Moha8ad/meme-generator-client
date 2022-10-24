import React, { useCallback, useEffect, useRef, useState } from 'react';

import { HexColorPicker } from "react-colorful";

import { Button, Tooltip, Typography } from '@material-ui/core';

import useClickOutside from "./useClickOutside";

import useStyles from './styles';
import { FormatColorFillRounded } from '@material-ui/icons';

const ColorPicker = ({ sectionTitle, pickedColor, resetColor }) => {

    const classes = useStyles();
    
    const [ colorToPick, setColorToPick ] = useState('') 

    const handleColor = (color) => {
        setColorToPick(color)
        pickedColor(color)
    };
    
    const popover = useRef();
    const [isOpen, toggle] = useState(false);

    const close = useCallback(() => toggle(false), []);
    useClickOutside(popover, close);


    useEffect(() => {
        setColorToPick('white')

    }, [resetColor])
    
    return (
        <div>
            <Tooltip title={sectionTitle} placement="top">
                <div className={classes.picker}>
                    <div
                        className={classes.swatch}
                        style={{ backgroundColor: colorToPick }}
                        onClick={() => toggle(true)}
                    />
                    {isOpen && (
                        <div className={classes.popover} ref={popover}>
                        <HexColorPicker color={colorToPick} onChange={handleColor} />
                        </div>
                    )}
                </div>
            </Tooltip> 
        </div>
        
    )
}

export default ColorPicker