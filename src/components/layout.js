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
    fontFamily: `Alata`
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
  },
};


const useStyles = makeStyles((theme) => ({
  root: {
    margin: `0 auto`,
    maxWidth: `85%`,
    padding: `45px 10px`,
    position: 'relative',
    height: `auto`,
    display: `flex`,
    justifyContent: `center`,
    alignContent: `center`,
    [theme.breakpoints.down('xs')]: {
      maxWidth: `95%`,
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
        <>
        <ThemeProvider theme={theme}>
          <BackGround />
          <Header siteTitle={data.site.siteMetadata?.title || `Title`}/>
          <NavBar />
          <Hidden xsDown>
            <SwitchBtn />
            <SocialIcons />
          </Hidden>
          <div className={classes.root}>
            <AnimatePresence>
            <motion.main
              variants={variants}
              initial="initial"
              animate="enter"
              location={location}
              key={location.pathname}
            >
              {children}
            </motion.main>
            </AnimatePresence>
          </div>
          <Footer />
        </ThemeProvider>
        </>
      )
    } 
     
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
