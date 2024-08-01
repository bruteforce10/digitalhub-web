"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Heading from "../Heading";
import { dataNavbar } from "@/lib/data";
import { ButtonShimmer } from "../ButtonShimmer";
import SideMenu from "./SideMenu";
import { motion, spring } from "framer-motion";
import clsx from "clsx";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import FormInput from "../FormInput";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      layout
      transition={spring}
      className={clsx(
        "top-0 z-[99] sticky ",
        isScrolled &&
          "bg-white/80 backdrop-blur-sm o md:h-24 h-fit max-md:py-4 "
      )}
    >
      <div className=" max-w-screen-xl pt-4  container px-8 w-full flex gap-8 justify-between items-center">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={150}
          className={
            isScrolled && "scale-75 transition-all duration-500 origin-top"
          }
          height={200}
        />
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Heading tag="div">beranda</Heading>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {dataNavbar.map((item) => {
              return (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger>
                    <Heading tag="div">{item.title}</Heading>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px]  grid-cols-[.75fr_1.4fr] ">
                      <li className="row-span-2">
                        <Image
                          src={item.image}
                          alt="logo"
                          width={180}
                          height={200}
                        />
                      </li>
                      <div className=" flex flex-col h-[280px] justify-center p-4 items-center gap-4">
                        {item.list.map((component) => {
                          return (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </ListItem>
                          );
                        })}
                      </div>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            })}
            <NavigationMenuItem className="max-xl:hidden">
              <Dialog>
                <ButtonShimmer>
                  <DialogTrigger>Hubungi Kami</DialogTrigger>
                </ButtonShimmer>
                <FormInput />
              </Dialog>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <SideMenu />
      </div>
    </motion.nav>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            href={href}
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <Heading tag="div">{title}</Heading>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
