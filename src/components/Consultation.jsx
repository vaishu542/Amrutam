import React from 'react';
import ayurvedha from '../assets/images/Consultation/ayurvedha.png';
import shad from '../assets/images/Consultation/shad.png';
import smayurvedha from '../assets/images/Consultation/ayurvedhasm.png';
import smshad from '../assets/images/Consultation/shadsm.png';

const Consultation = () => {
    return (
        <div className='relative'>
            <div className="relative">
                <img src={ayurvedha} alt="ayurvedha" className='w-full h-full object-cover hidden md:inline' />
                <img src={shad} alt="shadow" className='absolute top-0 left-0 hidden md:inline'/>
                <img src={smayurvedha} alt="ayurvedha" className='w-full h-full object-cover md:hidden' />
                <img src={smshad} alt="shadow" className='absolute top-0 left-0 md:hidden h-full'   />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <p className='font-dinMedium tracking-normal text-[#FFF7E2] lg:text-6xl md:text-5xl text-4xl lg:w-[65%] md:w-[75%] w-[70%] '>
                        Ready to restore harmony in your mind, body, and spirit?
                    </p>
                    <button className='font-dinMedium tracking-wide text-white bg-green rounded-xl px-10 py-5 md:mt-12 mt-10 font-normal'>
                        BOOK AN APPOINTMENT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Consultation;
