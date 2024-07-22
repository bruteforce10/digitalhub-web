/* eslint-disable @next/next/no-img-element */
import { fontGrifter } from "@/lib/fontGrifter";
import Image from "next/image";
import React from "react";
import { ButtonShimmer } from "../ButtonShimmer";
import { FaInstagram } from "react-icons/fa6";
import { PiTiktokLogo } from "react-icons/pi";
import Link from "next/link";
import Heading from "../Heading";

const Header = () => {
  return (
    <section className="flex   gap-6 items-center  md:flex-row flex-col-reverse justify-center mt-12  md:mt-16 max-w-screen-xl container px-8">
      <Image
        src={"/circle-blur.png"}
        className="absolute  -left-[700px] -z-[10] -top-[500px] "
        alt="logo"
        width={6400}
        height={6400}
      />
      <div className="space-y-7 mt-12 ">
        <Heading
          tag="h1"
          className="text-5xl max-sm:text-4xl  md:text-start text-center capitalize  lg:max-w-xl"
        >
          Makin Cuan Dengan Live Streaming
        </Heading>
        <p className="md:text-lg text-sm text-center md:text-start max-w-md">
          Saatnya bikin produkmu dikenal lebih banyak orang dan tingkatkan
          keuntungan bisnismu!
        </p>
        <div className="flex items-center gap-4 max-md:justify-center">
          <ButtonShimmer
            link={"#paket"}
            classNameSecond={"bg-transparent backdrop-blur-none"}
          >
            GET STARTED
          </ButtonShimmer>
          <Link href="#" className="block">
            <FaInstagram className="text-4xl opacity-75" />
          </Link>
          <Link href="#" className="block">
            <PiTiktokLogo className="text-4xl opacity-75" />
          </Link>
        </div>
      </div>

      <Image src="/header.webp" alt="logo" width={480} height={480} />
    </section>
  );
};

export default Header;
