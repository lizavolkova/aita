import React from 'react'
import { HomeSection } from '../../components/HomeSection';
import {PrismicRichText} from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.LatestCostumesSlice} LatestCostumesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LatestCostumesSlice>} LatestCostumesProps
 * @param { LatestCostumesProps }
 */
const LatestCostumes = ({ slice }) => (
  <HomeSection title={slice.primary.title}>

  </HomeSection>
)

export default LatestCostumes