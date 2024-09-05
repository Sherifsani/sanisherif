import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-body px-6">
      <div className="pt-portraitSection mx-auto max-w-screen-xl">
        <h1 className="uppercase text-white text-5xl flex flex-col mb-10">
          <span>let's work </span>
          <span>together</span>
        </h1>
        <div className="cta flex flex-col gap-4 mb-4">
          <p className=" text-lg text-white">
            Email <IoMdArrowForward color="white" />
          </p>
          <p className="text-lg text-white">
            LinkedIn
            <IoMdArrowForward color="white" />
          </p>
          <p className="text-lg text-white">
            Github
            <IoMdArrowForward color="white" />
          </p>
          <p className="text-lg text-white">
            Facebook
            <IoMdArrowForward color="white" />
          </p>
        </div>
        <div className="copyrights border-t border-[rgba(255,255,255,0.1)] p-2">
          <p className="text-white text-center">
            &copy; 2024 Sherif Sani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
