import React, { useState } from 'react';
import Switch from "@material-ui/core/Switch";
import { withStyles } from '@material-ui/core/styles';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Box from "@material-ui/core/Box";
import useDarkMode from 'use-dark-mode';
import { useTheme, useMediaQuery } from "@material-ui/core";

const ThemeSwitch = withStyles((theme) => ({
    root: {
      width: 80,
      height: 48,
      padding: 8,
      fontFamily: `Alata`,
      [theme.breakpoints.down('xs')]: {
        width: 65,
        height: 35,
        padding: 5, 
      },
    },
    switchBase: {
      padding: 11,
      color: '#ff6a00',
      [theme.breakpoints.down('xs')]: {
        padding: 2, 
      },
    },
    thumb: {
      width: 26,
      height: 26,
      backgroundColor: '#fff',
      [theme.breakpoints.down('xs')]: {
        width: 22,
        height: 22,
      },
    },
    track: {
      background: 'black',
      opacity: '1 !important',
      borderRadius: 20,
      position: 'relative',
      '&:before, &:after': {
        display: 'inline-block',
        position: 'absolute',
        top: '50%',
        width: '50%',
        transform: 'translateY(-50%)',
        color: '#fff',
        textAlign: 'center',
      },
      '&:before': {
        content: '"on"',
        left: 4,
        opacity: 0,
      },
      '&:after': {
        content: '"off"',
        right: 4,
      },
    },
    checked: {
      '&$switchBase': {
        color: '#185a9d',
        transform: 'translateX(32px)',
        '&:hover': {
          backgroundColor: 'rgba(24,90,257,0.08)',
        },
      },
      '& $thumb': {
        backgroundColor: '#fff',
      },
      '& + $track': {
        background: 'linear-gradient(to right, #43cea2, #185a9d)',
        '&:before': {
          opacity: 1,
        },
        '&:after': {
          opacity: 0,
        }
      }
    },
  }))(Switch);


const SwitchBtn = () => {
    const classes= withStyles();
    const theme = useTheme();
    
    const matchesMobileScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const darkMode = useDarkMode(false);
    
    const [checked, setChecked] = useState(darkMode);
    const toggleChecked = event => {
        setChecked(event.target.checked);
        darkMode.toggle();
    };
    
    return (  
        <Box 
          position= {!matchesMobileScreen && "absolute"} 
          top="2%" 
          right="2%" 
          alignSelf="center"
        >
            <ThemeSwitch 
                checked={checked}
                onChange={toggleChecked}
                disableRipple
                ariaLabel="checkbox"
                name="checked"
                icon=
                {
                    <Brightness3Icon style=
                    {{
                    color:`whitesmoke`, 
                    transform: `rotate(45deg)`, 
                    marginTop: matchesMobileScreen ? 5 : 2,
                    marginLeft: matchesMobileScreen && 6,
                    }} />
                }
                checkedIcon=
                {
                    <Brightness3Icon style=
                    {{
                    color:`whitesmoke`, 
                    transform: `rotate(45deg)`, 
                    marginTop: matchesMobileScreen ? 5 : 2,
                    }} />
                }
                classes={{
                    root: classes.root,
                    switchBase: classes.switchBase,
                    thumb: classes.thumb,
                    track: classes.track,
                    checked: classes.checked,
                }}
            />
        </Box>
    );
}
 cd
