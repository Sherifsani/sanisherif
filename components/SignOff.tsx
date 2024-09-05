"use client";

import React, { useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";

const SignOff = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-yellow">
      <div className="bg-yellow p-6 flex flex-col items-start gap-5 py-portraitSection mx-auto max-w-screen-xl">
        {/* Animated paragraph */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Let's transform your ideas into exceptional digital experiences.
          Whether you're starting a new project{" "}
          <br className="hidden md:inline" /> or seeking enhancements for an
          existing one, I'm here to help.
        </motion.p>

        {/* Animated Contact Link */}
        <motion.a
          initial={{ x: 20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          href="/"
          className="dark-button w-[unset] text-black bg-white rounded-[40px] py-[11px] px-[24px] text-sm transition-all duration-300 hover:bg-primary hover:text-black flex items-center gap-2 justify-center"
        >
          sherifsani11@gmail.com
        </motion.a>

        {/* Animated Signature Image */}
        <motion.img src="/assets/signature.png" alt="signature" />
      </div>
    </section>
  );
};
export default SignOff;
