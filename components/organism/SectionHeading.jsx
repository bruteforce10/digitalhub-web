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
}) => {
  return (
    <div className="space-y-6 text-center">
      {title && (
        <ButtonShimmer className={"uppercase "} classNameSecond={"cursor-text"}>
          {title}
        </ButtonShimmer>
      )}
      <Heading
        className={cn(
          "capitalize text-5xl max-sm:text-4xl flex justify-center flex-wrap max-sm:gap-0 gap-3",
          classNameHeading
        )}
      >
        {headOne}
        <span className="text-transparent block h-fit md:h-14 bg-clip-text bg-gradient-to-r from-[#E96E4D] to-pink-500">
          {headTwo}
        </span>
      </Heading>
      <p className="text-lg opacity-75 max-w-xl mx-auto">{description}</p>
    </div>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.string,
  headOne: PropTypes.string,
  headTwo: PropTypes.string,
  description: PropTypes.string,
  classNameHeading: PropTypes.string,
};

SectionHeading.defaultProps = {
  title: "",
  headOne: "",
  headTwo: "",
  description: "",
  classNameHeading: "",
};

export default SectionHeading;
