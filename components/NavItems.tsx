import React from "react";
import Link from "next/link";

const NavItems = ({ style }: { style: string }) => {
  return (
    <div>
      <div className={`flex ${style} items-start `}>
        <Link
          className="cursor-pointer text-white text-sm  hover:text-primary rounded-lg"
          href="/"
        >
          My Works
        </Link>
        <Link
          className="cursor-pointer text-white text-sm  hover:text-primary rounded-lg"
          href="/"
        >
          About Me
        </Link>
        <Link
          className="cursor-pointer text-white text-sm  hover:text-primary rounded-lg"
          href="/"
        >
          Experience
        </Link>
        <Link
          className="cursor-pointer text-white text-sm  hover:text-primary rounded-lg"
          href="/"
        >
          Blogs
        </Link>
        <Link
          href="/"
          className="dark-button border border-white text-white rounded-[40px] py-[11px] px-[24px] text-sm transition-all duration-300 hover:bg-white hover:text-black grid place-items-center"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default NavItems;
