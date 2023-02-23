// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export const SliderComponent = ({ items, primary, speed }) => {
  const {
    show_navigation_arrows,
    show_pagination,
    show_caption,
    auto_play,
    effect,
    showhometext,
    dim_slides,
  } = primary;
  const autoPlay = auto_play
    ? {
        delay: 5000,
        disableOnInteraction: false,
      }
    : "";

  const imgixParams = dim_slides
    ? {
        blendColor: "black",
        blendMode: "hardlight",
        blendAlpha: 75,
        sat: -30,
      }
    : {};

  return (
    <Swiper
      spaceBetween={50}
      navigation={show_navigation_arrows}
      loop={true}
      slidesPerView={1}
      autoplay={autoPlay}
      pagination={show_pagination}
      effect={effect}
      speed={speed ? speed : 2000}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
    >
      {items.map((item) => {
        return (
          <SwiperSlide key={item.image.url}>
            <div className="relative">
              <PrismicNextImage
                priority={showhometext}
                field={item.image}
                imgixParams={imgixParams}
                className={`${
                  showhometext ? "min-h-[70vh] object-cover md:min-h-0" : ""
                }`}
              />
              {show_caption && item.description && (
                <span className="absolute bottom-0 left-0 w-full bg-black/50 p-2 text-white">
                  <PrismicText field={item.description} />
                </span>
              )}
              {showhometext && (
                <div className="absolute left-0 right-0 top-1/2 mx-auto flex w-full -translate-y-1/2 flex-col text-center text-white md:w-3/4">
                  <p>Hi, my name is Liza!</p>
                  <h1 className="py-2 font-serif text-2xl uppercase md:py-6 md:text-6xl">
                    This is Adventures In Time Art
                  </h1>
                  <h4 className="text-lg md:text-2xl">
                    A place to showcase my work
                  </h4>
                </div>
              )}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
