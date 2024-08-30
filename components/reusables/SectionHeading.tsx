import React from "react";
import Tag from "./Tag";

const SectionHeading = ({
  tagText,
  titleText,
  tagStyle,
  titleStyle,
}: {
  tagText: string;
  titleText: string;
  tagStyle?: string;
  titleStyle?: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Tag text={tagText} styles={tagStyle} />
      <h2 className={`text-black text-3xl font-[500]`}>{titleText}</h2>
    </div>
  );
};

export default SectionHeading;
