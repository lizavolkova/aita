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

export const SliderComponent = ({ items, primary }) => {
console.log(items)
    const { show_navigation_arrows, show_pagination, show_caption, auto_play } = primary;
    const autoPlay = auto_play ? {
        delay: 3000,
        disableOnInteraction: false,
    } : '';

    return (
        <Swiper
            spaceBetween={50}
            navigation={show_navigation_arrows}
            loop={true}
            slidesPerView={1}
            autoplay={autoPlay}
            pagination={show_pagination}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
        >
            {items.map( (item,i) => {
                return (
                    <SwiperSlide key={item.image.url}>
                        <div className="relative">
                            <PrismicNextImage field={item.image}/>
                            {show_caption && item.description && <span className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2" >
                                <PrismicText field={item.description} />
                            </span>}
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};