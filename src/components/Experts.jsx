import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import ExpertCard from './SubComponents/ExpertCard';
import left from '../assets/images/Experts/left.png';
import right from '../assets/images/Experts/right.png';
import Vector from '../assets/images/Experts/Vector.png';

const Experts = () => {
    // Refs for custom navigation buttons
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className='py-16 flex flex-col items-center'>
            <div className=" mb-12 mx-8 lg:mx-32 flex flex-col items-center gap-6">
                <div className="title font-dinBold tracking-wide text-green text-[32px] lg:text-5xl text-center leading-9 md:border-b-4 border-underline mx-auto px-4">
                Meet our Ayurveda experts
                </div>
            </div>
            <div className="cards pt-12 pb-8 flex justify-center items-start gap-6 relative w-full">
                <div className=" w-full lg:pl-24 md:pl-20 sm:pl-28 xm:pl-16 pl-10">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            // Assign ref elements to Swiper navigation
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
                        className="swiper-container"
                        breakpoints={{
                            750: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <ExpertCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ExpertCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ExpertCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ExpertCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ExpertCard />
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* Custom Navigation Buttons */}
                <div
                    ref={prevRef}
                    className="custom-prev hidden lg:flex  absolute left-[2%] top-1/2 -translate-y-1/2 z-10 cursor-pointer"
                >
                    <img src={left} alt="Previous" className="w-14 h-14" />
                </div>
                <div
                    ref={nextRef}
                    className="custom-next hidden lg:flex absolute right-[2%] top-1/2 -translate-y-1/2 z-10 cursor-pointer"
                >
                    <img src={right} alt="Next" className="w-14 h-14" />
                </div>
            </div>
            <button className='bg-[#DBE3DC63] font-dinPro hidden  text-xl px-6 py-3 text-green lg:flex items-center gap-4 border border-green rounded-lg'>
                Find more experts
                <img src={Vector} className="mt-1" />
            </button>
        </div>
    );
};

export default Experts;
