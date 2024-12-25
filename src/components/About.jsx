import React from 'react'
import med from '../assets/images/About/med.png';
import heart from '../assets/images/About/heart.png';
import ribbon from '../assets/images/About/ribbon.png';
import lotus from '../assets/images/About/lotus-position.png';
import strong from '../assets/images/About/strong.png';
import ayurveda from '../assets/images/About/ayurveda.png';
import protection from '../assets/images/About/protection.png';

const About = () => {
    return (
        <div>
            <div className="about my-12 mx-8 lg:mx-32 flex flex-col items-center gap-6">
                <div className="title font-dinBold tracking-wide text-green text-[32px] lg:text-5xl text-center leading-9 md:border-b-4 border-underline mx-auto px-4 ">
                    Discover Ayurveda’s Magic With Us
                </div>
                <p className='text-[#666666] lg:text-lg w-[90%] lg:w-[60%] text-center'>
                    Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom,
                    a totally effective approach for a better life.
                </p>
            </div>
            <div className="w-full p-4 lg:p-8 relative">
                {/* Circle Container for md and smaller screens */}
                <div className="mb-8 lg:hidden flex items-center justify-center">
                    <img src={med} alt="med" className="w-auto h-auto" />
                </div>

                {/* Main Grid Container */}
                <div className="grid  gap-4 xm:pl-3 sm:pl-10 md:pl-24">

                    {/* Left Column */}
                    <div className="grid grid-cols-2  lg:grid-cols-3 gap-4 ">
                        <div className="p-4 lg:w-[350px] xs:w-[150px] xm:w-[190px] sm:w-[250px]  h-[265px] lg:h-max justify-center rounded-xl border border-border flex space-x-4 flex-col-reverse items-center lg:flex-row lg:border-0 lg:absolute lg:top-[5%] lg:left-[10%]">
                            <div className="flex flex-col text-center lg:text-right">
                                <h3 className="font-dinBold text-base lg:text-lg">Personalized Wellness</h3>
                                <p className="text-[#515151] text-sm lg:text-base font-dinPro tracking-wider">
                                    Get treatments made just for you based on your individual doshas (body type)
                                </p>
                            </div>
                            <img src={heart} alt="heart" />
                        </div>

                        <div className="p-4 lg:w-[350px] xs:w-[150px] xm:w-[190px] sm:w-[250px]  h-[265px] justify-center rounded-xl border border-border flex space-x-4 items-center flex-col-reverse lg:flex-row lg:h-max lg:border-0 lg:absolute lg:top-[35%] lg:left-[5%]">
                            <div className="flex flex-col text-center lg:text-right">
                                <h3 className="font-dinBold text-base lg:text-lg">Focus on Prevention</h3>
                                <p className="text-[#515151] text-sm lg:text-base font-dinPro tracking-wider">
                                    Stop problems even before they start.
                                </p>
                            </div>
                            <img src={ribbon} alt="ribbon" />
                        </div>

                        <div className="p-4 lg:w-[350px] xs:w-[150px] xm:w-[190px] sm:w-[250px]  h-[265px] justify-center rounded-xl border border-border flex items-center space-x-4 flex-col-reverse lg:flex-row lg:border-0 lg:h-max lg:absolute lg:top-[65%] lg:left-[10%]">
                            <div className="flex flex-col items-center text-center lg:text-right">
                                <h3 className="font-dinBold text-base lg:text-lg ">Mind-Body Connection</h3>
                                <p className="text-[#515151] text-sm lg:text-base font-dinPro tracking-wider">
                                    Keep your mind and body in sync for a happy life.
                                </p>
                            </div>
                            <img src={lotus} alt="lotus" />
                        </div>

                        {/* Right Column */}
                        <div className=" p-4 lg:w-[350px] xs:w-[150px] xm:w-[190px] sm:w-[250px]  h-[265px]  justify-center flex gap-4 items-center border border-border rounded-lg lg:h-max lg:border-0 lg:space-x-4 flex-col-reverse  lg:flex-row-reverse lg:absolute lg:top-[8%]  lg:right-[10%]">
                            <div className="flex flex-col items-center text-center lg:text-left">
                                <h3 className="font-dinBold  text-base lg:text-lg ">Holistic Healing</h3>
                                <p className="text-[#515151] text-sm lg:text-base w-[80%] lg:w-[99%] font-dinPro tracking-wider">
                                    Fix the root problem for long-lasting health.
                                </p>
                            </div>
                            <img src={protection} alt="protection" />
                        </div>

                        <div className=" p-4 lg:w-[350px] xs:w-[150px] xm:w-[190px] sm:w-[250px]  h-[265px]  justify-center flex gap-4 items-center border border-border rounded-lg lg:h-max lg:border-0 lg:space-x-4 flex-col-reverse  lg:flex-row-reverse lg:absolute lg:top-[35%] lg:right-[5%] ">
                            <div className="flex flex-col items-center text-center lg:text-left">
                                <h3 className="font-dinBold text-lg">Natural Remedies</h3>
                                <p className="text-[#515151] text-sm lg:text-base w-[80%] lg:w-[99%] font-dinPro tracking-wider">
                                    Using herbs and natural therapies for healing.
                                </p>
                            </div>
                            <img src={ayurveda} alt="ayurveda " />
                        </div>

                        <div className=" p-4 lg:w-[350px] xs:w-[150px] xm:w-[190px] sm:w-[250px]   h-[265px]  justify-center flex gap-4 items-center border border-border rounded-lg lg:h-max lg:border-0 lg:space-x-4 flex-col-reverse  lg:flex-row-reverse lg:absolute lg:top-[64%] lg:right-[10%] ">
                            <div className="flex flex-col items-center text-center lg:text-left">
                                <h3 className="font-dinBold text-lg">Boosting immunity</h3>
                                <p className="text-[#515151]  font-dinPro text-sm lg:text-base w-[80%] lg:w-[99%]  tracking-wider">
                                    Stay strong and healthy for life, not just for today.
                                </p>
                            </div>
                            <img src={strong} alt="strong" />
                        </div>

                    </div>
                    {/* Center Circle - Only visible on lg screens */}
                    <div className="hidden lg:flex items-center justify-center mr-20 rounded-full ">
                        <img src={med} alt="meditation" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
