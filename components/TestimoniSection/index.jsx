/* eslint-disable @next/next/no-img-element */
import React from "react";
import Marquee from "../magicui/marquee";
import { cn } from "@/lib/utils";
import SectionHeading from "../organism/SectionHeading";

const ReviewCard = ({ img, name, body }) => {
  return (
    <figure
      className={cn(
        "relative w-[400px] cursor-pointer overflow-hidden rounded-xl bg-[#F0F0F0] p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <img className="rounded-full" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-md font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 ">{body}</blockquote>
    </figure>
  );
};

const TestimoniSection = () => {
  const reviews = [
    {
      name: "Jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
  ];

  return (
    <div className="space-y-12">
      <div className="max-sm:mt-16 mt-20 max-w-screen-xl container px-8">
        <SectionHeading
          headOne={"Dipercaya Oleh Para "}
          headTwo={"Pebisnis Online di Indonesia"}
          description={
            "Bergabunglah dengan kami dan ambil langkah pertama untuk mengubah masa depan Usaha anda hari ini."
          }
        />
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
};

export default TestimoniSection;
