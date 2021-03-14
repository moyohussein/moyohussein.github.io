import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { 
  FiLinkedin,
  FiGithub,
  FiTwitter,
} 
from "react-icons/fi";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from '@material-ui/core/Zoom';
import Typography from '@material-ui/core/Typography';
import { useTheme, useMediaQuery } from "@material-ui/core";
  

const SocialIcons = () => {
  const theme = useTheme();
  const matchesMobileScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const icons = [
    {icon: <FiLinkedin style={{fontSize: matchesMobileScreen ? 18 : 25, color: `var(--textNormal)`}}/>, title: "Linkedin", path:"https://twitter.com/moyohussein/"},
    {icon: <FiTwitter style={{fontSize: matchesMobileScreen ? 18 : 25, color: `var(--textNormal)`}}/>, title: "Twitter", path:"https://www.linkedin.com/in/abdulqoharhussein/"}, 
    {icon: <FiGithub style={{fontSize: matchesMobileScreen ? 18 : 25, color: `var(--textNormal)`}}/>, title: "GitHub", path:"https://github.com/moyohussein/"},
];

  const listings = icons.map((icon, index) => {
    return (
      <Tooltip 
        title={icon.title} 
        TransitionComponent={Zoom}
        placement= {matchesMobileScreen ? "top" : "right"}
        key={index}
      >
      <Button
        component="a"
        href={icon.path}
        rel="noopener" 
        target="_blank"
        variant="contained"
        elevation= {1}
        style={{
          backgroundColor: `transparent`,
          padding: 10,
          margin: matchesMobileScreen ? 10 :  5,
          borderRadius: `50%`,
        }}
      >
        {icon.icon}
      </Button>
      </Tooltip>
    )
});
    return (  
        <ButtonGroup 
            orientation={matchesMobileScreen ? "horizontal" : "vertical"}  
            color="secondary"
            style=
            {{ 
              display: `flex`,
              justifyContent: `center`,
              alignContent: `center`,
              position: matchesMobileScreen ? `relative` : `fixed`, 
              top: `35%`, 
              left: `0.5%`
            }}
        >
            <Typography variant="inherit" style=
              {{ 
                fontSize: 12, 
                color: `var(--link)`, 
                textAlign: `center`,
                alignSelf: `center`,
              }}
            >
              Follow me
            </Typography>
            {listings}
        </ButtonGroup>
    );
}
 
export default SocialIcons;