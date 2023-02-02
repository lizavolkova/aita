import { XMasonry } from "react-xmasonry";
import React from "react";

export const ImageGalleryAnimated = ({ children }) => {
  return (
    <div className="demo" id="CardsDemo">
      <XMasonry>{children}</XMasonry>
    </div>
  );
};
