import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeadingWithTextSlice} HeadingWithTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeadingWithTextSlice>} HeadingWithTextProps
 * @param { HeadingWithTextProps }
 */
const HeadingWithTextSlice = ({ slice }) => {
    return (
        <section className="mb-10">
            <div className="mt-7 mb-2">
                <PrismicRichText field={slice.primary.title} />
            </div>

            <PrismicRichText field={slice.primary.description} />
        </section>
    );
};

export default HeadingWithTextSlice;
