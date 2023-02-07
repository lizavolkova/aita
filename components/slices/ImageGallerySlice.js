import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { ImageGalleryComponent } from "../../components/ImageGallery";
import { PrismicNextImage } from "@prismicio/next";
import Modal from "../../components/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

/**
 * @typedef {import("@prismicio/client").Content.ImageGallerySlice} ImageGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageGallerySlice>} ImageGalleryProps
 * @param { ImageGalleryProps }
 */
const ImageGallerySlice = ({ slice }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <section>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        fullScreen={true}
      >
        <div className=" h-auto w-full max-w-[100vw] ">
          <Swiper
            className="swiper-full-screen"
            spaceBetween={50}
            navigation={true}
            loop={true}
            slidesPerView={1}
            autoplay={false}
            pagination={false}
            speed={400}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
          >
            {slice.items.map((item) => {
              return (
                <SwiperSlide key={item.image.id}>
                  <div className="flex flex-col items-center">
                    <PrismicNextImage
                      field={item.image}
                      className="relative h-full max-h-[90vh] w-full max-w-full object-contain xl:max-w-[80vw]"
                      imgixParams={{
                        mark: "https://images.prismic.io/aita/2050ff47-d217-4328-9848-ad1bb87e0e37_adventures-in-time-logo.png?w=500&auto=compress,format",
                        height: 1200,
                        markScale: 25,
                        markAlpha: 50,
                        markAlign: "left",
                      }}
                    />
                    {item.caption && (
                      <div className="bottom-0 left-0 z-50 w-full bg-white p-5">
                        <PrismicRichText field={item.caption} />
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Modal>
      <ImageGalleryComponent
        title={slice.primary.title}
        description={slice.primary.description}
      >
        {slice.items.map((item) => {
          return (
            <PrismicNextImage
              onClick={() => setShowModal(true)}
              key={item.image.id}
              field={item.image}
              className="block h-auto w-full p-2"
              imgixParams={{
                mark: "https://images.prismic.io/aita/2050ff47-d217-4328-9848-ad1bb87e0e37_adventures-in-time-logo.png?w=500&auto=compress,format",
                height: 1200,
                markScale: 25,
                markAlpha: 50,
                markAlign: "left",
              }}
            />
          );
        })}
      </ImageGalleryComponent>
    </section>
  );
};

export default ImageGallerySlice;
