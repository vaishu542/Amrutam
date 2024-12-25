import React, { useState } from 'react'
import Amrutam from '../assets/images/Header/name.png';
import Menu from '../assets/images/Header/menu.svg';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <>
            <header className='font-dinPro bg-pink pt-6 px-6 pb-2 md:p-2 ' >
                <div className=" flex items-center">
                    <div className="menu w-max">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm"
                            aria-controls="navbar-default"
                            aria-expanded={isOpen ? 'true' : 'false'}
                        >
                            <span className="sr-only">Open main menu</span>
                            <img src={Menu} alt="menu" />
                        </button>
                    </div>
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-3">
                        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse justify-center">
                            <img src={Amrutam} className="h-7" alt="Amrutam" />
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
