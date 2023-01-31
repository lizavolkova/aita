import { PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";


export const ImageGalleryComponent = ({ children }) => {
  return (
    <div className="masonry">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}>
        <Masonry>{children}</Masonry>
      </ResponsiveMasonry>
    </div>
  );
};
