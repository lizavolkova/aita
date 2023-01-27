import React from 'react'
import { PrismicRichText } from '@prismicio/react'



import { CostumeDetailsComponent } from '../../components/CostumeDetails';
import { CostumePreviewComponent } from '../../components/CostumePreview';
import * as prismicH from "@prismicio/helpers";

/**
 * @typedef {import("@prismicio/client").Content.GalleryImageSlice} GalleryImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GalleryImageSlice>} GalleryImageProps
 * @param { GalleryImageProps }
 */
const CostumeDetails = ({ slice }) => {
    console.log(slice.variation)

   return (
       <section>
            <CostumeDetailsComponent
               title={slice.primary.name}
               subTitle={slice.primary.sub_title}
               description={slice.primary.description}
               year={slice.primary.year}
               materials={slice.primary.materials}
               patterns={slice.primary.patterns}
               construction={slice.primary.construction}
            />
       </section>
   )
}

export default CostumeDetails