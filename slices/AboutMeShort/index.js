import React from "react";
import AboutMeShortSlice from "../../components/slices/AboutMeShortSlice";

/**
 * @typedef {import("@prismicio/client").Content.AboutMeShortSlice} AboutMeShortSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutMeShortSlice>} AboutMeShortProps
 * @param { AboutMeShortProps }
 */
const AboutMeShort = ({ slice }) => (
    <AboutMeShortSlice slice={slice} />
);

export default AboutMeShort;
