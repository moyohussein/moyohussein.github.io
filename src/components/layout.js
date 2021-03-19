import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import NavBar from "./navbar";
import "./layout.css";
import { motion, AnimatePresence } from 'framer-motion';
import BackGround from "./background"
import Footer from "./footer";
import SwitchBtn from "./switch";
import SocialIcons from "./socialicons";
import { makeStyles } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import PageNotFound from "../pages/404";

let theme = createMuiTheme({
  typography: {
    fontFamily: `Alata`,
    h1: {
      fontFamily: `Italianno`,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
theme = responsiveFontSizes(theme);

const duration = 0.5;

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
    exit: {
      opacity: 0,
    }
  },
};


const useStyles = makeStyles((theme) => ({
  origin:{
    display: `flex`,
    flexDirection: `column`,
    minHeight: `100vh`,
  },
  root: {
    margin: `0 auto`,
    maxWidth: `85%`,
    padding: `45px 10px`,
    position: 'relative',
    height: `auto`,
    flexGrow: 1,
    display: `flex`,
    justifyContent: `center`,
    alignContent: `center`,
    [theme.breakpoints.down('xs')]: {
      maxWidth: `95%`,
      padding: `45px 0px`,
    },
  },
}));


const Layout = ({ children, location }) => {
  const classes = useStyles();
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    {
    location.pathname !== '/' && location.pathname !== '/about/'  && location.pathname !== '/portfolio/' && location.pathname !== '/codelab/' 
    ? (<PageNotFound />) :
      (
        <div className={classes.origin}>
        <ThemeProvider theme={theme}>
          <BackGround />
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <NavBar />
          <Hidden xsDown>
            <SwitchBtn />
            <SocialIcons />
          </Hidden>
          <div className={classes.root}>
            <AnimatePresence exitBeforeEnter>
            <motion.main
              variants={variants}
              initial="initial"
              animate="enter"
              exit="exit"
              location={location}
              key={location.pathname}
            >
              {children}
            </motion.main>
            </AnimatePresence>
          </div>
          <Footer />
        </ThemeProvider>
        </div>
      )
    } 
     
    </>
  )
};

Layout.propTypes = {
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
}),
children: PropTypes.node.isRequired,
location: PropTypes.object.isRequired,
}

export default Layout
