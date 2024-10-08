"use client";

import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const ProjectCard = ({
  img,
  title,
  year,
  type,
  bg,
  desc,
}: {
  img: string;
  title: string;
  year: number;
  type: string;
  bg: string;
  desc: string;
}) => {
  return (
    <div className="project-card  cursor-pointer shadow-lg flex flex-col md:flex-row md:justify-between w-full md:gap-6 md:shadow-none">
      <div
        className={`${bg} img-part w-full pt-5 pl-5 pr-5 md:w-1/2 overflow-y-hidden`}
      >
        <img src={img} alt="project 1" className="object-cover w-full h-full" />
      </div>
      <div className="bottom-part flex flex-col items-start gap-6 p-6 bg-white border-t border-gray-400 md:w-1/2 md:border-none">
        <h3 className="text-2xl">{title}</h3>
        <p>{desc}</p>
        <div className="flex gap-3">
          <span className="project-tag">{year}</span>
          <span className="project-tag">{type}</span>
        </div>
        <a href="/" className="flex gap-[2px] items-center mt-auto group">
          View Project <IoIosArrowRoundForward className="group-hover:translate-x-2 transition"/>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

// "use client";

// import React from "react";
// import { IoIosArrowRoundForward } from "react-icons/io";

// const ProjectCard = ({
//   img,
//   title,
//   year,
//   type,
//   bg,
//   desc,
// }: {
//   img: string;
//   title: string;
//   year: number;
//   type: string;
//   bg: string;
//   desc: string;
// }) => {
//   return (
//     <div className="project-card cursor-pointer shadow-lg flex flex-col md:flex-row md:justify-between w-full md:gap-6 md:shadow-none">
//       <div
//         className={`${bg} img-part w-full pt-5 pl-5 pr-5  md:w-1/2 md:h-full overflow-y-hidden `}
//       >
//         <img
//           src={img}
//           alt="project image"
//           className="object-cover w-full h-full"
//         />
//       </div>
//       <div className="bottom-part flex flex-col h-1/2 items-start gap-6 p-6 bg-white border-t border-gray-400 md:w-1/2 md:border-none md:h-full">
//         <h3 className="text-2xl">{title}</h3>
//         {/* <p className="">{desc}</p> */}
//         <div className="flex gap-3">
//           <span className="project-tag">{year}</span>
//           <span className="project-tag">{type}</span>
//         </div>
//         <a href="/" className="flex gap-2 items-center mt-auto">
//           View Project
//           <IoIosArrowRoundForward />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
