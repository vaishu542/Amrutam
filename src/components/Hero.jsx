import React from 'react'
import smHero from '../assets/images/Hero/sm.png';
import smShadow from '../assets/images/Hero/shadow.png';
import xlHero from '../assets/images/Hero/xl.png';
import shadow from '../assets/images/Hero/shadow-xl.png';
import red from '../assets/images/Hero/xl-l.png';
import shield from '../assets/images/Hero/shield.png';
import doctor from '../assets/images/Hero/doctor.png';
import prescription from '../assets/images/Hero/prescription.png';
import speech from '../assets/images/Hero/speech-bubble.png';
import HeroBand from './SubComponents/HeroBand';


const Hero = () => {
    return (
        <div >
            <div className="hero relative">
                <div className="sm-hero md:hidden">
                    <img
                        src={smHero}
                        className="object-cover w-full  "
                        alt="smhero"
                    />
                    <img
                        src={smShadow}
                        className="object-cover w-full absolute  top-0 "
                        alt="smhero"
                    />
                    <div className="context absolute top-20 left-3 pt-4 pl-3 mr-9 w-[85%] flex flex-col gap-4 ">
                        <p className='font-nexa text-sm text-[#FFF7E2] leading-7 tracking-widest'>
                            Namaste, Welcome to Amrutam
                        </p>

                        <div className='text-2xl text-white font-dinBold leading-normal tracking-wide'>
                            <p>Step into Holistic Healing with <span className='underline underline-offset-8'>Ayurveda</span> </p>
                            <p>Book Consultation with Certified Experts.</p>
                        </div>

                        <div className='text-[#C9C9C9] text-sm font-dinPro tracking-wide'>
                            Dive into the world of ayurveda and experience personalized health solutions and holistic guidance from trusted ayurvedic doctors anytime, anywhere.
                        </div>

                        <button className='font-dinMedium tracking-wider text-white text-sm w-max bg-green rounded-xl px-5 pt-5 pb-4 mt-7 font-normal'>
                            BOOK AN APPOINTMENT
                        </button>
                    </div>
                </div>
                <div className="hero relative h-[600px] w-full sm: hidden md:inline-block"> {/* Adjust height as needed */}
                    <div className="hero-img flex w-full h-full">
                        <img
                            src={red}
                            className="object-cover w-1/2 h-full"
                            alt="hero"
                        />
                        <img
                            src={xlHero}
                            className="object-cover w-1/2 h-full"
                            alt="hero"
                        />
                    </div>

                    <img
                        src={shadow}
                        className="object-cover h-full absolute top-0 left-0"
                        alt="shadow"
                    />

                    <div className="context absolute top-20 left-3 pt-16 pl-4 mr-9 w-[55%] flex flex-col gap-6 ">
                        <p className='font-nexa text-lg text-[#FFF7E2] leading-7 tracking-widest'>
                            Namaste, Welcome to Amrutam
                        </p>

                        <div className='text-4xl text-white font-dinBold leading-normal tracking-wide'>
                            Step into Holistic Healing with <span className='underline underline-offset-8'>Ayurveda</span>  Book Consultation with certified Experts.
                        </div>

                        <div className='text-[#C9C9C9] text-lg font-dinPro tracking-wider'>
                            Dive into the world of ayurveda and experience personalized health solutions and holistic guidance from trusted ayurvedic doctors anytime, anywhere.
                        </div>

                        <button className='font-dinMedium tracking-wide text-white bg-green rounded-xl px-10 py-5 mt-7 font-normal w-max'>
                            BOOK AN APPOINTMENT
                        </button>
                    </div>
                </div>
                <div className="hero-band bg-pink w-full pt-8 pb-5 px-8 ">

                    <div className="hero-band-context flex flex-col justify-center gap-10 lg:flex-row">
                        <HeroBand pic={speech} context={"Convenient Online & In-Clinic Consultations"}  />
                        <HeroBand pic={shield} context={"Safe And Effective Treatment"} />
                        <HeroBand pic={doctor} context={"Experienced Ayurvedic Practitioners"} />
                        <HeroBand pic={prescription} context={"Personalized Treatment Plans & Guidance"} />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Hero
