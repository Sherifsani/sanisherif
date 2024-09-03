"use client";

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const SignOff = () => {
  return (
    <section className="bg-yellow">
      <div className="bg-yellow p-6 flex flex-col items-start gap-5 py-portraitSection mx-auto max-w-screen-xl">
        <p>
          Let's transform your ideas into exceptional digital experiences.
          Whether you're starting a new project{" "}
          <br className="hidden md:inline" /> or seeking enhancements for an
          existing one, I'm here to help.
        </p>

        <motion.Link
          variants={{
            hidden: { x: 20, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          href="/"
          className="dark-button w-[unset] text-black bg-white rounded-[40px] py-[11px] px-[24px] text-sm transition-all duration-300 hover:bg-primary hover:text-black flex items-center gap-2 justify-center"
        >
          sherifsani11@gmail.com
        </motion.Link>

        <img
          src="/assets/signature.png"
          alt="signature"
          className="mr-auto w-[200px] h-[auto]"
        />
      </div>
    </section>
  );
};

export default SignOff;
