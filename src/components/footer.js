import React from "react";
import Typography from "@material-ui/core/Typography";  
import Link from "@material-ui/core/Link";
import { makeStyles, useTheme, useMediaQuery, Box }  from "@material-ui/core";
import SocialIcons from "./socialicons";
import SwitchBtn from "./switch";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
    typo: {
        fontFamily: `monospace`,
        fontSize: 12,
        width: `100%`,
        height: `100%`,
        margin: `0 auto`,
        textAlign: `center`,
        color: `white`,
        padding: 2.5,
    },
    hidden: {
        display: `flex`,
        alignContent: `center`,
        alignSelf: `center`,
        justifyContent: `space-evenly`,
        paddingBottom: theme.spacing(2),
        paddingTop: theme.spacing(5),
    },
}));

const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMobileScreen = useMediaQuery(theme.breakpoints.down('xs'));

    return (  
    <Box>
        <div
        style={{
            width: `100%`,
            position: !matchesMobileScreen && "fixed",
            bottom: !matchesMobileScreen && 0,
            zIndex: !matchesMobileScreen && 10,
            background: `black`,
            clipPath: matchesMobileScreen && `polygon(0 15%, 9% 21%, 14% 23%, 18% 25%, 21% 26%, 30% 28%, 32% 28%, 40% 27%, 46% 26%, 52% 23%, 57% 19%, 62% 15%, 68% 11%, 73% 8%, 79% 6%, 86% 5%, 93% 5%, 100% 6%, 100% 100%, 0% 100%)`,
        }}
        >
            <Hidden smUp>
                <div className={classes.hidden}>
                    <SocialIcons />
                    <SwitchBtn />
                </div>
            </Hidden>
            <Typography className={classes.typo}>
                Handcrafted by me © {new Date().getFullYear()} -
                Built with <Link href="https://www.gatsbyjs.com">Gatsby</Link>
            </Typography>
        </div>
    </Box>
    );
};
 
export default Footer;