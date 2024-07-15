import React from "react";
import SectionHeading from "../organism/SectionHeading";
import { ButtonShimmer } from "../ButtonShimmer";
import Image from "next/image";

const CallToActionSection = () => {
  return (
    <div
      div
      className="max-sm:mt-16 mt-32 max-lg:pt-24  flex max-lg:flex-col gap-24 lg:gap-8 justify-between bg-[#F0F0F0]"
    >
      <div className="flex flex-col justify-center max-sm:text-center  w-full items-center max-md:container">
        <div className="space-y-8">
          <SectionHeading
            headOne={"dengan Live Shopping!"}
            headTwo={"Penjualan Meningkat"}
            classNameHeading="flex-col-reverse "
            className="text-start max-sm:text-center "
            classNameDescription="mx-0"
            description={
              "kami siap membantu kamu mengembangkan pemasaran produk dengan cakupan yang lebih luas."
            }
          />
          <ButtonShimmer
            classNameSecond={"bg-transparent text-lg backdrop-blur-none"}
          >
            HUBUNGI KAMI
          </ButtonShimmer>
        </div>
      </div>
      <Image
        src={"/cover-cta.webp"}
        alt="logo"
        className="lg:w-1/2 w-full h-[500px] object-cover object-top"
        width={500}
        height={500}
      />
    </div>
  );
};

export default CallToActionSection;
