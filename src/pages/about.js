import React from "react";
import Box from '@material-ui/core/Box';
import { Link } from 'gatsby';
import SEO from "../components/seo";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core";
import 'react-typist/dist/Typist.css';


const container = {
  enter: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const item = {
  initial: { y: 20, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
  },
};

const useStyles = makeStyles((theme) => ({

  ul: {
    fontWeight: `bold`,
    padding: 0,
    margin: 0,
    [theme.breakpoints.only('sm')]: {
      padding: theme.spacing(2)
    },
  },
  items: {
    marginBottom: theme.spacing(1),
    lineHeight: 1.45,
    fontSize: `calc(12px + 0.5vw)`,
    [theme.breakpoints.only('sm')]: {
      fontSize: `calc(15px + 1vw)`,
      paddingBottom: theme.spacing(1.5)
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(1),
      fontSize: `calc(10px + 0.45vw)`,
    },
  },
  link: {
    color: `var(--hr)`,
    textDecoration: `none`,
    fontSize: `inherit`,
    fontFamily: `Alata`,
    fontWeight: `600`,
    '&:hover': {
      animation: `$blinker 700ms linear infinite`,
    },
  },
    "@keyframes blinker": {
      "0%": { opacity: 1.0, },
      "50%": { opacity: 0.0, },
      "100%": { opacity: 1.0, },
    },
}));

const About = () => {
  const classes = useStyles();
  
  return (
  <>
    <SEO title="About" />
    <Box 
      textAlign="center"
      display="flex"
      justifyContent="center"
      alignContent="center"
      height="100%"
      width="100%"
      overflow="hidden"
      flexDirection="column"
    >

                <motion.ul className={classes.ul} variants={container}>
                  <motion.li className={classes.items} variants={item}>I am a freelance front-end developer from Lagos, Nigeria.</motion.li>
                  <motion.li className={classes.items} variants={item}>I code efficient and beautiful websites and applications for small businesses and individuals on time and on budget.</motion.li>
                  <motion.li className={classes.items} variants={item}>Feel free to take a look at my latest project on the <Link className={classes.link} to="/portfolio/">web portfolio page</Link> or my <a className={classes.link} target="_blank" rel="noreferrer" href="https://moyohussein.github.io/resume.html">résumé </a></motion.li>
                  <motion.li className={classes.items} variants={item}>If you have any Questions or you want to hire me for a project. <a className={classes.link} href='mailto:abdulqoharhussein@gmail.com'>Contact me</a></motion.li>
                  <motion.li className={classes.items} variants={item}>Asides coding, I love research documentaries, cooking, dystopian movies and reading blog articles.</motion.li>
                </motion.ul>
    </Box>
  </>
  )  
};

export default About;