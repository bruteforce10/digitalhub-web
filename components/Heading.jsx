import React from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import { fontGrifter } from "@/lib/fontGrifter";

const Heading = ({ tag: Tag, className, children }) => {
  return (
    <Tag
      className={cn(
        `${fontGrifter.className} tracking-[0.05em] leading-[1.1] uppercase`,
        className
      )}
    >
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
  tag: "h1",
  className: "",
};

export default Heading;
