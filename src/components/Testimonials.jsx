import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import TestimonialCards from './SubComponents/TestimonialCards';
import navigation from '../assets/images/Experts/navigation.png';


const Testimonials = () => {
    return (
        <div className='bg-pink py-16 '>
            {/* Header Section */}
            <div className=" mb-12 mx-8 lg:mx-32 flex flex-col items-center gap-6">
                <div className="title font-dinBold tracking-wide text-green text-[32px] lg:text-5xl text-center leading-9 md:border-b-4 border-underline mx-auto px-4">
                    Stories from our valued customers!
                </div>
            </div>
            <div className="flex flex-col  items-center ">
                {/* Cards Section for Large Screens */}
                <div className="hidden lg:flex testimonial items-center justify-center mb-12 gap-8">
                    <TestimonialCards green={true} location={"Chennai"} />
                    <TestimonialCards location={"Chennai"} />
                    <TestimonialCards location={"Chennai"} />
                </div>
                <img src={navigation} alt="navigation" className='hidden lg:flex' />
            </div>
            {/* Swiper Section for Small and Medium Screens */}
            <div className="lg:hidden w-full px-6">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        // when window width is >= 768px (md)
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Pagination]}
                    className="swiper-container"
                >
                    <SwiperSlide>
                        <div className="flex justify-center">
                            <TestimonialCards green={true} location={"Chennai"} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                            <TestimonialCards location={"Chennai"} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                            <TestimonialCards location={"Chennai"} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
