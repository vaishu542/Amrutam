import React from 'react'

const HeroBand = ({ pic, context ,margin}) => {
    return (
        <div>
            <div className="flex items-center lg:space-x-4 ">
                <div className="bubble p-3 rounded-full bg-white border border-green flex items-center justify-center">
                    <img src={pic} alt="speech-bubble" className="w-full h-full object-contain" />
                </div>

                <div className="bubble-context  font-dinBold text-base text-green px-4 py-2 rounded-md tracking-wide lg:px-0 ">
                    {context}
                </div>
            </div>
        </div>
    )
}

export default HeroBand
