import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HiMenuAlt2 } from "react-icons/hi";
import Link from "next/link";
import { dataNavbar } from "@/lib/data";
import { ButtonShimmer } from "../ButtonShimmer";

const SideMenu = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <HiMenuAlt2 className="text-3xl " />
        </SheetTrigger>
        <SheetContent className="pt-20 space-y-4 ">
          <SheetHeader>
            <SheetTitle>
              <Link href={"/"}>Beranda</Link>
            </SheetTitle>
          </SheetHeader>
          <SheetHeader>
            <Accordion type="single" className="space-y-4" collapsible>
              {dataNavbar.map((item, index) => {
                return (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="capitalize">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 divide-y p-4">
                      {item.list.map((component, index) => {
                        return (
                          <div
                            key={index}
                            className="first:pt-0 pt-4 space-y-1 text-start last:pb-0"
                          >
                            <Link
                              href={component.href}
                              className={`block text-lg text-foreground hover:underline font-semibold`}
                            >
                              {component.title}
                            </Link>
                            <p className="text-sm leading-relaxed">
                              {component.description}
                            </p>
                          </div>
                        );
                      })}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </SheetHeader>
          <div>
            <ButtonShimmer className={"block w-full mt-8"}>
              Hubungi Kami
            </ButtonShimmer>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideMenu;
