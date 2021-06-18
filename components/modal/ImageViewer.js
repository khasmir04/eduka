import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function ImageViewer({isOpen,toggleImage}) {

    return (
      <div className={(!isOpen ? 'hidden': 'absolute z-20 top-0 left-0 h-screen w-screen')}>
        <div className={'relative h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-transparent relative items-center'}>
        <div className="absolute bg-black opacity-60 inset-0 z-0" />
          <div className="absolute text-white top-5 right-5 cursor-pointer" onClick={toggleImage}>
              <i className="bi bi-x-circle-fill text-4xl hover:text-secondary"></i>
          </div>
          <div className="w-full h-full p-10 rounded-xl z-10">
            <div className="w-full">
              <Swiper className="!h-full !w-full"
                  // spaceBetween={0}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  // onSlideChange={() => console.log('slide change')}
                  // onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide className="media__item w-full !max-w-full"><div className="flex items-center justify-center"><img className="max-w-[500px] select-none" src="/img/shared/media-item-1.jpg" alt="media-item" /></div></SwiperSlide>
                  <SwiperSlide className="media__item w-full !max-w-full"><div className="flex items-center justify-center"><img className="max-w-[500px] select-none" src="/img/shared/media-item-2.jpg" alt="media-item" /></div></SwiperSlide>
                  <SwiperSlide className="media__item w-full !max-w-full"><div className="flex items-center justify-center"><img className="max-w-[500px] select-none" src="/img/shared/media-item-3.jpg" alt="media-item" /></div></SwiperSlide>
                  <SwiperSlide className="media__item w-full !max-w-full"><div className="flex items-center justify-center"><img className="max-w-[500px] select-none" src="/img/shared/media-item-4.jpg" alt="media-item" /></div></SwiperSlide>
                  <SwiperSlide className="media__item w-full !max-w-full"><div className="flex items-center justify-center"><img className="max-w-[500px] select-none" src="/img/shared/media-item-5.jpg" alt="media-item" /></div></SwiperSlide>
                  <SwiperSlide className="media__item w-full !max-w-full"><div className="flex items-center justify-center"><img className="max-w-[500px] select-none" src="/img/shared/media-item-6.jpg" alt="media-item" /></div></SwiperSlide>
                  <SwiperSlide className="media__item w-full !max-w-full"><div className="flex items-center justify-center"><img className="max-w-[500px] select-none" src="/img/shared/media-item-7.jpg" alt="media-item" /></div></SwiperSlide>
                  <SwiperSlide className="media__item w-full !max-w-full"><div className="flex items-center justify-center"><img className="max-w-[500px] select-none" src="/img/shared/media-item-8.jpg" alt="media-item" /></div></SwiperSlide>
                  <SwiperSlide className="media__item w-full !max-w-full"><div className="flex items-center justify-center"><img className="max-w-[500px] select-none" src="/img/shared/media-item-9.jpg" alt="media-item" /></div></SwiperSlide>
                </Swiper>                
            </div>
          </div>
        </div>
      </div>
    )
}

export default ImageViewer
