"use client";
import React from "react";
import SectionHeading from "../organism/SectionHeading";
import Link from "next/link";
import Card from "./Card";
import { dataFeature } from "@/lib/data";

const FeatureSection = () => {
  return (
    <div div className="max-sm:mt-16 mt-32 max-w-screen-xl container px-8">
      <div className="space-y-4">
        <SectionHeading
          title={"PELAYANAN KAMI"}
          headOne={"Siap Bantu Bisnismu"}
          headTwo={"Digital Live Hub"}
          classNameHeading="flex-col-reverse "
          description={
            "siap membantu kamu mengembangkan pemasaran produk dengan cakupan yang lebih luas."
          }
        />
        <Link
          href={"/services"}
          className="block text-center underline text-custom_primary"
        >
          Lihat Selengkapnya
        </Link>
      </div>
      <div className="mt-12 flex max-md:flex-wrap items-start justify-center gap-6">
        {dataFeature.map((item, index) => (
          <Card
            key={index}
            {...item}
            className={"md:even:flex-col-reverse  md:even:mb-4"}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
