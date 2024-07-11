import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Card = ({ title, description, className, image }) => {
  return (
    <div
      className={cn(
        "max-w-[280px] flex flex-col gap-4 cursor-pointer group",
        className
      )}
    >
      <Image
        src={image}
        alt="feature"
        className="max-md:max-w-[280px] w-full rounded-xl "
        width={3500}
        height={1500}
      />
      <div
        layout
        className="bg-[#F0F0F0]/50 rounded-xl space-y-2 border-2 p-6 min-h-[200px] flex-col items-center border-white"
      >
        <h4 className="text-transparent text-2xl font-bold bg-clip-text bg-gradient-to-r from-[#E96E4D] to-pink-500">
          {title}
        </h4>
        <p
          layout
          className="text-custom_background/80 line-clamp-3 group-hover:line-clamp-none"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
