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
        <div className="flex container mx-auto px-10">
          {slice.items.map(item => {
              return (
                  <div className="w-1/3 p-5 m-4 bg-white">
                      {item.article.uid && <PreviewCard costume={item.article} key={item.id} />}
                      {item.costume.uid && <PreviewCard costume={item.costume} key={item.id} />}
                  </div>
              )
          })}
        </div>


      </HomeSection>
  )
}

export default LatestCostumes

//<PreviewCard costume={item.costume} key={item.id} />