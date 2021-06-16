// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

function SwiperLogin() {
    return (
        <Swiper
        spaceBetween={0}
        slidesPerView={1}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className="relative">
                <img src="/img/slide-1.jpg" className="block w-full h-full object-cover" alt="carousel-img" />
                <p className="absolute left-auto right-auto bottom-10 bg-black-200 text-white text-center text-sm leading-[30px] pl-[135px] pr-[135px]">
                    Nature, in the broadest sense, is the natural, physical, material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general.
                </p>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <img src="/img/slide-2.jpg" className="block w-full h-full object-cover" alt="carousel-img" />
                <p className="absolute left-auto right-auto bottom-10 bg-black-200 text-white text-center text-sm leading-[30px] pl-[135px] pr-[135px]">
                    Nature, in the broadest sense, is the natural, physical, material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general.
                </p>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <img src="/img/slide-3.jpg" className="block w-full h-full object-cover" alt="carousel-img" />
                <p className="absolute left-auto right-auto bottom-10 bg-black-200 text-white text-center text-sm leading-[30px] pl-[135px] pr-[135px]">
                    Nature, in the broadest sense, is the natural, physical, material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general.
                </p>
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperLogin
