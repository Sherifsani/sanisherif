"use client";

"use client";

import React, { useRef } from "react";
import SectionHeading from "./reusables/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projectSelection } from "../data";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";

const MyWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="bg-bodyBackground w-full ">
      <div className="w-full px-6 flex flex-col gap-8 mx-auto max-w-screen-xl pb-32">
        {/* Animated Heading */}
        <motion.div
          className="head"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <SectionHeading tagText="creations" titleText="My selected works" />
        </motion.div>

        {/* Animated Project Grid */}
        <motion.div
          className="project-grid flex flex-col gap-[60px] md:gap-[90px] lg:gap-[120px]"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {projectSelection.map(({ id, img, title, year, type, bg, desc }) => (
            <ProjectCard
              key={id}
              img={img}
              title={title}
              year={year}
              type={type}
              bg={bg}
              desc={desc}
            />
          ))}
        </motion.div>

        {/* Animated View All Projects Link */}
        <div className="more flex justify-end items-center mt-10">
          <motion.a
            initial={{ x: 20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
            href="/"
            className="dark-button w-[unset] text-black bg-primary rounded-[40px] py-[11px] px-[24px] text-sm transition-all duration-300 hover:bg-white hover:text-black flex items-center gap-2 justify-center"
          >
            View All Projects
            <FaArrowRightLong className="text-[10px]" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
