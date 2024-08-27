"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import MergedCircles from "./MergedCircles";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="p-5 pt-8 flex flex-col md:flex-row items-end overflow-hidden gap-10 lg:h-[90vh]">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }} // Delay between each child's animation
        className="hero-texts flex flex-col gap-6 items-start md:w-1/2"
      >
        <motion.p
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-green text-[12px] font-[500] flex items-center gap-2"
        >
          <span className="available-dot w-[6px] h-[6px] bg-green rounded-full"></span>
          Available for work
        </motion.p>

        <motion.h1
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="hero-title -mt-4 text-white text-4xl md:text-5xl lg:text-6xl"
        >
          Precision in cloud engineering & software development
        </motion.h1>

        <motion.p
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="tagline text-white lg:text-lg"
        >
          I am a cloud engineer and software developer with a passion for
          building scalable and reliable cloud solutions.
        </motion.p>

        <motion.Link
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          href="/"
          className="dark-button text-black bg-primary rounded-[40px] py-[11px] px-[24px] text-sm transition-all duration-300 hover:bg-white hover:text-black flex items-center gap-2 justify-center"
        >
          Work with me
          <FaArrowRightLong className="text-[10px]" />
        </motion.Link>

        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex items-center"
        >
          <MergedCircles />
          <span className="text-[12px] text-white">
            Satisfied clients are the
            <br /> cornerstone of my success
          </span>
        </motion.div>
      </motion.div>

      <div className="hero-image relative w-full flex justify-center mt-10 md:w-1/2">
        <motion.div
          initial={{ scale: 0.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ paddingBottom: "100%" }}
          className="relative w-full bg-primary rounded-full overflow-"
        >
          <img
            src="/assets/headshot.png"
            alt="hero"
            className="absolute w-[80%] object-cover object-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
