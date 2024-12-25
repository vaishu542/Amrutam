import React from 'react'
import one from '../assets/images/Intro/one.png';
import two from '../assets/images/Intro/two.png';
import three from '../assets/images/Intro/three.png';


const Intro = () => {
    return (
        <div className='bg-pink'>
            <div className="title font-dinBold tracking-wide text-green text-[32px] lg:text-5xl text-center leading-9 md:border-b-4 border-underline mx-auto lg:px-12 md:px-8 px-12 pb-6 pt-16 md:w-max">
            What sets Ayurvedic consultations apart?
                </div>
            <div className="lg:p-16 md:p-8 p-4">
                <div className="top-row flex flex-col gap-6 md:flex-row  ">
                    {/* Sanskrit Quote */}
                    <div className="bg-white border-t-4 border-green lg:w-[50%] text-green font-Inknut text rounded-3xl p-6 shadow-sm">
                        <div className="text-center tracking-wide">
                            <p className="lg:text-3xl md:text-xl  text-green-800 font-inknut mb-4">
                                स्वस्थस्य स्वास्थ्य रक्षणं,<br />
                                आतुरस्य विकार प्रशमनं |"
                            </p>
                            <p className="text-sm lg:text-base text-gray-600 font-dinPro lg:px-20 ">
                                [ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]
                            </p>
                        </div>
                    </div>

                    {/* one Image */}
                    <div className=" lg:w-[40%] md:w-[100%] ">
                        <img
                            src={one}
                            alt="Doctor consultation"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>

                    {/* Precise Diagnosis */}
                    <div className="bg-white border-t-4 border-green  text-green rounded-3xl lg:w-[30%] md:w-[70%] p-6 shadow-sm">
                        <h3 className="text-green-800 font-dinBold lg:text-2xl md:text-lg mb-3">
                            Precise Diagnosis
                        </h3>
                        <p className="text-gray-600 font-dinPro lg:text-lg lg:tracking-wide md:text-center lg:text-left" >
                            Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.
                        </p>
                    </div>
                </div>

                <div className="bottom-row flex flex-col md:flex-row mt-6 gap-6 ">
                    
                    <div className="left md:flex items-center justify-center md:flex-row-reverse gap-3 xs:space-y-6 md:space-y-0">
                        {/* two img */}
                    <div className=" md:w-1/2 h-full">
                        <img
                            src={two}
                            alt="Ayurvedic herbs and ingredients"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>

                    {/* Zero side-effects */}
                    <div className="bg-white border-t-4 border-green h-full  text-green md:w-1/2 rounded-3xl p-6 shadow-sm ">
                        <h3 className="text-green-800 font-dinBold lg:text-2xl md:text-lg mb-3">
                            Zero side-effects
                        </h3>
                        <p className="text-gray-600 font-dinPro lg:text-xl">
                            Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs
                        </p>
                    </div>
                    </div>

                    <div className="right md:flex md:flex-row-reverse gap-3 xs:space-y-6 md:space-y-0">
                        {/* three Image */}
                    <div className=" md:w-1/2  ">
                        <img
                            src={three}
                            alt="Ayurvedic herbs and ingredients"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>

                    {/* Individual Treatment */}
                    <div className="bg-white border-t-4 border-green  text-green md:w-1/2 rounded-3xl p-6 shadow-sm">
                        <h3 className="text-green-800 font-dinBold lg:text-2xl md:text-lg mb-3">
                            Individual Treatment
                        </h3>
                        <p className="text-gray-600 font-dinPro lg:text-lg">
                            All Treatments are personalized based on a person's unique constitution and health concerns.
                        </p>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Intro
