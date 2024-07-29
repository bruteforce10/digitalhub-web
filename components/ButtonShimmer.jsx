import { fontGrifter } from "@/lib/fontGrifter";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const ButtonShimmer = ({ children, className, link }) => {
  return (
    <Link
      href={link}
      className={cn(
        `${fontGrifter.className} tracking-[0.08em] bg-[#2B032A] text-white px-5 border-2 border-custom_primary py-2 rounded-full`,
        className
      )}
    >
      {children}
    </Link>
  );
};
ButtonShimmer.defaultProps = {
  link: "#",
};
