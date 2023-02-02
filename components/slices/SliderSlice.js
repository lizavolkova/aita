import React from "react";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { SliderComponent } from "../../components/Slider";

const parentClass = (text) => {
    switch (text) {
        default:
            return "flex-col md:flex-row";
        case "Left":
            return "flex-col-reverse md:flex-row-reverse";
        case "Top":
            return "flex-col-reverse";
        case "Bottom":
            return "flex-col";
    }
};

/**
 * @typedef {import("@prismicio/client").Content.SliderSlice} SliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SliderSlice>} SliderProps
 * @param { SliderProps }
 */
const SliderSlice = ({ slice }) => {
    const { text_placement } = slice.primary;

    return (
        <section>
            {slice.variation === "withDescription" ? (
                <div className={`flex ${parentClass(text_placement)}`}>
                    <div
                        className={`${
                            text_placement === "Right" || text_placement === "Left"
                                ? "w-full md:w-1/2"
                                : "w-full"
                        }`}
                    >
                        <SliderComponent {...slice} speed={400} />
                    </div>
                    <div
                        className={`${
                            text_placement === "Right" || text_placement === "Left"
                                ? "md-py-0 w-full py-5 md:w-1/2 md:px-5"
                                : "w-full py-5"
                        }`}
                    >
                        <PrismicRichText field={slice.primary.title} />
                        <PrismicRichText field={slice.primary.description} />
                    </div>
                </div>
            ) : (
                <SliderComponent {...slice} />
            )}
        </section>
    );
};

export default SliderSlice;
