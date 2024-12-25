import React from 'react'
import edu from '../../assets/images/Experts/edu.png';
import navigation from '../../assets/images/Experts/navigation.png';
import profile from '../../assets/images/Experts/profile.png';
import skin from '../../assets/images/Experts/skin.png';
import rating from '../../assets/images/Experts/rating.png';

const ExpertCard = () => {
    return (
        <div>
            <div className="card bg-pink rounded-[40px] w-max">
                <div className="card-context py-12 px-8 flex flex-col items-center gap-3">
                    <div className="profile-img flex flex-col items-center relative">
                        <img src={profile} alt='Expert 1' />
                        <img src={rating} alt="rating" className='absolute top-32' />
                    </div>
                    <div className='text-center '>
                        <h3 className='font-GothamRounded text-xl'>Dr. Vaishali sharma</h3>
                        <p className='font-inter text-[#838383] tracking-wide'>Ayurveda Practitioner(BAMS, MD)</p>
                    </div>
                    <div className="experience flex gap-1 font-nunito items-center w-max">
                        <div className="icon">
                            <img src={edu} />
                        </div>
                        <p>25 years of experience</p>
                    </div>
                    <div className="specialist flex gap-1 font-nunito font-semibold items-center w-max bg-[#3A643B1F] rounded-xl px-3 mt-2 text-base text-green">

                        <div className="icon">
                            <img src={skin} alt="" />
                        </div>
                        <p>Skin Specialist</p>
                    </div>
                </div>
                <div className="session text-center font-nunito text-lg tracking-wide text-white bg-green px-10 py-5 rounded-b-[40px] font-normal">
                    Book a session
                </div>
            </div>
        </div>
    )
}

export default ExpertCard
