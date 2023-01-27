import React from 'react'
import { PrismicRichText } from '@prismicio/react'

import { ImageGalleryComponent } from "../../components/ImageGallery";

/**
 * @typedef {import("@prismicio/client").Content.ImageGallerySlice} ImageGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageGallerySlice>} ImageGalleryProps
 * @param { ImageGalleryProps }
 */
const ImageGallery = ({ slice }) => (
  <section>
      <ImageGalleryComponent
          images={slice.items}
          title={slice.primary.title}
          description={slice.primary.description}
      />

  </section>
)

export default ImageGallery