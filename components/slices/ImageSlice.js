import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import Modal from "../../components/Modal";
import React from "react";

import { Bounded } from "../../components/Bounded";
import {ImageLoader} from "../ImageLoader";

const ImageSlice = ({ slice }) => {
  const [showModal, setShowModal] = React.useState(false);
  const image = slice.primary.image;

  return (
    <Bounded as="section" size={slice.variation === "wide" ? "widest" : "base"}>
      {!slice.primary.hide_modal && (
        <Modal showModal={showModal} setShowModal={setShowModal}>
          {/*<PrismicNextImage field={image} className="h-auto max-h-[84vh] w-auto max-w-full object-contain" />*/}
          <img
            src={image.url}
            className="h-auto max-h-[84vh] w-auto max-w-full object-contain"
            width={1050}
            height={1050}
            alt={image.alt}
          />

          {/*<PrismicNextImage field={image} className="object-contain h-full w-full max-h-[80vh]" />*/}
        </Modal>
      )}
      <figure
        className="grid grid-cols-1 gap-4"
        onClick={() => setShowModal(true)}
      >
        {prismicH.isFilled.image(image) && (
          <div className="cursor-pointer bg-gray-100">
            <ImageLoader
              img={image}
              sizes="100vw"
              classes="w-full"
              onClick={() => setShowModal(true)}
            />
          </div>
        )}
        {prismicH.isFilled.richText(slice.primary.caption) && (
          <figcaption className="text-center font-serif italic tracking-tight text-slate-500">
            <PrismicRichText field={slice.primary.caption} />
          </figcaption>
        )}
      </figure>
    </Bounded>
  );
};

export default ImageSlice;
