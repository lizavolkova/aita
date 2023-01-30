import React from "react";
import { PrismicRichText } from "@prismicio/react";

import { ImageGalleryComponent } from "../../components/ImageGallery";
import {PrismicNextImage} from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ImageGallerySlice} ImageGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageGallerySlice>} ImageGalleryProps
 * @param { ImageGalleryProps }
 */
const ImageGallery = ({ slice }) => {
    return (
      <section>
          <ImageGalleryComponent
              title={slice.primary.title}
              description={slice.primary.description}
          >
              {slice.items.map((item,i) => {
                  return(
                      <PrismicNextImage
                          field={item.image}
                          className="block h-auto w-full p-2"
                          imgixParams={{
                              mark: 'https://assets.imgix.net/presskit/imgix-presskit.pdf?w=160&fm=png&page=4'
                          }}
                      />
                  )
              })}
          </ImageGalleryComponent>
      </section>
  )
};

export default ImageGallery;
