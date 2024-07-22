"use client";
import React, { useState } from "react";
import { ButtonShimmer } from "../ButtonShimmer";
import Heading from "../Heading";
import { motion } from "framer-motion";
import clsx from "clsx";
import { dataTeam } from "@/lib/data";
import Image from "next/image";
import { Badge } from "../ui/badge";
import SectionHeading from "../organism/SectionHeading";

const TeamSection = () => {
  const [isOn, setIsOn] = useState(1);

  return (
    <section
      id="myTim"
      className="max-sm:mt-20  mt-20 max-w-screen-xl container px-8"
    >
      <SectionHeading
        title={"tentang tim"}
        headOne={"Meet Our "}
        headTwo={"Team Members"}
        description={
          "Tim dukungan kami berkomitmen memberikan layanan terbaik dengan tim yang terlatih dan berpengalaman."
        }
      />

      <div className="flex gap-4 justify-center max-sm:flex-col mt-12">
        {dataTeam.map((item, index) => (
          <motion.div
            onClick={() => setIsOn(index)}
            key={index}
            layout
            className={clsx(
              "h-[350px] cursor-pointer relative ",
              index === isOn
                ? "w-[240px] max-sm:w-full max-sm:h-[420px]  h-[400px] "
                : "w-[100px] max-sm:w-full max-sm:h-[180px] h-[400px] "
            )}
          >
            <div
              className={clsx(
                "flex flex-col absolute pb-6 bottom-0 rounded-xl gap-1 w-full text-white bg-gradient-to-b from-black/0  to-black  p-4 ",
                index !== isOn && "hidden"
              )}
            >
              <Badge className={"uppercase text-xs w-fit "} variant="team">
                {item.position}
              </Badge>
              <Heading tag="h3" className="capitalize text-2xl ">
                {item.name}
              </Heading>
              <p className="text-sm ">{item.job}</p>
            </div>
            <Image
              src={item.image}
              alt="logo"
              width={400}
              height={400}
              quality={100}
              className="object-cover object-center max-sm:object-top w-full h-full rounded-xl"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
