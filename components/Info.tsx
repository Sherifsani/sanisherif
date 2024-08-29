import React from "react";
import Tag from "./reusables/Tag";

const Info = () => {
  return (
    <section>
      <div className="bg-bodyBackground py-portraitSection px-6">
        <div className="text-sect flex flex-col gap-5 md:flex-row">
          <div className="head md:w-1/2">
            <h2 className="text-2xl text-black font-[500] md:text-4xl">
              I bring a meticulous attention to detail and a passion for
              continuous learning.
            </h2>
          </div>

          <div className="info-text flex flex-col gap-5 md:w-1/2">
            <Tag text="Info" styles="-mb-4" />
            <p className="info text-black text-lg">
              I am a dedicated and passionate web developer and software
              engineer with 10 years of experience in designing and developing
              innovative web solutions. My journey in the world of technology
              began with a fascination for intuitive user interfaces.
            </p>
            <p className="text-black text-lg">
              My professional career has been shaped by a commitment to
              delivering high-quality projects that not only meet client
              requirements but also exceed expectations.
            </p>
            <Tag text="Services" styles="-mb-3" />
            <div className="services-grid flex flex-col gap-3 sm:flex-row sm:justify-between">
              <div className="flex flex-col gap-3 sm:w-1/2">
                <span>Web Development</span>
                <span>Cloud Computing</span>
              </div>
              <div className="flex flex-col gap-3 sm:w-1/2">
                <span>Solutions Architecting</span>
                <span>DevOps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
