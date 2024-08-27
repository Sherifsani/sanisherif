import React from "react";
import Image from "next/image";

const MergedCircles = () => {
  return (
    <div className="flex items-center">
      <div className="w-[32px] h-[32px] rounded-full overflow-clip">
        <Image
          src="/assets/client-1.jpeg"
          width={32}
          height={32}
          className="rounded-full h-[32px] w-[32px] object-cover"
          alt="client"
        />
      </div>
      <div className="w-[32px] h-[32px] rounded-full overflow-clip -translate-x-2">
        <Image
          src="/assets/client-2.jpeg"
          width={32}
          className="rounded-full h-[32px] w-[32px] object-cover"
          height={32}
          alt="client"
        />
      </div>
      <div className="w-[32px] h-[32px] rounded-full overflow-clip -translate-x-4">
        <Image
          src="/assets/client-3.jpeg"
          width={32}
          className="rounded-full h-[32px] w-[32px] object-cover"
          height={32}
          alt="client"
        />
      </div>
    </div>
  );
};

export default MergedCircles;
