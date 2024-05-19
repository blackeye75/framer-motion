import React, { useRef } from "react";
import { useInView, motion, color } from "framer-motion";
import "./services.scss";

const variants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {

  const ref=useRef()
  const isinView=useInView(ref,{margin:"-100px"})
  return (
    <div className="service">
      <div variants={variants}  className="textContainer">
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </div>
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isinView && "animate"}
    >
      <motion.div variants={variants} initial="initial" animate="animate" className="titleContainer"  >
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}} >Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}} >For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div variants={variants} initial="initial" animate="animate" className="listConatiner">
        <motion.div
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id
            corrupti eveniet perferendis consequatur ex facere laudantium optio
            repudiandae reprehenderit?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id
            corrupti eveniet perferendis consequatur ex facere laudantium optio
            repudiandae reprehenderit?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id
            corrupti eveniet perferendis consequatur ex facere laudantium optio
            repudiandae reprehenderit?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default Services;
