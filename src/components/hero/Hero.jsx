import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollbutton:{
    opacity:0,
    y:10,
    transition:{
      duration:1.5,
      repeat:Infinity,
    }
  }
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
     duration:20,
     repeatType:"mirror",
     repeat:Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div  className="hero">
      <div className="wrapper">
        <motion.div className="textConatiner" variants={textVariants} initial="initial" animate="animate" >
          <motion.h2 variants={textVariants} >PRIYANSHU RAJ</motion.h2>
          <motion.h1 variants={textVariants} >Web Developer and UI Designer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} >See Latest Wroks</motion.button>
            <motion.button variants={textVariants} >Contact Me</motion.button>
          </motion.div>
          <motion.img animate="scrollbutton" variants={textVariants} src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div variants={sliderVariants} animate="animate" initial="initial" className="slidingTextConatiner">
        Software Developer Product Designer Web Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
