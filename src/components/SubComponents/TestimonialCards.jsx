import React from 'react'
import star from '../../assets/images/Intro/star.png';

const TestimonialCards = ({ green, location }) => {
    const headerBgColor = green ? 'bg-[#ECE7FF]' : 'bg-[#ECFEE7]';
    const consultationType = green ? 'Consulted for Skin' : 'Consulted for Hair';

    return (
        <div className="h-full bg-white rounded-2xl w-[350px] shadow-boxShad">
            <div className={`head-title rounded-t-2xl py-3 px-6 ${headerBgColor} font-nunito font-bold`}>
                {consultationType}
            </div>
            <div className="p-8 flex flex-col gap-3">
                <div className="deatils flex justify-between pb-2">
                    <div className="inline-flex items-center">
                        <div className="image w-12 h-12 rounded-full flex-shrink-0 object-cover object-center bg-[#515151]" />
                        <span className="flex-grow flex flex-col pl-4 text-[#414141]">
                            <span className="title-font font-medium font-dinMedium">Sophie Moore</span>
                            <span className="font-nexa text-sm">{location}</span>
                        </span>
                    </div>
                    <div className="date font-nexa">
                        <p>17/02/24</p>
                    </div>
                </div>
                <div className="stars">
                    <img src={star} alt="rating" />
                </div>
                <div className="feedback font-DMSans flex flex-col gap-2">
                    <div className="title text-xl font-bold">
                        "One of a kind service"
                    </div>
                    <div className="text-[#555555] leading-relaxed mb-6">
                        Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCards