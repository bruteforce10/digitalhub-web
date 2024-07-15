import React from "react";
import { ButtonShimmer } from "../ButtonShimmer";
import PropTypes from "prop-types";
import Heading from "../Heading";
import { cn } from "@/lib/utils";

const SectionHeading = ({
  title,
  headOne,
  headTwo,
  description,
  classNameHeading,
  className,
  classNameDescription,
}) => {
  return (
    <div className={cn("space-y-2 text-center", className)}>
      {title && (
        <ButtonShimmer
          className={"uppercase "}
          classNameSecond={"cursor-text h-8"}
        >
          {title}
        </ButtonShimmer>
      )}
      <Heading
        className={cn(
          "capitalize text-5xl max-sm:text-2xl flex justify-center flex-wrap max-sm:gap-0 gap-3",
          classNameHeading
        )}
      >
        {headOne}
        <span className="text-transparent block h-fit md:h-14 bg-clip-text bg-gradient-to-r from-[#E96E4D] to-pink-500">
          {headTwo}
        </span>
      </Heading>
      <p
        className={cn(
          "text-lg opacity-75 max-w-xl mx-auto",
          classNameDescription
        )}
      >
        {description}
      </p>
    </div>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.string,
  headOne: PropTypes.string,
  headTwo: PropTypes.string,
  description: PropTypes.string,
  classNameHeading: PropTypes.string,
  className: PropTypes.string,
  classNameDescription: PropTypes.string,
};

SectionHeading.defaultProps = {
  title: "",
  headOne: "",
  headTwo: "",
  description: "",
  classNameHeading: "",
  className: "",
  classNameDescription: "",
};

export default SectionHeading;
