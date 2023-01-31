import React from 'react'
import {PrismicRichText, PrismicText} from '@prismicio/react'
import { SliderComponent } from "../../components/Slider";

/**
 * @typedef {import("@prismicio/client").Content.SliderSlice} SliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SliderSlice>} SliderProps
 * @param { SliderProps }
 */
const Slider = ({ slice }) => {
    console.log(slice)
    return (
        <section >
            {
                (slice.variation === 'withDescription')
                    ?
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="col-span-1">
                            <SliderComponent {...slice}/>
                        </div>
                        <div className="col-span-1 py-5 px-0 md:px-5 ">
                            <PrismicRichText field={slice.primary.title} />
                            <PrismicRichText field={slice.primary.description} />
                        </div>

                    </div>
                    :  <SliderComponent {...slice}/>
            }

        </section>
    )
}

export default Slider