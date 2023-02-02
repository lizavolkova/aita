import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { ImageGalleryComponent } from "../../components/ImageGallery";
import {PrismicNextImage} from "@prismicio/next";
import Modal from "../../components/Modal";

/**
 * @typedef {import("@prismicio/client").Content.ImageGallerySlice} ImageGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageGallerySlice>} ImageGalleryProps
 * @param { ImageGalleryProps }
 */
const ImageGallery = ({ slice }) => {
    const [showModal, setShowModal] = React.useState(false);

    return (
      <section>
          <Modal showModal={true} setShowModal={setShowModal}> </Modal>
          <ImageGalleryComponent
              title={slice.primary.title}
              description={slice.primary.description}
          >
              {slice.items.map((item,i) => {
                  console.log(item.image.url)
                  return(
                      <PrismicNextImage
                          key={item.image.id}
                          field={item.image}
                          className="block h-auto w-full p-2"
                          imgixParams={{
                              mark: 'https://images.prismic.io/aita/2050ff47-d217-4328-9848-ad1bb87e0e37_adventures-in-time-logo.png?w=500&auto=compress,format',
                              height: 1200,
                              markScale: 25,
                              markAlpha: 50,
                              markAlign: 'left'
                          }}
                      />
                  )
              })}
          </ImageGalleryComponent>
      </section>
  )
};

export default ImageGallery;
