import React from 'react'
import fb from '../assets/images/Footer/fb.png'
import insta from '../assets/images/Footer/insta.png'
import yt from '../assets/images/Footer/yt.png'
import twit from '../assets/images/Footer/twit.png'
import link from '../assets/images/Footer/link.png'
import pin from '../assets/images/Footer/pin.png'

const Footer = () => {
    return (
        <div className='bg-[#3A643B2E] px-7 py-10 lg:pt-24 lg:pb-28'>
            <div className='flex flex-col lg:flex-row gap-9 lg:items-start items-center row text-lg'>
                <div className="tounch flex flex-col items-center lg:items-start gap-2 md:w-[40%] ">
                    <h3
                        className='font-dinBold text-green'>Get in touch</h3>
                    <div className="flex flex-col font-dinPro tracking-wide items-center lg:items-start gap-5 w-[300px] lg:w-[350px]">
                        <p>support@amrutam.co.in</p>
                        <p>Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001</p>
                        <p>+91 9713171999</p>

                    </div>
                    <div className="icons flex gap-3 mt-3 justify-center items-center">
                        <img src={fb} alt="facbook" />
                        <img src={insta} alt="instagram" />
                        <img src={yt} alt="youtube" />
                        <img src={twit} alt="twitter" />
                        <img src={link} alt="linkdin" />
                        <img src={pin} alt="pintrest" />
                    </div>
                </div>
                <div className="info flex flex-col gap-2  ">
                    <h3
                        className='font-dinBold text-green'>Information</h3>
                    <div className=" text-[#474747] font-dinPro tracking-wide ">
                        <p>About Us</p>
                        <p> Terms and Conditions </p>
                        <p> Privacy Policy </p>
                        <p> Privacy Policy for Mobile Apps </p>
                        <p> Shipping and Returns Policy </p>
                        <p> International Delivery </p>
                        <p> For Businesses, Hotels and Resorts</p>

                    </div>
                </div>
                <div className="subscribe flex flex-col gap-6 md:w-[30%]">
                    <h3 className='font-dinBold  text-green'>Subscribe to our Newsletter and join Amrutam Family today!</h3>
                    <div className="flex">
                        <input type="text" placeholder=" Your Email Address" className='rounded-l-3xl pl-3 w-[180px] font-dinPro border border-r-0 border-green bg-transparent' />
                        <button className="border border-green focus: border-l-0 text-white font-dinBold tracking-wide py-2 px-6 rounded-r-3xl bg-black">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer