import React from 'react'
import phone from '../assets/images/GetApp/phone.png'
import xlphone from '../assets/images/GetApp/xlphone.png'
import xlphone2 from '../assets/images/GetApp/xlphone2.png'
import play from '../assets/images/GetApp/play.png'
import play2 from '../assets/images/GetApp/play2.png'
import app from '../assets/images/GetApp/app.png'
import app2 from '../assets/images/GetApp/app2.png'

const GetApp = () => {
    return (
        <div>
            <section className="bg-pink ">
                <div className="container lg:mx-auto flex flex-col lg:flex-row justify-center items-center py-10 lg:pl-3 pl-10">
                    <div className=" lg:w-1/2  lg:pr-0 md:pr-16 flex flex-col  md:text-left mb-16 md:mb-0 items-center lg:items-start text-center">
                        <h1 className="font-dinBold md:text-5xl text-4xl mb-4  text-green">
                        Amrutam home App
                        </h1>
                        <p className="lg:mb-8 font-dinPro text-sm text-[#676767] tracking-wide w-[90%] leading-relaxed">
                        The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.
                        </p>
                        <img src={phone} className="lg:hidden" />
                        <p className="mb-8 leading-relaxed font-dinMedium text-3xl lg:text-left text-center">
                        Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe 
                        </p>
                        <p className="text-4xl mt-12 mb-8 w-full font-dinBold text-center lg:text-left">
                        Get the App now
                        </p>
                        <div className="flex md:flex-row flex-col gap-3">                           
                            <img src={play2} className="cursor-pointer" />
                            <img src={app2} className="cursor-pointer" />                          
                        </div>
                    </div>
                    <div className="lg:max-w-[46rem] lg:w-full hidden lg:flex md:w-1/2 w-5/6">
                        <img
                            className="object-cover w-full h-full"
                            alt="hero"
                            src={xlphone2}
                        />
                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default GetApp
