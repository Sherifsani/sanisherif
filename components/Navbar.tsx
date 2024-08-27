"use client";

import { RiMenu3Fill } from "react-icons/ri";
import react, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Logo from "./Logo";
import NavItems from "./NavItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full z-[20] ">
      {/* Navbar */}
      <div className="flex items-center justify-between px-5 py-3">
        <Logo />

        <div
          className="menu ml-auto cursor-pointer lg:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <IoClose
              color="white"
              className="w-[30px] h-[30px] transform transition-transform duration-300 rotate-180"
            />
          ) : (
            <RiMenu3Fill
              color="white"
              className="w-[30px] h-[30px] transform transition-transform duration-300 rotate-0"
            />
          )}
        </div>
        <NavItems style="hidden  flex-row items-center gap-[40px]  lg:flex" />
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute bottom-0 left-0 w-full  text-white transition-transform duration-500 z-10 ${
          isOpen ? "transform translate-y-full" : "transform -translate-y-full"
        }`}
      >
        <NavItems style="flex-col p-6 gap-3 bg-body" />
      </div>
    </div>
  );
};

export default Navbar;

// "use client";

// import { RiMenu3Fill } from "react-icons/ri";
// import Image from "next/image";
// import { useState } from "react";
// import { IoClose } from "react-icons/io5";
// import Logo from "./Logo";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="flex w-full items-center justify-between p-5 border-b border-white relative">
//       <Logo />

//       <div className="menu cursor-pointer" onClick={toggleMenu}>
//         {isOpen ? (
//           <IoClose
//             color="white"
//             className="w-[30px] h-[30px] transform transition-transform duration-300 rotate-180"
//           />
//         ) : (
//           <RiMenu3Fill
//             color="white"
//             className="w-[30px] h-[30px] transform transition-transform duration-300 rotate-0"
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
