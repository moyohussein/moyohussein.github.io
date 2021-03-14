import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import { GoLinkExternal } from 'react-icons/go';
import HoverText from './hovertext';
import Typography from '@material-ui/core/Typography';

const AwesomeButton = ({ webUrl }) => {
    return (  
                <ButtonBase style={{borderRadius: 5}} ariaLabel="button" >
                    <a 
                        href={webUrl}
                        className="awesomeButton"
                    >
                        <GoLinkExternal style=
                        {{
                            marginTop: 5, 
                            fontSize: `1rem`,
                            marginRight: 10
                        }} />
                        <Typography >
                            visit website
                        </Typography>
                    </a>
                </ButtonBase>

    );
};

const ContactButton = () => {
    return (  
                <ButtonBase style={{borderRadius: 5}} ariaLabel="button">
                <a
                    href="mailto:abdulqoharhussein@gmail.com" 
                    className="contactButton"
                >
                    <HoverText />
                </a>
                </ButtonBase>

    );
};
 
export  { AwesomeButton, ContactButton };