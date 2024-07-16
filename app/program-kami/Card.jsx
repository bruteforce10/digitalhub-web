import SectionHeading from "@/components/organism/SectionHeading";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Card = ({ title, heading, desc, images, className }) => {
  const headingOne = heading.split(" ", 2)[0];
  const headingTwo = heading.slice(headingOne.length + 1);

  return (
    <div
      className={cn(
        "flex md:gap-16 gap-8 md:even:flex-row-reverse max-md:flex-col",
        className
      )}
    >
      <div className="space-y-4 flex flex-col items-start">
        <SectionHeading
          title={title}
          headOne={headingOne}
          headTwo={headingTwo}
          className="flex-col items-center md:items-start flex max-md:mx-auto"
          classNameHeading="md:justify-start md:text-start max-sm:text-2xl"
        />
        <p
          className="leading-relaxed"
          dangerouslySetInnerHTML={{ __html: desc }}
        ></p>
      </div>
      <Image
        src={images}
        alt="mentoring-101"
        className="md:w-96 md:h-96 object-cover rounded-xl"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Card;
