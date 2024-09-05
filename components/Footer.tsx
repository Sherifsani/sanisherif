"use client";

import React, { useRef } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { motion, useInView } from "framer-motion";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <footer ref={ref} className="bg-body px-6">
      <div className="pt-portraitSection mx-auto max-w-screen-xl">
        {/* Animated Heading */}
        <motion.h1
          className="uppercase text-white text-5xl flex flex-col mb-10"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span>let's work </span>
          <span>together</span>
        </motion.h1>

        {/* Animated CTA Links */}
        <motion.div
          className="cta flex flex-col gap-4 mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-lg text-white">
            Email <IoMdArrowForward color="white" />
          </p>
          <p className="text-lg text-white">
            LinkedIn <IoMdArrowForward color="white" />
          </p>
          <p className="text-lg text-white">
            Github <IoMdArrowForward color="white" />
          </p>
          <p className="text-lg text-white">
            Facebook <IoMdArrowForward color="white" />
          </p>
        </motion.div>

        {/* Animated Copyright */}
        <motion.div
          className="copyrights border-t border-[rgba(255,255,255,0.1)] p-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <p className="text-white text-center">
            &copy; 2024 Sherif Sani. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
