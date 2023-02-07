import ImageGallerySlice from "../../components/slices/ImageGallerySlice";

/**
 * @typedef {import("@prismicio/client").Content.ImageGallerySlice} ImageGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageGallerySlice>} ImageGalleryProps
 * @param { ImageGalleryProps }
 */
const ImageGallery = ({ slice }) => <ImageGallerySlice slice={slice} />;

export default ImageGallery;
