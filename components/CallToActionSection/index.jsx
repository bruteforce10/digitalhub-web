import React from "react";
import SectionHeading from "../organism/SectionHeading";
import Image from "next/image";
import { ButtonShimmerOps } from "../ButtonShimmerOps";

const CallToActionSection = () => {
  return (
    <div
      div
      className="max-sm:mt-16  max-lg:pt-12  flex max-lg:flex-col gap-24 lg:gap-8 justify-between bg-white"
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
          <ButtonShimmerOps
            classNameSecond={"bg-transparent text-lg backdrop-blur-none"}
          >
            HUBUNGI KAMI
          </ButtonShimmerOps>
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
