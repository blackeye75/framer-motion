import React, { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./contact.scss";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [error, seterror] = useState(false);
  const [Success, setSuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vwarm77",
        "template_bz1opbr",
        formRef.current,
        "rgPEWMvJdi3rHXcIN"
      )
      .then(
        () => {
          setSuccess(true);
        //   console.log(result);
        },
        (error) => {
          seterror(true);
          //   console.log("FAILED...", error.text);
          console.log(error);
        }
      );
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      //   animate="animate"
      whileInView="animate"
      className="contact"
    >
      <motion.div variants={variants} className="textContainer">
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <span>priyanshuraj22275@gmail.com</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Address</h2>
          <span>New Delhi, IN</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Phone</h2>
          <span>7005212531</span>
        </motion.div>
      </motion.div>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        whileInView="animate"
        className="formContainer"
      >
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="emailSvg"
        >
          <svg
            width="35vmax"
            height="35vmax"
            viewBox="0 0 32.666 32.666"
            // fill="none"
            // xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
              //   stroke="#000000"
              stroke-width={0.2}
              fill="none"
              //   stroke-linecap="round"
              //   stroke-linejoin="round"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
            />
          </svg>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
          action=""
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea placeholder="Message" rows={8} name="message" />
          <button>Submit</button>
          {error && "Error"}
          {Success && "Success"}
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
