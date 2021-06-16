// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

function SwiperSharedMedia() {
  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={4}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="media__item w-full"><a href="#"><img src="/img/media-item.png" alt="media-item" /></a></SwiperSlide>
      <SwiperSlide className="media__item w-full"><a href="#"><img src="/img/media-item.png" alt="media-item" /></a></SwiperSlide>
      <SwiperSlide className="media__item w-full"><a href="#"><img src="/img/media-item.png" alt="media-item" /></a></SwiperSlide>
      <SwiperSlide className="media__item w-full"><a href="#"><img src="/img/media-item.png" alt="media-item" /></a></SwiperSlide>
      <SwiperSlide className="media__item w-full"><a href="#"><img src="/img/media-item.png" alt="media-item" /></a></SwiperSlide>
      <SwiperSlide className="media__item w-full"><a href="#"><img src="/img/media-item.png" alt="media-item" /></a></SwiperSlide>
      <SwiperSlide className="media__item w-full"><a href="#"><img src="/img/media-item.png" alt="media-item" /></a></SwiperSlide>
      <SwiperSlide className="media__item w-full"><a href="#"><img src="/img/media-item.png" alt="media-item" /></a></SwiperSlide>
      <SwiperSlide className="media__item w-full"><a href="#"><img src="/img/media-item.png" alt="media-item" /></a></SwiperSlide>
    </Swiper>
  );
};

export default SwiperSharedMedia