import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Card from './SubComponents/StepCard';

const Steps = () => {
    
  return (
    <div className='pb-12'>
      {/* Header Section */}
      <div className="my-12 mx-8 lg:mx-32 flex flex-col items-center gap-6">
        <div className="title font-dinBold tracking-wide text-green text-[32px] lg:text-5xl text-center leading-9 md:border-b-4 border-underline mx-auto px-4">
          Our Ayurvedic Approach
        </div>
        <p className="text-[#666666] lg:text-lg w-[90%] lg:w-[60%] text-center">
          At Amrutam, we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions.
        </p>
      </div>

      {/* Cards Section for Large Screens */}
      <div className="hidden lg:flex cards items-center justify-center mb-24 gap-5">
        <Card
          number={1}
          title="Make Appointment"
          statement="You must make an appointment in advance, to choose the service and date."
        />
        <Card
          number={2}
          title="Consultations"
          statement="The next stage involves a thorough consultation with an Ayurveda practitioner."
        />
        <Card
          number={3}
          title="Treatment Planning"
          statement="The Ayurvedic practitioner creates a personalized treatment plan for you."
        />
        <Card
          number={4}
          title="Maintenance"
          statement="These visits allow for assessment of progress, adjustments to the treatment."
        />
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
              <Card
                number={1}
                title="Make Appointment"
                statement="You must make an appointment in advance, to choose the service and date."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <Card
                number={2}
                title="Consultations"
                statement="The next stage involves a thorough consultation with an Ayurveda practitioner."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <Card
                number={3}
                title="Treatment Planning"
                statement="The Ayurvedic practitioner creates a personalized treatment plan for you."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <Card
                number={4}
                title="Maintenance"
                statement="These visits allow for assessment of progress, adjustments to the treatment."
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Steps;
