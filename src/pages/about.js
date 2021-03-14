import React from "react";
import Box from '@material-ui/core/Box';
import { Link } from 'gatsby';
import SEO from "../components/seo";
import { makeStyles } from "@material-ui/core";
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  box: {
    [theme.breakpoints.down('xs')]: {
      textAlign: `justify`,
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
      height="calc(100vh - 200px)"
      width="100%"
      overflow="hidden"
      className={classes.box}
    >
                <Typist
                  cursor=
                  {{ 
                    show: true,
                    blink: true,
                    element: '|',
                    hideWhenDone: true,
                  }}
                  startDelay={1000}
                  avgTypingDelay={20}
                  stdTypingDelay={20}
                  className={classes.root}
                >
                  I am a freelance front-end developer from Lagos, Nigeria.
                  <Typist.Delay ms={0} />
                  <br />
                  I code efficient and beautiful user interfaces for small businesses and individuals - on time and on budget.
                  <Typist.Delay ms={0} />
                  <br />
                  Feel free to take a look at my latest project on the <Link className={classes.link} to="/portfolio">web portfolio page</Link> or my <a className={classes.link} target="_blank" rel="noreferrer" href="https://moyohussein.github.io/resume.html">résumé </a>
                  <br />
                  <Typist.Delay ms={0} />
                  If you have any Questions or you want to hire me for a project. <a className={classes.link} href='mailto:abdulqoharhussein@gmail.com'>Contact me</a>
                  <br />
                  <Typist.Delay ms={0} />
                  I am also exploring new frontiers in devOps engineering.
                  <br />
                  <Typist.Delay ms={0} />
                  Asides coding, I love research documentaries, cooking, dystopian movies and reading blog articles.
                </Typist>
    </Box>
  </>
  )  
};

export default About;