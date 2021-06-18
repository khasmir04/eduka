// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

function SwiperSharedMedia({toggleImage}) {
  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={4}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="media__item w-full"><div className="cursor-pointer" onClick={toggleImage}><img className="rounded-xl" src="/img/shared/media-item-1.jpg" alt="media-item" /></div></SwiperSlide>
      <SwiperSlide className="media__item w-full"><div className="cursor-pointer" onClick={toggleImage}><img className="rounded-xl" src="/img/shared/media-item-2.jpg" alt="media-item" /></div></SwiperSlide>
      <SwiperSlide className="media__item w-full"><div className="cursor-pointer" onClick={toggleImage}><img className="rounded-xl" src="/img/shared/media-item-3.jpg" alt="media-item" /></div></SwiperSlide>
      <SwiperSlide className="media__item w-full"><div className="cursor-pointer" onClick={toggleImage}><img className="rounded-xl" src="/img/shared/media-item-4.jpg" alt="media-item" /></div></SwiperSlide>
      <SwiperSlide className="media__item w-full"><div className="cursor-pointer" onClick={toggleImage}><img className="rounded-xl" src="/img/shared/media-item-5.jpg" alt="media-item" /></div></SwiperSlide>
      <SwiperSlide className="media__item w-full"><div className="cursor-pointer" onClick={toggleImage}><img className="rounded-xl" src="/img/shared/media-item-6.jpg" alt="media-item" /></div></SwiperSlide>
      <SwiperSlide className="media__item w-full"><div className="cursor-pointer" onClick={toggleImage}><img className="rounded-xl" src="/img/shared/media-item-7.jpg" alt="media-item" /></div></SwiperSlide>
      <SwiperSlide className="media__item w-full"><div className="cursor-pointer" onClick={toggleImage}><img className="rounded-xl" src="/img/shared/media-item-8.jpg" alt="media-item" /></div></SwiperSlide>
      <SwiperSlide className="media__item w-full"><div className="cursor-pointer" onClick={toggleImage}><img className="rounded-xl" src="/img/shared/media-item-9.jpg" alt="media-item" /></div></SwiperSlide>
    </Swiper>
  );
};

export default SwiperSharedMedia