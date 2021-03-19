import React, {useState} from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Circles } from "../components/card";
import CancelIcon from '@material-ui/icons/Cancel';
import Box from "@material-ui/core/Box";
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';
import Typography from "@material-ui/core/Typography";

const variants = {
  enter: (direction) => {
      return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
      }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
      return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
      }
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const CardPop = ({ handleClose , images1, images2, images3, images4, images5, images6, title }) => {

    const imageSrcA = images1.src
    const imageSrcB = images2.src
    const imageSrcC = images3.src
    const imageSrcD = images4.src
    const imageSrcE = images5.src
    const imageSrcF = images6.src
    const desktopImages = [imageSrcA, imageSrcB, imageSrcC ];
    const mobileImages = [imageSrcD, imageSrcE, imageSrcF];
    const [[page, direction], setPage] = useState([0, 0]);
    const mobileImageIndex = wrap(0, mobileImages.length, page);
    const desktopImageIndex = wrap(0, desktopImages.length, page);
    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };
    const onDragEnd = (e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);
        return (
            swipe < -swipeConfidenceThreshold ? paginate(1) :
            swipe > swipeConfidenceThreshold ? paginate(-1) : null
        )
    };

    return (  
        <>
            <AnimatePresence 
                initial={false} 
                custom={direction} 
                style={{boxShadow: `var(--form-shadow)`}}
            >   
                <Box display={{xs: `none`, md: `block` }}>
                <Box      
                        display="flex" 
                        position="absolute"
                        top={0}
                        p={1.8} 
                        width="100%" 
                        justifyContent="center" 
                        alignContent="center"
                        bgcolor="var(--cards)"
                        zIndex={3}
                        fontSize={18}
                    >
                        <Circles />
                        <Typography 
                            variant="caption" 
                            style=
                            {{
                                lineHeight: 2, 
                                fontFamily: `Alata`, 
                                textTransform: `uppercase`, 
                                fontSize: 'inherit',
                                color: `var(--color)`,
                            }}
                        >
                            {title}
                        </Typography>
                         
                        <Button style=
                        {{
                            position: `absolute`, 
                            right: 0,
                            top: 0,  
                            padding: 20,
                            marginRight: 10,
                            marginTop: 1,
                            borderRadius: `50%`,
                            color: `var(--color)`,
                        }} 
                            onClick={handleClose}
                        >
                            <CloseIcon fontSize="small" />
                        </Button>
                    </Box>
                </Box>
                <Box display={{xs: `block`, sm: `none`}}>
                <Box      
                        display="flex" 
                        position="absolute"
                        top={0}
                        p={1} 
                        fontSize={12}
                        width="100%" 
                        justifyContent="center" 
                        alignContent="center"
                        bgcolor="var(--cards)"
                        zIndex={3}
                    >
                        <Circles />
                        <Typography 
                            variant="caption" 
                            style=
                            {{
                                lineHeight: 1.45, 
                                fontFamily: `Alata`, 
                                textTransform: `uppercase`, 
                                fontSize: 'inherit',
                                color: `var(--color)`,
                            }}
                        >
                            {title}
                        </Typography>
                         
                        <Button style=
                        {{
                            position: `absolute`, 
                            right: -10,
                            top: 0,  
                            alignSelf: `center`,
                            color: `var(--color)`,
                        }} 
                            onClick={handleClose}
                        >
                            <CancelIcon fontSize="small" />
                        </Button>
                    </Box>
                </Box>
                <div style=
                    {{
                        width: `100%`,
                        height: `auto`,
                        position: `relative`,
                        margin: `0 auto`,
                        display: `flex`,
                        justifyContent: `center`,
                        alignItems: `center`,
                        overflow: `hidden`,
                    }}
                >
                    <Box display={{xs: `block`, sm: `none`}} pt={5}>
                        <motion.img
                            style=
                            {{
                                maxWidth: `100%`,
                                maxHeight: `100%`,
                                height: `60vh`,
                                objectFit: `contain`,
                                borderRadius: 10,
                            }}
                            key={page}
                            src={mobileImages[mobileImageIndex]}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={onDragEnd}
                        />
                        <Box 
                            display="flex" 
                            alignItems="center"
                            justifyContent="center" 
                            position="absolute" 
                            zIndex={1}
                            bottom={10}
                            width={50}
                            left= {0}
                            right={0}
                            margin="auto"
                            p={0.2}
                            bgcolor="rgba(0, 0, 0, 0.35)"
                            borderRadius={10}
                        >
                            {mobileImages.map((image, i) => {
                                return (
                                    <FiberManualRecordSharpIcon 
                                    key={image + i} 
                                    style=
                                    {{
                                        fontSize: 12, 
                                        margin: 1, 
                                        padding: 1, 
                                        borderRadius: mobileImageIndex ===  i ? `50%` : 0, 
                                        color: mobileImageIndex === i ? `rgba(255, 255, 255, 0.98)` : `rgba(255, 255, 255, 0.25)`, 
                                    }} 
                                    />
                                )
                            })}
                        </Box>
                    </Box>
                    <Box display={{xs: `none`, md: `block`}} pt={10}>
                        <motion.img
                            style=
                            {{
                                maxWidth: `100%`,
                                maxHeight: `100%`,
                                objectFit: `contain`,
                                borderRadius: 10,
                            }}
                            key={page}
                            src={desktopImages[desktopImageIndex]}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={onDragEnd}
                        />
                        <Box 
                            display="flex" 
                            alignItems="center"
                            justifyContent="center" 
                            position="absolute" 
                            textAlign="center"
                            width={50}
                            left= {0}
                            right={0}
                            margin="auto"
                            zIndex={1}
                            bottom={10}
                            p={0.2}
                            bgcolor="rgba(0, 0, 0, 0.35)"
                            borderRadius={10}
                        >
                            {desktopImages.map((image, i) => {
                                return (
                                    <FiberManualRecordSharpIcon 
                                    key={image + i} 
                                    style=
                                    {{
                                        fontSize: 12, 
                                        margin: 1, 
                                        padding: 1, 
                                        borderRadius: desktopImageIndex ===  i ? `50%` : 0, 
                                        color: desktopImageIndex === i ? `rgba(255, 255, 255, 0.98)` : `rgba(255, 255, 255, 0.25)`, 
                                    }} 
                                    />
                                )
                            })}
                        </Box>
                    </Box>
                    <Button style=
                    {{
                        position: `absolute`,
                        top: `45%`,
                        zIndex: 1,
                        left: `2.5%`, 
                        padding: 20,
                        borderRadius: `50%`,
                        backgroundColor: `rgba(0, 0, 0, 0.45)`,
                    }} 
                        onClick={() => paginate(-1)}
                    >
                        <ArrowLeftIcon 
                            fontSize="medium" 
                            style=
                            {{
                                color: `white`
                            }} 
                        />
                    </Button>
                    <Button style=
                    {{
                        position: `absolute`, 
                        top: `45%`,
                        right: `2.5%`,
                        zIndex: 1, 
                        padding: 20, 
                        borderRadius: `50%`,
                        backgroundColor: `rgba(0, 0, 0, 0.45)`,
                    }} 
                        onClick={() => paginate(1)}
                    >
                        <ArrowRightIcon 
                            fontSize="medium" 
                            style=
                            {{
                                color: `white`
                            }} 
                        />
                    </Button> 
                </div>
            </AnimatePresence>
        </>
    );
}
 
export default CardPop;