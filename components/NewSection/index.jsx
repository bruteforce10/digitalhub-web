import React from "react";
import Heading from "../Heading";
import Image from "next/image";

const NewSection = () => {
  return (
    <div className="bg-gradient-to-r  from-[#E96E4D] py-16 max-sm:mt-16 mt-20  via-[#D4346A] to-[#644B86]">
      <div className="max-w-screen-xl container px-8 space-y-8">
        <div className="flex items-center justify-center">
          <Image
            src={"/lightning.png"}
            alt="logo"
            className="max-sm:w-8"
            width={60}
            height={60}
          />
          <Heading
            tag="h2"
            className="text-white max-sm:text-center capitalize text-4xl max-sm:text-3xl"
          >
            Telat diliput Oleh Media
          </Heading>
          <Image
            src={"/lightning.png"}
            alt="logo"
            className="max-sm:w-8"
            width={60}
            height={60}
          />
        </div>
        <div className="flex justify-center max-md:flex-wrap gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Image
              key={i}
              src={`/media/${i + 1}.webp`}
              alt="logo"
              width={200}
              height={200}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewSection;
