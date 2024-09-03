"use client";

import React from "react";
import SectionHeading from "./reusables/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projectSelection } from "../data";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const MyWorks = () => {
  return (
    <div className="bg-bodyBackground w-full ">
      <div className="w-full px-6 flex flex-col gap-8 mx-auto max-w-screen-xl pb-32">
        <div className="head ">
          <SectionHeading tagText="creations" titleText="My selected works" />
        </div>

        <div className="project-grid flex flex-col gap-[60px] md:gap-[90px] lg:gap-[120px]">
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
        </div>
        <div className="more flex justify-end items-center mt-10">
          <motion.Link
            variants={{
              hidden: { x: 20, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            href="/"
            className="dark-button w-[unset] text-black bg-primary rounded-[40px] py-[11px] px-[24px] text-sm transition-all duration-300 hover:bg-white hover:text-black flex items-center gap-2 justify-center"
          >
            View All Projects
            <FaArrowRightLong className="text-[10px]" />
          </motion.Link>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
