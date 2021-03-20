import React from "react";
import SEO from "../components/seo";
import { Helmet } from "react-helmet";
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import { ContactButton } from "../components/button";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
      fontSize: `calc(3rem + 0.75vw)`,
      fontWeight: `bold`,
      width: `100%`,
      textAlign: `center`,
      [theme.breakpoints.only('sm')]: {
        fontSize: 'calc(27px + 2vw)',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: `calc(19.5px + 1vw)`,
      },
    },
    paragraph: {
      marginTop: theme.spacing(5),
    },
}));

const IndexPage = () => {
  const classes = useStyles();

  return (
    <>
    <Helmet>
      <meta name="google-site-verification" content="3jg1uOWLqtilsG9JkkqkhvPZtkfNp3Ui-7CPNarxY84" />
    </Helmet>
    <SEO title="Home" />
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
      <Box textAlign="justify">
              <Typist
                cursor={{ hideWhenDone: true }}
                startDelay={1000}
                className={classes.root}
              >
                I'm <Typist.Delay ms={250} />
                Hussein AbdulQohar 🇳🇬
                <Typist.Backspace count={23} delay={1000} />
                a Microbiologist 🔬
                <Typist.Backspace count={19} delay={1000} />
                a Front-end Developer 👨🏿‍💻
              </Typist>
      </Box>
      <Typography paragraph className={classes.paragraph}>
        I write clean codes and bring alive beautiful user interfaces.
      </Typography> 
      <Box mt={5}>
        <ContactButton /> 
      </Box>
    </Box>  
  </>
  )
}

export default IndexPage