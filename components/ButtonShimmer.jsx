import { fontGrifter } from "@/lib/fontGrifter";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const ButtonShimmer = ({
  children,
  className,
  classNameSecond,
  link,
}) => {
  return (
    <Link
      href={link}
      className={cn(
        "relative inline-flex overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-gradient-to-r from-[#ED1C77] to-[#5D4D87]" />
      <span
        className={cn(
          `inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-4 py-2 text-md font-medium text-white backdrop-blur-3xl bg-[#2B032A] ${fontGrifter.className} tracking-[0.08em]`,
          classNameSecond
        )}
      >
        {children}
      </span>
    </Link>
  );
};

ButtonShimmer.defaultProps = {
  link: "#",
};
