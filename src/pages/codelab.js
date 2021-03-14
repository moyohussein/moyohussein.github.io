import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { CardItem } from "../components/card";
import { useStaticQuery, graphql } from "gatsby";

const useStyles = makeStyles((theme) => ({
  link: {
    color: `var(--hr)`,
    textDecoration: `none`,
    '&:hover': {
      animation: `$blinker 700ms linear infinite`,
      textDecoration: `none`,
    },
  },
  "@keyframes blinker" : {
    "0%": { opacity: 1.0, },
    "50%": { opacity: 0.0, },
    "100%": { opacity: 1.0, },
  },
  root: {
    display: `inline-flex`,
    justifyContent: `center`,
    flexWrap: `wrap`,
    padding: 0,
    width: `100%`,
    margin: `20px 0 50px 0`,
    overflow: `hidden`
  },
  list: {
    position: `relative`,
    margin: 20,
  },
  h3: {
    fontSize: `55px`,
    textAlign: `center`,
    [theme.breakpoints.only('sm')]: {
      fontSize: `48px`,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: `32px`,
    },
  },
}));

const CodeLab = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`{
  allProjectJson(skip: 6) {
    edges {
      node {
        id
        title
        repo
        info
        webUrl
        images {
          childImageSharp {
            fluid {
							...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`
)

const projects = data.allProjectJson.edges;
const mapItems = projects.map(({node: project}) => {
  const key = project.id
  const title = project.title
  const info = project.info
  const repo = project.repo
  const images1 = project.images[0].childImageSharp.fluid
  const images2 = project.images[1].childImageSharp.fluid
  
return (
    <li
      key={key}
      className={classes.list}
    >
                <CardItem 
                  key={key}
                  title={title}
                  info={info}
                  repo={repo}
                  images1={images1}
                  images2={images2}
                />
    </li>
)
});
 
  return (
  <>
    <SEO title="CodeLab" />
    <h3 className={classes.h3}>Projects in Pipeline</h3>
    <ul className={classes.root}>
      {mapItems}
    </ul>
    <Box 
      m="0 auto" 
      p={1} 
      textAlign="center"
    >
      <Typography>Let's Talk</Typography>
      <Typography>Wanna get in touch or talk about a project</Typography>
      <Typography>Feel free to email me via <Link className={classes.link} href="mailto:abdulqoharhussein@gmail.com">abdulqoharhussein@gmail.com</Link></Typography>
    </Box>
  </>
  )
};

export default CodeLab;
