import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Modal from "../../components/Modal";
import React from "react";

import { Bounded } from "../../components/Bounded";

const ImageSlice = ({ slice }) => {
    const [showModal, setShowModal] = React.useState(false);
    const image = slice.primary.image;

    return (
        <Bounded as="section" size={slice.variation === "wide" ? "widest" : "base"}>
            {!slice.primary.hide_modal && (
                <Modal showModal={showModal} setShowModal={setShowModal}>
                    {/*<PrismicNextImage field={image} className="max-w-screen max-h-full max-w-full w-full h-full" />*/}
                    <img
                        src={image.url}
                        className="h-auto max-h-[84vh] w-auto max-w-full object-contain"
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
                        <PrismicNextImage
                            field={image}
                            sizes="100vw"
                            className="w-full"
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
