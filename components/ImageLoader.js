import React, { useState } from "react";
import { PrismicNextImage } from "@prismicio/next";
import classNames from "classnames";

export const ImageLoader = ({ img, classes, sizes, imgixParams, onClick }) => {
  const [loaded, setLoaded] = useState(false);
  const cssClass = classNames(
    classes,
    `transition-all duration-700 ${loaded ? "blur-none" : "blur-sm"}`
  );

  const imgUrlObj = new URL(img.url);
  imgUrlObj.search = "";
  const imgUrl = imgUrlObj.toString();

  return (
    <>
      <PrismicNextImage
        onClick={onClick}
        onLoadingComplete={() => setLoaded(true)}
        placeholder="blur"
        blurDataURL={`${imgUrl}?w=50`}
        field={img}
        className={cssClass}
        sizes={sizes}
        imgixParams={imgixParams}
      />
    </>
  );
};
