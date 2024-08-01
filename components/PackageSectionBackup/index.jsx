"use client";
import React, { useEffect } from "react";

import SectionHeading from "../organism/SectionHeading";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import Card from "./Card";
import { fontInter } from "@/lib/fontInter";
import { dataPackagePremium } from "@/lib/data";
import Heading from "../Heading";

const titleParts = dataPackagePremium.title.split(" ", 2);
const part1 = titleParts[0];

const PackageSectionBackup = () => {
  const { paket } = dataPackagePremium;

  return (
    <div className="bg-gray-100 mt-24 pb-12">
      <div className="pt-14 sm:mt-10 flex w-full overflow-hidden flex-col px-4 container items-center justify-center">
        <div className="space-y-4 max-md:px-4">
          <SectionHeading
            headOne="Workshops"
            description="Pilih Paket Live streamer Sesuai Kebutuhan Kamu"
          />
          <Link
            href={"/program-kami"}
            className="block z-[10] relative text-center underline text-custom_primary"
          >
            Lihat Selengkapnya
          </Link>
        </div>
        <div
          id="paket"
          className="mt-12  bg-white/50 backdrop-blur-sm lg:w-[900px] pb-12 max-md:px-4 max-sm:w-full p-[1px]  rounded-3xl border-white border-2 "
        >
          <div className=" bg-[#D5005D]/80 text-center sm:drop-shadow-custom_xl rounded-3xl backdrop-blur-sm  py-2">
            <Heading
              tag="h1"
              className={`${fontInter.className}  text-white capitalize font-bold tracking-tight text-3xl`}
            >
              Mentoring 101
            </Heading>
          </div>
          <div className="pt-8 px-8 text-[#5B5464] flex justify-center lg:flex-row flex-col gap-12 lg:gap-12">
            {paket.map((item, index) => {
              return <Card key={index} {...item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSectionBackup;
