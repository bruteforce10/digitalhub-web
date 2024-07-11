import React from "react";
import Ripple from "../magicui/ripple";
import Heading from "../Heading";
import SectionHeading from "../organism/SectionHeading";
import Link from "next/link";
import Image from "next/image";

const PackageSection = () => {
  return (
    <div className="relative flex h-[800px] mt-32 w-full flex-col items-center justify-center overflow-hidden ">
      <div className="space-y-4">
        <SectionHeading
          headOne="Membership & Paket"
          description="Pilih Paket Live streamer Sesuai Kebutuhan Kamu"
        />
        <Ripple />
        <Link
          href={"/services"}
          className="block text-center underline text-custom_primary"
        >
          Lihat Selengkapnya
        </Link>
      </div>
      <div className="mt-12">
        <div className="flex gap-6">
          <div className="space-y-2">
            <h4 className="font-bold tracking-tighter text-2xl">
              Program <br /> Full Paket Cuan 🔥
            </h4>
            <div className="flex items-end justify-start">
              <div className="w-[50px] leading-tight">Start From</div>
              <h5 className="font-bold text-6xl tracking-tighter">7,5 Jt</h5>
            </div>
          </div>
          <ul>
            <li>
              <Image
                src={"/icon-check.svg"}
                alt="icon"
                width={50}
                height={50}
              />
              <p>Live Streaming 20 Sesi campuran dedicated & sharing</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PackageSection;
