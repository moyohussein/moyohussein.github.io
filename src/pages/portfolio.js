import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import SEO from "../components/seo";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import CardPop from "../components/cardpop";
import { OverlayItems } from "../components/card";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Popover from '@material-ui/core/Popover';
import { AwesomeButton } from "../components/button";
import Grow from '@material-ui/core/Grow';
import { 
  DiBootstrap,
  DiCss3,
  DiGit,
  DiGithubBadge,
  DiHtml5,
  DiJsBadge,
  DiReact,
  DiSass,
  DiWordpress,
} 
from "react-icons/di";
import { 
  SiMaterialUi, 
  SiGatsby,
  SiNextDotJs,
  SiGraphql
} from "react-icons/si";
import { CardItem } from "../components/card";
import { withStyles } from "@material-ui/core/styles";
import { useStaticQuery, graphql } from "gatsby";

const skills = 
[
    {label: 'Html5', icon: <DiHtml5 />}, 
    {label: 'Css3', icon: <DiCss3 />}, 
    {label: 'Vanilla JS', icon: <DiJsBadge />}, 
    {label: 'Git', icon: <DiGit />}, 
    {label: 'Github', icon: <DiGithubBadge />}, 
    {label: 'Material UI', icon: <SiMaterialUi />}, 
    {label: 'React JS', icon: <DiReact />}, 
    {label: 'Sass', icon: <DiSass />}, 
    {label: 'Gatsby JS', icon: <SiGatsby />}, 
    {label: 'Bootstrap', icon: <DiBootstrap />}, 
    {label: 'WordPress', icon: <DiWordpress />},
    {label: 'Next JS', icon: <SiNextDotJs />},
    {label: 'GraphQL', icon: <SiGraphql />}
];

const PopoverPosition = withStyles((theme) => ({
  root: {
    backgroundColor: `rgba(0, 0, 0, 0.75)`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
   
  },
  paper: {
    width: `50vw`,
    height: `auto`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignContent: `center`,
    overflowY: `hidden`,
    backgroundColor: `transparent`,
    [theme.breakpoints.down('sm')]: {
      width: 350,
      maxHeight: `100vh`,
    },
  },
}))(Popover);


const useStyles = makeStyles((theme) => ({
    root: {
      display: `flex`,
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
    box: {
      maxWidth: `70%`,
      [theme.breakpoints.down('sm')]: {
        maxWidth: `100%`
      },
    },
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
    }
}));

const Portfolio = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMobileScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [OpenedPopoverId, setOpenedPopoverId] = useState(null);
  const handleClick = (event, popoverId) => {
    setAnchorEl(event.currentTarget);
    setOpenedPopoverId(popoverId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  const ChipSet = (skills.sort(() => Math.random() - 0.5)).map(skill => (
    <Chip 
      label={skill.label} 
      size={matchesMobileScreen ? "small" : "medium"} 
      icon={matchesMobileScreen ? null : skill.icon } 
      style=
      {{ 
        padding: 5, 
        margin: 7, 
        backgroundColor: `var(--hr)`, 
        color: `var(--color)`, 
        fontFamily: `Alata` 
      }} 
    />
  ));


const data = useStaticQuery(graphql`{
  allProjectJson(limit: 6) {
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
        const webUrl = project.webUrl
        const repo = project.repo
        const images1 = project.images[0].childImageSharp.fluid
        const images2 = project.images[1].childImageSharp.fluid
        const images3 = project.images[2].childImageSharp.fluid
        const images4 = project.images[3].childImageSharp.fluid
        const images5 = project.images[4].childImageSharp.fluid
        const images6 = project.images[5].childImageSharp.fluid
        
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
                        onHandleClick={(e) => handleClick(e, key)}
                      />
                      <PopoverPosition
                        open={OpenedPopoverId === key }
                        anchorEl={anchorEl}
                        TransitionComponent={Grow}
                        transitionDuration="auto"
                        onClose={handleClose}
                        transformOrigin={{
                          vertical: 250,
                          horizontal: 'center',
                        }}
                        anchorReference="none"
                      >
                        <CardPop 
                          handleClose={handleClose}
                          images1={images1}
                          images2={images2}
                          images3={images3}
                          images4={images4}
                          images5={images5}
                          images6={images6}
                          title={title}
                        />
                        <Hidden mdUp>
                            <OverlayItems info={info} />
                        </Hidden>
                        <Box 
                          p={2.5} 
                          width="100%" 
                          display="flex" 
                          justifyContent="center"
                        >
                          <AwesomeButton webUrl={webUrl} />
                        </Box>
                      </PopoverPosition>
          </li>
    )
});

  return (
  <>
    <SEO title="Portfolio" />
    <Box 
        display='flex' 
        justifyContent='center' 
        className={classes.box} 
        flexWrap="wrap" 
        m="0 auto"
    >
        {ChipSet}
    </Box>
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

export default Portfolio;
