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
import { ButtonShimmer } from "../buttonShimmer";
import SideMenu from "./SideMenu";

export default function Navbar() {
  return (
    <div className="w-full flex gap-8 justify-between items-center max-w-screen-xl  container px-8">
      <Image src={"/logo.svg"} alt="logo" width={150} height={200} />
      <NavigationMenu className="max-lg:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
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
                      {item.list.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
          <NavigationMenuItem className="max-xl:hidden">
            <ButtonShimmer>Hubungi Kami</ButtonShimmer>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <SideMenu />
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
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
