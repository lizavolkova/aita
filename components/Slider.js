// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { PrismicNextImage } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export const SliderComponent = ({ items, primary, speed }) => {
    const { show_navigation_arrows, show_pagination, show_caption, auto_play, effect, showhometext, dim_slides } = primary;
    const autoPlay = auto_play ? {
        delay: 5000,
        disableOnInteraction: false,
    } : '';

    const imgixParams = dim_slides ? {
        blendColor: "black",
        blendMode: "hardlight",
        blendAlpha: 75,
        sat: -30
    } : {}

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
            {items.map( (item,i) => {
                return (
                    <SwiperSlide key={item.image.url}>
                        <div className="relative">
                            <PrismicNextImage
                                field={item.image}
                                imgixParams={imgixParams}
                            />
                            {show_caption && item.description && <span className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2" >
                                <PrismicText field={item.description} />
                            </span>}
                            {showhometext &&
                                <div className="absolute w-3/4 left-0 right-0 mx-auto top-1/2 -translate-y-1/2 flex flex-col text-center text-white">
                                    <p>Hi, my name is Liza!</p>
                                    <span className="font-serif text-6xl uppercase py-6">This is Adventures In Time</span>
                                    <h4>A place to showcase my work</h4>
                                </div>
                            }

                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};