import React from 'react'
import { HomeSection } from '../../components/HomeSection';
import { PreviewCard } from "../../components/PreviewCard";

/**
 * @typedef {import("@prismicio/client").Content.LatestCostumesSlice} LatestCostumesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LatestCostumesSlice>} LatestCostumesProps
 * @param { LatestCostumesProps }
 */
const LatestCostumes = ({ slice }) => {
  return (
      <HomeSection title={slice.primary.title} bgColor="bg-gray-100" fullWidth={true}>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 container mx-auto">
          {slice.items.map(item => {
            return <PreviewCard costume={item.costume} key={item.id} />
          })}
        </div>


      </HomeSection>
  )
}

export default LatestCostumes