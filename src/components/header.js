import React from "react";
import { Link } from "gatsby";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 5,
  },
  h1: {
    fontFamily: "Italianno",  
    textAlign: `center`,
    color: `var(--header)`, 
    textShadow:`-1px -1px 0 var(--textNormal),-1px 1px 0 var(--textNormal),1px -1px 0 var(--textNormal),1px 1px 0 var(--textNormal)`,
    textStroke: `0.1px var(--text-stroke)`,
    marginBottom: 0,
    margin: 10,
    fontSize: `100px`,
    [theme.breakpoints.only('sm')]: {
      fontSize: `75px`,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: `50px`,
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.root}>
        <Link 
          to="/home" 
          style=
          {{
            color: "white", 
            textDecoration: "none"
          }}
        >
          <Typography variant="h1" className={classes.h1}>
            Hussein Abdulqohar
          </Typography>
        </Link>   
  </Box>
  );
};

export default Header;
