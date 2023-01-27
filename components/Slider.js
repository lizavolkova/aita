// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { PrismicNextImage } from "@prismicio/next";
import { Pagination, Navigation, EffectFade } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export const SliderComponent = ({items}) => {

    return (
        <Swiper
            spaceBetween={50}
            navigation={true}
            loop={true}
            slidesPerView={1}
            effect={"fade"}
            modules={[EffectFade, Navigation, Pagination]}
        >
            {items.map( (item,i) => {
                return (
                    <SwiperSlide key={i}>
                        <PrismicNextImage field={item.image} />
                    </SwiperSlide>
                )
            })}
            ...
        </Swiper>
    );
};