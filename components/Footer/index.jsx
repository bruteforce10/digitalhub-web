import Image from "next/image";
import Link from "next/link";
import React from "react";
import Heading from "../Heading";
import { fontInter } from "@/lib/fontInter";

const dataFooter = {
  socialMedia: [
    {
      image: "/social-media/instagram.svg",
      href: "https://www.instagram.com/digitalhub.id/",
    },
    {
      image: "/social-media/tiktok.svg",
      href: "https://www.tiktok.com/digitalhub.id/",
    },
    {
      image: "/social-media/facebook.svg",
      href: "https://www.facebook.com/digitalhub.id/",
    },
    {
      image: "/social-media/linkedln.svg",
      href: "https://www.facebook.com/digitalhub.id/",
    },
  ],
  services: [
    {
      title: "Membership",
      href: "/docs",
    },
    {
      title: "Program Kami",
      href: "/docs",
    },
  ],
  contactUs: ["info@digitallivehubumkm.co.id", "+62 898-0961-999"],
  alamat:
    "Mega Bekasi Hypermall Lt.1, Jl. Ahmad Yani No.1 RT.004/RW.001, Marga Jaya, Kec. Bekasi Selatan, Kota Bekasi, Jawa Barat 17141",
};

const Footer = () => {
  return (
    <>
      <footer className="container max-lg:flex-wrap max-lg:justify-center max-lg:gap-12 mx-auto px-8 py-8 mt-20 max-sm:mt-16 gap-8 max-w-screen-xl flex justify-between">
        <div className="space-y-8 max-lg:w-full ">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={830}
            height={830}
            className="max-lg:mx-auto max-lg:max-w-[300px] max-w-[250px]"
          />
          <ul className="flex gap-3 max-lg:justify-center">
            {dataFooter.socialMedia.map((item) => (
              <li key={item.href}>
                <Link href={item.href} target="_blank">
                  <Image
                    src={item.image}
                    alt="logo"
                    width={40}
                    height={40}
                    className="cursor-pointer "
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-lg:w-full">
          <Heading
            className={`${fontInter.className} capitalize tracking-tight font-bold text-2xl bg-clip-text bg-gradient-to-r from-[#E96E4D] to-pink-500 text-transparent`}
            tag="h3"
          >
            Services
          </Heading>
          <ul className="mt-2 space-y-1">
            {dataFooter.services.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="underline font-medium text-lg"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-lg:w-full">
          <Heading
            className={`${fontInter.className} capitalize tracking-tight font-bold text-2xl bg-clip-text bg-gradient-to-r from-[#E96E4D] to-pink-500 text-transparent`}
            tag="h3"
          >
            Contact Us
          </Heading>
          <ul className="mt-2 space-y-1">
            {dataFooter.contactUs.map((item) => (
              <li key={item.href}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="lg:max-w-[300px] w-full">
          <Heading
            className={`${fontInter.className} capitalize tracking-tight font-bold text-2xl bg-clip-text bg-gradient-to-r from-[#E96E4D] to-pink-500 text-transparent`}
            tag="h3"
          >
            We Can&apos;t Wait to Hear From You!
          </Heading>
          <p className="mt-2 leading-relaxed">{dataFooter.alamat}</p>
        </div>
      </footer>
      <p className="text-center mt-8 opacity-50">© 2024 Digital LIVEhub UMKM</p>
    </>
  );
};

export default Footer;
