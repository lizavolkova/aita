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
      <div className="grid grid-cols-3 gap-4">
          <div className="flex justify-end">
              <PrismicNextImage
                  field={slice.primary.photo}
                  className="block h-auto w-56 rounded-full "
              /></div>
          <div className="col-span-2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold"><PrismicRichText field={slice.primary.heading} /></h3>
              <PrismicRichText field={slice.primary.description}/>
          </div>
      </div>
  </HomeSection>
)

export default AboutMeShort