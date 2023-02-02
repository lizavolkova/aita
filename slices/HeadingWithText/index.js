import React from "react";
import HeadingWithTextSlice from '../../components/slices/HeadingWithTextSlice'
/**
 * @typedef {import("@prismicio/client").Content.HeadingWithTextSlice} HeadingWithTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeadingWithTextSlice>} HeadingWithTextProps
 * @param { HeadingWithTextProps }
 */
const HeadingWithText = ({ slice }) => (
    <HeadingWithTextSlice slice={slice} />
);

export default HeadingWithText;
