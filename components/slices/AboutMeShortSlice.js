import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { HomeSection } from "../HomeSection";

/**
 * @typedef {import("@prismicio/client").Content.AboutMeShortSlice} AboutMeShortSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutMeShortSlice>} AboutMeShortProps
 * @param { AboutMeShortProps }
 */
const AboutMeShortSlice = ({ slice }) => (
  <HomeSection title={slice.primary.title}>
    <div
      className="flex w-full justify-center px-5 pt-5"
    >
      <div className="grid w-full grid-cols-3 gap-4 md:w-1/2">
        <div className="flex justify-end ">
          <PrismicNextImage
            field={slice.primary.photo}
            className="block h-[90px] w-[90px] rounded-full object-cover self-center md:self-start lg:h-auto lg:w-56 lg:object-fill"
          />
        </div>
        <div className="col-span-2 flex flex-col justify-center">
          <PrismicRichText field={slice.primary.heading} />
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
    </div>
  </HomeSection>
);

export default AboutMeShortSlice;
