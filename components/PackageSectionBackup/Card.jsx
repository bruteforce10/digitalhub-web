import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { fontInter } from "@/lib/fontInter";
import Heading from "../Heading";

const Card = ({ title, description, price, list }) => {
  return (
    <div className="space-y-6 min-w-[250px] ">
      <div className="max-lg:space-y-4 space-y-8">
        <Heading
          tag="h1"
          className={`${fontInter.className} lg:max-h-[30px] tracking-normal  capitalize font-bold text-4xl`}
        >
          {title}
        </Heading>
      </div>
      <div className="space-y-2">
        <h4 className="text-transparent text-xl font-medium tracking-tight bg-clip-text bg-gradient-to-r from-[#E96E4D] to-pink-500">
          Feature
        </h4>
        <ul className="space-y-4 lg:min-h-[390px] min-h-[150px]">
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
        <p className="text-sm opacity-60 leading-relaxed">
          *untuk memberikan pengenalan dan konsep dasar untuk setiap modul
        </p>
      </div>

      <Button
        variant="label"
        size="label"
        className={`${fontInter.className}  max-sm:w-full tracking-normal bg-gradient-to-b from-custom_secondary to-custom_tersier text-white hover:text-white font-medium text-md h-10 px-12`}
      >
        Choose plan
      </Button>
    </div>
  );
};

export default Card;
