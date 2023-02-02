import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import {PrismicNextImage} from "@prismicio/next";
import { HomeSection } from '../../components/HomeSection';

/**
 * @typedef {import("@prismicio/client").Content.AboutMeShortSlice} AboutMeShortSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutMeShortSlice>} AboutMeShortProps
 * @param { AboutMeShortProps }
 */
const AboutMeShort = ({ slice }) => (

  <HomeSection title={slice.primary.title}>
      <div className="w-full flex justify-center pt-5 px-5
      md:pt-20 ">
          <div className="grid grid-cols-3 gap-4 w-full md:w-1/2">
              <div className="flex justify-end ">
                  <PrismicNextImage
                      field={slice.primary.photo}
                      className="block h-[100px] w-[100px] md:h-auto md:w-56 rounded-full object-cover md:object-fill"
                  /></div>
              <div className="col-span-2 flex flex-col justify-center">
                  <PrismicRichText field={slice.primary.heading} />
                  <PrismicRichText field={slice.primary.description}/>
              </div>
          </div>
      </div>

  </HomeSection>
)

export default AboutMeShort