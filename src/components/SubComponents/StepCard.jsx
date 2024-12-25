import React from 'react'

const Card = ({number,title,statement}) => {
    return (
        <>
            <div className="card flex flex-col items-center gap-6 lg:w-[280px] md:w-[300px] w-full bg-pink px-6 pt-8 pb-10 border-t-4 border-green rounded-3xl shadow-boxShad">
                <div className="number bg-lightGreen md:pt-3 pt-4 l w-[75px] h-[75px] md:w-[65px] md:h-[65px] text-center rounded-full  ">
                    <p className='font-dinBold text-white text-4xl'>
                       {number}
                    </p>
                </div>
                <div className="step-title font-dinBold md:text-xl text-3xl text-green">
                    {title}
                </div>
                <div className="step-context text-center font-dinPro md:text-lg text-2xl text-[#2E2E2E] ">
                    {statement}
                </div>
            </div>
        </>
    )
}

export default Card
