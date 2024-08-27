import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import MergedCircles from "./MergedCircles";

const HeroSection = () => {
  return (
    <section className="p-5 pt-8">
      <div className="hero-texts flex flex-col gap-6 items-start">
        <p className="text-green text-[12px] font-[500] flex items-center gap-2">
          <span className="available-dot w-[6px] h-[6px] bg-green rounded-full"></span>
          Available for work
        </p>
        <h1 className="hero-title -mt-4 text-white text-4xl">
          Precision in cloud engineering & software development
        </h1>
        <p className="tagline text-white">
          I am a cloud engineer and software developer with a passion for
          building scalable and reliable cloud solutions.
        </p>
        <Link
          href="/"
          className="dark-button text-black bg-primary rounded-[40px] py-[11px] px-[24px] text-sm transition-all duration-300 hover:bg-white hover:text-black flex items-center gap-2 justify-center"
        >
          Work with me
          <FaArrowRightLong className="text-[10px]" />
        </Link>
        <div className="flex items-center">
          <MergedCircles />
          <span className="text-[12px] text-white">
            Satisfied clients are the
            <br /> cornerstone of my success
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
