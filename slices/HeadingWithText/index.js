import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeadingWithTextSlice} HeadingWithTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeadingWithTextSlice>} HeadingWithTextProps
 * @param { HeadingWithTextProps }
 */
const HeadingWithText = ({ slice }) => {
    return (
        <section className="mb-10">
           <PrismicRichText field={slice.primary.title} />
           <PrismicRichText field={slice.primary.description} />
        </section>
    )
};

export default HeadingWithText;
