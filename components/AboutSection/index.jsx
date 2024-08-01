import React from "react";
import { Button } from "../ui/button";
import Heading from "../Heading";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="max-sm:text-center bg-gradient-to-r  from-[#E96E4D] pt-10   via-[#D4346A] to-[#644B86] max-sm:mt-16 mt-20   text-white">
      <div className="max-w-screen-xl container px-8 flex lg:flex-row flex-col-reverse  lg:items-center lg:justify-between ">
        <div>
          <Image
            src={"/about.webp"}
            alt="logo"
            className="lg:-ml-12 lg:mt-12 mt-8 max-w-full max-lg:w-[600px] h-auto max-lg:mx-auto"
            width={2050}
            height={1650}
          />
        </div>
        <div className="space-y-8 lg:pb-10">
          <div className="space-y-4">
            <Button
              variant="outline"
              className="bg-transparent rounded-full cursor-text"
            >
              TENTANG KAMI
            </Button>
            <Heading
              tag="h2"
              className="capitalize  leading-relaxed text-5xl max-sm:text-3xl"
            >
              Welcome <br /> Digitalive Hub
            </Heading>
          </div>
          <div className="space-y-4">
            <p className="leading-relaxed">
              Program O2O kami, mentransformasi bisnis untuk pengusaha, UMKM dan
              talenta muda di Indonesia dari offline ke online agar lebih
              atraktif dan inovatif menjadi usaha siap digital lewat
              live-streaming sebagai tren saat ini dan future communication dari
              sendi sosial dan ekonomi. <br />
              <br /> Digital LIVEhub UMKM hadir membangun meta ecosystem masa
              depan bersama para pengusaha, UMKM, dan talenta muda serta
              platform digital partnership untuk menciptakan komunitas sebagai
              support system yang solid dan siap menghadapi era digital.
            </p>
            <Link
              href={"/about"}
              className="block underline-offset-2 underline font-medium text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
