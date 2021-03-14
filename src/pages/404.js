import React from 'react';
import SEO from "../components/seo";
import Canvas from "../components/canvas";
import Box from "@material-ui/core/Box";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    h3: {
        color: `white`,
        textAlign: `center`,
        margin: theme.spacing(2),
        lineHeight: 1.45,
        fontSize: 18,
    [theme.breakpoints.down('sm')]: {
        fontSize: 16,
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: 12,
    },
    },
    link: {
        textTransform: `none`,
        textDecoration: `none`,
        color: `white`,
        fontFamily: `Alata`,
    }
}));

const PageNotFound = () => {
    const classes = useStyles();

    return (  
        <>
        <SEO title="404: Not found" />
        <Canvas />
        <Box
            position="fixed"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            width='100%'
            height="100vh"
        >
        <Box>
            <h1 className="notFound">404</h1>
        </Box>
        <h3 className={classes.h3}>Oops..! <br /> seems like requested page is lost in the Matrix</h3>
        <Button variant="contained" color="secondary">
            <Link to="/"
                activeStyle={{color: `none`}}
                className={classes.link}
            >
                Return to Homepage
            </Link>
        </Button>
        </Box>
        </>
    );
}
 
export default PageNotFound;