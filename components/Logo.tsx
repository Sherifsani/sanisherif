import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo cursor-pointer flex items-center">
      <Image src="/assets/logo-dark.png" alt="logo" width={40} height={40} />
      <p className="uppercase text-white text-xl cursor-pointer">ANI</p>
    </div>
  );
};

export default Logo;
