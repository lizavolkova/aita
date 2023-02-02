import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { HomeSection } from "../../components/HomeSection";

/**
 * @typedef {import("@prismicio/client").Content.InstagramFeedSlice} InstagramFeedSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InstagramFeedSlice>} InstagramFeedProps
 * @param { InstagramFeedProps }
 */
const InstagramFeed = ({ slice }) => (
  <HomeSection title={slice.primary.title}>
    <PrismicNextImage
      field={slice.primary.placeholder}
      className="block h-auto w-full rounded-full "
    />
  </HomeSection>
);

export default InstagramFeed;
