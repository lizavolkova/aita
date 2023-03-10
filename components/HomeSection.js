import React from "react";
import { PrismicRichText } from "@prismicio/react";

export const HomeSection = ({ children, title, bgColor, fullWidth }) => (
  <section
    className={`${bgColor} ${
      fullWidth ? "" : "container mx-auto pb-10 md:pb-10"
    } py-5 md:py-10`}
  >
    {title?.length > 0 && (
      <div className="mb-10 text-center">
        <PrismicRichText field={title} />
      </div>
    )}
    {children}
  </section>
);
