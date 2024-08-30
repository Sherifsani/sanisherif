import React from "react";
import SectionHeading from "./reusables/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projectSelection } from "../data";
const MyWorks = () => {
  return (
    <div className="bg-bodyBackground w-full ">
      <div className="w-full px-6 flex flex-col gap-5 mx-auto max-w-screen-xl">
        <div className="head ">
          <SectionHeading tagText="creations" titleText="My selected works" />
        </div>

        <div className="project-grid flex flex-col gap-[30px]">
          {projectSelection.map(({ id, img, title, year, type, bg }) => (
            <ProjectCard
              key={id}
              img={img}
              title={title}
              year={year}
              type={type}
              bg={bg}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
