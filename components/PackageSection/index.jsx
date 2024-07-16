"use client";
import React, { useEffect } from "react";
import Ripple from "../magicui/ripple";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SectionHeading from "../organism/SectionHeading";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Card from "./Card";
import { fontInter } from "@/lib/fontInter";

const dataPackagePremium = {
  title: "Program Full Paket Cuan 🔥",
  price: "9,9 Jt",
  list: [
    "Live Streaming 20 Sesi campuran dedicated & sharing",
    "Marketplace Management",
    "Social Media, 30 konten",
  ],
  listInfo:
    "upload item, nama produk, deskripsi, setting ads - budget ads di luar paket hanya 1 marketplace",
  paket: [
    {
      title: "Program Live Streaming",
      price: "5Jt",
      description:
        "cocok untuk toko yang mau flash barang / masuk ke dunia live streaming",
      list: [
        "Live Streaming 20 Sesi",
        "Jaminan 100 Viewers",
        "Direct brand member / Sharing account (t&c)",
      ],
    },
    {
      title: "Program Social Media Management",
      price: "6Jt",
      list: [
        "Arrange layout dari social media",
        "boost content",
        "Hal yang terkait di Tiktok & Instagram",
      ],
    },
    {
      title: "Program Marketplace manajemen",
      price: "7,5Jt",
      list: [
        "set up marketplace baru",
        "meningkatan marketplace termasuk set iklan",
        "Customer Service (sesuai kebutuhan - Tokopedia, TikTok Shop, Shopee)",
      ],
    },
  ],
};

const titleParts = dataPackagePremium.title.split(" ", 2);
const part1 = titleParts[0];
const part2 = dataPackagePremium.title.substring(part1.length + 1);

const PackageSection = () => {
  const { price, list, listInfo, paket } = dataPackagePremium;
  const [screen, setScreen] = React.useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setScreen(true);
    }
  }, []);

  return (
    <div className="relative flex max-lg:pt-24 pt-24 sm:mt-24 w-full overflow-hidden  flex-col px-4 container sm:items-center justify-center">
      {!screen && <Ripple />}
      <div className="space-y-4">
        <SectionHeading
          headOne="Membership & Paket"
          description="Pilih Paket Live streamer Sesuai Kebutuhan Kamu"
        />
        <Link
          href={"/services"}
          className="block text-center underline text-custom_primary"
        >
          Lihat Selengkapnya
        </Link>
      </div>
      <div className="mt-12  bg-white/50 backdrop-blur-sm lg:w-[900px] max-sm:w-full p-[1px]  rounded-3xl border-white border-2 ">
        <div className="flex lg:flex-row flex-col   sm:w-sm justify-between gap-12 lg:gap-6  bg-[#D5005D]/80 sm:drop-shadow-custom_xl rounded-3xl backdrop-blur-sm px-8 py-6 min-h-[210px]">
          <div className="flex flex-col items-center gap-4 text-white ">
            <Button
              variant="label"
              className={`${fontInter.className} font-medium text-xs h-8 mx-auto cursor-text  lg:hidden`}
            >
              MOST POPULAR
            </Button>
            <h4 className="font-semibold text-2xl max-lg:text-center">
              {part1} <br /> {part2}
            </h4>
            <div className="flex items-end justify-center lg:justify-start ">
              <div className="w-[50px] leading-tight">Start From</div>
              <h5 className="font-bold text-6xl tracking-tighter">{price}</h5>
            </div>
          </div>

          <ul className="z-10 lg:max-w-[250px] max-lg:mx-auto my-auto  space-y-3">
            {list.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex first:items-start  items-center gap-4"
                >
                  <Image
                    src={"/check-circle.svg"}
                    alt="icon"
                    width={20}
                    height={20}
                    className="first:mt-1"
                  />
                  {item === "Marketplace Management" ? (
                    <div className="text-sm text-white ">
                      <span>{item}</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <IoIosInformationCircleOutline className="ml-1" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{listInfo}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ) : (
                    <p className="text-sm text-white">{item}</p>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col justify-between items-center lg:items-end">
            <Button
              variant="label"
              className={`${fontInter.className} font-medium text-xs h-8 max-lg:hidden`}
            >
              MOST POPULAR
            </Button>
            <div className="sm:text-end space-y-2  ">
              <p className="text-xs text-white/80 sm:max-w-[200px] leading-relaxed text-center lg:text-end">
                * cocok untuk toko yang mau membangun &quot;branding&quot;
                tokonya
              </p>
              <Button
                variant="label"
                size="label"
                className={`${fontInter.className} bg-[#ececec]  text-[#5D4D87]  max-sm:w-full hover:text-white  font-semibold text-md tracking-tight h-10 px-12`}
              >
                Choose plan
              </Button>
            </div>
          </div>
        </div>
        <div className="pt-12 px-8 text-[#5B5464] flex justify-center lg:flex-row flex-col gap-12 lg:gap-6">
          {paket.map((item, index) => {
            return <Card key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PackageSection;
