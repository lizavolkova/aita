import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Lightbox } from "react-modal-image";
import React, { useState } from "react";

import { Bounded } from "../../components/Bounded";

const Image = ({ slice }) => {
    const [showModal, setShowModal] = React.useState(false);
    const image = slice.primary.image;

  return (
    <Bounded as="section" size={slice.variation === "wide" ? "widest" : "base"}>
        {showModal &&
        <Lightbox
            medium={image.url}
            large={image.url}
            onClose={setShowModal}
            hideDownload={true}
            hideZoom={true}
        />}
      <figure className="grid grid-cols-1 gap-4" onClick={() => setShowModal(true)}>
        {prismicH.isFilled.image(image) && (
          <div className="bg-gray-100">
            <PrismicNextImage field={image} sizes="100vw" className="w-full" />
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

export default Image;
