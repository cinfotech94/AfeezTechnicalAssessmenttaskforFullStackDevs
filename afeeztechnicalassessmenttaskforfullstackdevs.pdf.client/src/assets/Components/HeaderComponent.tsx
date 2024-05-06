// components/Home.js
import React, { useState } from 'react';
import logo from '../assets/svg/health square pay logo 1.svg';
import menu from '../assets/svg/menu.svg';
const style = {
    height: '5vh'
};const full = {
    height: '88vh'
};
function HeaderComponent() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return <div>
        <nav className="flex-row flex justify-between w-full shadow-md p-6 ">
            <a href="/" className="ml-1  w-1/5">
                <img style={style} src={logo} className=""alt="Health Square Pay Logo" />
            </a>
            <div className="lg:hidden xl:hidden md:hidden ">
                <img style={style} src={menu} onClick={toggleVisibility} className="mr-4" alt="Menu" />
            </div>
            <div className="hidden xl:block md:block lg:block">
                <div className="mr-8" >
                    <a href="/" className="text-black p-2 xl:mx-3 lg:mx-3 md:mx-1 lg:text-lg md:text-sm hover:border-b-4 hover:border-customMainColor">Home</a>
                    <a href="/about"className="text-black p-2 xl:mx-3 lg:mx-3 md:mx-1 lg:text-lg md:text-sm hover:border-b-4 hover:border-customMainColor">About Us</a>
                    <a href="/contact" className="text-black p-2 xl:mx-3 lg:mx-3 md:mx-1 lg:text-lg md:text-sm hover:border-b-4 hover:border-customMainColor">Contact Us</a>
                    <a href="/FAQ" className="text-black p-2 xl:mx-3 lg:mx-3 md:mx-1 lg:text-lg md:text-sm hover:border-b-4 hover:border-customMainColor">FAQ</a>
                    <a href="/createaccount" className="text-black p-2 xl:mx-3 lg:mx-3 md:mx-1 lg:text-lg md:text-sm border border-customMainColor hover:bg-customMainColor hover:text-white">Sign Up</a>
                    <a href="/welcomeback"className="text-white p-2 xl:mx-3 lg:mx-3 md:mx-1 lg:text-lg md:text-sm bg-customMainColor hover:text-black hover:bg-white hover:border-b-4 hover:border-customMainColor">Login</a>
                </div>
            </div>
        </nav>
        <div className={isVisible ? 'visible' : 'hidden'}>
            <div className="lg:hidden xl:hidden md:hidden" style={full}>
                <div className="text-white bg-gray-300 w-3/5 " style={full}>
                    <ul className="p-4">
                        <li onClick={toggleVisibility} className="text-black text-2xl text-right text-green-600 hover:text-red-800">X</li>
                        <a href="/" ><li className="text-black p-2 text-xl mx-3 hover:border-b-4 hover:border-customMainColor">Home</li></a>
                        <a href="/about"><li className="text-black p-2 text-xl mx-3 hover:border-b-4 hover:border-customMainColor">About Us</li></a>
                        <a href="/contact"><li className="text-black p-2 text-xl mx-3 hover:border-b-4 hover:border-customMainColor">Contact Us</li></a>
                        <a href="/FAQ"><li className="text-black p-2 text-xl mx-3 hover:border-b-4 hover:border-customMainColor">FAQ</li></a>
                        <a href="/createaccount"><li className="text-black p-2 text-xl mx-3 border border-customMainColor hover:bg-customMainColor hover:text-white">Sign Up</li></a>
                        <a href="/welcomeback"><li className="text-white p-2 text-xl mx-3 bg-customMainColor hover:text-black hover:bg-white hover:border-b-4 hover:border-customMainColor">Login</li></a>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>;
}

export default HeaderComponent;
