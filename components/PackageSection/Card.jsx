import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { fontInter } from "@/lib/fontInter";
import Heading from "../Heading";

const Card = ({ title, description, price, list }) => {
  return (
    <div className="space-y-6 min-w-[250px] ">
      <div className="max-lg:space-y-4 space-y-6">
        <Heading
          tag="h1"
          className={`${fontInter.className} lg:max-h-[30px]  capitalize font-bold tracking-tight text-xl`}
        >
          {title}
        </Heading>
        <div className="lg:min-h-[135px] ">
          {description ? (
            <div>
              <h4 className="font-bold text-7xl">{price}</h4>
              <p className="text-sm opacity-80 max-w-[200px] leading-relaxed">
                <span className="text-custom_primary">*</span> {description}
              </p>
            </div>
          ) : (
            <di className="flex items-end gap-2 lg:pt-6">
              <div className="w-[40px] leading-tight">Start From</div>
              <h4 className="font-bold text-7xl">{price}</h4>
            </di>
          )}
        </div>
      </div>
      <ul className="space-y-4 lg:h-[190px] min-h-[120px]">
        {list.map((list, index) => {
          return (
            <li key={index} className="flex gap-2 items-start font-medium">
              <Image
                src={"/checklist.svg"}
                alt="icon"
                className="mt-1"
                width={20}
                height={20}
              />
              {list}
            </li>
          );
        })}
      </ul>
      <Button
        variant="label"
        size="label"
        className={`${fontInter.className}  max-sm:w-full bg-gradient-to-b from-custom_secondary to-custom_tersier text-white hover:text-white font-medium text-md tracking-tight h-10 px-12`}
      >
        Choose plan
      </Button>
    </div>
  );
};

export default Card;
