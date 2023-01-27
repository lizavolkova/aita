import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { SliderComponent } from "../../components/Slider";

/**
 * @typedef {import("@prismicio/client").Content.SliderSlice} SliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SliderSlice>} SliderProps
 * @param { SliderProps }
 */
const Slider = ({ slice }) => {

    return (
        <section >
            <SliderComponent {...slice}/>
        </section>
    )
}

export default Slider